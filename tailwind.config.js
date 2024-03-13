/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '550px': '550px',
        '300px': '300px'
      }
    },
    colors: {
      'classic-rose': {
        '50': '#fbf4f9',
        '100': '#f8ebf4',
        '200': '#edc9e4',
        '300': '#e8b9dc',
        '400': '#d98dc3',
        '500': '#ca6aaa',
        '600': '#b64c8e',
        '700': '#9c3a75',
        '800': '#823261',
        '900': '#6d2e52',
        '950': '#41162f',
      },
      'light-wisteria': {
        '50': '#fbf6fe',
        '100': '#f6ebfc',
        '200': '#efdbf9',
        '300': '#e2bef4',
        '400': '#d093ec',
        '500': '#bd6ae2',
        '600': '#ab4bd2',
        '700': '#9339b7',
        '800': '#7b3396',
        '900': '#652a79',
        '950': '#471358',
      },
      'beauty': {
        'text': '#0d0c13',
        'primary': '#B74E8E',
        'secondary': '#E9B9DE',
        'accent': '#d093ec',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
  plugins: [],
}

