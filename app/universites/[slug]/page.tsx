import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getUniversityBySlug, getAllUniversitySlugs } from '@/lib/universities-data';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const uni = getUniversityBySlug(slug);
  if (!uni) return { title: 'Université non trouvée' };
  return {
    title: `${uni.name} (${uni.nameEn}) — Bourses & Admission | Scholarship Detective`,
    description: uni.metaDescription,
    keywords: uni.keywords.join(', '),
    openGraph: {
      title: `${uni.name} — Étudier en Chine avec Scholarship Detective`,
      description: uni.metaDescription,
      url: `https://scholarshipdetective.fr/universites/${uni.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllUniversitySlugs().map((slug) => ({ slug }));
}

export default async function UniversityPage({ params }: Props) {
  const { slug } = await params;
  const uni = getUniversityBySlug(slug);
  if (!uni) notFound();

  return (
    <div className="min-h-screen bg-[#f8faff]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1A3A8F] to-[#0D1F5C] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/universites" className="text-white/60 hover:text-white text-sm mb-6 inline-flex items-center gap-1 transition-colors">
            ← Toutes les universités
          </Link>
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="bg-[#E8931A] text-white text-xs font-bold px-3 py-1 rounded-full">QS {uni.ranking}</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">{uni.city}, {uni.country}</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">Fondée en {uni.founded}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight">{uni.name}</h1>
              <p className="text-white/70 text-lg mt-1">{uni.nameEn}</p>
            </div>
          </div>
          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { value: uni.ranking, label: 'Classement QS' },
              { value: uni.students, label: 'Étudiants' },
              { value: uni.internationalStudents, label: 'Internationaux' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl py-3 px-2">
                <div className="text-xl font-black text-white">{s.value}</div>
                <div className="text-white/60 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">

        {/* CTA sticky banner */}
        <div className="bg-[#E8931A] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg">Vous souhaitez intégrer {uni.name} ?</p>
            <p className="text-white/80 text-sm">Obtenez une évaluation gratuite de votre profil sous 24h</p>
          </div>
          <Link
            href="/#contact"
            className="shrink-0 bg-white text-[#E8931A] font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors text-sm whitespace-nowrap"
          >
            Évaluation gratuite →
          </Link>
        </div>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Introduction</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-gray-600 leading-relaxed text-[15px]">
            {uni.intro}
          </div>
        </section>

        {/* Présentation */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Présentation de l'université</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
            <p className="text-gray-600 leading-relaxed text-[15px]">{uni.presentation.history}</p>
            <div>
              <h3 className="font-bold text-[#1A3A8F] mb-3">Points forts</h3>
              <ul className="space-y-2">
                {uni.presentation.strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#E8931A] font-bold mt-0.5">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-[#1A3A8F] mb-2">Le campus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{uni.presentation.campus}</p>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Programmes proposés</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Licences', items: uni.programs.licences, color: 'bg-[#EEF3FF]', textColor: 'text-[#1A3A8F]' },
              { title: 'Masters', items: uni.programs.masters, color: 'bg-[#FFF8ED]', textColor: 'text-[#E8931A]' },
              { title: 'Domaines populaires', items: uni.programs.popularDomains, color: 'bg-[#F0FDF4]', textColor: 'text-green-700' },
            ].map((cat) => (
              <div key={cat.title} className={`${cat.color} rounded-2xl p-5`}>
                <h3 className={`font-bold ${cat.textColor} mb-3 text-sm`}>{cat.title}</h3>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-gray-600 text-xs flex items-start gap-1.5">
                      <span className={`${cat.textColor} mt-0.5`}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Admission */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Conditions d'admission</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-[#1A3A8F] mb-3 text-sm">Diplômes requis</h3>
                <ul className="space-y-1.5">
                  {uni.admission.diplomas.map((d) => (
                    <li key={d} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-[#E8931A]">→</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#1A3A8F] mb-3 text-sm">Niveau de langue</h3>
                <ul className="space-y-1.5">
                  {uni.admission.languageRequirements.map((l) => (
                    <li key={l} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-[#E8931A]">→</span> {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-[#1A3A8F] mb-3 text-sm">Documents demandés</h3>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {uni.admission.documents.map((doc) => (
                  <div key={doc} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-4 h-4 bg-[#EEF3FF] rounded-full flex items-center justify-center text-[#1A3A8F] text-xs shrink-0">✓</span>
                    {doc}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#FFF8ED] border-l-4 border-[#E8931A] rounded-r-xl p-4">
              <p className="text-sm text-gray-600">
                <strong className="text-[#E8931A]">Période de candidature :</strong> {uni.admission.applicationPeriod}
              </p>
            </div>
          </div>
        </section>

        {/* Frais */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Frais de scolarité</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#1A3A8F] mb-2 text-sm">Frais annuels estimés</h3>
              <div className="text-3xl font-black text-[#1A3A8F]">
                {uni.tuition.min.toLocaleString('fr-FR')} – {uni.tuition.max.toLocaleString('fr-FR')} {uni.tuition.currency}
              </div>
              <p className="text-gray-500 text-xs mt-1">selon le programme et le niveau</p>
              <p className="text-green-600 text-sm font-medium mt-3">💡 Bourse CSC = 0 € à votre charge</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#1A3A8F] mb-2 text-sm">Coût de la vie à {uni.city}</h3>
              <div className="text-2xl font-black text-[#E8931A]">{uni.tuition.costOfLiving}</div>
              <p className="text-gray-500 text-xs mt-2 leading-relaxed">{uni.tuition.costOfLivingDetail}</p>
            </div>
          </div>
        </section>

        {/* Bourses */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Bourses disponibles</h2>
          <div className="space-y-4">
            {uni.scholarships.types.map((s, i) => (
              <div key={s.name} className="bg-white rounded-2xl p-6 shadow-sm border-l-4 border-[#1A3A8F]">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3 className="font-bold text-[#1A3A8F]">{s.name}</h3>
                  {i === 0 && <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full shrink-0">⭐ Recommandée</span>}
                </div>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">{s.description}</p>
                <div className="mt-3 bg-[#EEF3FF] rounded-lg px-3 py-2">
                  <span className="text-[#1A3A8F] text-xs font-bold">Couverture : </span>
                  <span className="text-gray-600 text-xs">{s.coverage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pourquoi choisir */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Pourquoi choisir {uni.name} ?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#1A3A8F] mb-4 text-sm">Avantages clés</h3>
              <ul className="space-y-2">
                {uni.whyChoose.advantages.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#E8931A] font-bold shrink-0">✓</span> {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-[#1A3A8F] mb-4 text-sm">Opportunités après diplôme</h3>
              <ul className="space-y-2">
                {uni.whyChoose.careerOpportunities.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-600 text-sm">
                    <span className="text-[#1A3A8F] font-bold shrink-0">→</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Scholarship Detective */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Candidater avec Scholarship Detective</h2>
          <div className="bg-gradient-to-br from-[#1A3A8F] to-[#0D1F5C] rounded-2xl p-6 text-white">
            <p className="text-white/80 mb-6 leading-relaxed">
              Scholarship Detective est votre partenaire de confiance pour intégrer {uni.name}. Notre équipe d'experts vous accompagne à chaque étape, de l'évaluation de votre profil jusqu'à votre départ en Chine.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { step: '01', title: 'Évaluation gratuite', desc: 'Analyse de votre profil et identification des bourses accessibles' },
                { step: '02', title: 'Stratégie personnalisée', desc: 'Plan de candidature adapté à votre profil et vos objectifs' },
                { step: '03', title: 'Préparation du dossier', desc: 'Rédaction de la lettre de motivation, relecture et mise en forme complète' },
                { step: '04', title: 'Suivi jusqu\'au départ', desc: 'Visa, logement, arrivée en Chine — on reste à vos côtés' },
              ].map((s) => (
                <div key={s.step} className="bg-white/10 rounded-xl p-4">
                  <div className="text-[#E8931A] font-black text-lg mb-1">{s.step}</div>
                  <div className="font-bold text-white text-sm">{s.title}</div>
                  <div className="text-white/60 text-xs mt-1">{s.desc}</div>
                </div>
              ))}
            </div>
            <Link
              href="/#contact"
              className="inline-block bg-[#E8931A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#d4841a] transition-colors text-base"
            >
              Démarrer mon projet d'études en Chine →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A3A8F] mb-4">Questions fréquentes</h2>
          <div className="space-y-4">
            {uni.faq.map((item) => (
              <div key={item.question} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#1A3A8F] mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="bg-[#EEF3FF] rounded-2xl p-6 text-center">
          <p className="text-[#1A3A8F] font-bold text-lg mb-2">Prêt à intégrer {uni.name} ?</p>
          <p className="text-gray-600 text-sm mb-4">Obtenez votre évaluation de profil gratuite et sans engagement sous 24h</p>
          <Link
            href="/#contact"
            className="inline-block bg-[#1A3A8F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#0D1F5C] transition-colors"
          >
            Je veux ma bourse →
          </Link>
        </div>

      </div>
    </div>
  );
}
