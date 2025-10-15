/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'xs': '475px',
      },
      colors: {
        // --- Custom Palette Definition ---
        'color-1': '#78B9B5', //
        'color-2': '#336266ff', //
        'color-3': '#065084', //
        'color-4': '#004ef7ff', //
        // ---------------------------------
      },
    },
  },
  plugins: [],
}
