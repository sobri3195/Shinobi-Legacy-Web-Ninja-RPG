/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fire: {
          light: '#FF4500',
          DEFAULT: '#DC143C',
          dark: '#8B0000'
        },
        water: {
          light: '#1E90FF',
          DEFAULT: '#4682B4',
          dark: '#000080'
        },
        thunder: {
          light: '#FFD700',
          DEFAULT: '#FFA500',
          dark: '#FF8C00'
        },
        wind: {
          light: '#32CD32',
          DEFAULT: '#228B22',
          dark: '#006400'
        },
        earth: {
          light: '#8B4513',
          DEFAULT: '#A0522D',
          dark: '#654321'
        },
        ui: {
          primary: '#2C3E50',
          secondary: '#ECF0F1',
          accent: '#E74C3C',
          dark: '#1A1A1A',
          light: '#F5F5F5'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        ninja: ['Bebas Neue', 'Impact', 'sans-serif']
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.5s ease-in',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'attack': 'attack 0.6s ease-out',
        'damage': 'damage 0.4s ease-out'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        attack: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(20px)' }
        },
        damage: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' }
        }
      }
    }
  },
  plugins: []
}
