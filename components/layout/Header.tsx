'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { MobileNav } from './MobileNav';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/issue/01', label: 'Issue 01', shortcut: '1' },
  { href: '/about', label: 'About', shortcut: 'A' },
  { href: '/astrology', label: 'Astrology', shortcut: 'S' },
  { href: '/merch', label: 'Merch', shortcut: 'M' },
  { href: '/events', label: 'Events', shortcut: 'E' },
  { href: '/submit', label: 'Submit', shortcut: 'U' },
];

interface HeaderProps {
  transparent?: boolean;
}

export function Header({ transparent = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation
  const handleKeyNav = useCallback((e: KeyboardEvent) => {
    // Only trigger if no modifier keys and not in an input
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA') return;

    const key = e.key.toUpperCase();

    // Home shortcut
    if (key === 'H') {
      window.location.href = '/';
      return;
    }

    // Navigation shortcuts
    const link = navLinks.find(l => l.shortcut === key);
    if (link) {
      window.location.href = link.href;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyNav);
    return () => window.removeEventListener('keydown', handleKeyNav);
  }, [handleKeyNav]);

  const showBackground = scrolled || !transparent;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          showBackground
            ? 'bg-deep/95 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Terminal-style top bar */}
        <div className="hidden md:block border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
            <span className="font-mono text-[10px] text-gray-400 tracking-wider">
              DUST://ON.CRUST.MAG
            </span>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-gray-400 tracking-wider">
                ISSUE_01.ACTIVE
              </span>
              <span className="font-mono text-[10px] text-acid tracking-wider">
                [H] HOME
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo - Brutalist treatment */}
            <Link
              href="/"
              className="group relative flex items-baseline gap-2"
            >
              <span className="font-headline text-2xl md:text-3xl tracking-tight text-white group-hover:text-acid transition-colors">
                DUST
              </span>
              <span className="font-body italic text-lg text-acid">on</span>
              <span className="font-headline text-2xl md:text-3xl tracking-tight text-white group-hover:text-acid transition-colors">
                CRUST
              </span>

              {/* Glitch effect on hover */}
              <span
                className="absolute inset-0 font-headline text-2xl md:text-3xl tracking-tight text-neon-blue opacity-0 group-hover:opacity-50 blur-[1px] transition-opacity pointer-events-none"
                aria-hidden="true"
                style={{ transform: 'translate(-2px, -1px)' }}
              >
                DUST CRUST
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link group relative flex items-center gap-2 px-3 py-2 ${
                      isActive ? 'nav-link--active' : ''
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>

                    {/* Keyboard hint */}
                    <span
                      className="kbd opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    >
                      {link.shortcut}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileNavOpen(true)}
              className="md:hidden relative p-3 -mr-3 text-white hover:text-acid transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-nav"
            >
              {/* Hamburger icon */}
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-current transition-transform origin-right" />
                <span className="block w-full h-0.5 bg-current" />
                <span className="block w-full h-0.5 bg-current transition-transform origin-right" />
              </div>
            </button>
          </div>
        </div>

        {/* Progress bar placeholder - activated when scrolling articles */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      <MobileNav
        id="mobile-nav"
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}
