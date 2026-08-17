<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased relative overflow-x-hidden">
    
    <MiniHero 
      title="Contacto & Experiencias" 
      subtitle="Tu refugio en la Alpujarra"
      :backgroundImage="heroImage" 
    />

    <!-- SECCIÓN 1: CABECERA PRINCIPAL -->
    <section class="w-full pt-20 sm:pt-28 pb-12 px-6 md:px-12 lg:px-20 select-none">
      <div class="max-w-6xl mx-auto space-y-6">
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
        <div class="bg-[#f6f3eb] rounded-[2.5rem] p-10 sm:p-14 border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-8">
          <div class="space-y-6">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl shadow-sm">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
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
            <i class="fa-brands fa-google text-xl" aria-hidden="true"></i>
          </a>
        </div>

        <!-- Bloque Subida de Fotos -->
        <div class="bg-[#f6f3eb] rounded-[2.5rem] p-10 sm:p-14 border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-8">
          <div class="space-y-6">
            <div class="w-16 h-16 rounded-2xl bg-[#3b6e4c]/15 text-[#3b6e4c] flex items-center justify-center text-2xl shadow-sm">
              <i class="fa-solid fa-camera" aria-hidden="true"></i>
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
            <i class="fa-solid fa-cloud-arrow-up text-xl" aria-hidden="true"></i>
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
        <div class="bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid fa-phone" aria-hidden="true"></i>
          </div>
          <div class="space-y-2 pt-4">
            <span class="text-xs font-sans font-black text-stone-500 uppercase tracking-widest block">Teléfono / WhatsApp</span>
            <a href="tel:+34679038079" class="text-stone-900 text-2xl font-bold no-underline hover:text-[#3b6e4c] block">
              +34 679 03 80 79
            </a>
          </div>
        </div>

        <!-- Correo -->
        <div class="bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-regular fa-envelope" aria-hidden="true"></i>
          </div>
          <div class="space-y-2 pt-4">
            <span class="text-xs font-sans font-black text-stone-500 uppercase tracking-widest block">Correo Electrónico</span>
            <a href="mailto:info@elhuertodelobras.com" class="text-stone-900 text-xl font-bold no-underline hover:text-[#3b6e4c] block break-all">
              info@elhuertodelobras.com
            </a>
          </div>
        </div>

        <!-- Ubicación -->
        <div class="bg-[#f6f3eb] rounded-3xl p-8 space-y-4 border border-stone-200/50 flex flex-col justify-between">
          <div class="w-14 h-14 rounded-2xl bg-[#3b6e4c] text-white flex items-center justify-center text-xl shadow-md">
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
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

  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import heroImage from '~/assets/img/contacto.webp'

// SEO On-Page
useHead({
  title: 'Contacto y Ubicación | El Huerto de Lobras',
  meta: [
    { 
      name: 'description', 
      content: 'Ponte en contacto con El Huerto de Lobras en la Alpujarra Alta. Consulta nuestra ubicación, valora tu experiencia en Google o comparte tus fotos con nosotros.' 
    },
    { property: 'og:title', content: 'Contacto y Ubicación | El Huerto de Lobras' },
    { property: 'og:description', content: 'Tu refugio en la Alpujarra Alta, Granada. Contacta por teléfono, WhatsApp o email.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://elhuertodelobras.com/contacto' }
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
}

.btn-lets-go:hover {
  background: #315c3f;
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
}

.btn-secondary:hover {
  background: #292524;
}
</style>