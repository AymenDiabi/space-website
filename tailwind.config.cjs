/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0D17',
        lightkBlue: '#D0D6F9'
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        serif: ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
}
