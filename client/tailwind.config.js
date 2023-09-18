/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {},
    extend: {
      colors: {
        // primary: "#e74c3c",
        primary: "#233a95",
        secondary: "#e4e4e4"
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

