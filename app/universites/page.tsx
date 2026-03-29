import { Metadata } from 'next';
import Link from 'next/link';
import { universities } from '@/lib/universities-data';

export const metadata: Metadata = {
  title: 'Universités Partenaires en Chine | Scholarship Detective',
  description: 'Découvrez nos 300+ universités partenaires en Chine. Pékin, Shanghai, Hangzhou… Trouvez la meilleure université et obtenez votre bourse avec Scholarship Detective.',
  keywords: 'universités en Chine, étudier en Chine, bourse Chine, université partenaire Chine, CSC bourse',
};

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-[#f8faff]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#1A3A8F] to-[#0D1F5C] py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-white/60 hover:text-white text-sm mb-6 inline-block transition-colors">
            ← Retour au site
          </Link>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Nos Universités Partenaires</h1>
          <p className="text-white/70 mt-3 text-lg max-w-2xl">
            300+ établissements d'excellence en Chine. Trouvez l'université qui correspond à votre projet et obtenez votre bourse.
          </p>
          <div className="flex gap-6 mt-8 flex-wrap">
            {[
              { value: '300+', label: 'Universités partenaires' },
              { value: '31', label: 'Provinces couvertes' },
              { value: '95%', label: 'Taux de réussite' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-black text-white">{s.value}</div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* University cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-bold text-[#1A3A8F] mb-6">Fiches universités détaillées</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {universities.map((uni) => (
            <Link
              key={uni.slug}
              href={`/universites/${uni.slug}`}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#1A3A8F] border border-gray-100 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h2 className="font-bold text-[#1A3A8F] text-lg group-hover:underline leading-tight">{uni.name}</h2>
                <span className="bg-[#E8931A] text-white text-xs font-bold px-2 py-1 rounded-full shrink-0">QS {uni.ranking}</span>
              </div>
              <p className="text-gray-500 text-sm mb-3">{uni.city} · Fondée en {uni.founded}</p>
              <div className="flex flex-wrap gap-1 mb-4">
                {uni.programs.popularDomains.slice(0, 3).map((d) => (
                  <span key={d} className="bg-[#EEF3FF] text-[#1A3A8F] text-xs px-2 py-0.5 rounded-full">{d}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-xs">{uni.internationalStudents} étudiants intl.</span>
                <span className="text-[#E8931A] font-bold text-sm group-hover:translate-x-1 transition-transform inline-block">
                  Voir la fiche →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#1A3A8F] to-[#0D1F5C] rounded-2xl p-8 text-center">
          <p className="text-white font-bold text-xl mb-2">Vous ne trouvez pas votre université idéale ?</p>
          <p className="text-white/70 mb-6">Notre équipe connaît 300+ universités partenaires. Parlez-nous de votre projet, on trouve la meilleure option pour vous.</p>
          <Link
            href="/#contact"
            className="inline-block bg-[#E8931A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#d4841a] transition-colors"
          >
            Évaluation gratuite de mon profil →
          </Link>
        </div>
      </div>
    </div>
  );
}
