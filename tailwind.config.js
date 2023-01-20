/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  theme: {
    
    extend: {
      colors: {
        'darkCyan' : '#3c8067',
        'cream': '#f2ebe3',
        'darkBlue': '#1c232b',
        'darkGrayBlue': '#6c7289'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
