/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimated],
}