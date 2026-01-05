import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Events - Noise Ordinance',
  description: 'Noise Ordinance - A collaboration with FOLKRM Film Festival. Music and ski films in Hood River and Portland.',
};

const films = [
  'Lines',
  'Form',
  'Sierra to Baker',
  'That Wind Still Blows',
];

const music = [
  { name: 'Jordan Goldman Quartet', type: 'Live Music' },
  { name: 'Chima the Stubborn', type: 'Live Music' },
  { name: 'Trinity Gang', type: 'Live Music' },
];

const events = [
  { location: 'Hood River', date: 'November 11', venue: 'TBA' },
  { location: 'Portland', date: 'November 12', venue: 'TBA' },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="bg-deep text-white pt-20">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Digital poster art */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-deep to-neon-purple/5" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Decorative elements */}
            <div className="absolute top-[10%] left-[5%] w-80 h-80 rounded-full bg-yellow-500/10 blur-[120px]" />
            <div className="absolute bottom-[20%] right-[10%] w-64 h-64 rounded-full bg-neon-purple/10 blur-[100px]" />

            {/* Film reel decorations */}
            <div className="absolute top-[20%] right-[15%] w-32 h-32 border-4 border-white/5 rounded-full" />
            <div className="absolute top-[22%] right-[17%] w-24 h-24 border-2 border-yellow-500/10 rounded-full" />
            <div className="absolute bottom-[30%] left-[10%] w-20 h-20 border-2 border-white/5 rounded-full" />

            {/* Sound wave lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"
                style={{
                  height: `${20 + Math.random() * 30}%`,
                  top: '40%',
                  marginLeft: `${(i - 4) * 30}px`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center px-4 py-20">
            <FadeInOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-yellow-500 mb-4">
                A Collaboration with FOLKRM Film Festival
              </p>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-white mb-6 glitch-text" data-text="Noise Ordinance">
                Noise Ordinance
              </h1>
              <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Experience ski films how they were meant to be viewed &mdash; with live music,
                good people, and proper sound.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-white mb-8 text-center">
                Dates & Locations
              </h2>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <FadeInOnScroll key={event.location} delay={index * 0.1}>
                  <div className="bg-surface border border-white/10 p-8 text-center hover:border-yellow-500/30 transition-colors">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-yellow-500 mb-2">
                      {event.date}
                    </p>
                    <h3 className="font-headline text-4xl uppercase tracking-wide text-white mb-2">
                      {event.location}
                    </h3>
                    <p className="font-body text-gray-400">
                      Venue TBA
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Films */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-white mb-8 text-center">
                Films
              </h2>
            </FadeInOnScroll>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {films.map((film, index) => (
                <FadeInOnScroll key={film} delay={index * 0.1}>
                  <div className="p-6 border border-white/10 text-center hover:border-acid/30 transition-colors bg-surface/50">
                    <h3 className="font-headline text-lg uppercase tracking-wide text-white">
                      {film}
                    </h3>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>

            <FadeInOnScroll delay={0.4}>
              <p className="font-body italic text-gray-400 text-center mt-8 max-w-2xl mx-auto border-l-4 border-neon-purple pl-6">
                &ldquo;As I&apos;ve focused more on creating ski films that carry relevance for people outside
                of the ski world, I&apos;ve also dreamed of creating a viewing experience for people that does
                the same. NOISE ORDINANCE is my offering.&rdquo;
              </p>
              <p className="font-mono text-xs text-gray-400 uppercase tracking-widest text-center mt-4">
                &mdash; Filmmaker: Mallory Duncan
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Music */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <FadeInOnScroll>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-white mb-8 text-center">
                Live Music
              </h2>
            </FadeInOnScroll>

            <div className="grid md:grid-cols-3 gap-6">
              {music.map((act, index) => (
                <FadeInOnScroll key={act.name} delay={index * 0.1}>
                  <div className="bg-surface border border-white/10 p-6 text-center hover:border-neon-purple/30 transition-colors">
                    <div className="text-3xl mb-4">&#127926;</div>
                    <h3 className="font-headline text-xl uppercase tracking-wide text-white">
                      {act.name}
                    </h3>
                    <p className="font-mono text-xs text-neon-purple uppercase tracking-widest mt-2">
                      {act.type}
                    </p>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* About FOLKRM */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center">
            <FadeInOnScroll>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">
                In Collaboration With
              </p>
              <h2 className="font-headline text-3xl uppercase tracking-wide text-white mb-6">
                FOLKRM Film Festival
              </h2>
              <p className="font-body text-gray-400 mb-8">
                FOLKRM Film Festival celebrates independent ski filmmaking that pushes boundaries
                and tells authentic stories. Their synthesis of music and film produces a counterpoint
                to the typical ski movie premiere, offering immersive experiences with live instrumentation
                that can only be viewed at these intimate gatherings.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Digital Poster Art */}
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-2xl mx-auto">
            <FadeInOnScroll>
              <div className="relative aspect-[3/4] overflow-hidden border-2 border-white/10">
                {/* Digital poster design */}
                <div className="absolute inset-0 bg-gradient-to-br from-deep via-surface to-deep" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(234,179,8,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Sound wave visualization */}
                <div className="absolute inset-x-0 top-1/3 h-32 flex items-center justify-center gap-2">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-yellow-500/50 to-neon-purple/50 rounded-full"
                      style={{ height: `${20 + Math.sin(i * 0.5) * 60 + Math.random() * 20}%` }}
                    />
                  ))}
                </div>

                {/* Text content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <span className="font-mono text-xs text-yellow-500 uppercase tracking-widest mb-4">FOLKRM Presents</span>
                  <span className="font-headline text-5xl md:text-6xl text-white text-center leading-[0.9] mb-2">NOISE</span>
                  <span className="font-headline text-5xl md:text-6xl text-white text-center leading-[0.9]">ORDINANCE</span>
                  <div className="mt-8 flex gap-8">
                    <div className="text-center">
                      <span className="font-mono text-xs text-gray-400">Hood River</span>
                      <span className="block font-headline text-xl text-white">11.11</span>
                    </div>
                    <div className="text-center">
                      <span className="font-mono text-xs text-gray-400">Portland</span>
                      <span className="block font-headline text-xl text-white">11.12</span>
                    </div>
                  </div>
                </div>

                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.15)_50%)] bg-[size:100%_4px] pointer-events-none" />
              </div>
            </FadeInOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
