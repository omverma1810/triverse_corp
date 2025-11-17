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
        // Deep Sophisticated Tones
        'midnight-navy': '#0A0E27',
        'rich-black': '#0F0F0F',
        'charcoal': '#1E1E2E',
        'slate': '#2C2C3A',

        // Vibrant Accent Colors
        'royal-purple': '#6C5CE7',
        'electric-blue': '#00D9FF',
        'neon-pink': '#FF0080',
        'hot-coral': '#FF6B6B',
        'sunset-orange': '#FFA500',

        // Metallic & Jewel Tones
        'rose-gold': '#B76E79',
        'champagne-gold': '#F7E7CE',
        'metallic-gold': '#FFD700',
        'silver': '#C0C0C0',
        'bronze': '#CD7F32',
        'emerald': '#50C878',
        'sapphire': '#0F52BA',
        'ruby': '#E0115F',
        'amethyst': '#9966CC',

        // Light & Neutral Tones
        'pure-white': '#FFFFFF',
        'off-white': '#F8F9FB',
        'warm-grey': '#E5E7EB',
        'cool-grey': '#9CA3AF',
        'soft-beige': '#F5F5DC',

        // Legacy support
        'dark-bg': '#0A0E27',
        'light-bg': '#F8F9FB',
      },
      backgroundImage: {
        // Hero Gradients
        'cosmic-purple': 'linear-gradient(135deg, #6C5CE7 0%, #764BA2 25%, #667EEA 50%, #00D9FF 100%)',
        'sunset-vibrancy': 'linear-gradient(135deg, #FF6B6B 0%, #FFA500 50%, #FFD700 100%)',
        'royal-luxury': 'linear-gradient(135deg, #1A1A2E 0%, #6C5CE7 50%, #00D9FF 100%)',

        // Button/CTA Gradients
        'neon-energy': 'linear-gradient(135deg, #FF0080 0%, #FF6B9D 100%)',
        'success-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'electric-tech': 'linear-gradient(135deg, #00D9FF 0%, #6C5CE7 100%)',

        // Card/Section Gradients
        'metallic-shine': 'linear-gradient(145deg, #B76E79 0%, #F7E7CE 50%, #FFD700 100%)',
        'deep-ocean': 'linear-gradient(135deg, #0F52BA 0%, #0A0E27 100%)',
        'purple-haze': 'linear-gradient(135deg, #9966CC 0%, #6C5CE7 50%, #00D9FF 100%)',

        // Legacy support
        'hero-gradient': 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
        'cta-gradient': 'linear-gradient(135deg, #FF6B9D 0%, #FFA502 100%)',
        'card-gradient': 'linear-gradient(135deg, #00D9FF 0%, #6C5CE7 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Sora', 'sans-serif'],
        script: ['Allura', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-left': 'slideLeft 20s linear infinite',
        'shimmer': 'shimmer 3s infinite',
        'glow-pulse': 'glowPulse 2s infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
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
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 217, 255, 0.8), 0 0 60px rgba(108, 92, 231, 0.6)'
          },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
