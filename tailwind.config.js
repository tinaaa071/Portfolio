/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', ...fontFamily.sans],
      },
      fontSize: {
        xxs: ['10px', '12px']
      },
      colors: {
        'Primary': '#A2866D',
        'Secondary': '#E0DCCA',
        'Tertiary': '#EFECE5',
        'Quaternary': '#F8F7F2'
      },
      screens: {
        xs: '512px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

