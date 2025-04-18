import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}", // Include styles directory
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["system-ui"],
        gilmer: ["var(--font-gilmer)"],
        clash: ["var(--font-clash-display)"],
        clashlight: ["var(--font-clash-display-light)"],
        aeonik: ["var(--font-aeonikpro)"],
      },
      colors: {
        primary: "#0C0E0D",
        secondary: "#8A959C",
      },
    },
  },
  plugins: [],
};

export default config;
