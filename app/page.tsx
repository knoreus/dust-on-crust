import { CoverHero, ArticleCard, Newsletter } from '@/components/magazine';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';
import { articles } from '@/content/data/issue-01';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className="bg-deep text-white">
            <Header transparent />

            <CoverHero
                issueNumber="01"
                title="Dust on Crust"
                subtitle="For the Everyday Skier"
            />

            {/* Featured Articles */}
            <section id="content" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <FadeInOnScroll>
                        <div className="text-center mb-12">
                            <span className="font-mono text-xs text-acid uppercase tracking-[0.3em] mb-2 block">
                                Issue 01
                            </span>
                            <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter text-white mb-4">
                                In This Issue
                            </h2>
                            <p className="font-body text-gray-500 max-w-md mx-auto">
                                Stories and vibes for those who live the everyday ski life.
                            </p>
                        </div>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {articles.slice(0, 4).map((article, index) => (
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

                    <div className="text-center">
                        <Link href="/issue/01" className="btn-secondary">
                            View Full Issue &rarr;
                        </Link>
                    </div>
                </div>
            </section>

            {/* Manifesto */}
            <section className="py-20 px-4 bg-surface">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeInOnScroll>
                        <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tighter mb-6">
                            Against The Algorithm
                        </h2>
                        <p className="font-body text-lg text-gray-400 leading-relaxed mb-6">
                            In a world of $20,000 ski vacations and influencers begging for likes,
                            we&apos;re building something different. Content for the everyday skier.
                        </p>
                        <p className="font-body text-gray-500 border-l-2 border-acid pl-6 text-left max-w-md mx-auto">
                            The shop rats, the weekend warriors, the midweek passholders.
                        </p>
                    </FadeInOnScroll>
                </div>
            </section>

            {/* Directory - removed gallery */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <FadeInOnScroll>
                        <h2 className="font-headline text-3xl uppercase tracking-tighter text-white mb-8 text-center">
                            Directory
                        </h2>
                    </FadeInOnScroll>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            { href: '/astrology', title: 'Astrology', desc: 'Cosmic snow forecasts', icon: '★' },
                            { href: '/events', title: 'Events', desc: 'Noise Ordinance collab', icon: '⚡' },
                            { href: '/merch', title: 'Merch', desc: 'Coming soon', icon: '⬡' },
                        ].map((item, index) => (
                            <FadeInOnScroll key={item.href} delay={index * 0.05}>
                                <Link href={item.href} className="block group bg-surface border border-white/10 p-6 hover:border-acid/50 transition-colors text-center">
                                    <div className="text-3xl text-acid mb-3">{item.icon}</div>
                                    <h3 className="font-headline text-lg uppercase tracking-wide group-hover:text-acid transition-colors mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="font-mono text-xs text-gray-500 uppercase tracking-wider">
                                        {item.desc}
                                    </p>
                                </Link>
                            </FadeInOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <Newsletter />
            <Footer />
        </main>
    );
}
