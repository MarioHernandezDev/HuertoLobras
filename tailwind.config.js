/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Vinculamos tu atajo 'font-romance' al @font-face del main.css
        romance: ['Modern Romance', 'serif'],
        
        // Mapeamos las clases nativas de Tailwind a tus fuentes de Google cargadas en nuxt.config.ts
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}