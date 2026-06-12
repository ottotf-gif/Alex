/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          muted: '#334155',
        },
        teal: {
          DEFAULT: '#0F766E',
          light: '#14B8A6',
          pale: '#CCFBF1',
        },
        sand: {
          DEFAULT: '#F4C27A',
          light: '#FEF3C7',
          dark: '#D97706',
        },
        cream: '#F8FAFC',
        body: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
};
