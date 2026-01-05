import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FadeInOnScroll } from '@/components/effects/FadeInOnScroll';

export const metadata: Metadata = {
  title: 'Astrology Forecast',
  description: 'A ski forecast for those who know the snow will come... eventually. Zodiac predictions for every skier.',
};

const zodiacSigns = [
  {
    sign: 'Aries',
    dates: 'March 21 - April 19',
    symbol: '♈',
    forecast: `You're already checking webcams in October, refreshing obsessively while everyone else is still thinking about fall foliage. This season, your impulsive energy will pay off — that random Tuesday when you call in "sick" will turn out to be the best powder day of the year. Just try not to burn all your PTO by January. The stars suggest investing in a good pair of goggles; you'll need them for the early morning laps you'll be crushing while everyone else is still in the lodge drinking coffee.`,
  },
  {
    sign: 'Taurus',
    dates: 'April 20 - May 20',
    symbol: '♉',
    forecast: `The mountains won't respond faster if you refresh the radar harder, Taurus. Your stubborn nature means you'll still show up on 3-inch days when everyone else is staying home, and honestly? You'll probably have a great time. This season, your patience will be rewarded with a legendary spring day — the kind where corn snow and sunshine make all those icy January mornings worth it. The stars recommend: stop talking about that one run you did five years ago. We've heard it.`,
  },
  {
    sign: 'Gemini',
    dates: 'May 21 - June 20',
    symbol: '♊',
    forecast: `Your dual nature means you'll spend half the season in the terrain park and half in the trees, never quite committing to either identity. This is fine. The stars suggest leaning into your social butterfly tendencies — some of your best runs this year will happen when you randomly join that group in the lift line. Warning: your tendency to chat on chairlifts may result in accidentally taking an extra lap when you meant to head in. Embrace it.`,
  },
  {
    sign: 'Cancer',
    dates: 'June 21 - July 22',
    symbol: '♋',
    forecast: `You've already got three Craigslist alerts set up for vintage ski gear, and that's exactly the energy you should maintain. This season, trust your emotional intuition about conditions — when something feels off about that line, it probably is. The stars foresee a day where you'll end up in tears in the parking lot, overwhelmed by the beauty of a sunset over the mountains. This is normal. You might also cry about your boot fit. Also normal.`,
  },
  {
    sign: 'Leo',
    dates: 'July 23 - August 22',
    symbol: '♌',
    forecast: `Yes, we all saw your Instagram story. And the one before that. And the one before that. Your natural flair for the dramatic will serve you well this season when you somehow pull off that line everyone was too scared to drop. The stars suggest occasional humility — let someone else lead the way once in a while. You might learn something. Also, that jacket you think is "bold"? It's perfect. Don't let anyone tell you otherwise.`,
  },
  {
    sign: 'Virgo',
    dates: 'August 23 - September 22',
    symbol: '♍',
    forecast: `Your edge tuning is already dialed, your boots are perfectly fitted, and you've got a spreadsheet tracking every day on snow. The stars appreciate your attention to detail but suggest loosening up a bit. Not every run needs to be analyzed. This season, try picking a line without consulting the map. Your meticulous nature will come in handy when your friends inevitably ask you to fix their bindings. Charge them in beer.`,
  },
  {
    sign: 'Libra',
    dates: 'September 23 - October 22',
    symbol: '♎',
    forecast: `"Should we go left or right?" You'll ask this question approximately 47 times this season, and honestly, either choice will be fine. Your desire for harmony means you're the one keeping the friend group together when everyone has different ability levels. The stars suggest occasionally being selfish — ditch the crew and go hit that line you've been eyeing. They'll survive without you for one run. Balance, after all, is your thing.`,
  },
  {
    sign: 'Scorpio',
    dates: 'October 23 - November 21',
    symbol: '♏',
    forecast: `You've been manifesting a La Niña pattern since August, and while the stars can't confirm your powers of intention, they respect the commitment. Your intensity will serve you well on the steep days, but maybe dial it back when giving directions to tourists. This season, you'll have a transcendent moment alone in the trees — the kind where time stops and everything makes sense. Tell no one. It's your secret line now.`,
  },
  {
    sign: 'Sagittarius',
    dates: 'November 22 - December 21',
    symbol: '♐',
    forecast: `By December you'll have already planned trips to three different mountains, bought a van you can't really afford, and convinced yourself that Japan is "totally doable" this season. The stars applaud your adventurous spirit but remind you that your local hill needs love too. Some of your best days this year will happen close to home. That said, that spontaneous road trip you're thinking about? Do it. You won't regret the miles.`,
  },
  {
    sign: 'Capricorn',
    dates: 'December 22 - January 19',
    symbol: '♑',
    forecast: `You've already mapped out which days you can ski around work meetings, and you're maximizing your season pass like it's a stock portfolio. The stars respect the grind but remind you that skiing is supposed to be fun. This season, let yourself sleep in once instead of chasing first chair. Your reputation as "the reliable one" will still be intact. Also, that expensive piece of gear you've been eyeing? You deserve it. Consider it an investment in joy.`,
  },
  {
    sign: 'Aquarius',
    dates: 'January 20 - February 18',
    symbol: '♒',
    forecast: `While everyone else is following the crowds, you'll be exploring that weird side zone that doesn't show up on the map. Your independent streak will lead to some genuinely excellent discoveries this season. The stars suggest sharing at least one of your secret spots with a trusted friend — community matters, even for iconoclasts. Your unconventional approach to ski fashion will finally be appreciated when everyone realizes you were ahead of your time.`,
  },
  {
    sign: 'Pisces',
    dates: 'February 19 - March 20',
    symbol: '♓',
    forecast: `You'll probably cry at some point this season. Might be the sunset. Might be a particularly beautiful run. Might be because your feet hurt and you're cold and skiing is hard. All of these tears are valid. Your intuitive nature means you can read snow conditions like poetry. The stars suggest trusting your gut when deciding whether to hike for that last run — sometimes the mountain is telling you it's time for beers. Listen to her.`,
  },
];

export default function AstrologyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-ink overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-mauve/30 via-transparent to-teal/30" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <FadeInOnScroll>
              <div className="text-6xl mb-6">&#9733;</div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">
                Issue 01 Feature
              </p>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide text-cream-100 mb-6">
                Astrology Forecast
              </h1>
              <p className="font-body text-xl italic text-cream-400 max-w-2xl mx-auto">
                A forecast for those who know the snow will come... eventually
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 px-4 bg-cream-200">
          <div className="max-w-2xl mx-auto text-center">
            <FadeInOnScroll>
              <p className="font-body text-ink-light">
                What do the stars have in store for your ski season? Whether you believe in cosmic
                influence or just need something to read on the chairlift, we&apos;ve consulted the
                heavens (and our own experiences) to bring you these totally scientific predictions.
              </p>
            </FadeInOnScroll>
          </div>
        </section>

        {/* Zodiac Grid */}
        <section className="py-16 px-4 bg-cream-300">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {zodiacSigns.map((zodiac, index) => (
                <FadeInOnScroll key={zodiac.sign} delay={index * 0.05}>
                  <article className="card bg-cream-100">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl text-mauve">{zodiac.symbol}</span>
                      <div>
                        <h2 className="font-headline text-2xl uppercase tracking-wide text-ink">
                          {zodiac.sign}
                        </h2>
                        <p className="font-mono text-xs text-ink-muted uppercase tracking-widest">
                          {zodiac.dates}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-ink-light leading-relaxed">
                      {zodiac.forecast}
                    </p>
                  </article>
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
