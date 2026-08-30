// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  image: {
    format: ['webp'],
    quality: 78,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  css: ['~/assets/css/main.css'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'es' },
      titleTemplate: '%s · El Huerto de Lobras | Turismo Alpujarra',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Ayuntamiento de Lobras / Turismo Alpujarra' },
        { property: 'og:site_name', content: 'El Huerto de Lobras' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
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
      include: ['aos']
    }
  }
})