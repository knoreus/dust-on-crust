'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface CoverHeroProps {
    issueNumber: string;
    title: string;
    subtitle: string;
    coverImage?: string; // Now optional - we'll use gradient placeholder
}

export function CoverHero({ issueNumber, title, subtitle }: CoverHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-deep">
            {/* Abstract gradient background instead of photo */}
            <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-deep via-surface to-deep" />
                <div className="absolute inset-0 bg-gradient-to-t from-acid/5 via-transparent to-neon-blue/5" />
                {/* Simple grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block border border-acid/50 bg-black/50 px-6 py-2 mb-8">
                        <span className="font-mono text-sm uppercase tracking-[0.3em] text-acid">
                            Issue {issueNumber} // {subtitle}
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="font-headline text-[12vw] md:text-[10vw] leading-[0.85] uppercase tracking-tighter text-white glitch-text cursor-default">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="block">
                                {word}
                                {i === 0 && <span className="text-acid">.</span>}
                            </span>
                        ))}
                    </h1>
                </motion.div>

                {/* Tagline bar */}
                <div className="absolute bottom-24 left-0 right-0 overflow-hidden bg-acid text-deep py-3">
                    <div className="flex items-center justify-center gap-8 font-mono text-sm uppercase tracking-widest font-bold">
                        <span>For the Everyday Skier</span>
                        <span className="text-deep/50">///</span>
                        <span>Shop Rats</span>
                        <span className="text-deep/50">///</span>
                        <span>Weekend Warriors</span>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="h-12 w-px bg-white/20" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
                </motion.div>
            </div>
        </div>
    );
}
