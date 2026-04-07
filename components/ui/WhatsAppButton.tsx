'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WA_LINK =
  'https://wa.me/33756856575?text=Bonjour%2C%20je%20souhaite%20obtenir%20une%20bourse%20d%E2%80%99%C3%A9tudes%20%C3%A0%20l%E2%80%99%C3%A9tranger.%20Pouvez-vous%20m%E2%80%99aider%20%3F';

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.847L.057 23.882a.5.5 0 0 0 .606.637l6.207-1.63A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.032-1.375l-.36-.214-3.733.979.997-3.646-.234-.374A9.87 9.87 0 0 1 2.118 12C2.118 6.533 6.533 2.118 12 2.118c5.468 0 9.882 4.415 9.882 9.882 0 5.468-4.414 9.882-9.882 9.882z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  function handleClick() {
    console.log('[WhatsApp] Clic bouton flottant →', WA_LINK);
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button',
      });
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="relative mb-3 mr-1 whitespace-nowrap rounded-lg bg-gray-800 px-3 py-2 text-sm text-white shadow-md"
            role="tooltip"
          >
            Réponse rapide sur WhatsApp ⚡
            <span className="absolute right-[-6px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton principal */}
      <div className="relative">
        {/* Badge "En ligne" */}
        <span className="absolute -left-1 -top-1 z-10 animate-pulse rounded-full bg-green-400 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">
          En ligne
        </span>

        <motion.a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter via WhatsApp"
          onClick={handleClick}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-green-400/40 transition-colors hover:bg-[#20BA5A] focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          <WhatsAppIcon />
        </motion.a>
      </div>
    </div>
  );
}
