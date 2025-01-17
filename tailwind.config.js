/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      fontSize: {
        'custom-6xl': '64px',
        'custom-5xl': '56px',
      },
      colors: {
        'off-white': '#FFFFFF1A',
        'off-gray': '#FFFFFF4D',
      },

      backgroundImage: {
        'hero-layer': "url('/public/assets/images/hero-bg-layer.webp')",
        'project-layer': "url('/public/assets/images/project-bg-layer.webp')",
      }
    },
  },
  plugins: [],
}