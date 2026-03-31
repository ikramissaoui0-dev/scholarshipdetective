'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';

const destinations = [
  {
    flag: '🇫🇷',
    country: 'France',
    highlight: 'Grandes Écoles & Masters',
    description: 'Accédez aux meilleures formations francophones avec bourses Campus France.',
    tags: ['Business', 'Ingénierie', 'Arts'],
  },
  {
    flag: '🇪🇸',
    country: 'Espagne',
    highlight: 'Coût de vie attractif',
    description: 'Universités reconnues dans un cadre de vie agréable au cœur de l\'Europe.',
    tags: ['Tourisme', 'Commerce', 'Design'],
  },
  {
    flag: '🇩🇪',
    country: 'Allemagne',
    highlight: 'Études gratuites',
    description: 'Des universités publiques de premier rang, souvent sans frais de scolarité.',
    tags: ['Ingénierie', 'Sciences', 'Tech'],
  },
  {
    flag: '🇬🇧',
    country: 'Royaume-Uni',
    highlight: 'Diplômes reconnus mondialement',
    description: 'Oxford, Cambridge, LSE — l\'excellence académique britannique à votre portée.',
    tags: ['Finance', 'Droit', 'MBA'],
  },
  {
    flag: '🇲🇹',
    country: 'Malte',
    highlight: 'Anglais & Europe',
    description: 'Île méditerranéenne anglophone, passerelle idéale vers les études en Europe.',
    tags: ['Langues', 'Business', 'IT'],
  },
  {
    flag: '🇦🇪',
    country: 'Dubaï',
    highlight: 'Hub international',
    description: 'Étudiez au cœur d\'un hub mondial du business et de l\'innovation.',
    tags: ['Finance', 'Luxe', 'Management'],
  },
  {
    flag: '🇦🇺',
    country: 'Australie',
    highlight: 'Top universités mondiales',
    description: '8 universités dans le top 100 mondial, qualité de vie exceptionnelle.',
    tags: ['Sciences', 'Environnement', 'IT'],
  },
  {
    flag: '🇺🇸',
    country: 'USA',
    highlight: 'Ivy League & financements',
    description: 'Les meilleures universités du monde avec des opportunités de bourses.',
    tags: ['Tech', 'Business', 'Sciences'],
  },
];

export default function InternationalDestinations() {
  return (
    <section id="international" className="py-16 bg-gray-50">
      <SectionWrapper>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {/* Chip */}
          <span className="inline-block bg-[#EEF3FF] text-[#1A3A8F] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Extension internationale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-3">
            Nos Autres Destinations
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Au-delà de la Chine, nous vous accompagnons vers les destinations internationales les plus prisées.
          </p>
        </motion.div>

        {/* Destination cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.country}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-gray-100 p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{dest.flag}</span>
                <span className="font-bold text-[#1A1A2E] text-sm">{dest.country}</span>
              </div>
              <p className="text-[#E8931A] text-xs font-semibold mb-1.5">{dest.highlight}</p>
              <p className="text-gray-500 text-xs leading-relaxed mb-3">{dest.description}</p>
              <div className="flex flex-wrap gap-1">
                {dest.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full"
                  >
                    {tag}
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
            className="inline-flex items-center gap-2 text-[#1A3A8F] border border-[#1A3A8F]/40 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-[#1A3A8F] hover:text-white transition-all duration-200"
          >
            Me faire orienter vers la bonne destination →
          </button>
        </motion.div>
      </SectionWrapper>
    </section>
  );
}
