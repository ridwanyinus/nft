import type { Config } from "tailwindcss";

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "types/*"],
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
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

export default config;
