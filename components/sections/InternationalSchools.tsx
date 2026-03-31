'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { GraduationCap, Globe } from 'lucide-react';

const schools = [
  {
    name: 'Schiller International University',
    locations: 'USA • Espagne • Allemagne • France',
    programs: ['International Business', 'MBA', 'Relations Internationales'],
    description: 'Université américaine multi-campus offrant des diplômes reconnus internationalement.',
  },
  {
    name: 'ICN Business School',
    locations: 'France • Allemagne',
    programs: ['Management', 'Marketing', 'Finance'],
    description: 'Grande école de management franco-allemande, membre de la Conférence des Grandes Écoles.',
  },
  {
    name: 'GBSB Global Business School',
    locations: 'Espagne • Malte',
    programs: ['Business Administration', 'Digital Marketing', 'Entrepreneuriat'],
    description: 'École de business internationale en plein cœur de l\'Europe méridionale.',
  },
  {
    name: 'Global Banking School (GBS)',
    locations: 'Royaume-Uni',
    programs: ['Banque & Finance', 'Comptabilité', 'Business'],
    description: 'Spécialiste des formations bancaires et financières au Royaume-Uni.',
  },
  {
    name: 'MLA College',
    locations: 'Royaume-Uni',
    programs: ['Sciences Marines', 'Environnement', 'Leadership'],
    description: 'Collège spécialisé en sciences marines et développement durable au Royaume-Uni.',
  },
  {
    name: 'EMA — École de Management Appliqué',
    locations: 'France',
    programs: ['Management', 'Commerce International', 'RH'],
    description: 'Formation professionnelle orientée insertion et management opérationnel.',
  },
  {
    name: 'English Path',
    locations: 'Royaume-Uni • Malte • Dubaï • Canada',
    programs: ['Anglais Intensif', 'Business English', 'Préparation IELTS'],
    description: 'Écoles de langue anglaise premium avec campus dans les grandes métropoles mondiales.',
  },
  {
    name: 'APAC',
    locations: 'International',
    programs: ['Commerce', 'Gestion', 'International'],
    description: 'Établissement partenaire offrant des programmes orientés marché international et Asie-Pacifique.',
  },
];

export default function InternationalSchools() {
  return (
    <section id="ecoles-internationales" className="py-16 bg-white">
      <SectionWrapper>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-[#FFF8ED] text-[#E8931A] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Partenaires internationaux
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Nos Établissements Partenaires
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Des établissements soigneusement sélectionnés pour vous offrir une formation de qualité à l&apos;international.
          </p>
        </motion.div>

        {/* School cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schools.map((school, i) => (
            <motion.div
              key={school.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-[#1A3A8F]/20 transition-all duration-200 group"
            >
              {/* School header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEF3FF] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A3A8F] transition-colors duration-200">
                  <GraduationCap size={18} className="text-[#1A3A8F] group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] text-sm leading-snug">{school.name}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Globe size={11} className="text-gray-400 flex-shrink-0" />
                    <span className="text-[11px] text-gray-400">{school.locations}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{school.description}</p>

              {/* Programs */}
              <div className="flex flex-wrap gap-1.5">
                {school.programs.map((prog) => (
                  <span
                    key={prog}
                    className="text-[10px] bg-[#EEF3FF] text-[#1A3A8F] px-2.5 py-1 rounded-full font-medium"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#1A3A8F] text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-[#0D1F5C] transition-all duration-200 shadow-md"
          >
            Obtenir une orientation gratuite →
          </button>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
