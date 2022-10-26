/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#3F51B5',
        secondary : '#354497',
        disabled : '#D9DCF0',
        danger : '#D21212',
      },
    },

  },
  plugins: [],
}
