'use client';

import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 py-12">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand */}
                <div>
                    <Link href="/" className="inline-block mb-4">
                        <h2 className="font-headline text-2xl uppercase tracking-tighter hover:text-acid transition-colors">
                            Dust <span className="text-acid">on</span> Crust
                        </h2>
                    </Link>
                    <p className="font-body text-sm text-gray-500 mb-4">
                        An indie ski magazine for the everyday skier.
                        <br />Est. 2024 // PNW
                    </p>
                </div>

                {/* Directory - removed gallery */}
                <div>
                    <h3 className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Directory</h3>
                    <ul className="space-y-2 font-headline text-sm uppercase tracking-wide">
                        {['Issue 01', 'About', 'Submit', 'Merch', 'Events'].map((item) => (
                            <li key={item}>
                                <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-acid transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-mono text-xs text-acid uppercase tracking-widest mb-4">Contact</h3>
                    <ul className="space-y-2 font-mono text-xs text-gray-500">
                        <li>hello@dustoncrust.com</li>
                        <li>submit@dustoncrust.com</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                    &copy; 2024 Dust on Crust Mag
                </p>
                <div className="flex items-center gap-6 opacity-50">
                    <span className="font-headline text-sm">ON3P</span>
                    <span className="font-headline text-sm">SOVYRN</span>
                </div>
            </div>
        </footer>
    );
}
