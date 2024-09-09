/** @type {import('tailwindcss').Config} */
const colors = require("./src/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors,
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
  },
  plugins: [],
};
