'use client';

import { motion } from 'framer-motion';

const universities = [
  'Université de Pékin (PKU)',
  'Tsinghua University',
  'Université Fudan',
  'Université Zhejiang',
  'SJTU Shanghai Jiao Tong',
  'Université Tongji',
  'UIBE Pékin',
  'Sun Yat-sen University',
];

export default function TrustBar() {
  return (
    <section className="bg-white py-8 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">
          Nos étudiants ont intégré ces universités d&apos;excellence
        </p>

        {/* Desktop: flex row */}
        <div className="hidden md:flex flex-wrap gap-8 justify-center items-center">
          {universities.map((uni) => (
            <motion.span
              key={uni}
              className="text-gray-500 font-semibold text-sm hover:text-[#1A3A8F] transition-colors duration-200 cursor-default"
              whileHover={{ scale: 1.05 }}
            >
              {uni}
            </motion.span>
          ))}
        </div>

        {/* Mobile: marquee scroll */}
        <div className="md:hidden overflow-hidden relative">
          <div className="flex gap-8 animation-marquee whitespace-nowrap">
            {[...universities, ...universities].map((uni, i) => (
              <span
                key={`${uni}-${i}`}
                className="text-gray-500 font-semibold text-sm flex-shrink-0"
              >
                {uni}
                <span className="mx-4 text-[#E8931A]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
