import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Merch',
  description: 'Dust on Crust merchandise - coming soon.',
};

export default function MerchPage() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="font-mono text-xs text-acid uppercase tracking-[0.3em] mb-4 block">
            Merch
          </span>
          <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-tighter mb-8">
            Coming Soon
          </h1>
          <p className="font-body text-gray-400 max-w-md mx-auto mb-12">
            Original artwork tees and gear. Check back soon or sign up for the newsletter to get notified.
          </p>

          {/* Placeholder grid for future merch */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-surface border border-white/10 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/20 uppercase tracking-widest">
                  [Product {i}]
                </span>
              </div>
            ))}
          </div>

          <Link href="/" className="btn-secondary">
            &larr; Back Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
