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
        pulsate: {
          "0%": { transform: "scale(0.95)", opacity: "0.9" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "", opacity: "1.0" },
        },
        fadeIn: {
          "0%": { opacity: "0.4", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        clouds: "clouds linear 180s infinite alternate",
        cloudsFast: "clouds linear 60s infinite alternate",
        scaler: "scaler linear 1s infinite alternate",
        rotate: "rotate linear 0.4s forwards",
        pulsate0: "fadeIn linear 0.4s forwards",
        pulsate: "pulsate linear 0.4s forwards 0.8s ",
        pulsate2: "pulsate linear 0.4s forwards 1.1s ",
        pulsate3: "pulsate linear 0.4s forwards 1.4s ",
        pulsate4: "pulsate linear 0.4s forwards 1.7s ",
        delayedBounce: "bounce 0.8s infinite 2s",
        delayedBounce2: "bounce 0.8s infinite 12s",
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
