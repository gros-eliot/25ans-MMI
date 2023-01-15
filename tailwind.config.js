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
      },
      gridTemplateColumns: {
        'galerie-profs': "repeat(auto-fit,minmax(270px,1fr))",
        'galerie-profs-2': "repeat(auto-fit,minmax(300px,1fr))",
      },
      backgroundImage: {
        'malsot1' : "url('src/assets/images/D-Malsot.jpg')",
        'malsot2' : "url('src/assets/images/funny-version/Malsot.jpeg')",
        'senente1' : "url('src/assets/images/X-SENENTE.jpg')",
        'senente2' : "url('src/assets/images/funny-version/Senente1.jpeg')",
        'chatonnay1' : "url('src/assets/images/P-Chatonnay.jpg')",
        'chatonnay2' : "url('src/assets/images/funny-version/Chatonnay.jpeg')",
        'chartogne1' : "url('src/assets/images/E-Chartogne.jpg')",
        'chartogne2' : "url('src/assets/images/funny-version/Chartogne.jpeg')",
        'bodet1' : "url('src/assets/images/PASDEPHOTO.jpg')",
        'bodet2' : "url('src/assets/images/funny-version/Bodet.jpeg')",
        'event' : "url('src/assets/images/event.jpg')"

        
      }
    },
  },
  plugins: [],
}
