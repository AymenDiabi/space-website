/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkBlue: '#0B0D17',
        lightBlue: '#D0D6F9'
      },
      fontFamily: {
        sans: ['Barlow Condensed', 'sans-serif'],
        serif: ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
}
