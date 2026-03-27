import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique Cookies | Scholarship Detective',
  description: 'Politique d\'utilisation des cookies sur Scholarship Detective.',
  robots: { index: false, follow: false },
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Header */}
      <div className="bg-[#1A3A8F] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white/60 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← Retour au site
          </Link>
          <h1 className="text-3xl font-bold text-white">Politique Cookies</h1>
          <p className="text-white/60 mt-2 text-sm">Mise à jour : mars 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">1. Qu'est-ce qu'un cookie ?</h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre appareil lors de la visite d'un site web. Il permet de mémoriser des informations sur votre navigation afin d'améliorer votre expérience.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">2. Cookies utilisés sur ce site</h2>

            <div className="mt-4 space-y-4">
              <div className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Indispensable</span>
                  <h3 className="font-semibold text-gray-800">Cookies techniques</h3>
                </div>
                <p>Nécessaires au bon fonctionnement du site (sécurité, session). Ils ne peuvent pas être désactivés.</p>
                <p className="mt-1 text-gray-500">Durée : session</p>
              </div>

              <div className="border border-gray-100 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">Analytique</span>
                  <h3 className="font-semibold text-gray-800">Google Analytics (GA4)</h3>
                </div>
                <p>Nous utilisons Google Analytics pour mesurer l'audience du site (pages visitées, durée, provenance). Ces données sont anonymisées et ne permettent pas de vous identifier personnellement.</p>
                <p className="mt-1 text-gray-500">Durée : 13 mois — Fournisseur : Google LLC</p>
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline mt-1 inline-block">
                  Politique de confidentialité Google →
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">3. Gestion de vos préférences</h2>
            <p>
              Vous pouvez à tout moment refuser ou supprimer les cookies analytiques via les paramètres de votre navigateur :
            </p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-pistage-firefox" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3">
              Vous pouvez également installer le{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">
                module de désactivation Google Analytics
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">4. Cookies tiers</h2>
            <p>
              Ce site ne dépose aucun cookie publicitaire ou de tracking tiers à des fins commerciales. Aucune donnée de navigation n'est vendue à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">5. Contact</h2>
            <p>
              Pour toute question relative à notre utilisation des cookies, contactez-nous à :{' '}
              <a href="mailto:secretariat@scholarshipdetective.fr" className="text-[#1A3A8F] hover:underline">
                secretariat@scholarshipdetective.fr
              </a>
            </p>
          </section>

        </div>

        <div className="text-center mt-8">
          <Link href="/" className="inline-block bg-[#1A3A8F] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#0D1F5C] transition-colors">
            ← Retour au site
          </Link>
        </div>
      </div>
    </div>
  );
}
