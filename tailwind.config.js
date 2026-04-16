/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        clash:   ['"Clash Display"', 'sans-serif'],
        syne:    ['Syne', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        sans:    ['"DM Sans"', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
      },
      colors: {
        brand: {
          indigo:  '#5C27FE',
          violet:  '#7B2FBE',
          teal:    '#00C9B1',
          gold:    '#F5A623',
          dark:    '#0D0D1A',
          muted:   '#4A4A6A',
        },
        surface: {
          base:    '#FAF8FF',
          pearl:   '#F4F1FF',
          lavender:'#F0ECFF',
          warm:    '#FDFCFF',
          silk:    '#FFF9F5',
        },
      },
      animation: {
        'float':        'float 7s ease-in-out infinite',
        'float-slow':   'float 10s ease-in-out 2s infinite',
        'gradient-x':   'gradientX 8s ease infinite',
        'pulse-soft':   'pulseSoft 3s ease-in-out infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-up':      'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'count-up':     'fadeUp 0.4s ease forwards',
        'orb-1':        'orbMove1 14s ease-in-out infinite',
        'orb-2':        'orbMove2 18s ease-in-out infinite',
        'spin-slow':    'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(0.95)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        orbMove1: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(40px,-40px) scale(1.06)' },
          '66%':      { transform: 'translate(-28px,28px) scale(0.96)' },
        },
        orbMove2: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(-36px,24px) scale(0.96)' },
          '66%':      { transform: 'translate(28px,-32px) scale(1.05)' },
        },
      },
      backgroundSize: { '300%': '300%' },
      boxShadow: {
        'glow-indigo': '0 0 40px -8px rgba(92,39,254,0.35)',
        'glow-teal':   '0 0 40px -8px rgba(0,201,177,0.35)',
        'glow-gold':   '0 0 40px -8px rgba(245,166,35,0.40)',
        'card':        '0 2px 4px rgba(92,39,254,0.04), 0 12px 40px rgba(92,39,254,0.08)',
        'card-hover':  '0 4px 8px rgba(92,39,254,0.06), 0 24px 64px rgba(92,39,254,0.14)',
        'float':       '0 8px 32px rgba(92,39,254,0.12)',
      },
      backdropBlur: { '3xl': '48px' },
    },
  },
  plugins: [],
};
