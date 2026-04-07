import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Universities from '@/components/sections/Universities';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Universités en Chine | Scholarship Detective',
  description:
    '300+ universités partenaires en Chine. Découvrez PKU, Tsinghua, Fudan et toutes les grandes universités chinoises. Bourses CSC disponibles.',
  alternates: {
    canonical: 'https://scholarshipdetective.fr/universites-chine',
  },
};

export default function UniversitesChine() {
  return (
    <>
      <Header />
      <main>
        {/* Hero page */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#1A3A8F] to-[#0f2460] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 flex justify-center gap-2 text-sm text-blue-200" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white font-medium">Universités en Chine</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <span>🇨🇳</span>
              <span>Réseau Chine</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Universités Partenaires <br className="hidden sm:block" />
              <span className="text-[#E8931A]">en Chine</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
              Accédez aux meilleures universités chinoises avec l'aide de Scholarship Detective.
              Bourses CSC, placement garanti, suivi personnalisé.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
              {[
                { value: '300+', label: 'Universités partenaires' },
                { value: '31', label: 'Provinces couvertes' },
                { value: '50+', label: 'Filières disponibles' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-[#E8931A]">{stat.value}</div>
                  <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section universités */}
        <Universities />

        {/* CTA */}
        <section className="py-16 bg-[#EEF3FF]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1A3A8F] mb-3">
              Prêt à postuler dans une université chinoise ?
            </h2>
            <p className="text-gray-600 mb-6">
              Nos experts vous accompagnent de A à Z : sélection, dossier, bourse CSC.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#E8931A] text-white rounded-xl px-8 py-3 font-semibold hover:bg-[#d4810f] transition-colors duration-200"
            >
              Consultation gratuite →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
