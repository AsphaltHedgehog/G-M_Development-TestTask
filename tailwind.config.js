/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#179D2E",
        "blue": "#0177B8",
        "orange": "#F5AF23",
        "red": "#F02E2C",
        "primary": "#181833",
        "secondary": "#2D2D2D",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        plumbing: "url('./assets/EvolveText.png')",
        painting: "url('./assets/AbstractWaves.png')",
        assembly: "url('./assets/Sparkles.png')",
        electrical: "url('./assets/Circles.png')",
        doors: "url('./assets/Circles.png')",
        hanging: "url('./assets/Circles.png')",
        appliance: "url('./assets/Circles.png')",
        home: "url('./assets/Circles.png')",
        outdoor: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}