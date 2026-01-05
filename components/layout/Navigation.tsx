'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/issue/01', label: 'Issue 01' },
  { href: '/about', label: 'About' },
  { href: '/astrology', label: 'Astrology' },
  { href: '/merch', label: 'Merch' },
  { href: '/events', label: 'Events' },
  { href: '/submit', label: 'Submit' },
];

interface NavigationProps {
  className?: string;
  linkClassName?: string;
}

export function Navigation({ className = '', linkClassName = '' }: NavigationProps) {
  const pathname = usePathname();

  return (
    <nav className={`items-center gap-6 ${className}`}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`font-mono text-xs uppercase tracking-widest transition-colors hover:text-teal ${isActive ? 'text-teal' : linkClassName
              }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export { navLinks };
