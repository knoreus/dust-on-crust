'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MobileNav } from './MobileNav';
import { Navigation } from './Navigation';

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showBackground = scrolled || !transparent;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${showBackground ? 'bg-deep/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <span className="font-headline text-xl tracking-tight text-white group-hover:text-acid transition-colors">
                DUST <span className="font-body italic text-lg text-acid">on</span> CRUST
              </span>
            </Link>

            {/* Desktop Navigation */}
            <Navigation
              className="hidden md:flex"
              linkClassName="text-gray-400 hover:text-acid"
            />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden p-2 text-white"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </>
  );
}
