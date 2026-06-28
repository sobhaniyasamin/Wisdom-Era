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
        navy: {
          DEFAULT: "#2E3E6F",
          deep: "#1e2d54",
          light: "#3d5090",
        },
        teal: {
          DEFAULT: "#68C5B2",
          light: "#8fd7c9",
          dark: "#4ba897",
        },
        cream: "#f7f5f0",
        coral: "#e8734a",
        "text-dark": "#1a1a2e",
        "text-muted": "#5a6178",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(0.6)" },
          "50%": { opacity: "1", transform: "scaleY(1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "scroll-pulse": "scrollPulse 2s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
