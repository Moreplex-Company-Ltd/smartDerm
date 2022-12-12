/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGold: "#ef881b",
        secondary_background: "#fcf1df",
        primaryBlue: "#020B5E",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
