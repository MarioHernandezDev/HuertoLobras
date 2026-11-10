// Directiva v-scroll: revelado al hacer scroll, pensada para móvil.
//
//   v-scroll                      -> sube y aparece (por defecto)
//   v-scroll="'fade'"             -> solo fundido
//   v-scroll="'left' | 'right' | 'scale'"
//   v-scroll="{ variant: 'up', delay: 120 }"   -> escalonado (ms)
//
// Cómo funciona (y por qué es ligera):
//  - UN solo IntersectionObserver compartido por todos los elementos.
//  - Anima UNA vez y deja de observar (antes se re-animaba entrando y saliendo).
//  - Al terminar elimina clases, will-change y delay inline: el elemento queda "limpio"
//    y sus hover/transitions propios no heredan retrasos.
//  - Lo que ya se ve en la primera carga (hidratación SSR) NO se oculta: sin parpadeos.
//  - Respeta prefers-reduced-motion.

type Variant = 'up' | 'fade' | 'left' | 'right' | 'scale'
type Binding = Variant | { variant?: Variant; delay?: number } | undefined

const done = (el: HTMLElement) => {
  el.classList.remove('reveal', 'is-visible', 'reveal-up', 'reveal-fade', 'reveal-left', 'reveal-right', 'reveal-scale')
  el.style.transitionDelay = ''
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) {
    // Sin estado en servidor: el HTML llega visible y la directiva no hace nada.
    nuxtApp.vueApp.directive('scroll', { getSSRProps: () => ({}) })
    return
  }

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  let io: IntersectionObserver | null = null

  const getIO = () =>
    (io ||= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          io!.unobserve(el)
          el.classList.add('is-visible')
          let finished = false
          const cleanup = () => {
            if (finished) return
            finished = true
            done(el)
          }
          el.addEventListener('transitionend', (e) => {
            if (e.target === el && (e.propertyName === 'opacity' || e.propertyName === 'transform')) cleanup()
          })
          setTimeout(cleanup, 1800) // red de seguridad si no llega transitionend
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    ))

  nuxtApp.vueApp.directive('scroll', {
    mounted(el: HTMLElement, binding: { value: Binding }) {
      if (reduced) return

      // Contenido ya visible durante la hidratación inicial: se queda como está.
      const rect = el.getBoundingClientRect()
      if (nuxtApp.isHydrating && rect.top < window.innerHeight * 0.92 && rect.bottom > 0) return

      const v = binding.value
      const variant: Variant = (typeof v === 'string' ? v : v?.variant) || 'up'
      const delay = typeof v === 'object' && v ? v.delay || 0 : 0

      el.classList.add('reveal', `reveal-${variant}`)
      if (delay) el.style.transitionDelay = `${delay}ms`
      getIO().observe(el)
    },
    unmounted(el: HTMLElement) {
      io?.unobserve(el)
    },
    getSSRProps: () => ({})
  })
})
