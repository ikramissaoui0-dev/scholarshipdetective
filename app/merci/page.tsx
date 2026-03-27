import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Merci — Scholarship Detective',
  description: 'Votre demande a bien été envoyée. Notre équipe vous contactera sous 24h.',
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #0D1F5C 100%)' }}
    >
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="w-24 h-24 bg-[#E8931A]/20 border-2 border-[#E8931A] rounded-full flex items-center justify-center mx-auto mb-8 text-5xl">
          🎉
        </div>

        {/* Heading */}
        <h1 className="text-white font-bold text-4xl md:text-5xl mb-4">
          Votre demande a bien été envoyée !
        </h1>

        {/* Subtitle */}
        <p className="text-white/80 text-lg leading-relaxed mb-8">
          Notre équipe vous contactera <strong className="text-[#E8931A]">sous 24h ouvrées</strong>{' '}
          à votre adresse email. Préparez-vous à commencer votre aventure en Chine !
        </p>

        {/* What's next */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8 text-left">
          <p className="text-[#E8931A] font-semibold text-sm uppercase tracking-wider mb-4">
            Prochaines étapes
          </p>
          <ul className="space-y-3">
            {[
              'Analyse de votre profil par notre équipe',
              'Appel de consultation gratuit avec un expert',
              'Présentation des universités et bourses adaptées',
              'Constitution de votre dossier de candidature',
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-white/90 text-sm">
                <span className="w-6 h-6 bg-[#E8931A] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block bg-[#E8931A] hover:bg-[#d4810f] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 focus:ring-offset-[#1A3A8F]"
        >
          ← Retour à l&apos;accueil
        </Link>

        <p className="mt-6 text-white/40 text-sm">
          Une question urgente ? Écrivez-nous à{' '}
          <a
            href="mailto:secretariat@scholarshipdetective.fr"
            className="text-[#E8931A] hover:underline"
          >
            secretariat@scholarshipdetective.fr
          </a>
        </p>
      </div>
    </main>
  );
}
