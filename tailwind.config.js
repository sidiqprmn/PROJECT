/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        md: "767px",
        sm: "576px",
        xs: "380px",

      },

      colors: {
        "transparent-black": "rgba(25, 25, 25, 0.297)",
        card: "rgb(34, 34, 34)",
        card2: "rgba(255, 255, 255, 0.193)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
});
