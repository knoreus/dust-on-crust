'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface PullQuoteProps {
    quote: string;
    attribution?: string;
    variant?: 'left' | 'right' | 'center';
}

export function PullQuote({ quote, attribution, variant = 'center' }: PullQuoteProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    const alignmentClasses = {
        left: 'text-left border-l-2 border-acid pl-6',
        right: 'text-right border-r-2 border-acid pr-6',
        center: 'text-center border-t border-b border-acid/20 py-8',
    };

    return (
        <motion.blockquote
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className={`my-12 ${alignmentClasses[variant]}`}
        >
            <p className="font-headline text-2xl md:text-3xl uppercase leading-tight text-white tracking-tight">
                &ldquo;{quote}&rdquo;
            </p>
            {attribution && (
                <cite className="block mt-4 font-mono text-xs text-acid uppercase tracking-widest not-italic">
                    — {attribution}
                </cite>
            )}
        </motion.blockquote>
    );
}
