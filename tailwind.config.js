/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white' : '#ffffff',
      'black' : '#0E3040',
      'green' : '#286F6B',
      'blue' : '#5098CA',
      'trans' : '#00000000',
      
    },
    fontFamily:{
      'basker' : ['Libre Baskerville', 'serif'],
      'rale' : ['Raleway', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}
