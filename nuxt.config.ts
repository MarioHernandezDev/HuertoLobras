// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  devtools: { enabled: false },

  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    siteUrl: 'https://elhuertodelobras.com',
    trailingSlash: false,
    gzip: true,
    xsl: false,
    defaults: {
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date().toISOString()
    }
  },

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
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'El Huerto de Lobras / Turismo rural en la Alpujarra' },
        { name: 'theme-color', content: '#3b6e4c' },
        { property: 'og:site_name', content: 'El Huerto de Lobras' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_ES' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'alternate', hreflang: 'es', href: 'https://elhuertodelobras.com/' },
        { rel: 'dns-prefetch', href: 'https://www.google.com' },
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