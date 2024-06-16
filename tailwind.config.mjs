/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f2f6f8',
          300: '#c6e2f3',
          400: '#c6e2f3',
          500: '#99d5ec',
          600: '#4da9d9',
          700: '#007cc0',
          800: '#005f9a',
          900: '#004a7f',
        },
        background: '#1e1e1e',
        'background-box': '#171717',
        contrast: {
          500: '#f2f6f8',
        },
      },
    },
  },
  plugins: [],
};
