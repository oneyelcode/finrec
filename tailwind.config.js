/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFF",
      black: "#000",
      primary: {
        50: "#FFFFFF",
        100: "#F9FDF9",
        200: "#D8F5D8",
        300: "#B8EDB7",
        400: "#97E597",
        500: "#77DD76",
        600: "#4AD249",
        700: "#2EB62D",
        800: "#238922",
        900: "#175C17",
      },
      serenity: {
        50: "#FFFFFF",
        100: "#FFFFFF",
        200: "#ECF1FA",
        300: "#CBDAF3",
        400: "#AAC2EB",
        500: "#89ABE3",
        600: "#5C8BD8",
        700: "#306BCC",
        800: "#26539E",
        900: "#1B3B71",
      },
      danger: colors.red,
      warning: colors.yellow,
      success: colors.green,
      info: colors.teal,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      emerald: colors.emerald,
      blue: colors.sky,
      indigo: colors.indigo,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({ strategy: "base" }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/container-queries"),
  ],
};
