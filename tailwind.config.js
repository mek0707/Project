/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 5s ease-in-out infinite",
        wiggle_1: "wiggle_1 5s ease-in-out infinite",

        sign: "shine 2s forwards, flicker 3s infinite",
        
      },
      keyframes: {
        wiggle: {
          "0% 100%": {
            transform: "rotate(-30deg)",
          },
          "50%": { transform: "rotate(30deg)" },
        },
        wiggle_1: {
          "0%": { transform: "skewX(9deg)" },
          "10%": { transform: "skewX(-8deg)" },
          "20%": { transform: "skewX(7deg)" },
          "30%": { transform: "skewX(-6deg)" },
          "40%": { transform: "skewX(5deg)" },
          "50%": { transform: "skewX(-4deg)" },
          "60%": { transform: "skewX(3deg)" },
          "70%": { transform: "skewX(-2deg)" },
          "80%": { transform: "skewX(1deg)" },
          "90%": { transform: "skewX(0deg)" },
          "100%": { transform: "skewX(0deg)" },
        },
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
