/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        'Delicious-Handrawn': ['Delicious Handrawn', 'cursive'],

      },
      colors: {
        'lightgreen-rgba': 'rgba(0, 127, 95, 0.9)',
        'overlay-rgba': 'rgba(,0,0,0,0.7)',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
