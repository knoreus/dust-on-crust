export interface Article {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  page: number;
  heroVariant: 'steev' | 'lawsuits' | 'zen' | 'art';
  gradient: string;
  accentColor: string;
}

export interface Contributor {
  name: string;
  role: string;
  bio?: string;
}

export interface Sponsor {
  name: string;
  tagline?: string;
  url?: string;
}

export const issueData = {
  issue: 1,
  title: 'DUST on CRUST',
  subtitle: 'ISSUE // 01',
  publishDate: '2024-01-01',
};

export const articles: Article[] = [
  {
    slug: '/issue/01/steev',
    title: 'STEEV',
    author: 'Bryan Schultz',
    excerpt: 'Kids. They used these little fuckers all manner of excuses. A personal essay about finding escape from the mundane through skiing.',
    thumbnail: '/images/magazine/page_4.jpg',
    category: 'Feature',
    page: 4,
    heroVariant: 'steev',
    gradient: 'from-acid/20 via-deep to-neon-blue/10',
    accentColor: 'acid',
  },
  {
    slug: '/issue/01/oregon-lawsuits',
    title: 'Oregon Winter Forecast: 100% Chance of Lawsuits',
    author: 'Eric Schmidgall',
    excerpt: 'The state may finally see the influx of corporate ski companies at a time when most ski areas in Oregon remain locally owned.',
    thumbnail: '/images/magazine/lawsuit_1.jpg',
    category: 'Feature',
    page: 6,
    heroVariant: 'lawsuits',
    gradient: 'from-yellow-500/20 via-deep to-red-500/10',
    accentColor: 'yellow-500',
  },
  {
    slug: '/issue/01/zen-bailing',
    title: 'Zen and the Art of Bailing',
    author: 'Nate Molloy',
    excerpt: 'Bailing is truly part of the beauty of skiing. It gives you a story to tell and a reason to return.',
    thumbnail: '/images/magazine/page_10.jpg',
    category: 'Feature',
    page: 10,
    heroVariant: 'zen',
    gradient: 'from-white/10 via-deep to-neon-purple/10',
    accentColor: 'white',
  },
  {
    slug: '/issue/01/t-leaf',
    title: '3 Things I Hate About Skiing This Week',
    author: 'T. Leaf',
    excerpt: 'Boots. IG. Kooks. Thanks 4 listening 2 my presentation.',
    thumbnail: '/images/magazine/t_leaf_art.jpg',
    category: 'Art',
    page: 5,
    heroVariant: 'art',
    gradient: 'from-neon-pink/20 via-deep to-neon-purple/10',
    accentColor: 'neon-pink',
  },
];

export const contributors: Contributor[] = [
  {
    name: 'Sam Au',
    role: 'Illustrator',
    bio: 'Illustrations for STEEV article',
  },
  {
    name: 'Jacob Dube',
    role: 'Photographer',
    bio: 'Action photography',
  },
  {
    name: 'T. Leaf',
    role: 'Artist',
    bio: 'Original artwork',
  },
  {
    name: 'Bryan Schultz',
    role: 'Writer',
  },
  {
    name: 'Nate Molloy',
    role: 'Writer',
  },
  {
    name: 'Eric Schmidgall',
    role: 'Writer',
  },
];

export const sponsors: Sponsor[] = [
  {
    name: 'ON3P',
    tagline: 'I Want to Believe // Est. 2009 // Portland, OR',
    url: 'https://on3pskis.com',
  },
  {
    name: 'SOVYRN',
    tagline: 'Outerwear Built Different',
    url: 'https://www.sovyrn69.com/sovyrn',
  },
];
