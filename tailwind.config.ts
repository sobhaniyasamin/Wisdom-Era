import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New deep-ink system
        ink: {
          DEFAULT: "#0b0f19", // canvas
          deep: "#06080f", // deepest (footer, contrast)
          raised: "#111726", // raised surfaces
          line: "#1e2636", // hairline borders
        },
        paper: {
          DEFAULT: "#eaedf4", // primary text
          muted: "#99a3ba", // secondary text
          faint: "#5b6480",
        },
        accent: {
          DEFAULT: "#5cc8bd", // the one precise cool accent
          bright: "#8ee6da", // line highlights
          dim: "#2f7d74", // muted accent
        },
        // Legacy keys remapped to the dark system so nothing renders light by accident
        navy: { DEFAULT: "#0b0f19", deep: "#06080f", light: "#1e2636" },
        teal: { DEFAULT: "#5cc8bd", light: "#8ee6da", dark: "#2f7d74" },
        cream: "#0b0f19",
        coral: "#e8734a",
        "text-dark": "#eaedf4",
        "text-muted": "#99a3ba",
      },
      fontFamily: {
        display: ["var(--font-display)", "Schibsted Grotesk", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        // legacy aliases
        serif: ["var(--font-display)", "Schibsted Grotesk", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quint": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.25", transform: "scaleY(0.55)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards",
        "scroll-pulse": "scrollPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
