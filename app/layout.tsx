import type { Metadata } from 'next';
import { Bebas_Neue, Lora, Fira_Code, Space_Mono } from 'next/font/google';
import './globals.css';

// BOLD headline font - maximum impact
const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

// Elegant serif for body text
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// Terminal aesthetic - characterful mono
const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

// Secondary mono for UI elements
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ui',
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
    <html
      lang="en"
      className={`${bebasNeue.variable} ${lora.variable} ${firaCode.variable} ${spaceMono.variable}`}
    >
      <body className="antialiased">
        {/* Skip to main content - accessibility */}
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
