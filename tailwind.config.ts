import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        bone: "#F5F5F5",
        accent: "#E11D2E",
        accentDim: "#9B0F1F",
        line: "#1F1F1F",
        muted: "#A0A0A0",
      },
      fontFamily: {
        display: ["'Inter Tight'", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4'", "ui-serif", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: { container: "1240px" },
      letterSpacing: { tightish: "-0.02em" },
    },
  },
  plugins: [],
};
export default config;
