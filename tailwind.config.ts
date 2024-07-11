import type { Config } from "tailwindcss";

const {
  iconsPlugin,
  getIconCollections,
} = require("@egoist/tailwindcss-icons");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "inner-sm": "inset 0 1px 0 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
    require("tailwind-gradient-mask-image"),
    iconsPlugin({
      collections: getIconCollections(["ph"]),
    }),
  ],
} satisfies Config;

export default config;
