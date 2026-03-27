'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';

const testimonials = [
  {
    quote:
      "Scholarship Detective m'a guidée à chaque étape. J'ai obtenu la bourse CSC et intégré Tsinghua University — un rêve devenu réalité. Le suivi même après mon arrivée en Chine est exceptionnel.",
    name: 'Sophie M.',
    city: 'Lyon',
    field: 'Master Design',
    university: 'Tsinghua University',
    year: '2024',
    initials: 'SM',
  },
  {
    quote:
      "En tant que parent, j'avais beaucoup d'inquiétudes. L'équipe nous a tout expliqué, géré le visa, trouvé le logement. Mon fils est épanoui à Pékin depuis 2 ans.",
    name: 'Pierre D.',
    city: 'Père d\'étudiant',
    field: 'Médecine',
    university: 'Université de Pékin',
    year: '2023',
    initials: 'PD',
  },
  {
    quote:
      "Je ne parlais pas un mot de mandarin. Ils m'ont orienté vers un programme en anglais, obtenu une bourse provinciale. Aujourd'hui je commence à apprendre le mandarin avec plaisir !",
    name: 'Karim B.',
    city: 'Marseille',
    field: 'Informatique',
    university: 'Fudan University',
    year: '2024',
    initials: 'KB',
  },
  {
    quote:
      "Dossier CSC accepté du premier coup grâce à leur préparation minutieuse. L'accompagnement ne s'arrête pas à l'inscription — ils sont toujours disponibles.",
    name: 'Amira S.',
    city: 'Paris',
    field: 'Commerce International',
    university: 'UIBE',
    year: '2023',
    initials: 'AS',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="temoignages" className="bg-[#1A3A8F] py-20">
      <SectionWrapper>
        <h2 className="text-white font-bold text-3xl md:text-4xl text-center mb-12">
          Ce que disent nos étudiants
        </h2>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 text-center"
            >
              {/* Avatar */}
              <div
                className="w-20 h-20 rounded-full border-2 border-[#E8931A] bg-[#E8931A]/20 flex items-center justify-center mx-auto mb-6"
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl">{t.initials}</span>
              </div>

              {/* Quote */}
              <blockquote className="text-white/90 italic text-lg leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-white font-semibold text-base">{t.name}</p>
                <p className="text-[#E8931A] text-sm mt-1">
                  {t.city} • {t.field} • {t.university} • Promo {t.year}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 focus:ring-offset-[#1A3A8F]"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-12 h-12 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-white hover:bg-white/20 transition-colors focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 focus:ring-offset-[#1A3A8F]"
            aria-label="Témoignage suivant"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Témoignages">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Témoignage ${i + 1}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 focus:ring-offset-[#1A3A8F] ${
                i === current ? 'bg-[#E8931A] w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
