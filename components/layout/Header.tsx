'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Nos Services', href: '#services' },
  { label: 'Comment ça Marche', href: '#processus' },
  { label: 'Universités', href: '#universites' },
  { label: 'Bourses', href: '#bourses' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        style={{ height: '64px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" onClick={() => handleNavClick('#hero')} className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Scholarship Detective"
              height={48}
              width={200}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-[#555555] hover:text-[#1A3A8F] text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 rounded"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + Burger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden sm:block bg-[#E8931A] text-white rounded-xl px-6 py-2 font-semibold text-sm hover:bg-[#d4810f] transition-colors duration-200 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 whitespace-nowrap"
            >
              Consulter Gratuitement
            </button>
            <button
              className="lg:hidden p-2 rounded-lg text-[#1A3A8F] hover:bg-gray-100 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-[#E8931A] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-hidden="true"
        />
      </header>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-bold text-[#1A3A8F] text-lg">Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            aria-label="Fermer le menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-2" aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 text-[#555555] hover:text-[#1A3A8F] hover:bg-[#EEF3FF] rounded-xl font-medium transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="mt-4 bg-[#E8931A] text-white rounded-xl px-6 py-3 font-semibold text-center hover:bg-[#d4810f] transition-colors duration-200"
          >
            Consulter Gratuitement
          </button>
        </nav>
      </div>
    </>
  );
}
