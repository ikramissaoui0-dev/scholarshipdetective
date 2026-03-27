'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
  size = 'lg',
}: CTAButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-[#E8931A] hover:bg-[#d4810f] text-white font-semibold shadow-xl',
    secondary:
      'border-2 border-white/60 text-white hover:bg-white/10',
  };

  return (
    <Link
      href={href}
      className={`inline-block rounded-xl font-semibold transition-all duration-300 focus:ring-2 focus:ring-[#E8931A] focus:ring-offset-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
