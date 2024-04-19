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
        darkestBlue: '#041434',
        gray: "#4a556c",
        complimentaryGreen: "#20ad96",
        seasalt: "#FAF8F6",
        lightSeasolt: '#EDEFF5',
        "gray 50 opacity": "rgba(74,85,108,0.5)",
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      fontSize: {},
      
      width: {
        18: '72px',
        62: '250px',
        78: '300px',
        85: '356px',
        '7xl': '1280px'
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      height: {
        15: '60px',
        18: '72px',
        21: '84px',
        46: '180px',
        sectionHeight: " calc(100vh - 60px)",
        703: '703px',
        840: '840px',
        880: '880px'
      },
      minHeight: {
'section': ' calc(100vh - 64px)'
      },
      maxWidth: {
       '8xl': '1440px'
      }
    },
  },
  plugins: [],
};
