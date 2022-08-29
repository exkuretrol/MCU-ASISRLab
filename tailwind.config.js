/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
