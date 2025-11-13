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
        // 'color-1': '#78B9B5', //
        // 'color-2': '#336266ff', //
        // 'color-3': '#065084', //
        // 'color-4': '#004ef7ff', //

        // Primary palette (used by components as color-1..color-4 in your code)
        'color-1': '#B9975B', // Luxury Gold (primary accent)
        'color-2': '#0B0B0B', // Deep Black background / heavy text
        'color-3': '#222222', // Dark Charcoal (secondary)
        'color-4': '#D9C69A', // Soft Gold (lighter accent / hover)
        // additional neutrals
        'muted-100': '#F7F6F4',
        'muted-200': '#EEEAE6',
        'muted-300': '#D9D2C6',
        // ---------------------------------
      },
    },
  },
  plugins: [],
}
