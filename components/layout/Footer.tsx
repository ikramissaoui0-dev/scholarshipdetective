import Link from 'next/link';
import Image from 'next/image';
import { Mail, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const serviceLinks = [
  { label: 'Recherche de Bourses', href: '#services' },
  { label: 'Placement Universitaire', href: '#services' },
  { label: 'Accompagnement Continu', href: '#services' },
  { label: 'Consultation Gratuite', href: '#contact' },
];

const universityLinks = [
  { label: 'Université de Pékin', href: '#universites' },
  { label: 'Tsinghua University', href: '#universites' },
  { label: 'Université Fudan', href: '#universites' },
  { label: 'Toutes nos universités', href: '#universites' },
];

const internationalLinks = [
  { label: 'France', href: '#international' },
  { label: 'Espagne & Malte', href: '#international' },
  { label: 'Royaume-Uni', href: '#international' },
  { label: 'Dubaï & Australie', href: '#international' },
];

const resourceLinks = [
  { label: 'Bourse CSC', href: '#bourses' },
  { label: 'Bourses Provinciales', href: '#bourses' },
  { label: 'Comment ça Marche', href: '#processus' },
  { label: 'FAQ', href: '#faq' },
];

const legalLinks = [
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Cookies', href: '/cookies' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/scholarshipdetective' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/scholarshipdetective' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/scholarshipdetective' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@scholarshipdetective' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] py-12" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top border */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-2 md:col-span-2">
              <Link href="#hero" className="inline-block mb-4">
                <span className="inline-block bg-white rounded-xl px-3 py-1.5">
                <Image
                  src="/logo.png"
                  alt="Scholarship Detective"
                  height={40}
                  width={160}
                  className="h-10 w-auto object-contain"
                />
              </span>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Expert Chine • Ouverture internationale
              </p>
              <a
                href="mailto:secretariat@scholarshipdetective.fr"
                className="flex items-center gap-2 text-white/70 hover:text-[#E8931A] text-sm transition-colors duration-200 group"
              >
                <Mail size={16} className="flex-shrink-0 group-hover:text-[#E8931A]" aria-hidden="true" />
                secretariat@scholarshipdetective.fr
              </a>

              {/* Social links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-[#E8931A] hover:text-white transition-all duration-200"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#E8931A] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Universities */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Universités Chine
              </h3>
              <ul className="space-y-2">
                {universityLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#E8931A] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* International */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                International
              </h3>
              <ul className="space-y-2">
                {internationalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#E8931A] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources + Legal */}
            <div>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Ressources
              </h3>
              <ul className="space-y-2 mb-6">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#E8931A] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Légal
              </h3>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-[#E8931A] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Scholarship Detective — Tous droits réservés
            </p>
            <p className="text-white/30 text-xs">
              Bureau d&apos;Orientation Officiel • Paris, France
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
