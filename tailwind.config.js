/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#0e1217",
        dark2: "#17191f",
        primary: "#d74cf6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
