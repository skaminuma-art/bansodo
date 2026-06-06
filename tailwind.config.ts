import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F1E30",
        accent: "#2ECC8A",
        "bg-custom": "#F8F7F4",
        "text-custom": "#2D2D2D",
      },
      fontFamily: {
        mincho: ["var(--font-shippori-mincho)", "serif"],
        gothic: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
};

export default config;
