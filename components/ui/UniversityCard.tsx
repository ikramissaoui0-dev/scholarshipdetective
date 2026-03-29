'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface UniversityCardProps {
  name: string;
  city: string;
  rank: string;
  specialties: string[];
  slug?: string; // Si défini → carte cliquable vers la fiche détaillée
  index?: number;
}

export default function UniversityCard({
  name,
  city,
  rank,
  specialties,
  slug,
  index = 0,
}: UniversityCardProps) {
  const cardContent = (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`bg-white border border-gray-100 rounded-xl p-5 shadow-sm transition-all duration-300 h-full
        ${slug
          ? 'hover:shadow-md hover:border-[#1A3A8F] hover:-translate-y-0.5 cursor-pointer group'
          : 'cursor-default'
        }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <h3 className={`text-[#1A3A8F] font-bold text-sm leading-tight ${slug ? 'group-hover:underline' : ''}`}>
          {name}
        </h3>
        {slug && (
          <span className="text-[#E8931A] text-xs font-bold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            →
          </span>
        )}
      </div>

      <p className="text-gray-400 text-xs mb-3">{city}</p>

      <span className="inline-block bg-[#E8931A] text-white text-xs rounded-full px-2 py-0.5 mb-3 font-medium">
        QS {rank}
      </span>

      <div className="flex flex-wrap gap-1">
        {specialties.map((spec) => (
          <span
            key={spec}
            className="text-gray-400 text-xs bg-gray-50 rounded px-1.5 py-0.5"
          >
            {spec}
          </span>
        ))}
      </div>

      {slug && (
        <div className="mt-3 pt-3 border-t border-gray-50">
          <span className="text-[#1A3A8F] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Voir la fiche complète →
          </span>
        </div>
      )}
    </motion.article>
  );

  if (slug) {
    return (
      <Link href={`/universites/${slug}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
