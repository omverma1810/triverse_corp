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
        // Primary Colors
        'navy-blue': '#0A192F',
        'electric-blue': '#00D9FF',
        'deep-purple': '#6C5CE7',

        // Accent Colors
        'vibrant-pink': '#FF6B9D',
        'gold': '#F7B731',
        'emerald-green': '#2ECC71',

        // Neutral Colors
        'dark-bg': '#0F1419',
        'light-bg': '#F8F9FB',
        'text-dark': '#2C3E50',
        'text-light': '#6B7280',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B9D 0%, #FFA502 100%)',
        'card-gradient': 'linear-gradient(135deg, #00D9FF 0%, #6C5CE7 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-left': 'slideLeft 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
