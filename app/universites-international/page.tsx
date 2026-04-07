import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import InternationalDestinations from '@/components/sections/InternationalDestinations';
import InternationalSchools from '@/components/sections/InternationalSchools';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Universités Internationales | Scholarship Detective',
  description:
    'Étudiez en France, Espagne, Allemagne, UK, Australie, USA et plus. Découvrez nos partenaires universitaires à l\'international avec Scholarship Detective.',
  alternates: {
    canonical: 'https://scholarshipdetective.fr/universites-international',
  },
};

export default function UniversitesInternational() {
  return (
    <>
      <Header />
      <main>
        {/* Hero page */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-[#E8931A] to-[#c07010] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="mb-6 flex justify-center gap-2 text-sm text-orange-100" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <span className="text-white font-medium">Universités à l&apos;International</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
              <span>🌍</span>
              <span>Réseau International</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Universités Partenaires <br className="hidden sm:block" />
              <span className="text-white drop-shadow">à l&apos;International</span>
            </h1>
            <p className="text-lg text-orange-100 max-w-2xl mx-auto mb-8">
              France, Espagne, Allemagne, Royaume-Uni, Australie, USA et bien plus.
              Scholarship Detective vous ouvre les portes du monde entier.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 sm:gap-12 flex-wrap">
              {[
                { value: '8+', label: 'Pays partenaires' },
                { value: '20+', label: 'Établissements' },
                { value: '100%', label: 'Accompagnement' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-orange-100 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections partenaires internationaux */}
        <InternationalDestinations />
        <InternationalSchools />

        {/* CTA */}
        <section className="py-16 bg-[#FFF8ED]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1A3A8F] mb-3">
              Vous souhaitez étudier à l&apos;étranger ?
            </h2>
            <p className="text-gray-600 mb-6">
              Nos conseillers vous guident vers la destination et l'établissement qui vous correspondent.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#1A3A8F] text-white rounded-xl px-8 py-3 font-semibold hover:bg-[#0f2460] transition-colors duration-200"
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
