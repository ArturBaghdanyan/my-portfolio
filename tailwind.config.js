export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        slideFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        animateSlideX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(40px)" },
        },
      },
      animation: {
        slideFromLeft: "slideFromLeft 1s ease-out forwards",
        slideFromRight: "slideFromRight 1s ease-out forwards",
        animateSlideX: "animateSlideX 1s ease-in-out infinite", 
      },
    },
  },
  plugins: [],
};
