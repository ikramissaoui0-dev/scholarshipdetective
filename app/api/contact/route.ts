import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { buildAdminEmailHtml, buildConfirmationEmailHtml } from '@/lib/email';

// Simple in-memory rate limiter (resets on server restart — use Redis for production)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function getRateLimitKey(req: NextRequest): string {
  return req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count += 1;
  return true;
}

const contactSchema = z.object({
  prenom: z.string().min(2).max(100),
  nom: z.string().min(2).max(100),
  email: z.string().email().max(255),
  telephone: z.string().max(30).optional(),
  destination: z.string().min(1).max(50),
  niveauEtudes: z.string().min(1).max(20),
  filieresSouhaitee: z.string().min(3).max(200),
  niveauAnglais: z.string().max(30).optional(),
  budgetMensuel: z.string().max(20).optional(),
  anneeDepart: z.string().min(1).max(20),
  message: z.string().max(500).optional(),
  rgpd: z.boolean().refine((v) => v === true),
  website: z.string().optional(), // Honeypot
});

export async function POST(req: NextRequest) {
  const ip = getRateLimitKey(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de demandes. Veuillez réessayer dans une heure.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Corps de requête invalide.' }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Données invalides.', details: result.error.flatten() },
      { status: 400 }
    );
  }

  const data = result.data;

  // Honeypot check
  if (data.website) {
    // Silently accept to fool bots
    return NextResponse.json({ success: true });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'secretariat@scholarshipdetective.fr';

  if (!resendApiKey || resendApiKey === 're_xxxxxxxxxxxx') {
    // Dev mode: log and return success without sending
    console.log('[DEV] Contact form submission:', data);
    return NextResponse.json({ success: true, dev: true });
  }

  const resend = new Resend(resendApiKey);

  try {
    // Send notification to admin
    await resend.emails.send({
      from: 'Scholarship Detective <noreply@scholarshipdetective.fr>',
      to: recipientEmail,
      reply_to: data.email,
      subject: `[Scholarship Detective] Nouvelle demande — ${data.prenom} ${data.nom}`,
      html: buildAdminEmailHtml(data),
    });

    // Send confirmation to student
    await resend.emails.send({
      from: 'Scholarship Detective <noreply@scholarshipdetective.fr>',
      to: data.email,
      subject: 'Nous avons bien reçu votre demande — Scholarship Detective',
      html: buildConfirmationEmailHtml(data),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[RESEND ERROR]', err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
