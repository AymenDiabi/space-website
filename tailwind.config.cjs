/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0D17',
        lightBlue: '#D0D6F9',
      },
      fontFamily: {
        serif: ['Bellefair', 'serif'],
        sans: ['Barlow Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}