/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'display': ['Montserrat'],
      'body' : ['Raleway'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
