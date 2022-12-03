/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          to: {
            transform: "translateX(0rem)",
            opacity: "1",
          },
        },
        slide: {
          "0, 50%": {
            transform: "translate(0, 0) scale(30) rotate(-45deg)",
          },
          "100%": {
            transform: "translate(40vw, -40vw) scale(20) rotate(-45deg)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 350ms ease-in-out forwards",
        slide: "slide 20s linear infinite both alternate",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
  ],
};
