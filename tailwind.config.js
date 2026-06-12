/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F172A', light: '#1E293B', muted: '#334155' },
        teal: { DEFAULT: '#0F766E', light: '#14B8A6', pale: '#CCFBF1' },
        sand: { DEFAULT: '#F4C27A', light: '#FEF3C7', dark: '#D97706' },
        cream: '#F8FAFC',
        body: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: { tighter: '-0.03em', tight: '-0.02em' },
      maxWidth: { prose: '68ch' },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'soft-float': 'soft-float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};