/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bleu": "#bba7e7",
        "rouge": "#ff3636",
        "vert": "#6dd678",
        "jaune": "#ffd600",
        "beige": "#fffef6",
        "noir": "#000000"
 },
      fontFamily: {
        'neuemontreal': ['PPNeueMontreal'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
