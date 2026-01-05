'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ArticleCardProps {
    title: string;
    author: string;
    excerpt: string;
    thumbnail?: string; // Now optional - we'll use placeholder
    slug: string;
    category?: string;
    articleNumber?: number;
}

export function ArticleCard({
    title,
    author,
    excerpt,
    slug,
    category,
    articleNumber,
}: ArticleCardProps) {
    return (
        <motion.article
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="group relative"
        >
            <Link href={slug} className="block h-full">
                <div className="absolute inset-0 border border-white/10 bg-surface/50 transition-colors group-hover:border-acid/50" />

                <div className="relative p-4 flex flex-col h-full">
                    {/* Placeholder gradient instead of image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-surface via-deep to-surface mb-4 border border-white/5">
                        {/* Abstract pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(204,255,0,0.03)_50%,transparent_60%)]" />

                        {category && (
                            <span className="absolute top-0 right-0 px-3 py-1 bg-acid text-deep font-mono text-xs uppercase tracking-widest font-bold">
                                {category}
                            </span>
                        )}

                        {articleNumber && (
                            <span className="absolute bottom-0 left-0 px-3 py-1 bg-black text-white font-mono text-xs uppercase tracking-widest">
                                {articleNumber.toString().padStart(2, '0')}
                            </span>
                        )}
                    </div>

                    <div className="space-y-3 flex-1 flex flex-col">
                        <h3 className="font-headline text-2xl leading-none uppercase tracking-wide text-white group-hover:text-acid transition-colors">
                            {title}
                        </h3>

                        <p className="font-body text-gray-400 line-clamp-3 text-sm leading-relaxed flex-1">
                            {excerpt}
                        </p>

                        <div className="pt-3 mt-auto border-t border-white/5 flex items-center justify-between">
                            <p className="font-mono text-xs text-acid uppercase tracking-widest">
                                By {author}
                            </p>
                            <span className="text-white/30 group-hover:text-acid transition-colors">&rarr;</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
