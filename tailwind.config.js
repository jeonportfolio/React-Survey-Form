/** @type {import('tailwindcss').Config} */

import colors from './src/tailwind/colors'

export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}



