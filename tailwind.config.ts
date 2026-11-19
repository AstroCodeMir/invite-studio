import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#873DCE",
        "light-purple": "#F0E5FF",
        canvas: "#FAF9FD",
        surface: "#FFFFFF",
        ink: "#171421",
        muted: "#777386",
        border: "#EAE5F2",
      },
      boxShadow: { soft: "0 12px 32px rgba(52, 29, 82, 0.08)" },
      borderRadius: { card: "1.25rem" },
    },
  },
  plugins: [],
};

export default config;
