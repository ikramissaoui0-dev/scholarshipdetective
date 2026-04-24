'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import SectionWrapper from '@/components/ui/SectionWrapper';

const schema = z.object({
  prenom: z.string().min(2, 'Prénom requis (min. 2 caractères)'),
  nom: z.string().min(2, 'Nom requis (min. 2 caractères)'),
  email: z.string().email('Adresse email invalide'),
  telephone: z.string().optional(),
  destination: z.string().min(1, 'Veuillez sélectionner une destination'),
  niveauEtudes: z.string().min(1, 'Veuillez sélectionner votre niveau'),
  filieresSouhaitee: z.string().min(3, 'Filière requise (min. 3 caractères)'),
  niveauAnglais: z.string().optional(),
  budgetMensuel: z.string().optional(),
  anneeDepart: z.string().min(1, 'Veuillez sélectionner une année'),
  message: z.string().max(500, 'Maximum 500 caractères').optional(),
  rgpd: z.boolean().refine((v) => v === true, 'Vous devez accepter la politique de confidentialité'),
  website: z.string().optional(), // Honeypot
});

type FormData = z.infer<typeof schema>;

const inputClass =
  'border border-gray-200 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1A3A8F] focus:border-transparent outline-none transition text-[#1A1A2E] placeholder-gray-400 text-base';

const labelClass = 'block text-sm font-medium text-[#1A1A2E] mb-1.5';
const errorClass = 'text-red-500 text-xs mt-1';

export default function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [interesseParRdv, setInteresseParRdv] = useState<'oui' | 'non' | ''>('');
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  const loadCalendly = () => {
    if (calendlyLoaded) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    setCalendlyLoaded(true);
    console.log('[Tracking] Calendly widget ouvert — candidat intéressé par un RDV');
    if (typeof window !== 'undefined' && (window as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as { gtag?: (...args: unknown[]) => void }).gtag!('event', 'calendly_open', { event_category: 'Contact' });
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { rgpd: false, destination: 'Chine' },
  });

  const onSubmit = async (data: FormData) => {
    // Honeypot check
    if (data.website) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, interesseParRdv: interesseParRdv || 'non_repondu' }),
      });

      const json = await res.json();

      if (!res.ok) {
        setServerError(json.error || 'Une erreur est survenue. Veuillez réessayer.');
        setIsSubmitting(false);
        return;
      }

      router.push('/merci');
    } catch {
      setServerError('Une erreur réseau est survenue. Veuillez réessayer.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20" style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #0D1F5C 100%)' }}>
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-white font-bold text-4xl mb-3">
            Obtenir Mon Orientation Gratuite
          </h2>
          <p className="text-[#E8931A] text-lg font-medium">
            Chine ou international — Réponse sous 24h — Sans engagement
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Formulaire de contact">
            {/* Honeypot */}
            <input type="text" {...register('website')} style={{ display: 'none' }} tabIndex={-1} aria-hidden="true" />

            {/* Destination */}
            <div className="mb-4">
              <label htmlFor="destination" className={labelClass}>
                Destination souhaitée <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="destination"
                className={inputClass}
                aria-describedby={errors.destination ? 'destination-error' : undefined}
                aria-required="true"
                {...register('destination')}
              >
                <option value="Chine">🇨🇳 Chine</option>
                <option value="France">🇫🇷 France</option>
                <option value="Espagne">🇪🇸 Espagne</option>
                <option value="Allemagne">🇩🇪 Allemagne</option>
                <option value="Royaume-Uni">🇬🇧 Royaume-Uni</option>
                <option value="Malte">🇲🇹 Malte</option>
                <option value="Dubaï">🇦🇪 Dubaï</option>
                <option value="Australie">🇦🇺 Australie</option>
                <option value="USA">🇺🇸 USA</option>
              </select>
              {errors.destination && (
                <p id="destination-error" className={errorClass} role="alert">{errors.destination.message}</p>
              )}
            </div>

            {/* Prénom / Nom */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="prenom" className={labelClass}>
                  Prénom <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="prenom"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Votre prénom"
                  className={inputClass}
                  aria-describedby={errors.prenom ? 'prenom-error' : undefined}
                  aria-required="true"
                  {...register('prenom')}
                />
                {errors.prenom && (
                  <p id="prenom-error" className={errorClass} role="alert">{errors.prenom.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="nom" className={labelClass}>
                  Nom <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Votre nom"
                  className={inputClass}
                  aria-describedby={errors.nom ? 'nom-error' : undefined}
                  aria-required="true"
                  {...register('nom')}
                />
                {errors.nom && (
                  <p id="nom-error" className={errorClass} role="alert">{errors.nom.message}</p>
                )}
              </div>
            </div>

            {/* Email / Téléphone */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="votre@email.com"
                  className={inputClass}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  aria-required="true"
                  {...register('email')}
                />
                {errors.email && (
                  <p id="email-error" className={errorClass} role="alert">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="telephone" className={labelClass}>Téléphone</label>
                <input
                  id="telephone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+33 6 12 34 56 78"
                  className={inputClass}
                  {...register('telephone')}
                />
              </div>
            </div>

            {/* Niveau d'études */}
            <div className="mb-4">
              <label htmlFor="niveauEtudes" className={labelClass}>
                Niveau d&apos;études <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="niveauEtudes"
                className={inputClass}
                aria-describedby={errors.niveauEtudes ? 'niveau-error' : undefined}
                aria-required="true"
                {...register('niveauEtudes')}
              >
                <option value="">Sélectionnez votre niveau</option>
                {['Bac', 'Bac+1', 'Bac+2', 'Bac+3', 'Bac+4', 'Bac+5 et +'].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.niveauEtudes && (
                <p id="niveau-error" className={errorClass} role="alert">{errors.niveauEtudes.message}</p>
              )}
            </div>

            {/* Filière souhaitée */}
            <div className="mb-4">
              <label htmlFor="filieresSouhaitee" className={labelClass}>
                Filière souhaitée <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                id="filieresSouhaitee"
                type="text"
                placeholder="Ex : Médecine, Informatique, Commerce..."
                className={inputClass}
                aria-describedby={errors.filieresSouhaitee ? 'filiere-error' : undefined}
                aria-required="true"
                {...register('filieresSouhaitee')}
              />
              {errors.filieresSouhaitee && (
                <p id="filiere-error" className={errorClass} role="alert">{errors.filieresSouhaitee.message}</p>
              )}
            </div>

            {/* Niveau Anglais / Budget */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="niveauAnglais" className={labelClass}>Niveau d&apos;anglais</label>
                <select id="niveauAnglais" className={inputClass} {...register('niveauAnglais')}>
                  <option value="">Sélectionnez</option>
                  {['Débutant (A1/A2)', 'Intermédiaire (B1/B2)', 'Avancé (C1/C2)', 'Bilingue'].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="budgetMensuel" className={labelClass}>Budget mensuel</label>
                <select id="budgetMensuel" className={inputClass} {...register('budgetMensuel')}>
                  <option value="">Sélectionnez</option>
                  {['< 300€', '300-600€', '600-1000€', '> 1000€'].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Année de départ */}
            <div className="mb-4">
              <label htmlFor="anneeDepart" className={labelClass}>
                Année de départ souhaitée <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <select
                id="anneeDepart"
                className={inputClass}
                aria-describedby={errors.anneeDepart ? 'annee-error' : undefined}
                aria-required="true"
                {...register('anneeDepart')}
              >
                <option value="">Sélectionnez une année</option>
                {['2025', '2026', '2027', 'Plus tard'].map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.anneeDepart && (
                <p id="annee-error" className={errorClass} role="alert">{errors.anneeDepart.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className={labelClass}>Message / Projet</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Décrivez votre projet d'études (destination, objectifs, questions...)..."
                className={`${inputClass} resize-none`}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
              />
              {errors.message && (
                <p id="message-error" className={errorClass} role="alert">{errors.message.message}</p>
              )}
            </div>

            {/* Option RDV Calendly */}
            <div className="mb-6 p-4 bg-[#F0F4FF] border border-[#1A3A8F]/20 rounded-xl">
              <p className="text-sm font-semibold text-[#1A1A2E] mb-1">
                Souhaitez-vous réserver un créneau dès maintenant pour un échange rapide ?
              </p>
              <p className="text-xs text-[#E8931A] font-medium mb-3">
                ⚡ Les candidats qui réservent un appel sont traités en priorité.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rdv"
                    value="oui"
                    checked={interesseParRdv === 'oui'}
                    onChange={() => { setInteresseParRdv('oui'); loadCalendly(); }}
                    className="accent-[#1A3A8F] w-4 h-4"
                  />
                  <span className="text-sm text-[#1A1A2E]">Oui, je veux réserver maintenant</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rdv"
                    value="non"
                    checked={interesseParRdv === 'non'}
                    onChange={() => setInteresseParRdv('non')}
                    className="accent-[#1A3A8F] w-4 h-4"
                  />
                  <span className="text-sm text-[#1A1A2E]">Non, je préfère plus tard</span>
                </label>
              </div>

              {/* Widget Calendly inline conditionnel */}
              {interesseParRdv === 'oui' && (
                <div className="mt-4">
                  <div
                    className="calendly-inline-widget rounded-xl overflow-hidden"
                    data-url="https://calendly.com/secretariat-scholarshipdetective/30min"
                    style={{ minWidth: '100%', height: '630px' }}
                  />
                </div>
              )}
            </div>

            {/* RGPD */}
            <div className="mb-6">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mt-1 w-4 h-4 accent-[#1A3A8F] flex-shrink-0 focus:ring-2 focus:ring-[#E8931A]"
                  aria-describedby={errors.rgpd ? 'rgpd-error' : undefined}
                  aria-required="true"
                  {...register('rgpd')}
                />
                <span className="text-sm text-gray-600 leading-relaxed">
                  J&apos;accepte la{' '}
                  <a href="/politique-confidentialite" className="text-[#1A3A8F] underline hover:text-[#E8931A]">
                    politique de confidentialité
                  </a>{' '}
                  et le traitement de mes données personnelles par Scholarship Detective.{' '}
                  <span className="text-red-500" aria-hidden="true">*</span>
                </span>
              </label>
              {errors.rgpd && (
                <p id="rgpd-error" className={`${errorClass} mt-1`} role="alert">{errors.rgpd.message}</p>
              )}
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm" role="alert">
                {serverError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#E8931A] hover:bg-[#d4810f] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                  Envoi en cours...
                </>
              ) : (
                'Envoyer ma demande →'
              )}
            </button>
          </form>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
