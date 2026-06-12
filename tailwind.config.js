/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rikare, djupare bas
        navy: {
          DEFAULT: '#0B1220',
          800: '#0F172A',
          700: '#1E293B',
          600: '#334155',
        },
        teal: {
          DEFAULT: '#0F766E',
          light: '#2DD4BF',
          deep: '#0B5A54',
        },
        sand: {
          DEFAULT: '#F4C27A',
          light: '#F8D9A6',
          deep: '#D99B4A',
        },
        cream: '#F6F3EC',
        paper: '#FBF9F4',
        ink: '#0B1220',
        body: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: { tight: '-0.02em', tighter: '-0.03em' },
      maxWidth: { prose: '60ch' },
      borderRadius: { none: '0' },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'glow': 'glow 8s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
};