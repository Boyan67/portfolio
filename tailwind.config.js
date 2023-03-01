/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: {
          100: '#2455d2',
          80: 'rgba(56,169,239,0.8)',
          45: 'rgba(0,136,194,0.5)'
        },
        customGray: '#B9B9B9',
        customDarkGray: '#8C8C8C',
      }
    },
  },
  plugins: [],
}
