import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#F5F0E6',
          300: '#EDE5D5',
          400: '#DDD4C0',
          500: '#C9BEAA',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          light: '#333333',
          muted: '#666666',
        },
        teal: {
          DEFAULT: '#14B8A6',
          dark: '#0D9488',
          light: '#5EEAD4',
        },
        mauve: {
          DEFAULT: '#9D6B8C',
          light: '#C49DB4',
          dark: '#6B4A5E',
        },
        hotpink: '#FF1493',
        mustard: '#D4A84B',
      },
      fontFamily: {
        headline: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
        mono: ['var(--font-ibm-plex-mono)', 'IBM Plex Mono', 'monospace'],
      },
      fontSize: {
        'headline-xl': ['4.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'headline-lg': ['3rem', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'headline-md': ['2rem', { lineHeight: '1.1' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.2' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.125rem', { lineHeight: '1.8' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        'article': '65ch',
        'spread': '90rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(3%, -15%)' },
          '50%': { transform: 'translate(12%, 9%)' },
          '70%': { transform: 'translate(9%, 4%)' },
          '90%': { transform: 'translate(-1%, 7%)' },
        },
        scrollHint: {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0.5', transform: 'translateY(10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
