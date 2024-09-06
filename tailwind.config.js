/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2286ff",
        secondary: "#effcfb",
        light: "#e9f7ef",
        iconColor:"#505050",
        iconBg:"#d3d3d3",
      },
    },
  },
  plugins: [],
};
