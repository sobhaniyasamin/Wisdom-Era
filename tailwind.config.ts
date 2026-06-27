import type { Config } from "tailwindcss";

// Tokens reference CSS variables (RGB channels) so the whole palette can
// swap between dark (default) and light (.light on <html>) themes.
const v = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: v("--ink"), // canvas
          deep: v("--ink-deep"), // deepest band / footer
          raised: v("--ink-raised"), // raised surfaces
          line: v("--ink-line"), // hairline borders
        },
        paper: {
          DEFAULT: v("--paper"), // primary text
          muted: v("--paper-muted"), // secondary text
          faint: v("--paper-faint"), // tertiary text
        },
        accent: {
          DEFAULT: v("--accent"), // the one precise accent
          bright: v("--accent-bright"), // hover / highlight
          dim: v("--accent-dim"), // muted accent
          ink: v("--accent-ink"), // readable text ON the accent
        },
        // Legacy aliases mapped to the same variables so older classes adapt too
        navy: { DEFAULT: v("--ink"), deep: v("--ink-deep"), light: v("--ink-line") },
        teal: { DEFAULT: v("--accent"), light: v("--accent-bright"), dark: v("--accent-dim") },
        cream: v("--ink"),
        coral: "#e8734a",
        "text-dark": v("--paper"),
        "text-muted": v("--paper-muted"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Schibsted Grotesk", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Hanken Grotesk", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
