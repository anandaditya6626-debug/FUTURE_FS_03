/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fffdf7',
          100: '#fef9e7',
          200: '#fdf3c8',
          300: '#fce8a0',
          400: '#f9d668',
          DEFAULT: '#f5e6c8',
          500: '#f5e6c8',
          600: '#e8c87a',
          700: '#d4a843',
        },
        coffee: {
          50: '#fdf6ee',
          100: '#f8e8d0',
          200: '#f0cfa0',
          300: '#e5b06a',
          400: '#d9934a',
          500: '#c47335',
          DEFAULT: '#6b3a1f',
          600: '#8b5e3c',
          700: '#6b3a1f',
          800: '#4a2510',
          900: '#2d1508',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dark: '#a07830',
        },
        warm: {
          bg: '#faf6f0',
          card: '#fff8f0',
          dark: '#1a0f08',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'warm-gradient': 'linear-gradient(135deg, #fdf6ee 0%, #f5e6c8 50%, #e8c87a22 100%)',
        'dark-gradient': 'linear-gradient(135deg, #1a0f08 0%, #2d1508 50%, #4a2510 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(26,15,8,0.5) 0%, rgba(26,15,8,0.75) 60%, rgba(26,15,8,0.92) 100%)',
      },
      boxShadow: {
        'warm': '0 4px 24px rgba(107, 58, 31, 0.15)',
        'warm-lg': '0 8px 40px rgba(107, 58, 31, 0.25)',
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
        'card': '0 2px 20px rgba(107, 58, 31, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'steam': 'steam 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translateY(-30px) scale(1.2)' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(0.8)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(201,168,76,0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
