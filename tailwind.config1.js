/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/*.html'
  ],
  presets: [],
  darkMode: 'media', // or 'class'
  theme: {
    extend:{
      colors:{
        'primary':'#f3c614',
        'secondary':'#353535'
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
  },
  plugins: [],
}

