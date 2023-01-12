/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx}",
    "./src/components/**/*.{js,ts,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      sans: ["Arimo", "sans-serif"],
      serif: ["Bungee", "serif"],
    },
    extend: {
      fontFamily: {
        heading: ["Bungee", "serif"],
      },
    },
  },
  plugins: [],
};
