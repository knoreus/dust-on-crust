import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '3 Things I Hate About Skiing This Week - T. Leaf',
  description: 'Original artwork by T. Leaf - coming soon.',
};

export default function TLeafPage() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Link href="/issue/01" className="inline-flex items-center gap-2 font-mono text-xs text-acid uppercase tracking-widest mb-8 hover:text-white transition-colors">
              <span>&larr;</span> Back to Issue 01
            </Link>

            <span className="font-mono text-xs text-neon-purple uppercase tracking-[0.3em] mb-4 block">
              Art Feature
            </span>
            <h1 className="font-headline text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              3 Things I Hate<br />About Skiing<br />This Week
            </h1>
            <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
              By T. Leaf
            </p>
          </div>

          {/* Placeholder for artwork */}
          <div className="aspect-[4/3] bg-surface border border-white/10 flex items-center justify-center mb-12">
            <div className="text-center">
              <p className="font-mono text-sm text-white/30 uppercase tracking-widest mb-2">
                [Original Artwork Coming Soon]
              </p>
              <p className="font-body text-white/20 italic">
                Check back for T. Leaf&apos;s illustrations
              </p>
            </div>
          </div>

          {/* Content descriptions */}
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="border-l-2 border-neon-purple pl-6">
              <h2 className="font-headline text-2xl uppercase tracking-wide text-white mb-3">
                1. Boots
              </h2>
              <p className="font-body text-gray-400 leading-relaxed">
                Every skier knows the particular agony of boot fitting. Too tight and your feet go numb. Too loose and you&apos;re swimming in plastic.
              </p>
            </div>

            <div className="border-l-2 border-neon-purple pl-6">
              <h2 className="font-headline text-2xl uppercase tracking-wide text-white mb-3">
                2. IG
              </h2>
              <p className="font-body text-gray-400 leading-relaxed">
                Instagram has turned every chairlift into a photo op and every powder day into content. &ldquo;Did you get that?&rdquo;
              </p>
            </div>

            <div className="border-l-2 border-acid pl-6">
              <h2 className="font-headline text-2xl uppercase tracking-wide text-white mb-3">
                3. Kooks
              </h2>
              <p className="font-body text-gray-400 leading-relaxed">
                We&apos;ve all seen them. The guy in jeans. The person who stops in the middle of a run. The lift line snake.
              </p>
            </div>

            <div className="text-center pt-8 border-t border-white/10">
              <p className="font-mono text-lg text-neon-purple uppercase tracking-wider">
                Thanks 4 listening 2 my presentation.
              </p>
              <p className="font-headline text-xl uppercase tracking-wide mt-3 text-acid">
                ♥ T. Leaf
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
