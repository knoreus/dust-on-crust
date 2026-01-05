import { Metadata } from 'next';
import { ArticleLayout } from '@/components/magazine/ArticleLayout';
import { PullQuote } from '@/components/magazine/PullQuote';
import { ImageSpread } from '@/components/magazine/ImageSpread';

export const metadata: Metadata = {
  title: 'STEEV',
  description: 'Kids. They used these little fuckers all manner of excuses. A personal essay by Bryan Schultz about finding escape through skiing.',
};

export default function SteevPage() {
  return (
    <ArticleLayout
      title="STEEV"
      subtitle="Kids. They used these little fuckers all manner of excuses"
      author="Bryan Schultz"
      authorBio="Bryan is a ski shop boot-fitter based in the Pacific Northwest who spends his days lacing up skiers and his free time chasing turns."
      heroImage="/images/magazine/page_4.jpg"
      heroImageAlt="Illustration for STEEV article"
    >
      <p>
        I had been watching the rain fall through my office window for hours. If that wasn&apos;t
        depressing enough, I was also watching my coworkers come and go, not for work purposes.
        No, these folks were gaming the system. They had it made. They possessed an undeniable
        excuse that ethically, morally, and professionally could not be refuted: they had kids.
      </p>

      <p>
        You heard correctly, kids. They used these little fuckers all manner of excuses. The kid
        was sick, the kid had a soccer match, the kid was in trouble... it didn&apos;t matter what
        was going on with the kid, it was a free pass to arrive at the office late, leave early,
        and on some occasions not show up at all. It burned me up. And yet, I was jealous. Just
        sat to think of what I would do with that kind of power.
      </p>

      <p>
        And think I did.
      </p>

      <PullQuote
        quote="Not everyone is chasing first descents in Alaska or pillow lines in Japan. Some of us just want to afford a decent run and rip turns with our friends behind the scenes."
        attribution="Dust on Crust"
        variant="left"
      />

      <p>
        The rain kept falling. It was miserable. After several years of living in the dreariest
        city on earth, I came to realize that when it rains in Seattle, for better or worse, it
        usually snows in the mountains. And there are several mountains not far away. The closest
        resort, Snoqualmie, was a 50-minute drive. The farthest local spot, Mt. Baker, was a mere
        two-and-a-half-hour jaunt. The other two within range, Crystal Mountain and Stevens Pass,
        were an hour and a half away. My mental health depended on these mountains, because people
        can only eat the constant bombardment of grey and wet.
      </p>

      <p>
        I needed a free pass to save myself and had come up with an idea. The only question was, how
        was I going to pull it off? One more glance out at the rain and I knew I had to give it a
        shot. Speaking of shots, first I needed a little shot of whiskey from the bottle I kept in
        the desk drawer. For confidence.
      </p>

      <p>
        I took another swig to make sure the dosage was fair. I slipped the bottle back into the
        drawer. I charged down the hall to the boss&apos;s office.
      </p>

      <p>
        &ldquo;Hey?&rdquo; I nearly shouted.
      </p>

      <p>
        The boss didn&apos;t bother to look up from his computer screen. In fact, he didn&apos;t bother
        to respond at all.
      </p>

      <p>
        &ldquo;Hey,&rdquo; I said again, this time a little quieter and less aggressively. I was probably
        better off with courtesy than bullheaded demands. &ldquo;I need to leave early today.&rdquo;
      </p>

      <p>
        &ldquo;Already? It&apos;s not even noon.&rdquo; He still kept his eyes on his computer screen.
      </p>

      <p>
        &ldquo;Yeah, I know. It&apos;s just that, well... I mean...&rdquo;
      </p>

      <p>
        I realized I had never done this before, and I had no clue what the correct words were to
        sound authentic. &ldquo;It&apos;s my kid,&rdquo; I finally shouted.
      </p>

      <p>
        The boss sounded surprised. &ldquo;I was surprised as well. It was news to me too.&rdquo;
      </p>

      <p>
        &ldquo;You have a kid?&rdquo; The boss sounded surprised.
      </p>

      <p>
        &ldquo;You never mentioned that before. What&apos;s your kid&apos;s name? How old are they? What
        school do they go to?&rdquo; He was looking at me with a healthy portion of skepticism.
      </p>

      <ImageSpread
        src="/images/magazine/page_4.jpg"
        alt="Illustration showing modern skiing culture clash with technology"
        caption="Illustrations by Sam Au"
        credit="Sam Au"
      />

      <p>
        My head spun. Just as the name left my lips, I realized I had gleaned this name from a movie
        or a book or just general absorption, a lie works best when wrapped in almost unbelievable
        detail. &ldquo;But he spells it S-T-E-E-V.&rdquo;
      </p>

      <p>
        &ldquo;Hm,&rdquo; he said. &ldquo;Tell me, what&apos;s Steev&apos;s story?&rdquo;
      </p>

      <p>
        &ldquo;He got held back.&rdquo;
      </p>

      <p>
        The boss nodded, as if somehow that made sense.
      </p>

      <p>
        &ldquo;Where is Steev now?&rdquo;
      </p>

      <p>
        &ldquo;He&apos;s at school.&rdquo;
      </p>

      <p>
        &ldquo;But today is a school holiday.&rdquo;
      </p>

      <p>
        Crap. Then I really need to go,&rdquo; He mulled over the situation and came back with his
        final query.
      </p>

      <PullQuote
        quote="I'm a single guy who drinks too much and pisses off to the mountains every chance he gets, and this is not a secret to anyone."
        variant="right"
      />

      <p>
        &ldquo;Who&apos;s Steev&apos;s mom?&rdquo;
      </p>

      <p>
        &ldquo;What&apos;s the thing?&rdquo; I said, buying time. Tom wasn&apos;t realizing what I was saying.
        I presented an old clich&eacute;: &ldquo;We aren&apos;t really sure.&rdquo;
      </p>

      <p>
        The boss laughed. Maybe it was more of a chuckle. Perhaps it was the effect, or maybe it
        was the creativity that did it, but the boss returned to his computer.
      </p>

      <p>
        &ldquo;Have fun,&rdquo; he told me.
      </p>

      <p>
        I left the office that morning and headed to Snoqualmie. It&apos;s shit, but it had snow and
        the lines for the lift were short because the mountain was closed for it being a school day
        or something. I spent the afternoon ripping turns, dreaming of the possibilities that were
        now at hand. I&apos;d fucked-up shit that kids are famous for. I arrived home late over a
        powerful IPA. I wished there was more to tell my story, but all I found in the bar were
        empty stools and one disinterested bartender. She probably wondered why I was hanging out
        at the lodge on a Monday evening, and had that &ldquo;I want to get out of here&rdquo; look on
        her face.
      </p>

      <p>
        The next day when I got to work, pictures printed from the internet of a kid that somewhat
        resembled me, papered my office walls. Some pictures showed Internet Steev skiing, skiing
        quite well. I had no recollection. But over the next few months people would ask &ldquo;How&apos;s
        Steev?&rdquo; and I would have ready-made stories about Steev&apos;s trips into the mountains,
        becoming friends. Steev would have his own Facebook page, befriended by my friends,
        colleagues, and family. To this day, some fifteen years later, I still get texts wishing
        Steev happy birthday every June 6th. I had the idea not long after that we should all push
        for that holiday&apos;s off to get our asses up to the mountains, and of course to celebrate
        Steev.
      </p>
    </ArticleLayout>
  );
}
