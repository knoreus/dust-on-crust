import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Thank you to the sponsors and partners who make Dust on Crust possible.',
};

const partners = [
  {
    name: 'ON3P',
    tagline: 'I Want to Believe',
    description: `ON3P Skis has been handcrafting skis in Portland, Oregon since 2009. They're proof that you don't need to be a mega-corporation to build world-class skis. Every pair is designed, built, and tested by skiers who actually ski — what a concept. Their support of Dust on Crust represents the kind of community-first approach that makes the PNW ski scene special.`,
    established: 'Est. 2009',
    location: 'Portland, Oregon',
    url: 'https://on3pskis.com',
    accent: 'acid',
  },
  {
    name: 'SOVYRN',
    tagline: 'Outerwear Built Different',
    description: `SOVYRN makes gear for skiers who care more about function than flash. Their approach to design mirrors our own philosophy: make something good, make it last, and don't overcomplicate it. From layers to packs, their stuff is built by people who actually use it.`,
    accent: 'neon-blue',
  },
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white pt-20">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Digital background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-acid/5 via-deep to-neon-blue/5" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Floating orbs */}
            <div className="absolute top-[20%] right-[20%] w-48 h-48 rounded-full bg-acid/5 blur-[80px]" />
            <div className="absolute bottom-[30%] left-[15%] w-64 h-64 rounded-full bg-neon-blue/5 blur-[100px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
                Issue 01
              </p>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter text-white mb-6">
                Our Partners
              </h1>
              <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto">
                Thank you to the brands and people who believe in what we&apos;re doing.
                Their support makes this magazine possible.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Partners */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-5xl mx-auto space-y-24">
            {partners.map((partner, index) => (
              <FadeInOnScroll key={partner.name} delay={index * 0.1}>
                <article className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    {/* Digital logo/brand representation */}
                    <div className="relative aspect-video overflow-hidden bg-surface border border-white/10">
                      <div className={`absolute inset-0 bg-gradient-to-br ${
                        partner.accent === 'acid' ? 'from-acid/10 via-deep to-deep' : 'from-neon-blue/10 via-deep to-deep'
                      }`} />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:25px_25px]" />

                      {/* Brand display */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                        <span className={`font-headline text-4xl md:text-5xl uppercase tracking-wider ${
                          partner.accent === 'acid' ? 'text-acid' : 'text-neon-blue'
                        }`}>
                          {partner.name}
                        </span>
                        {partner.tagline && (
                          <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mt-4">
                            {partner.tagline}
                          </span>
                        )}
                      </div>

                      {/* Scanline overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none" />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    {partner.established && (
                      <p className={`font-mono text-xs uppercase tracking-[0.3em] mb-2 ${
                        partner.accent === 'acid' ? 'text-acid' : 'text-neon-blue'
                      }`}>
                        {partner.established}
                      </p>
                    )}
                    <h2 className="font-headline text-3xl md:text-4xl uppercase tracking-wide text-white mb-2">
                      {partner.name}
                    </h2>
                    {partner.tagline && (
                      <p className="font-body text-xl italic text-neon-purple mb-4">
                        {partner.tagline}
                      </p>
                    )}
                    {partner.location && (
                      <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">
                        {partner.location}
                      </p>
                    )}
                    <p className="font-body text-gray-400 mb-6">
                      {partner.description}
                    </p>
                    {partner.url && (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center gap-2"
                      >
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </article>
              </FadeInOnScroll>
            ))}
          </div>
        </section>

        {/* Become a Partner */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-white mb-6">
                Partner With Us
              </h2>
              <p className="font-body text-gray-400 mb-8">
                Dust on Crust is always looking for partners who share our values: authenticity,
                community, and a genuine love for skiing. We work with brands that make products
                we actually use and believe in. If that sounds like you, let&apos;s talk.
              </p>
              <a
                href="mailto:info@dustoncrustmag.com?subject=Partnership Inquiry"
                className="btn-primary inline-block"
              >
                Get in Touch
              </a>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Thank You */}
        <section className="py-12 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <p className="font-body text-xl italic text-gray-400 border-l-4 border-acid pl-6 text-left max-w-2xl mx-auto">
                &ldquo;A huge thank you to ON3P Skis for their generous sponsorship of this first issue.&rdquo;
              </p>
              <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mt-4">
                &mdash; From the Intro Letter
              </p>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
