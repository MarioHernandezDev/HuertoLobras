// plugins/scroll.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll', {
    mounted(el) {
      el.classList.add('reveal-init')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Añade la clase cuando el elemento entra en pantalla (baja o sube)
              el.classList.add('reveal-active')
            } else {
              // Quita la clase cuando sale de pantalla para que vuelva a animarse al reaparecer
              el.classList.remove('reveal-active')
            }
          })
        },
        {
          threshold: 0.15, // Se activa cuando el 15% del elemento es visible
          rootMargin: '0px 0px -40px 0px'
        }
      )

      observer.observe(el)
    }
  })
})