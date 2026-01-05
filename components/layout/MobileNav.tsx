'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { menuSlide, staggerContainer, menuItemVariants } from '@/lib/animations';
import { navLinks } from './Navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useLockBodyScroll(isOpen);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm md:hidden"
          />

          {/* Menu Panel */}
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuSlide}
            className="fixed top-0 right-0 z-50 h-full w-[85vw] max-w-sm bg-cream-300 shadow-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-3 text-ink hover:text-teal transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col h-full pt-20 px-8">
              {/* Logo */}
              <Link
                href="/"
                onClick={onClose}
                className="font-headline text-2xl tracking-tight text-ink mb-12"
              >
                DUST <span className="font-body italic text-xl">on</span> CRUST
              </Link>

              {/* Navigation Links */}
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={menuItemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block font-headline text-2xl uppercase tracking-wider text-ink hover:text-teal transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Footer in menu */}
              <div className="mt-auto pb-8">
                <p className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                  Pacific Northwest
                </p>
                <p className="font-body text-lg italic text-mauve mt-2">
                  For the everyday skier
                </p>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
