const { resolve } = require("path");
// const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [resolve(__dirname, "index.html"), resolve(__dirname, "src/**/*.{vue,ts}")],
  theme: {
    extend: {
      // here's how to extend fonts if needed
      // fontFamily: {
      //   sans: [...defaultTheme.fontFamily.sans],
      // },
      colors: {
        inactiveLink: "#1c1c23",
        activeLink: "#818285",
      },
      dropShadow: {
        glow: ["0 0px 20px rgba(255,255, 255, 0.35)", "0 0px 65px rgba(255, 255,255, 0.2)"],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
  ],
  // safelist: ["text-red-500", "text-yellow-500", "text-green-500", "text-red-300/40", "text-yellow-300/40", "text-green-300/40"],
};
