'use client';

import { motion } from 'framer-motion';
import { Search, GraduationCap, Heart } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const services = [
  {
    icon: Search,
    title: 'Recherche de Bourses',
    description:
      'Nous identifions et vous obtenons la bourse la plus adaptée à votre profil et à votre projet d\'études.',
    items: [
      'Bourse CSC (gouvernement chinois)',
      'Bourses provinciales',
      'Bourses universitaires directes',
      'Aides privées et ONG',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Placement Universitaire',
    description:
      'Nous sélectionnons les universités les mieux adaptées à votre niveau, votre filière et vos ambitions.',
    items: [
      'Analyse de votre profil académique',
      'Sélection personnalisée d\'universités',
      'Préparation et traduction du dossier',
      'Soumission et suivi des candidatures',
    ],
  },
  {
    icon: Heart,
    title: 'Accompagnement Continu',
    description:
      'Nous restons à vos côtés avant, pendant et après votre arrivée en Chine, pendant toute la durée de vos études.',
    items: [
      'Assistance visa étudiant (X1/X2)',
      'Aide à la recherche de logement',
      'Accueil et orientation à l\'arrivée',
      'Support pendant toutes les études',
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <SectionWrapper>
        <SectionTitle
          title="Ce que nous faisons pour vous"
          subtitle="Un accompagnement complet, de l'orientation jusqu'à l'obtention du diplôme"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="bg-white rounded-2xl shadow-md border-t-4 border-[#E8931A] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <Icon
                    size={48}
                    className="text-[#E8931A] mb-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="text-[#1A3A8F] font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#555555] leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#555555] text-sm">
                      <span className="text-[#E8931A] font-bold mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </section>
  );
}
