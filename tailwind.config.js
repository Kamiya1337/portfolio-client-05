/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFF8F5',
        paper: '#FFF0F0',
        taupe: '#F6E4E4',
        beige: '#F0DFDE',
        charcoal: '#241B1B',
        obsidian: '#2A1C1C',
        'dark-surface': '#382E2E',
        'muted-dark': '#7A6865',
        'muted-light': '#F7DAD6',
        peach: '#F7A8A1',
        coral: '#F28C8C',
        rose: '#E76F7A',
        blush: '#FFE7E2',
        'border-light': '#F4C8C0',
        'border-dark': 'rgba(255, 231, 226, 0.18)',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      spacing: {
        sidebar: '256px',
        'section-gap': '5rem',
      },
    },
  },
  plugins: [],
};
