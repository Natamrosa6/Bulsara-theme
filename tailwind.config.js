/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./layouts/**/*.{html,js}", "./content/**/*.{md,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}