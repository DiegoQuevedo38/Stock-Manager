import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        picton: {
          "50": "#eff9ff",
          "100": "#def2ff",
          "200": "#b6e8ff",
          "300": "#76d7ff",
          "400": "#2ec4ff",
          "500": "#0eb6fd",
          "600": "#008ad2",
          "700": "#006eaa",
          "800": "#005d8c",
          "900": "#074c73",
          "950": "#04314d",
        },
        shamrock: {
          "50": "#eafff6",
          "100": "#cdfee6",
          "200": "#a0fad4",
          "300": "#63f2bd",
          "400": "#25e2a3",
          "500": "#00e19d",
          "600": "#00a473",
          "700": "#008360",
          "800": "#00674d",
          "900": "#005540",
          "950": "#003025",
        },
      },
    },
  },
  plugins: [],
};
export default config;
