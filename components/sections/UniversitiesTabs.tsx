'use client';

import { useState } from 'react';
import Universities from '@/components/sections/Universities';
import InternationalDestinations from '@/components/sections/InternationalDestinations';
import InternationalSchools from '@/components/sections/InternationalSchools';

type Tab = 'chine' | 'international';

export default function UniversitiesTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('chine');

  return (
    <div id="universites">
      {/* Barre d'onglets */}
      <div className="bg-white border-b border-gray-100 sticky top-[64px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-none" role="tablist" aria-label="Sélection région">
            <button
              role="tab"
              aria-selected={activeTab === 'chine'}
              onClick={() => setActiveTab('chine')}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 rounded-t ${
                activeTab === 'chine'
                  ? 'border-[#E8931A] text-[#1A3A8F]'
                  : 'border-transparent text-gray-500 hover:text-[#1A3A8F] hover:border-gray-300'
              }`}
            >
              <span className="text-lg" aria-hidden="true">🇨🇳</span>
              <span>Universités en Chine</span>
              {activeTab === 'chine' && (
                <span className="ml-1 bg-[#1A3A8F] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  300+
                </span>
              )}
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'international'}
              onClick={() => setActiveTab('international')}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold whitespace-nowrap border-b-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 rounded-t ${
                activeTab === 'international'
                  ? 'border-[#E8931A] text-[#1A3A8F]'
                  : 'border-transparent text-gray-500 hover:text-[#1A3A8F] hover:border-gray-300'
              }`}
            >
              <span className="text-lg" aria-hidden="true">🌍</span>
              <span>Universités à l&apos;International</span>
              {activeTab === 'international' && (
                <span className="ml-1 bg-[#E8931A] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Contenu des onglets */}
      <div role="tabpanel" aria-label={activeTab === 'chine' ? 'Universités en Chine' : 'Universités à l\'International'}>
        {activeTab === 'chine' ? (
          <Universities />
        ) : (
          <div id="international">
            <InternationalDestinations />
            <InternationalSchools />
          </div>
        )}
      </div>
    </div>
  );
}
