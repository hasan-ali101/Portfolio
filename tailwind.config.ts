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
      },
      animation: {
        clouds: "clouds linear 180s infinite alternate",
        cloudsReverse: "clouds linear 180s infinite alternate-reverse",
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
  plugins: [],
};
export default config;
