// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  // 1. Desactivado en desarrollo/producción para evitar renderizados extra de la GPU
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: ['@nuxtjs/tailwindcss'],

  // Hoja de estilos global
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Ayuntamiento de Lobras / Turismo Alpujarra' }
      ],
      link: [
        // 2. Preconnect para FontAwesome (evita bloqueos de renderizado de iconos al hacer scroll)
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com', crossorigin: 'anonymous' },
        { 
          rel: 'stylesheet', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' 
        },
        
        // 3. Fuentes con display=swap para evitar tirones de recarga tipográfica (FOUT)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap' 
        }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        'aos'
      ]
    }
  }
})