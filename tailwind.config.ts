import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["var(--font-display)"]
    },
    extend: {
      colors: {
        gray: colors.neutral
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        drop: `
          0px 1px 0px -1px var(--tw-shadow-color),
          0px 1px 1px -1px var(--tw-shadow-color),
          0px 1px 2px -1px var(--tw-shadow-color),
          0px 2px 4px -2px var(--tw-shadow-color),
          0px 3px 6px -3px var(--tw-shadow-color)
        `,
        highlight: `
          inset 0px 0px 0px 1px var(--tw-shadow-color),
          inset 0px 1px 0px var(--tw-shadow-color)
        `
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config

export default config
