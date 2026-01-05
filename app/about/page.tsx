import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';
import { contributors } from '@/content/data/issue-01';

export const metadata: Metadata = {
  title: 'About',
  description: 'Welcome to Dust on Crust - an indie ski magazine for the everyday skier.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white min-h-screen pt-24">
        {/* Hero */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInOnScroll>
              <span className="font-mono text-xs text-acid uppercase tracking-[0.3em] mb-4 block">
                Intro Letter
              </span>
              <h1 className="font-headline text-5xl md:text-7xl uppercase tracking-tighter mb-8">
                Welcome to Issue One
              </h1>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-4 bg-surface">
          <div className="max-w-2xl mx-auto">
            <FadeInOnScroll>
              <div className="prose-magazine">
                <p>
                  Welcome to issue one of Dust on Crust magazine. We&apos;re stoked you&apos;re here.
                </p>

                <p>
                  In a world overwrought with $20,000 ski vacations and poser adventurers begging
                  for love in the &ldquo;please-look-at-me&rdquo; digital culture, we&apos;re here to craft something
                  a little different: content for the everyday skier. The shop rats, the weekend warriors,
                  the midweek passholders.
                </p>

                <p>
                  Not everyone is chasing first descents in Alaska or pillow lines in Japan. Some of us
                  just want to afford a decent run and rip turns with our friends. No FKTs, no Strava.
                </p>

                <p>
                  And who are we? We&apos;re two ski shop boot-fitters located in the Pacific Northwest,
                  grinding on the front lines of the retail-facing snow industry.
                </p>

                <p>
                  We truly hope you like it and would love to hear from you. We&apos;re always looking
                  for creative input.
                </p>

                <div className="mt-8 not-prose">
                  <Link href="/submit" className="btn-secondary text-sm">
                    Submit Your Work &rarr;
                  </Link>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/10 text-center">
                <p className="font-headline text-2xl uppercase text-white">
                  Dust <span className="text-acid italic">on</span> Crust
                </p>
                <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-2">
                  Thanks for reading
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Contributors */}
        <section className="py-16 md:py-20 px-4 mt-8 md:mt-0">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-tighter text-white mb-8 text-center">
                Contributors
              </h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {contributors.map((contributor, index) => (
                <FadeInOnScroll key={contributor.name} delay={index * 0.05}>
                  <div className="text-center border border-white/10 p-4 bg-surface/50">
                    <p className="font-mono text-xs text-acid uppercase tracking-widest mb-2">
                      {contributor.role}
                    </p>
                    <h3 className="font-headline text-lg uppercase tracking-wide text-white">
                      {contributor.name}
                    </h3>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
