/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: "glow 3s ease-in-out infinite",
        scanLine: "scanLine 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            textShadow: "0 0 10px #3b82f6, 0 0 20px #3b82f6",
          },
          "50%": {
            textShadow: "0 0 25px #3b82f6, 0 0 40px #3b82f6",
          },
        },
        scanLine: {
          "0%": { transform: "translateY(0%)" },
          "50%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};