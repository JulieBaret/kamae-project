/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#FAF9FF',
      black: '#292929',
      orange: '#FC7D46',
      purple: '#6F50EC'
    }, fontFamily: {
      'display': ['Poppins', ...defaultTheme.fontFamily.sans],
      'body': ['Gilroy', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
