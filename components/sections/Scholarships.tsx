'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const scholarships = [
  {
    badge: 'La plus complète',
    badgeColor: 'bg-[#1A3A8F] text-white',
    title: 'Bourse CSC',
    subtitle: 'Gouvernement Chinois',
    coverage: [
      'Frais de scolarité intégraux',
      'Logement sur le campus',
      'Allocation mensuelle 2 500 CNY',
      'Assurance médicale de base',
    ],
    eligibility: 'Bac+2 minimum, bons résultats académiques',
    level: 'Compétitive — dossier solide requis',
    levelColor: 'text-red-500',
    cta: "Vérifier mon éligibilité",
    featured: true,
  },
  {
    badge: 'Plus accessible',
    badgeColor: 'bg-green-100 text-green-700',
    title: 'Bourses Provinciales',
    subtitle: 'Gouvernements de Province',
    coverage: [
      '50% à 100% des frais couverts',
      'Variable selon la province',
      'Profils variés acceptés',
      'Nombreuses universités éligibles',
    ],
    eligibility: 'Profils variés acceptés',
    level: 'Accessibilité modérée',
    levelColor: 'text-yellow-600',
    cta: 'En savoir plus',
    featured: false,
  },
  {
    badge: 'Mérite académique',
    badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Bourses Universitaires',
    subtitle: 'Directes des universités',
    coverage: [
      'Réduction frais de scolarité 30-100%',
      'Sur dossier individuel',
      'Excellence académique ou artistique',
      'Possibilité de renouvellement annuel',
    ],
    eligibility: 'Excellence académique ou artistique',
    level: 'Sur dossier individuel',
    levelColor: 'text-purple-600',
    cta: 'Évaluer mon profil',
    featured: false,
  },
];

export default function Scholarships() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="bourses" className="bg-[#F8F9FA] py-20">
      <SectionWrapper>
        <SectionTitle
          title="Des Bourses pour Tous les Profils"
          subtitle="Nous maximisons vos chances d'obtenir un financement"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {scholarships.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col ${
                s.featured ? 'ring-2 ring-[#1A3A8F]' : ''
              }`}
            >
              <div className="mb-6">
                <span className={`inline-block text-xs font-semibold rounded-full px-3 py-1 mb-4 ${s.badgeColor}`}>
                  {s.badge}
                </span>
                <h3 className="text-[#1A3A8F] font-bold text-2xl mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.subtitle}</p>
              </div>

              <div className="mb-6 flex-1">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Couverture
                </p>
                <ul className="space-y-2">
                  {s.coverage.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#555555] text-sm">
                      <CheckCircle size={16} className="text-[#E8931A] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <p className="text-xs text-gray-400 mb-1">
                  <span className="font-semibold">Éligibilité :</span> {s.eligibility}
                </p>
                <p className={`text-xs font-medium ${s.levelColor}`}>
                  <span className="font-semibold text-gray-400">Niveau :</span>{' '}
                  <span>{s.level}</span>
                </p>
              </div>

              <button
                onClick={handleScroll}
                className="w-full bg-[#E8931A] hover:bg-[#d4810f] text-white font-semibold py-3 rounded-xl transition-colors duration-200 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2"
              >
                {s.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
