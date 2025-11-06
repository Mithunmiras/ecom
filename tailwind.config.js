/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          primary: '#B8860B',
          dark: '#8B4513',
          light: '#DAA520',
          accent: '#FFD700',
        },
        jewelry: {
          dark: '#1a1a1a',
          light: '#f8f8f8',
          text: '#2c2c2c',
          'text-light': '#666666',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 2px 10px rgba(0, 0, 0, 0.1)',
        'luxury-lg': '0 5px 25px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideDown: {
          'from': { transform: 'translateY(-100%)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
