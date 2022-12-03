/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            transform: "translateX(2rem)",
            opacity: "0",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 350ms ease-in-out",
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      defaultFlavour: "latte",
    }),
  ],
};
