import type { Metadata } from 'next';
import { Oswald, Lora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dustoncrustmag.com'),
  title: {
    default: 'Dust on Crust | Pacific Northwest Ski Magazine',
    template: '%s | Dust on Crust',
  },
  description: 'An indie ski magazine for the everyday skier. Shop rats, weekend warriors, and midweek passholders. Pacific Northwest skiing culture.',
  keywords: ['skiing', 'Pacific Northwest', 'Oregon', 'Mt Hood', 'indie magazine', 'ski culture', 'PNW'],
  authors: [{ name: 'Dust on Crust Magazine' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Dust on Crust',
    title: 'Dust on Crust | Pacific Northwest Ski Magazine',
    description: 'An indie ski magazine for the everyday skier.',
    images: [
      {
        url: '/images/magazine/cover_page.jpg',
        width: 1200,
        height: 630,
        alt: 'Dust on Crust - Pacific Northwest Ski Magazine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${lora.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
