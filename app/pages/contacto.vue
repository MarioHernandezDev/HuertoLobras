<template>
  <div class="w-full bg-[#fcfaf7] min-h-screen antialiased relative overflow-x-hidden">
    
    <MiniHero 
      title="Contacto & Experiencias" 
      subtitle="Tu refugio en la Alpujarra"
      :backgroundImage="heroImage" 
    />

    <!-- SECCIÓN 1: CABECERA PRINCIPAL -->
    <section class="w-full pt-20 sm:pt-28 pb-12 px-6 md:px-12 lg:px-20 select-none">
      <div v-scroll class="max-w-6xl mx-auto space-y-6">
        <span class="font-sans font-black text-sm text-[#3b6e4c] uppercase tracking-[0.25em] block">
          Estamos para ti
        </span>
        <h2 class="text-5xl sm:text-7xl lg:text-8xl font-manual text-stone-900 tracking-wide leading-none m-0 font-normal">
          Visítanos en <span class="text-[#3b6e4c] font-black">el Huerto.</span>
        </h2>
      </div>
    </section>

    <!-- SECCIÓN 2: EXPERIENCIAS & INTERACCIÓN -->
    <section class="w-full pb-28 px-6 md:px-12 lg:px-20 select-none">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
        
        <!-- Bloque Google Reviews -->
        <div v-scroll class="bg-[#f6f3eb] rounded-[2.5rem] p-10 sm:p-14 border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-8">
          <div class="space-y-6">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-sm">
              <!-- SVG Estela / Valoración -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-3xl sm:text-4xl font-manual text-stone-900 font-normal leading-tight m-0">
              ¿Has estado en el Huerto?
            </h3>
            <p class="text-stone-700 text-lg sm:text-xl font-medium leading-relaxed m-0">
              Si has disfrutado de unos días de paz y naturaleza con nosotros, nos encantaría que nos dejaras una reseña positiva en Google Maps.
            </p>
          </div>

          <a 
            href="https://maps.app.goo.gl/HYHvHRA2dJD44kfFA" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-lets-go no-underline border-0 cursor-pointer w-full inline-flex items-center justify-center gap-4 text-base"
          >
            <span>VALORAR EN GOOGLE</span>
            <!-- SVG Google G -->
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.907 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
          </a>
        </div>

        <!-- Bloque Subida de Fotos -->
        <div v-scroll="{ delay: 100 }" class=" bg-[#f6f3eb] rounded-[2.5rem] p-10 sm:p-14 border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-8">
          <div class="space-y-6">
            <div class="w-16 h-16 rounded-2xl bg-[#3b6e4c]/15 text-[#3b6e4c] flex items-center justify-center shadow-sm">
              <!-- SVG Cámara -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
            </div>
            <h3 class="text-3xl sm:text-4xl font-manual text-stone-900 font-normal leading-tight m-0">
              Comparte tus fotos
            </h3>
            <p class="text-stone-700 text-lg sm:text-xl font-medium leading-relaxed m-0">
              ¿Has hecho fotos bonitas durante tu estancia? Súbelas a nuestro portal para que podamos añadirlas a la galería oficial.
            </p>
          </div>

          <a 
            href="https://subida-archivos.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-secondary no-underline border-0 cursor-pointer w-full inline-flex items-center justify-center gap-4 text-base"
          >
            <span>SUBIR FOTOS</span>
            <!-- SVG Subida Cloud -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- MAPA EXPANSIVO -->
    <section class="w-full h-[550px] md:h-[750px] relative border-t border-stone-200/60 bg-stone-200 overflow-hidden select-none">
      <iframe 
        src="https://maps.google.com/maps?q=Lobras,%20Granada&t=&z=14&ie=UTF8&iwloc=&output=embed" 
        class="w-full h-full border-0 absolute inset-0 block"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación de Lobras en Google Maps"
      ></iframe>
      
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none">
        <div class="bg-white px-8 py-4 rounded-full border border-stone-200/80 shadow-lg">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-stone-800 m-0 text-center">
            Entorno Natural de Lobras
          </p>
        </div>
      </div>
    </section>

    <!-- SECCIÓN 3: DATOS DE CONTACTO -->
    <section class="w-full pb-24 px-6 md:px-12 lg:px-20 select-none">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 border-y border-stone-200/80 py-12">
        
        <!-- Teléfono -->
        <div v-scroll class="bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center shadow-md">
            <!-- SVG Teléfono -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.584-6.584l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </div>
          <div class="space-y-2 pt-4">
            <span class="text-xs font-sans font-black text-stone-500 uppercase tracking-widest block">Teléfono / WhatsApp</span>
            <a href="tel:+34679038079" class="text-stone-900 text-2xl font-bold no-underline hover:text-[#3b6e4c] block transition-colors">
              +34 679 03 80 79
            </a>
          </div>
        </div>

        <!-- Correo -->
        <div v-scroll="{ delay: 100 }" class=" bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center shadow-md">
            <!-- SVG Carta / Correo -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <div class="space-y-2 pt-4">
            <span class="text-xs font-sans font-black text-stone-500 uppercase tracking-widest block">Correo Electrónico</span>
            <a href="mailto:info@elhuertodelobras.com" class="text-stone-900 text-xl font-bold no-underline hover:text-[#3b6e4c] block break-all transition-colors">
              info@elhuertodelobras.com
            </a>
          </div>
        </div>

        <!-- Ubicación -->
        <div v-scroll="{ delay: 200 }" class=" bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center shadow-md">
            <!-- SVG Ubicación / Pin -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div class="space-y-2 pt-4">
            <span class="text-xs font-sans font-black text-stone-500 uppercase tracking-widest block">Ubicación</span>
            <p class="text-stone-900 text-lg font-bold m-0 leading-snug">
              Lobras, Granada <br />
              <span class="text-stone-600 font-medium">Alpujarra Alta</span>
            </p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import heroImage from '~/assets/img/contacto.webp'

useSiteSeo({
  title: 'Contacto y ubicación en Lobras | El Huerto de Lobras',
  description: 'Reserva contacto con El Huerto de Lobras en Granada. Ubicación, teléfono, whatsapp y visitas en alojamiento rural de la Alpujarra.',
  path: '/contacto',
  ogTitle: 'Contacto y ubicación de El Huerto de Lobras',
  ogDescription: 'Reserva en Lobras, Granada. Contacta con El Huerto de Lobras para alojamientos rurales y experiencias en la Alpujarra.',
  twitterTitle: 'Contacto y ubicación de El Huerto de Lobras',
  twitterDescription: 'Teléfono, whatsapp y ubicación del alojamiento rural en Lobras, Granada.',
  image: 'https://elhuertodelobras.com/og/huerto-lobras-contacto.webp'
})

useHead({
  meta: [
    { 
      name: 'description', 
      content: 'Ponte en contacto con El Huerto de Lobras en la Alpujarra Alta. Consulta nuestra ubicación, valora tu experiencia en Google o comparte tus fotos con nosotros.' 
    },
    { 
      name: 'keywords', 
      content: 'contacto El Huerto de Lobras, teléfono casas rurales Lobras, cómo llegar a Lobras, opiniones El Huerto de Lobras' 
    },
    { property: 'og:title', content: 'Contacto y Ubicación | El Huerto de Lobras' },
    { property: 'og:description', content: 'Tu refugio en la Alpujarra Alta, Granada. Contacta por teléfono, WhatsApp o email.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://elhuertodelobras.com/contacto' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        'name': 'El Huerto de Lobras',
        'telephone': '+34679038079',
        'email': 'info@elhuertodelobras.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lobras',
          'addressRegion': 'Granada',
          'postalCode': '18449',
          'addressCountry': 'ES'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '36.9272',
          'longitude': '-3.2125'
        },
        'url': 'https://elhuertodelobras.com/contacto'
      })
    }
  ]
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.btn-lets-go {
  padding: 20px 36px;
  background: #3b6e4c;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  letter-spacing: 0.12em;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.btn-lets-go:hover {
  background: #315c3f;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.25);
}

.btn-secondary {
  padding: 20px 36px;
  background: #1c1917;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  letter-spacing: 0.12em;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #292524;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.25);
}
</style>