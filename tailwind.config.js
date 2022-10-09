/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          100: '#EF3A38',
          80: 'rgba(239,58,56,0.8)',
          45: 'rgba(239,58,56,0.45)'
        },
        customGray: '#B9B9B9',
        customDarkGray: '#8C8C8C',
      }
    },
  },
  plugins: [],
}
