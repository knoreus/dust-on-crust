import { Metadata } from 'next';
import { ArticleLayout } from '@/components/magazine/ArticleLayout';
import { PullQuote } from '@/components/magazine/PullQuote';
import { ImageSpread } from '@/components/magazine/ImageSpread';

export const metadata: Metadata = {
  title: 'Oregon Winter Forecast: 100% Chance of Lawsuits',
  description: 'An investigative piece on the changing landscape of Oregon ski areas and the potential influx of corporate ski companies.',
};

export default function OregonLawsuitsPage() {
  return (
    <ArticleLayout
      title="Oregon Winter Forecast: 100% Chance of Lawsuits"
      author="Eric Schmidgall"
      authorBio="Eric Schmidgall is a writer and skier based in the Pacific Northwest who covers the intersection of outdoor recreation and policy."
      heroImage="/images/magazine/lawsuit_1.jpg"
      heroImageAlt="Oregon ski lift in snowy forest landscape"
    >
      <p>
        The state may finally see the influx of corporate ski companies, like Vail or Alterra,
        at a time when most ski areas in Oregon remain locally owned. For decades, Oregon&apos;s
        ski areas have operated as independent entities, many family-owned, serving communities
        that have grown up around them. But recent legislative changes and market pressures are
        creating an environment ripe for consolidation.
      </p>

      <PullQuote
        quote="The state may finally see the influx of corporate ski companies, like Vail or Alterra, at a time when most ski areas in Oregon remain locally owned."
        variant="center"
      />

      <p>
        The ski industry in Oregon has always been different. While Colorado, Utah, and California
        have long been dominated by mega-resorts owned by publicly traded companies, Oregon&apos;s
        mountains have retained a distinctly local character. Mt. Hood Meadows, Timberline Lodge,
        Mt. Bachelor &mdash; these aren&apos;t just ski areas, they&apos;re institutions woven into the
        fabric of Pacific Northwest culture.
      </p>

      <p>
        But the economics of running a ski area in 2024 are brutal. Climate change has made snow
        unreliable at lower elevations. Insurance costs have skyrocketed. The expectation for
        high-speed lifts, terrain parks, and amenities requires capital that family operations
        struggle to generate. Meanwhile, the mega-passes from Vail and Alterra have transformed
        how skiers think about their season &mdash; and where they choose to spend their days.
      </p>

      <ImageSpread
        src="/images/magazine/page6-7.jpg"
        alt="Oregon winter landscape with ski terrain"
        caption="Oregon's ski areas face an uncertain future"
        credit="Jacob Dube"
      />

      <p>
        The legal landscape is shifting too. A series of lawsuits against ski areas across the
        country have challenged the traditional assumption of risk that has protected operators
        for decades. Courts are increasingly willing to find negligence where they once would
        have dismissed claims. For small operators, a single major lawsuit can be existential.
      </p>

      <p>
        For corporate entities like Vail Resorts or Alterra Mountain Company, these challenges
        are manageable. They have legal teams, insurance pools, and diversified portfolios that
        can absorb the occasional seven-figure settlement. They can invest in snowmaking to
        combat climate variability. They can offer the mega-pass that draws skiers from across
        the country.
      </p>

      <PullQuote
        quote="For small operators, a single major lawsuit can be existential."
        variant="left"
      />

      <p>
        The question for Oregon skiers is whether corporate ownership would be a net positive
        or negative. The arguments on both sides are compelling. Corporate resources could mean
        better infrastructure, more reliable operations, and integration into pass programs that
        offer incredible value. On the other hand, local ownership has meant decisions made with
        community input, pricing that remains somewhat accessible, and an atmosphere that feels
        authentically Pacific Northwest.
      </p>

      <p>
        Several Oregon ski areas have reportedly been approached by both major players in recent
        years. So far, none have sold. But the pressure isn&apos;t going away. Each difficult snow
        year, each liability lawsuit, each insurance renewal pushes the math further toward
        a sale.
      </p>

      <p>
        As skiers, we have limited power over these corporate machinations. But we do have choices
        about where we spend our money and how we engage with the mountains we love. Supporting
        local ski areas, advocating for reasonable liability reform, and building community around
        skiing that isn&apos;t dependent on corporate infrastructure &mdash; these are the ways we can
        shape the future of Oregon skiing.
      </p>

      <p>
        The forecast for Oregon&apos;s ski areas is uncertain. But one thing is clear: the days of
        taking local ownership for granted are over. The next decade will determine whether
        Oregon&apos;s mountains remain independent outposts of Pacific Northwest skiing culture,
        or become another collection of pins on a corporate map.
      </p>

      <ImageSpread
        src="/images/magazine/page_7.jpg"
        alt="Oregon mountain landscape in winter"
        caption="The future of Oregon skiing hangs in the balance"
      />
    </ArticleLayout>
  );
}
