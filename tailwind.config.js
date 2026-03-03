/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        canvas:  'rgb(var(--color-canvas)  / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink:     'rgb(var(--color-ink)     / <alpha-value>)',
        muted:   'rgb(var(--color-muted)   / <alpha-value>)',
        rim:     'rgb(var(--color-rim)     / <alpha-value>)',
        gold:    'rgb(var(--color-gold)    / <alpha-value>)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
