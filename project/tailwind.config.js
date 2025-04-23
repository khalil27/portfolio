/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#66d3ff',
          400: '#1ab8ff',
          500: '#00a3ff',
          600: '#0082df',
          700: '#0066b4',
          800: '#005694',
          900: '#004879',
          950: '#002d4d',
        },
        secondary: {
          50: '#fff1f3',
          100: '#ffe0e4',
          200: '#ffc7ce',
          300: '#ff9da9',
          400: '#ff6476',
          500: '#ff2d47',
          600: '#ed1332',
          700: '#c80b28',
          800: '#a50c25',
          900: '#880e24',
          950: '#4b0311',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
};