'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const universities = [
  {
    name: 'Université de Pékin (PKU)',
    city: 'Pékin',
    rank: '#17',
    specialties: ['Sciences', 'Droit', 'Économie'],
  },
  {
    name: 'Université Tsinghua',
    city: 'Pékin',
    rank: '#25',
    specialties: ['Ingénierie', 'Architecture', 'Informatique'],
  },
  {
    name: 'Université Fudan',
    city: 'Shanghai',
    rank: '#55',
    specialties: ['Médecine', 'Économie', 'Sciences'],
  },
  {
    name: 'Université Zhejiang',
    city: 'Hangzhou',
    rank: '#67',
    specialties: ['Sciences', 'Agriculture', 'Tech'],
  },
  {
    name: 'SJTU Shanghai Jiao Tong',
    city: 'Shanghai',
    rank: '#51',
    specialties: ['Ingénierie', 'Médecine'],
  },
  {
    name: 'Université Tongji',
    city: 'Shanghai',
    rank: '#600',
    specialties: ['Architecture', 'Design', 'Génie Civil'],
  },
  {
    name: 'UIBE Pékin',
    city: 'Pékin',
    rank: 'Top 5 Commerce',
    specialties: ['Commerce International', 'Finance'],
  },
  {
    name: 'Sun Yat-sen University',
    city: 'Guangzhou',
    rank: '#285',
    specialties: ['Médecine', 'Humanités'],
  },
];

export default function Universities() {
  return (
    <section id="universites" className="bg-white py-20">
      <SectionWrapper>
        <SectionTitle
          title="80+ Universités Partenaires en Chine"
          subtitle="Des établissements d'excellence couvrant toutes les filières"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {universities.map((uni, i) => (
            <motion.article
              key={uni.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#1A3A8F] transition-all duration-300 cursor-default"
            >
              <h3 className="text-[#1A3A8F] font-bold text-sm leading-tight mb-1">
                {uni.name}
              </h3>
              <p className="text-gray-400 text-xs mb-3">{uni.city}</p>
              <span className="inline-block bg-[#E8931A] text-white text-xs rounded-full px-2 py-0.5 mb-3 font-medium">
                QS {uni.rank}
              </span>
              <div className="flex flex-wrap gap-1">
                {uni.specialties.map((spec) => (
                  <span
                    key={spec}
                    className="text-gray-400 text-xs bg-gray-50 rounded px-1.5 py-0.5"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
