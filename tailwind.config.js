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
      sans: ["var(--j0w0-font-primary)", "sans-serif"],
    },
    extend: {
      fontFamily: {
        heading: ["var(--j0w0-font-secondary)", "serif"],
      },
    },
  },
  plugins: [],
};
