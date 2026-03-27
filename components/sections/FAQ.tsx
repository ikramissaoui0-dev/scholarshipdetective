'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';

const faqs = [
  {
    q: 'Suis-je éligible à la bourse CSC sans parler chinois ?',
    a: "Oui, de nombreux programmes en Chine sont dispensés en anglais, notamment dans les grandes universités. La bourse CSC ne requiert pas de niveau en mandarin à l'entrée. Des cours de chinois intensifs sont souvent inclus la première année. Nous évaluons votre profil et vous orientons vers les programmes adaptés.",
  },
  {
    q: 'Quel est le niveau académique requis pour étudier en Chine ?',
    a: "Les exigences varient selon l'université et le programme. Généralement, un bon dossier académique (mention Bien ou équivalent) est apprécié. Nous travaillons avec des universités ouvertes à des profils variés et vous aidons à trouver l'établissement le mieux adapté à votre niveau.",
  },
  {
    q: 'Que couvre exactement la bourse CSC ?',
    a: 'La bourse CSC (Chinese Government Scholarship) couvre en général : les frais de scolarité intégraux, le logement sur le campus, une allocation mensuelle de 2 500 à 3 500 CNY selon le niveau d\'études, et une assurance médicale de base.',
  },
  {
    q: "Quel est le coût de l'accompagnement Scholarship Detective ?",
    a: "Nous proposons une première consultation entièrement gratuite. Nos honoraires d'accompagnement sont discutés lors de ce premier entretien et dépendent du niveau de service souhaité. Contactez-nous pour un devis personnalisé.",
  },
  {
    q: 'Dans combien de temps mon dossier sera-t-il traité ?',
    a: "Nous vous répondons sous 24h ouvrées pour une première évaluation. La constitution complète du dossier prend en moyenne 3 à 6 semaines selon la complexité et les documents à réunir. Les délais de réponse des universités varient de 4 à 12 semaines.",
  },
  {
    q: "Puis-je choisir ma ville d'études en Chine ?",
    a: "Absolument ! Vous pouvez exprimer vos préférences (Pékin, Shanghai, Hangzhou, etc.) et nous les prenons en compte dans notre sélection. Nous vous conseillons également selon vos critères : coût de la vie, dynamisme économique, spécialités universitaires.",
  },
  {
    q: 'Que se passe-t-il si ma demande de bourse est refusée ?',
    a: "En cas de refus, nous analysons les raisons et explorons d'autres options : bourses provinciales, bourses universitaires directes, programmes auto-financés à faible coût. Nous ne vous laissons pas sans solution.",
  },
  {
    q: 'Comment obtenir le visa étudiant chinois ?',
    a: "Nous vous accompagnons dans toutes les démarches visa. Une fois votre lettre d'admission obtenue, nous vous guidons pour la demande du visa X1 (long séjour) ou X2 (court séjour) auprès du Consulat de Chine en France.",
  },
  {
    q: "Puis-je travailler pendant mes études en Chine ?",
    a: "Le visa étudiant X1 permet en principe le travail à temps partiel sous certaines conditions réglementaires. Nous vous informons des règles en vigueur au moment de votre départ, qui peuvent évoluer selon les politiques locales.",
  },
  {
    q: "Comment se passe l'accompagnement après mon arrivée en Chine ?",
    a: "Notre accompagnement ne s'arrête pas à l'atterrissage. Nous restons disponibles par email, WhatsApp et visioconférence pour vous aider à vous installer, résoudre les problèmes administratifs, et assurer votre bien-être tout au long de vos études.",
  },
];

function FAQItem({ q, a, isOpen, onToggle, index }: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={id}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:ring-2 focus:ring-[#E8931A] focus:ring-inset"
      >
        <h3 className="font-semibold text-[#1A3A8F] text-base pr-4 leading-snug">{q}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
          aria-hidden="true"
        >
          <ChevronDown size={20} className="text-[#E8931A]" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pt-0 text-[#555555] leading-relaxed border-t border-gray-100">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="bg-white py-20">
      <SectionWrapper>
        <SectionTitle title="Questions Fréquentes" />

        <div className="max-w-3xl mx-auto space-y-3 mt-4">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
