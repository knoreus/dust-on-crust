'use client';

import { ReactNode, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface ArticleLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
    author: string;
    authorBio?: string;
    heroImage?: string; // Now unused - we use gradient
    heroImageAlt?: string;
}

export function ArticleLayout({
    children,
    title,
    subtitle,
    author,
    authorBio,
}: ArticleLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <>
            {/* Progress bar */}
            <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-white/5">
                <motion.div style={{ scaleX }} className="h-full bg-acid origin-left" />
            </div>

            <Header />

            <article ref={containerRef} className="bg-deep text-white min-h-screen">
                {/* Minimal Hero - no photo */}
                <header className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
                    {/* Abstract background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-surface via-deep to-deep" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                        <Link href="/issue/01" className="inline-flex items-center gap-2 font-mono text-xs text-acid uppercase tracking-widest mb-8 hover:text-white transition-colors">
                            <span>&larr;</span> Back to Issue 01
                        </Link>

                        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-6">
                            {title}
                        </h1>

                        {subtitle && (
                            <p className="font-body text-xl text-gray-400 max-w-xl mx-auto italic mb-8">
                                {subtitle}
                            </p>
                        )}

                        <div className="inline-block border-t border-b border-acid/30 py-3">
                            <p className="font-mono text-sm uppercase tracking-widest">
                                Words by <span className="text-acid">{author}</span>
                            </p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="max-w-[65ch] mx-auto px-4 py-16">
                    <div className="prose-magazine">
                        {children}
                    </div>

                    {/* End Mark */}
                    <div className="flex justify-center my-12">
                        <span className="font-mono text-acid text-lg tracking-[0.5em]">***</span>
                    </div>

                    {/* Author Bio */}
                    {authorBio && (
                        <div className="border border-white/10 bg-surface/50 p-6 mt-12">
                            <h3 className="font-mono text-xs text-acid uppercase tracking-widest mb-3">About the Author</h3>
                            <p className="font-headline text-lg uppercase tracking-wide text-white mb-2">{author}</p>
                            <p className="font-body text-sm text-gray-400">{authorBio}</p>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </>
    );
}
