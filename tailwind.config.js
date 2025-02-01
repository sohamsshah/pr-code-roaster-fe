/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards'
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgba(255, 255, 255, 0.87)',
            h1: { color: 'rgba(255, 255, 255, 0.87)' },
            h2: { color: 'rgba(255, 255, 255, 0.87)' },
            h3: { color: 'rgba(255, 255, 255, 0.87)' },
            strong: { color: 'rgba(255, 255, 255, 0.87)' },
            code: { color: 'rgba(255, 255, 255, 0.87)' },
            pre: {
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              color: 'rgba(255, 255, 255, 0.87)',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
}
