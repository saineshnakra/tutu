// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/app/components/**/*.{js,ts,jsx,tsx,css}', // Include CSS files in components folder
  ],
  theme: {
    extend: {
      colors: {
        "st-tropaz": "#235391",
        "bright-green": "#57cc02",
        "tutor-response": "#4a9e5c", // Color for tutor responses
        "custom-red": "#D90429",
        "custom-black": "#000000",
        "business-blue": "#1E3A8A", // Added classy business blue
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typingBounce: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-5px)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100vw)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.6s ease-out forwards",
        typingBounce: "typingBounce 1s infinite",
        slideInLeft: "slideInLeft 0.8s ease-out forwards",
        slideInRight: "slideInRight 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
