import { Metadata } from 'next';
import { ArticleLayout } from '@/components/magazine/ArticleLayout';
import { PullQuote } from '@/components/magazine/PullQuote';
import { ImageSpread } from '@/components/magazine/ImageSpread';

export const metadata: Metadata = {
  title: 'Zen and the Art of Bailing',
  description: 'Bailing is truly part of the beauty of skiing. It gives you a story to tell and a reason to return.',
};

export default function ZenBailingPage() {
  return (
    <ArticleLayout
      title="Zen and the Art of Bailing"
      subtitle="Beginning is half the battle"
      author="Nate Molloy"
      authorBio="Nate Molloy is a backcountry skier and writer who believes the best stories come from the days that don't go as planned."
      heroImage="/images/magazine/page_10.jpg"
      heroImageAlt="Backcountry skiing landscape"
    >
      <p>
        Standing one hundred yards below the summit of Sky Pilot, dread and doubt were setting in.
        After eight hours and six thousand feet of vertical gain, the weather had turned. What
        started as a bluebird day was now a whiteout, and skiing the line we&apos;d come for would be
        suicidal. I&apos;d spent months planning this trip, and I&apos;m not going to lie &mdash; it sucked to
        think we might not finish.
      </p>

      <PullQuote
        quote="Bailing is truly part of the beauty of skiing. It gives you a story to tell and a reason to return."
        variant="center"
      />

      <p>
        Kyle and I exchanged a look. After several inches of new wind-loaded snow, the avalanche
        risk was significant. Our escape route was marginal at best. The smart move was obvious,
        even if it meant swallowing our pride and accepting that today wasn&apos;t our day.
      </p>

      <p>
        &ldquo;What do you think?&rdquo; Kyle asked, though we both already knew the answer.
      </p>

      <p>
        &ldquo;I think we should probably call it,&rdquo; I responded. Maybe if we looked at the summit
        concerns as just obstacles and the crux conditions as just variables, I&apos;d feel better
        about turning around. But I&apos;m not going. Maybe if we still had clear visibility, maybe
        if we hadn&apos;t taken enough trips to know better.
      </p>

      <ImageSpread
        src="/images/magazine/page10-11.jpg"
        alt="Backcountry skiing in mountain terrain"
        caption="Sometimes the mountain has other plans"
        credit="Jacob Dube"
      />

      <p>
        I forced a smile. Pushing higher just wasn&apos;t worth it.
      </p>

      <p>
        &ldquo;You know this just means we have to come back,&rdquo; Kyle smiled. He was right. Sometimes
        the work you put in just sets you up for another day. His shocking positivity snapped me
        out of my cynicism, just like something memorable about this trip after all. It wasn&apos;t
        the summit, and it wasn&apos;t going to be the descent. But the beauty of skiing is in the
        journey &mdash; the 5 AM alarms, the stale bars eaten while skinning, the conversations that
        happen when you&apos;re hours from the trailhead with nothing to do but move forward.
      </p>

      <p>
        &ldquo;You know this just means we have to come back,&rdquo; I asked. Kyle just smiled.
      </p>

      <p>
        It took us four hours to get down. We picked our way through variable snow, navigating
        around wind features and trying to maintain some semblance of rhythm on our beaten legs.
        It wasn&apos;t the glorious descent I&apos;d imagined during all those months of planning. But
        there was something satisfying about it nonetheless &mdash; the kind of satisfaction that
        comes from making good decisions, from reading conditions correctly, from prioritizing
        longevity over ego.
      </p>

      <PullQuote
        quote="Sometimes the work you put in just sets you up for another day."
        variant="left"
      />

      <p>
        In the car on the way home, we started planning our return trip. That&apos;s the thing about
        bailing &mdash; it&apos;s not really an ending. It&apos;s a bookmark. A promise to yourself and the
        mountain that you&apos;ll be back when conditions align.
      </p>

      <p>
        I&apos;ve bailed on plenty of objectives over the years. Some I&apos;ve gone back to complete.
        Others remain on the list, waiting for the right weather window, the right partners, the
        right alignment of circumstance and courage. Each one represents not a failure but an
        ongoing relationship with the mountains.
      </p>

      <p>
        There&apos;s a zen to accepting what the mountain gives you on any particular day. The summit
        will still be there. The line will still exist. But you only get one life, one body, one
        chance to do this right. Bailing isn&apos;t giving up &mdash; it&apos;s choosing to play the long game.
      </p>

      <p>
        In the end, we were down at the parking lot before dark. The mountain was still there above
        us, shrouded in clouds, holding onto its secrets for another day. We loaded up the car,
        cracked a couple of beers, and watched the clouds swirl around the peak we&apos;d almost reached.
      </p>

      <p>
        &ldquo;Same time next year?&rdquo; Kyle asked.
      </p>

      <p>
        I raised my beer in agreement. The mountain could wait. We weren&apos;t going anywhere.
      </p>
    </ArticleLayout>
  );
}
