import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        softglow: {
          void: "#07070B",
          charcoal: "#0E0E14",
          slate: "#16161F",
          gold: "#E8C98A",
          "gold-dim": "#B89A6A",
          rose: "#E8A0B8",
          "rose-dim": "#A87890",
          paper: "#F2EDE4",
          thread: "#F5D9A8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(232, 201, 138, 0.25)",
        "glow-strong": "0 0 80px rgba(232, 201, 138, 0.35)",
        "glow-rose": "0 0 50px rgba(232, 160, 184, 0.3)",
      },
      animation: {
        "thread-drift": "threadDrift 18s ease-in-out infinite",
        "threshold-pulse": "thresholdPulse 6s ease-in-out infinite",
        float: "float 9s ease-in-out infinite",
      },
      keyframes: {
        threadDrift: {
          "0%, 100%": { transform: "translateY(0) translateX(0) rotate(0deg)", opacity: "0.6" },
          "50%": { transform: "translateY(-30px) translateX(12px) rotate(2deg)", opacity: "1" },
        },
        thresholdPulse: {
          "0%, 100%": { boxShadow: "0 0 40px rgba(232, 201, 138, 0.2)" },
          "50%": { boxShadow: "0 0 90px rgba(232, 201, 138, 0.45)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
