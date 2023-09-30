/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        firefly: {
          50: '#eefbfd',
          100: '#d5f2f8',
          200: '#b0e5f1',
          300: '#7ad1e6',
          400: '#3db4d3',
          500: '#2198b9',
          600: '#1e7a9c',
          700: '#1f637f',
          800: '#225268',
          900: '#204559',
          950: '#0a1c26',
        },
        husk: {
          50: '#f7f6ef',
          100: '#ecebd5',
          200: '#dad7ae',
          300: '#c4bc80',
          400: '#b0a256',
          500: '#a4934e',
          600: '#8c7742',
          700: '#715c37',
          800: '#604d33',
          900: '#534330',
          950: '#2f2319',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
