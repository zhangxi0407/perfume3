import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F5F3",
        charcoal: "#2D2D2D",
        moss: "#4A5D4E",
        amber: "#B8860B",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
      },
      animation: {
        'breathe': 'breathe 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'droplet': 'droplet 2s ease-in-out infinite',
        'smoke': 'smoke 3s ease-in-out infinite',
        'fade-in-char': 'fadeInChar 0.5s ease-out forwards',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        droplet: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        smoke: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-30px) scale(1.2)', opacity: '0.6' },
          '100%': { transform: 'translateY(-60px) scale(1.4)', opacity: '0' },
        },
        fadeInChar: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
