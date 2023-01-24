/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  important: true,

  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#000000",
        dark2: "#17191f",
        primary: "#d74cf6",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
