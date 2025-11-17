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
        // Version 1 - Simple Color Palette
        'navy': '#0A192F',
        'blue': '#00D9FF',
        'purple': '#6C5CE7',
        'pink': '#FF6B9D',
        'gold': '#F7B731',
        'dark': '#0F1419',
        'light-bg': '#F8F9FB',

        // Semantic naming
        'dark-bg': '#0A192F',
        'navy-blue': '#0A192F',
        'electric-blue': '#00D9FF',
        'deep-purple': '#6C5CE7',
      },
      backgroundImage: {
        // Simple gradients
        'hero-gradient': 'linear-gradient(135deg, #0A192F 0%, #1A1A2E 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B9D 0%, #6C5CE7 100%)',
        'card-gradient': 'linear-gradient(135deg, #00D9FF 0%, #6C5CE7 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
