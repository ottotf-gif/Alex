/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0F172A', light: '#1E293B', muted: '#334155' },
        teal: { DEFAULT: '#0F766E', light: '#14B8A6', pale: '#CCFBF1' },
        sand: { DEFAULT: '#F4C27A', light: '#FEF3C7', dark: '#D97706' },
        // Varmare off-white (mer som Ottoniq/Elfdahls än kall #F8FAFC)
        cream: '#F6F3EC',
        paper: '#FBF9F4',
        body: '#334155',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
      },
      letterSpacing: { tighter: '-0.03em', tight: '-0.02em' },
      maxWidth: { prose: '62ch' },
      borderRadius: {
        // Skarp default — inga rundade hörn
        none: '0',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};