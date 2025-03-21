/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,js,md}',
      './_layouts/**/*.{html,js,md}',
      './_*/*.{html,js,md}',
      './*.{html,js,md}'
    ],
    theme: {
      fontFamily: {
        sans: ['josefin-sans', 'sans-serif'],
        serif: ['ltc-bodoni-175', 'serif'],
      },
      extend: {
        spacing: {
          '5p': '5%',
          '10p': '10%',
          '15p': '15%',
        },
        aspectRatio: {
          'landscape': '2 / 1 ',
          'portrait': '3 / 4',
          'portrait-tall': '3 / 5',
        },
        minHeight:{
          '100': '100vh',
          '90': '90vh',
          '80': '80vh',
          '70': '70vh',
          '60': '60vh',
          '50': '50vh',
        },
        colors: {
          'dark': '#423634',
          'light': '#F6EADB',
          'lighter': '#F9F8F6',
          'main': '#D5AAAA',
          'feature': '#9E6365',
          'accent': '#cd913c',
          'transparent': 'transparent',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }