import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        acid: {
          DEFAULT: '#CCFF00',
          hover: '#B3E600',
          dim: '#99CC00',
        },
        neon: {
          blue: '#00F0FF',
          purple: '#BC13FE',
          pink: '#FF0099',
        },
        deep: {
          DEFAULT: '#030303',
        },
        surface: {
          DEFAULT: '#0A0A0A',
        },
        elevated: {
          DEFAULT: '#111111',
        },
        highlight: {
          DEFAULT: '#1A1A1A',
        },
        // Legacy mappings for compatibility
        cream: {
          50: '#FEFDFB',
          100: '#FDF9F3',
          200: '#F5F0E6',
          300: '#EDE5D5',
          400: '#DDD4C0',
          500: '#C9BEAA',
        },
        ink: {
          DEFAULT: '#030303',
          light: '#888888',
          muted: '#555555',
        },
        teal: {
          DEFAULT: '#00F0FF',
          dark: '#00C2CC',
          light: '#5EEAD4',
        },
        mauve: {
          DEFAULT: '#BC13FE',
          light: '#D49DFF',
          dark: '#6B4A5E',
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Bebas Neue', 'sans-serif'],
        body: ['var(--font-body)', 'Lora', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
        ui: ['var(--font-ui)', 'Space Mono', 'monospace'],
        // Legacy
        sans: ['var(--font-ui)', 'sans-serif'],
      },
      fontSize: {
        // Display sizes - extreme impact
        'display-xl': ['8rem', { lineHeight: '0.85', letterSpacing: '-0.02em' }],
        'display-lg': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'display-md': ['4rem', { lineHeight: '0.9' }],
        // Headlines
        'headline-xl': ['4.5rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'headline-lg': ['3rem', { lineHeight: '0.95', letterSpacing: '-0.01em' }],
        'headline-md': ['2rem', { lineHeight: '1' }],
        'headline-sm': ['1.5rem', { lineHeight: '1.1' }],
        // Body
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.125rem', { lineHeight: '1.8' }],
        'body-sm': ['1rem', { lineHeight: '1.7' }],
        // UI
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
        'micro': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      maxWidth: {
        'article': '65ch',
        'spread': '90rem',
        'content': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'grain': 'grain 8s steps(10) infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'flicker': 'flicker 8s infinite',
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
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 255, 0, 0.5)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '92%': { opacity: '1' },
          '93%': { opacity: '0.8' },
          '94%': { opacity: '1' },
          '97%': { opacity: '0.9' },
          '98%': { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-acid': '0 0 20px rgba(204, 255, 0, 0.4), 0 0 40px rgba(204, 255, 0, 0.2)',
        'glow-blue': '0 0 20px rgba(0, 240, 255, 0.4), 0 0 40px rgba(0, 240, 255, 0.2)',
        'glow-purple': '0 0 20px rgba(188, 19, 254, 0.4), 0 0 40px rgba(188, 19, 254, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
