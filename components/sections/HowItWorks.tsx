'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Évaluation Gratuite',
    description:
      'Remplissez notre formulaire en ligne. Nous analysons votre profil et vos objectifs sous 24h.',
  },
  {
    number: '02',
    title: 'Plan Personnalisé',
    description:
      'Nous vous proposons une sélection d\'universités et de bourses adaptées à votre situation et votre budget.',
  },
  {
    number: '03',
    title: 'Constitution du Dossier',
    description:
      'Nous préparons, traduisons et soumettons votre dossier complet de candidature et de bourse.',
  },
  {
    number: '04',
    title: 'Départ & Suivi',
    description:
      'Visa, logement, accueil à l\'aéroport — nous restons disponibles pendant toute votre période d\'études.',
  },
];

export default function HowItWorks() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="processus" className="bg-[#EEF3FF] py-20">
      <SectionWrapper>
        <SectionTitle title="Votre parcours en 4 étapes simples" />

        <div className="relative mt-12">
          {/* Connection line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 border-t-2 border-dashed border-[#E8931A] z-0"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-4 border-2 border-[#E8931A]">
                  <span className="text-[#E8931A] font-bold text-2xl">{step.number}</span>
                </div>

                {/* Mobile timeline vertical line */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-[#E8931A] opacity-30 mb-4" aria-hidden="true" />
                )}

                <h3 className="text-[#1A3A8F] font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-[#555555] leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={handleScroll}
            className="bg-[#E8931A] hover:bg-[#d4810f] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2"
          >
            Commencer maintenant
          </button>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
