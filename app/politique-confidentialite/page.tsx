import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Scholarship Detective',
  description: 'Politique de confidentialité et protection des données personnelles de Scholarship Detective.',
  robots: { index: false, follow: false },
};

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-[#f0f4ff]">
      {/* Header */}
      <div className="bg-[#1A3A8F] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white/60 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← Retour au site
          </Link>
          <h1 className="text-3xl font-bold text-white">Politique de Confidentialité</h1>
          <p className="text-white/60 mt-2 text-sm">Mise à jour : mars 2025 — Conforme RGPD</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-8 text-gray-700 text-sm leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est <strong>Scholarship Detective SAS</strong>, SIREN 102 932 613, dont le siège est situé au 1 rue Marguerin, 75014 Paris. Contact : <a href="mailto:secretariat@scholarshipdetective.fr" className="text-[#1A3A8F] hover:underline">secretariat@scholarshipdetective.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">2. Données collectées</h2>
            <p>Lors de votre utilisation du formulaire de contact, nous collectons :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (facultatif)</li>
              <li>Niveau d'études et filière souhaitée</li>
              <li>Niveau d'anglais et budget mensuel (facultatif)</li>
              <li>Année de départ souhaitée</li>
              <li>Message libre (facultatif)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li>Vous recontacter suite à votre demande d'orientation</li>
              <li>Vous envoyer un email de confirmation de réception</li>
              <li>Analyser votre profil afin de vous proposer un accompagnement personnalisé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">4. Base légale</h2>
            <p>
              Le traitement est fondé sur votre <strong>consentement explicite</strong> (article 6.1.a du RGPD), que vous donnez en cochant la case dédiée dans le formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant <strong>3 ans</strong> à compter de votre dernière interaction avec notre équipe, puis supprimées ou anonymisées.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">6. Destinataires des données</h2>
            <p>Vos données sont transmises uniquement à :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li><strong>Resend Inc.</strong> (envoi d'emails transactionnels) — <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">politique de confidentialité</a></li>
              <li>L'équipe interne de Scholarship Detective</li>
            </ul>
            <p className="mt-3">Aucune vente ni transmission à des tiers à des fins commerciales.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">7. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc">
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit d'opposition</strong> : vous opposer à un traitement</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit de retrait du consentement</strong> : à tout moment, sans effet rétroactif</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à : <a href="mailto:secretariat@scholarshipdetective.fr" className="text-[#1A3A8F] hover:underline">secretariat@scholarshipdetective.fr</a>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#1A3A8F] hover:underline">cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">8. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou divulgation (connexion HTTPS, accès restreint aux données, prestataires certifiés).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1A3A8F] mb-3">9. Cookies</h2>
            <p>
              Pour en savoir plus sur les cookies utilisés sur ce site, consultez notre{' '}
              <Link href="/cookies" className="text-[#1A3A8F] font-medium hover:underline">
                Politique cookies
              </Link>.
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
