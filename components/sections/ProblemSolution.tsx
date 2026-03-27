'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const problems = [
  'Je ne sais pas quelle université choisir en Chine',
  'Les dossiers de bourse sont complexes et souvent en mandarin',
  "J'ai peur d'être seul(e) une fois arrivé(e) en Chine",
  "Je ne sais pas si je suis éligible à une bourse",
];

const solutions = [
  'Nous analysons votre profil et recommandons les universités idéales',
  "Nous gérons l'intégralité de votre dossier de bourse",
  'Accompagnement continu : visa, logement, intégration, suivi',
  "Évaluation gratuite de votre éligibilité sous 24h",
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ProblemSolution() {
  return (
    <section id="probleme" className="bg-[#F8F9FA] py-20">
      <SectionWrapper>
        <SectionTitle
          title="Vous vous reconnaissez ?"
          subtitle="Des défis, nous avons les solutions."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Problems */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-[#1A3A8F] font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-500 text-lg font-bold flex-shrink-0">✗</span>
              Les obstacles
            </h3>
            <ul className="space-y-4">
              {problems.map((problem) => (
                <motion.li
                  key={problem}
                  variants={itemVariants}
                  className="flex gap-3 items-start"
                >
                  <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs font-bold flex-shrink-0 mt-0.5" aria-hidden="true">
                    ✗
                  </span>
                  <span className="text-[#555555] leading-relaxed">{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className="text-[#1A3A8F] font-semibold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg font-bold flex-shrink-0">✓</span>
              Nos solutions
            </h3>
            <ul className="space-y-4">
              {solutions.map((solution) => (
                <motion.li
                  key={solution}
                  variants={itemVariants}
                  className="flex gap-3 items-start"
                >
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs font-bold flex-shrink-0 mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-[#555555] leading-relaxed">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}
