/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        red: '#B53535',
        bg: '#001B2E',
        white: '#EBEBEB',
        gray: '#353E43',
        backtext: '#2B3B45',
      },
    },
    plugins: [],
  },
};
