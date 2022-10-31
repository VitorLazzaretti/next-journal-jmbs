/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Roboto", ...defaultTheme.fontFamily.sans],
        "serif": ["Roboto Serif", ...defaultTheme.fontFamily.sans],
        "mono": ["Roboto Mono", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
