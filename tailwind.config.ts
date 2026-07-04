import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dusk: "#26333D",
        dawn: "#E8927C",
        cloud: "#F7F5F1",
        polder: "#7C9885",
        gold: "#D4A657",
        ink: "#1B2429",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
      backgroundImage: {
        horizon:
          "linear-gradient(180deg, #26333D 0%, #4A5C63 28%, #B9836F 55%, #E8927C 72%, #F3C7A6 88%, #F7F5F1 100%)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 12%" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 9s ease-in-out infinite",
        rise: "rise 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
