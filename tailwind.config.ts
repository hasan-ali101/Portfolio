import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        clouds: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-80%)" },
        },
        scaler: {
          "0%": { transform: "scale(1.3) translatey(-30%)" },
          "100%": { transform: "scale(1) translatey(0%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) " },
          "100%": { transform: "rotate(-180deg) translatey(100%)" },
        },
      },
      animation: {
        clouds: "clouds linear 180s infinite alternate",
        cloudsFast: "clouds linear 80s infinite alternate",
        scaler: "scaler linear 1s infinite alternate",
        rotate: "rotate linear 0.3s forwards",
      },
      fontFamily: {
        akira: ["AKIRA", "sans-serif"],
        codeSaver: ["codeSaver"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundA: "#91B4BC",
        backgroundAB: "#9195BC",
        backgroundB: "#9C91BC",
        backgroundC: "#BC91AD",
        backgroundD: "#BC919E",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
export default config;
