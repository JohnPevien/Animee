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
        dark: "#000000",
        dark2: "#17191f",
        primary: "rgb(23, 105, 255)",
        "primary-accent": "rgb(11, 59, 183)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
