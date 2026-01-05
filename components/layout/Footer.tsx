'use client';

import Link from 'next/link';

const footerLinks = [
  { href: '/issue/01', label: 'Issue 01' },
  { href: '/about', label: 'About' },
  { href: '/submit', label: 'Submit' },
  { href: '/merch', label: 'Merch' },
  { href: '/events', label: 'Events' },
  { href: '/partners', label: 'Partners' },
];

export function Footer() {
  return (
    <footer className="relative bg-deep text-white border-t border-white/10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Brand column */}
            <div className="md:col-span-5">
              <Link href="/" className="inline-block group mb-6">
                <h2 className="font-headline text-4xl md:text-5xl tracking-tight">
                  <span className="text-white group-hover:text-acid transition-colors">DUST</span>
                  <span className="text-acid mx-2 font-body italic text-2xl">on</span>
                  <span className="text-white group-hover:text-acid transition-colors">CRUST</span>
                </h2>
              </Link>

              <p className="font-body text-gray-300 mb-6 max-w-sm">
                An indie ski magazine for the everyday skier. Shop rats, weekend warriors,
                and midweek passholders.
              </p>

              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <span className="inline-block w-2 h-2 bg-acid rounded-full animate-pulse" />
                <span>ISSUE_01.ACTIVE</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3">
              <h3 className="font-mono text-xs text-acid uppercase tracking-widest mb-6">
                Directory
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-headline text-lg text-gray-300 hover:text-acid transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="font-mono text-xs text-acid uppercase tracking-widest mb-6">
                Connect
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:info@dustoncrustmag.com"
                  className="block font-mono text-sm text-gray-300 hover:text-acid transition-colors"
                >
                  info@dustoncrustmag.com
                </a>
                <a
                  href="mailto:submit@dustoncrustmag.com"
                  className="block font-mono text-sm text-gray-300 hover:text-acid transition-colors"
                >
                  submit@dustoncrustmag.com
                </a>

                {/* Social */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://instagram.com/dustoncrustmag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 font-mono text-xs text-gray-300 hover:text-acid transition-colors uppercase tracking-wider"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Newsletter teaser */}
              <div className="mt-8 p-4 border border-white/10 bg-surface/50">
                <p className="font-mono text-xs text-gray-300 uppercase tracking-wider mb-2">
                  Network Access
                </p>
                <p className="font-body text-sm text-gray-300 mb-3">
                  Get notified when Issue 02 drops.
                </p>
                <Link
                  href="/submit"
                  className="btn-ghost text-xs"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                &copy; 2024 Dust on Crust Mag // PNW
              </p>

              {/* Sponsors */}
              <div className="flex items-center gap-8">
                <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                  Supported by
                </span>
                <div className="flex items-center gap-6">
                  <Link href="/partners" className="group">
                    <span className="font-headline text-lg text-gray-300 group-hover:text-acid transition-colors">
                      ON3P
                    </span>
                  </Link>
                  <Link href="/partners" className="group">
                    <span className="font-headline text-lg text-gray-300 group-hover:text-acid transition-colors">
                      SOVYRN
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal-style bottom edge */}
        <div className="h-1 bg-gradient-to-r from-transparent via-acid/20 to-transparent" />
      </div>
    </footer>
  );
}
