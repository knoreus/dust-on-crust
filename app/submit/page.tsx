import { Metadata } from 'next';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Submit Your Work',
  description: 'Submission guidelines for Dust on Crust magazine. We\'re always looking for creative input - written, drawn, or photographed.',
};

const guidelines = [
  {
    category: 'Writing',
    icon: '&#9998;',
    items: [
      'Personal essays, think pieces, humor, fiction',
      'Ski culture, not just ski trip reports',
      '800-2000 words preferred',
      'Voice matters more than polish',
    ],
  },
  {
    category: 'Photography',
    icon: '&#128247;',
    items: [
      'Action shots, landscapes, lifestyle',
      'High resolution (300dpi minimum)',
      'Original work only',
      'Include captions and context',
    ],
  },
  {
    category: 'Art & Illustration',
    icon: '&#127912;',
    items: [
      'Original artwork in any medium',
      'Digital or traditional',
      'Ski-adjacent themes welcome',
      'Weird is good',
    ],
  },
  {
    category: 'Comics & Zines',
    icon: '&#128218;',
    items: [
      'Short-form comics',
      'Zine-style layouts',
      'Black and white or color',
      'Tell us a story',
    ],
  },
];

export default function SubmitPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-ink">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInOnScroll>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-cream-100 mb-6">
                Submit Your Work
              </h1>
              <p className="font-body text-xl text-cream-400 max-w-2xl mx-auto">
                We&apos;re always looking for creative input, be it written, drawn, or photographed.
                If you have something to say or show, we&apos;d love to see it.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Guidelines */}
        <section className="py-16 px-4 bg-cream-300">
          <div className="max-w-5xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-ink mb-12 text-center">
                What We&apos;re Looking For
              </h2>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {guidelines.map((guide, index) => (
                <FadeInOnScroll key={guide.category} delay={index * 0.1}>
                  <div className="card bg-cream-100">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-3xl"
                        dangerouslySetInnerHTML={{ __html: guide.icon }}
                      />
                      <h3 className="font-headline text-xl uppercase tracking-wide text-ink">
                        {guide.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {guide.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-teal mt-1.5">&#8226;</span>
                          <span className="font-body text-ink-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* What We Don't Want */}
        <section className="py-16 px-4 bg-cream-200">
          <div className="max-w-3xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-2xl uppercase tracking-wide text-ink mb-6 text-center">
                Please Don&apos;t Send
              </h2>
              <div className="card bg-cream-100">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-mauve">&#10005;</span>
                    <span className="font-body text-ink-light">
                      Trip reports that read like &ldquo;we skied this, then we skied that&rdquo;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mauve">&#10005;</span>
                    <span className="font-body text-ink-light">
                      Gear reviews (unless they&apos;re actually interesting)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mauve">&#10005;</span>
                    <span className="font-body text-ink-light">
                      Content that&apos;s been published elsewhere
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mauve">&#10005;</span>
                    <span className="font-body text-ink-light">
                      Anything AI-generated
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-mauve">&#10005;</span>
                    <span className="font-body text-ink-light">
                      Work that isn&apos;t yours
                    </span>
                  </li>
                </ul>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* How to Submit */}
        <section className="py-16 px-4 bg-cream-300">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-ink mb-6">
                How to Submit
              </h2>
              <div className="space-y-6 text-left mb-8">
                <div className="flex gap-4">
                  <span className="font-headline text-2xl text-teal">1.</span>
                  <div>
                    <h3 className="font-headline text-lg uppercase tracking-wide text-ink mb-1">
                      Gather Your Work
                    </h3>
                    <p className="font-body text-ink-light">
                      Put together your best stuff. Quality over quantity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-headline text-2xl text-teal">2.</span>
                  <div>
                    <h3 className="font-headline text-lg uppercase tracking-wide text-ink mb-1">
                      Write a Brief Intro
                    </h3>
                    <p className="font-body text-ink-light">
                      Tell us who you are and what you&apos;re sending. Keep it short.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="font-headline text-2xl text-teal">3.</span>
                  <div>
                    <h3 className="font-headline text-lg uppercase tracking-wide text-ink mb-1">
                      Send It Over
                    </h3>
                    <p className="font-body text-ink-light">
                      Email us with your work attached or linked (Google Drive, Dropbox, etc.).
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:info@dustoncrustmag.com?subject=Submission"
                  className="btn-primary inline-block"
                >
                  Submit via Email
                </a>
                <p className="font-mono text-sm text-ink-muted">
                  info@dustoncrustmag.com
                </p>
              </div>
            </FadeInOnScroll>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-16 px-4 bg-cream-200">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInOnScroll>
              <h2 className="font-headline text-2xl uppercase tracking-wide text-ink mb-6">
                What Happens Next
              </h2>
              <p className="font-body text-ink-light mb-4">
                We read everything that comes in. If we&apos;re interested, we&apos;ll reach out within
                a few weeks. If you don&apos;t hear back, it means we&apos;re passing this time &mdash;
                but please try again with your next piece.
              </p>
              <p className="font-body text-ink-light">
                We can&apos;t pay much (we&apos;re two boot-fitters running a zine), but we&apos;ll credit
                you properly, send you copies, and make sure your work is seen by the community.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Reference Image */}
        <section className="relative h-[40vh] min-h-[300px]">
          <Image
            src="/images/magazine/submission_guidelines.jpg"
            alt="Submission guidelines from the magazine"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-headline text-3xl md:text-4xl uppercase tracking-wide text-cream-100 text-center px-4">
              We Want to Hear from You
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
