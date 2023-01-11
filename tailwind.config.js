/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx}",
    "./src/components/**/*.{js,ts,jsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arimo", "sans-serif"],
      serif: ["IBM_Plex_Mono", "serif"],
    },
    extend: {
      fontFamily: {
        heading: ["IBM_Plex_Mono", "serif"],
      },
    },
  },
  plugins: [],
};
