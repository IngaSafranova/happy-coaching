/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#333461",
        gray: "#4a556c",
        complimentaryGreen: "#20ad96",
        seasalt: "#FAF8F6",
        "gray 50 opacity": "rgba(74,85,108,0.5)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {},
      height: {
        15: "60px",
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
    },
  },
  plugins: [],
};
