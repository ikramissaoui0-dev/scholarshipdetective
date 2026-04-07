'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const statBadges = [
  { value: '500+', label: 'Étudiants Placés' },
  { value: '95%', label: 'Taux de Réussite' },
  { value: '80+', label: 'Universités Partenaires' },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1A3A8F 0%, #0D1F5C 100%)' }}
    >
      {/* Background overlay image */}
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src="/images/campus-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <p className="text-[#E8931A] text-sm font-medium uppercase tracking-widest mb-4">
              Spécialiste des études en Chine et à l&apos;international • Paris
            </p>

            {/* H1 */}
            <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Étudiez dans les Meilleures{' '}
              <span className="text-[#E8931A]">Universités</span> à l&apos;International
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-xl mt-4 max-w-2xl leading-relaxed">
              Bourses obtenues, placement garanti, accompagnement personnalisé — expert Chine avec ouverture vers les meilleures destinations internationales.
            </p>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-3 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {statBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium backdrop-blur-sm"
                >
                  <span className="font-bold text-[#E8931A]">{badge.value}</span>{' '}
                  {badge.label}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <button
                onClick={() => handleScroll('#contact')}
                className="bg-[#E8931A] hover:bg-[#d4810f] text-white font-semibold px-8 py-4 rounded-xl text-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 focus:ring-offset-[#1A3A8F]"
              >
                Demander Mon Orientation Gratuite
              </button>
              <button
                onClick={() => handleScroll('#services')}
                className="border-2 border-white/60 text-white px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all duration-300 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A3A8F]"
              >
                Découvrir Nos Services
              </button>
            </motion.div>
          </motion.div>

          {/* Right column — Image */}
          <motion.div
            className="hidden lg:flex justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="/images/campus-hero.jpg"
                alt="Campus universitaire chinois moderne"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F5C]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
