/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation:{
        tilt:'tilt 5s infinite linear'
      },
      keyframes:{
        tilt:{
          "0%,50%,100%":{
            transform:"rotate(0deg)"
          },
          "25%":{
            transform:"rotate(4deg)"
          },
          "75%":{
            transform:"rotate(-4deg)"
          }
        }
      },
      backgroundImage: {
        info: "linear-gradient(to right top, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
        info1:
          "linear-gradient(to right bottom, rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0))",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
