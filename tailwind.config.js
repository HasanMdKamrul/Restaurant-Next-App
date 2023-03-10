/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
    dancing: ["Dancing Script", "cursive"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
