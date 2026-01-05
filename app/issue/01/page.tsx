import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArticleCard } from '@/components/magazine/ArticleCard';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';
import { articles, issueData, contributors, sponsors } from '@/content/data/issue-01';

export const metadata: Metadata = {
  title: 'Issue 01',
  description: 'Dust on Crust Issue 01 - The inaugural issue of the Pacific Northwest ski magazine.',
};

export default function Issue01Page() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white pt-20">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeInOnScroll>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
                    {issueData.subtitle}
                  </p>
                  <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-tighter mb-6">
                    {issueData.title}
                  </h1>
                  <p className="font-body text-gray-400 mb-8">
                    The inaugural issue of our indie ski magazine. Content for the everyday skier.
                  </p>
                  <Link href="/about" className="btn-primary">
                    Read the Intro Letter
                  </Link>
                </div>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.1}>
                <div className="aspect-[3/4] bg-gradient-to-br from-surface via-deep to-surface border border-white/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="font-headline text-4xl text-white/80 block mb-2">DUST</span>
                    <span className="font-mono text-acid text-sm mb-2 block">on</span>
                    <span className="font-headline text-4xl text-white/80 block mb-6">CRUST</span>
                    <div className="border border-acid/50 px-4 py-2 bg-black/50 inline-block">
                      <span className="font-mono text-xs text-acid uppercase tracking-widest">Issue 01</span>
                    </div>
                  </div>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-tighter text-white mb-8 text-center">
                In This Issue
              </h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, index) => (
                <FadeInOnScroll key={article.slug} delay={index * 0.05}>
                  <ArticleCard
                    title={article.title}
                    author={article.author}
                    excerpt={article.excerpt}
                    slug={article.slug}
                    category={article.category}
                    articleNumber={index + 1}
                  />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <h2 className="font-headline text-2xl uppercase tracking-tighter text-white mb-8">
                Contributors
              </h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {contributors.map((contributor, index) => (
                <FadeInOnScroll key={contributor.name} delay={index * 0.03}>
                  <div className="p-3">
                    <h3 className="font-headline text-lg uppercase tracking-wide text-white">
                      {contributor.name}
                    </h3>
                    <p className="font-mono text-xs text-acid uppercase tracking-widest">
                      {contributor.role}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
                Issue 01 Sponsors
              </p>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.1}>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full sm:w-auto border border-white/10 p-6 bg-surface/50 hover:border-acid/50 transition-colors"
                  >
                    {/* Logo placeholder */}
                    <div className="w-full sm:w-32 h-16 bg-gradient-to-br from-surface to-deep border border-white/5 mb-4 flex items-center justify-center mx-auto">
                      <span className="font-mono text-[8px] text-white/30 uppercase tracking-wider">
                        [Logo]
                      </span>
                    </div>
                    <h3 className="font-headline text-xl uppercase tracking-wide text-white group-hover:text-acid transition-colors text-center">
                      {sponsor.name}
                    </h3>
                    {sponsor.tagline && (
                      <p className="font-mono text-[10px] text-gray-500 uppercase tracking-wider mt-1 text-center">
                        {sponsor.tagline}
                      </p>
                    )}
                  </a>
                ))}
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
