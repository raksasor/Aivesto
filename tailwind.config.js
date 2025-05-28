/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
      colors: {
        primary: {
          50: 'rgb(255, 251, 235)',
          100: 'rgb(254, 243, 199)',
          200: 'rgb(253, 230, 138)',
          300: 'rgb(252, 211, 77)',
          400: 'rgb(251, 191, 36)',
          500: 'rgb(245, 158, 11)',
          600: 'rgb(217, 119, 6)',
          700: 'rgb(180, 83, 9)',
          800: 'rgb(146, 64, 14)',
          900: 'rgb(120, 53, 15)',
          950: 'rgb(99, 42, 9)'
        },
        secondary: {
          50: 'rgb(239, 246, 255)',
          100: 'rgb(219, 234, 254)',
          200: 'rgb(191, 219, 254)',
          300: 'rgb(147, 197, 253)',
          400: 'rgb(96, 165, 250)',
          500: 'rgb(59, 130, 246)',
          600: 'rgb(37, 99, 235)',
          700: 'rgb(29, 78, 216)',
          800: 'rgb(30, 64, 175)',
          900: 'rgb(30, 58, 138)',
          950: 'rgb(23, 37, 84)'
        },
        accent: {
          50: 'rgb(240, 253, 250)',
          100: 'rgb(204, 251, 241)',
          200: 'rgb(153, 246, 228)',
          300: 'rgb(94, 234, 212)',
          400: 'rgb(45, 212, 191)',
          500: 'rgb(20, 184, 166)',
          600: 'rgb(13, 148, 136)',
          700: 'rgb(15, 118, 110)',
          800: 'rgb(17, 94, 89)',
          900: 'rgb(19, 78, 74)',
          950: 'rgb(4, 47, 46)'
        },
        success: {
          500: 'rgb(34, 197, 94)',
          600: 'rgb(22, 163, 74)'
        },
        warning: {
          500: 'rgb(245, 158, 11)',
          600: 'rgb(217, 119, 6)'
        },
        error: {
          500: 'rgb(239, 68, 68)',
          600: 'rgb(220, 38, 38)'
        },
        'light-bg': 'rgb(var(--color-bg-light))',
        'dark-bg': 'rgb(var(--color-bg-dark))',
        'light-text': 'rgb(var(--color-text-light))',
        'dark-text': 'rgb(var(--color-text-dark))'
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-right': 'slideRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};