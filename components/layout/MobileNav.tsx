'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/issue/01', label: 'Issue 01' },
  { href: '/about', label: 'About' },
  { href: '/astrology', label: 'Astrology' },
  { href: '/merch', label: 'Merch' },
  { href: '/events', label: 'Events' },
  { href: '/submit', label: 'Submit' },
];

interface MobileNavProps {
  id?: string;
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ id, isOpen, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll(isOpen);

  // Focus trap and escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Focus close button when opened
    closeButtonRef.current?.focus();

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />

          {/* Menu Panel */}
          <motion.nav
            id={id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-surface md:hidden overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Scanline effect */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none" />

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-mono text-xs text-acid uppercase tracking-widest">
                  Navigation
                </span>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 -mr-2 text-gray-400 hover:text-acid transition-colors"
                  aria-label="Close navigation menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex items-center gap-4 py-4 border-b border-white/5 hover:border-acid/30 transition-colors"
                      >
                        {/* Index number */}
                        <span className="font-mono text-xs text-gray-400 w-6">
                          {String(index).padStart(2, '0')}
                        </span>

                        {/* Label */}
                        <span className="font-headline text-2xl text-white group-hover:text-acid transition-colors">
                          {link.label}
                        </span>

                        {/* Arrow */}
                        <svg
                          className="w-5 h-5 ml-auto text-gray-400 group-hover:text-acid group-hover:translate-x-1 transition-all"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/10">
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">
                  Pacific Northwest
                </p>
                <p className="font-body text-lg italic text-gray-300">
                  For the everyday skier
                </p>

                {/* Social links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href="https://instagram.com/dustoncrustmag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-gray-300 hover:text-acid transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="mailto:info@dustoncrustmag.com"
                    className="font-mono text-xs text-gray-300 hover:text-acid transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            {/* Edge glow */}
            <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-acid/0 via-acid/30 to-acid/0" />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
