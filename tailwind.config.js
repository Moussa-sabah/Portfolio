/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xs": "400px",
        xs: "500px",
        md_lg: "900px",
      },
      colors: {
        darkSectionBG: "#171c25",
        darkAppBG: "#13171f",
        lightAppBG: "#EDEDED",
        lightText: "#21243D",
      },
    },
  },
  plugins: [],
};
