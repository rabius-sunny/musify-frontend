/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      dark: '#0A183D',
      primary: colors.rose[500],
      white: colors.white,
      slate: colors.slate,
      cyan: colors.cyan,
      red: colors.red,
      transparent: colors.transparent
    },
    extend: {}
  },
  plugins: []
}
