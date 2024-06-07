/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(30%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleDown: {
          "0%": { transform: "scale(1.2)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        scaleDownSkilCard: {
          "0%": { transform: "scale(1.1)", opacity: 0.5 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0.5 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        slideIn: "slideIn 1.5s ease-out",
        scaleDown: "scaleDown  1.2s ease-out",
        fadeIn: "fadeIn 1.2s ease-out",
        scaleDownSkilCard: "scaleDownSkilCard 1.2s ease-out",
      },
    },
  },
  plugins: [],
};
