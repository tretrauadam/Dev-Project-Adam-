module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode:'class',
  theme: {
    fontFamily: {
      'display': ['Montserrat'],
      'body': ['Raleway'],
    },
    extend: {},
  },
  variants: {
    extend: {
      brightness: ['hover'],
      contrast: ['hover'],
      fontWeight: ['hover'],
      borderWidth: ['hover, active'],
      backgroundColor: ['active'],
      outline: ['focus']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}