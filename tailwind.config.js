/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      display: ["var(--font-grotesk)"]
    },
    extend: {
      colors: {
        gray: colors.neutral
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
}
