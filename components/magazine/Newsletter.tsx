'use client';

import { useState } from 'react';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1000);
    };

    return (
        <section className="py-20 px-4 border-t border-white/10 bg-surface">
            <div className="max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-acid uppercase tracking-widest mb-4">
                    <span className="w-2 h-2 bg-acid rounded-full" />
                    Newsletter
                </div>

                <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter text-white mb-4">
                    Stay in the Loop
                </h2>

                <p className="font-body text-gray-400 mb-8">
                    Get notified when new issues drop.
                </p>

                {status === 'success' ? (
                    <div className="bg-acid/10 border border-acid text-acid p-4">
                        <p className="font-mono text-sm uppercase tracking-widest">You&apos;re on the list.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 bg-deep border border-white/20 text-white font-mono text-sm px-4 py-3 outline-none focus:border-acid transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="btn-primary"
                        >
                            {status === 'loading' ? '...' : 'Subscribe'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
