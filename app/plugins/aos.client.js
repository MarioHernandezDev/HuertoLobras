import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.addEventListener('load', () => {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,          // no re-anima al volver a scrollear
        mirror: false,       // evita doble cálculo al salir del viewport
        offset: 60,
        throttleDelay: 99,   // clave: limita la frecuencia de recálculo en scroll
        debounceDelay: 50
      })
    })
  }
})