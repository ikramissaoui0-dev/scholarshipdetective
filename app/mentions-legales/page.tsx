import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales | Scholarship Detective',
  description: 'Mentions légales de Scholarship Detective.',
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Header */}
      <div className="bg-[#1A3A8F] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white/60 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← Retour au site
          </Link>
          <h1 className="text-3xl font-bold text-white">Mentions Légales</h1>
          <p className="text-white/60 mt-2 text-sm">Mise à jour : mars 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">1. Éditeur du site</h2>
            <p>Le site <strong>scholarshipdetective.fr</strong> est édité par :</p>
            <ul className="mt-3 space-y-1 pl-4">
              <li><strong>Raison sociale :</strong> Scholarship Detective SAS</li>
              <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</li>
              <li><strong>SIREN :</strong> 102 932 613</li>
              <li><strong>Siège social :</strong> 1 rue Marguerin, 75014 Paris, France</li>
              <li><strong>Email :</strong> <a href="mailto:secretariat@scholarshipdetective.fr" className="text-[#1A3A8F] hover:underline">secretariat@scholarshipdetective.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">2. Directeur de la publication</h2>
            <p>Le directeur de la publication est le représentant légal de Scholarship Detective SAS.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de Scholarship Detective SAS, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, même partielle, est strictement interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">5. Limitation de responsabilité</h2>
            <p>
              Scholarship Detective s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation des informations de ce site se fait sous la responsabilité de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">6. Données personnelles</h2>
            <p>
              Pour toute information sur le traitement de vos données personnelles, consultez notre{' '}
              <Link href="/politique-confidentialite" className="text-[#1A3A8F] font-medium hover:underline">
                Politique de confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">7. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
