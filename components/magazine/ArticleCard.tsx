'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HeroVariant } from '@/components/art/DigitalHero';

// Visual patterns for each article variant
const variantStyles: Record<HeroVariant, { gradient: string; pattern: string; accent: string }> = {
  steev: {
    gradient: 'from-emerald-900/30 via-deep to-teal-900/20',
    pattern: 'radial-gradient(circle at 30% 70%, rgba(0,240,255,0.1) 0%, transparent 50%)',
    accent: 'neon-blue',
  },
  lawsuits: {
    gradient: 'from-amber-900/30 via-deep to-red-900/20',
    pattern: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)',
    accent: 'yellow-500',
  },
  zen: {
    gradient: 'from-slate-800/50 via-deep to-blue-900/20',
    pattern: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)',
    accent: 'white',
  },
  art: {
    gradient: 'from-purple-900/30 via-deep to-pink-900/20',
    pattern: 'linear-gradient(135deg, rgba(188,19,254,0.1) 0%, transparent 50%, rgba(255,0,153,0.1) 100%)',
    accent: 'neon-purple',
  },
};

interface ArticleCardProps {
  title: string;
  author: string;
  excerpt: string;
  slug: string;
  category?: string;
  heroVariant?: HeroVariant;
  articleNumber?: number;
}

export function ArticleCard({
  title,
  author,
  excerpt,
  slug,
  category,
  heroVariant = 'steev',
  articleNumber,
}: ArticleCardProps) {
  const styles = variantStyles[heroVariant];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group relative h-full"
    >
      <Link href={slug} className="block h-full">
        {/* Card container */}
        <div className="relative h-full border border-white/10 bg-surface/50 transition-all duration-300 group-hover:border-acid/50 group-hover:shadow-glow-acid overflow-hidden">
          {/* Scanline effect on hover */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

          {/* Visual thumbnail area */}
          <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${styles.gradient}`}>
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: styles.pattern }}
            />

            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Glow orb */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-${styles.accent}/10 blur-[60px] group-hover:scale-150 transition-transform duration-500`} />

            {/* Category badge */}
            {category && (
              <span className="absolute top-3 right-3 px-3 py-1 bg-acid text-deep font-mono text-[10px] uppercase tracking-widest font-bold">
                {category}
              </span>
            )}

            {/* Article number */}
            {articleNumber && (
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="font-headline text-4xl text-white/10 group-hover:text-acid/30 transition-colors">
                  {articleNumber.toString().padStart(2, '0')}
                </span>
              </div>
            )}

            {/* Corner decoration */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/10 group-hover:border-acid/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/10 group-hover:border-acid/50 transition-colors" />
          </div>

          {/* Content area */}
          <div className="p-5 flex flex-col">
            <h3 className="font-headline text-2xl leading-none uppercase tracking-wide text-white group-hover:text-acid transition-colors mb-3">
              {title}
            </h3>

            <p className="font-body text-gray-300 line-clamp-2 text-sm leading-relaxed flex-1 mb-4">
              {excerpt}
            </p>

            {/* Footer */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">
                By {author}
              </p>

              {/* Read indicator */}
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-acid transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  Read
                </span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
