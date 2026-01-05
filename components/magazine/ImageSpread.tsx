'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ImageSpreadProps {
    src?: string; // Now optional - we show placeholder
    alt: string;
    caption?: string;
    credit?: string;
}

export function ImageSpread({ alt, caption, credit }: ImageSpreadProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.figure
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="my-12 -mx-4 md:-mx-8"
        >
            {/* Placeholder instead of image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-surface via-deep to-surface border border-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <p className="font-mono text-xs text-white/30 uppercase tracking-widest">[Image Placeholder]</p>
                        <p className="font-body text-sm text-white/20 mt-2 italic">{alt}</p>
                    </div>
                </div>
            </div>
            {(caption || credit) && (
                <figcaption className="mt-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                    {caption && (
                        <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                            {caption}
                        </p>
                    )}
                    {credit && (
                        <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                            Photo: {credit}
                        </p>
                    )}
                </figcaption>
            )}
        </motion.figure>
    );
}
