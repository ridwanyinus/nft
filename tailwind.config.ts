import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        small: "470px",
        medium: "730px",
        desktop: "1365px",
        largesceen: "1700px",
        fourk: "2400px",
      },
      colors: {
        dark: "#04011C",
        pink: "#E50AA7",
        cyan: "#1EE0E1",
        blue: "#07003E",
      },

      backgroundImage: {
        "hero-pattern": "url('../public/Union.png')",
        "unique-bg": "url('../public/Subtract.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
