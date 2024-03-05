/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
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
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [],
}

