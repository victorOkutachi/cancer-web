/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open-Sans', 'sans-serif'],
        

      },
      colors: {
        'lightgreen-rgba': 'rgba(0, 127, 95, 0.9)',
        'overlay-rgba': 'rgba(,0,0,0,0.7)',
        'overlay2-rgba': 'rgba(,0,0,0,0.4)',
        'overlay3-rgba': 'rgba(,0,0,0,0.75)',
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')],
}
