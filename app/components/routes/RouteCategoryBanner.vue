<template>
  <section class="relative w-full h-[40vh] sm:h-[48vh] lg:h-[55vh] min-h-[340px] flex items-end pb-10 md:pb-16 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none antialiased bg-stone-950 my-16 md:my-24">
    
    <!-- Imagen de fondo a pantalla completa con gradiente inferior -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div 
        class="w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out hover:scale-105"
        :style="{ backgroundImage: `url(${backgroundImage || defaultImage})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-stone-950/20"></div>
    </div>

    <!-- Contenido con v-scroll -->
    <div v-scroll class="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
      
      <div class="space-y-2 text-left">
        <div class="flex items-center gap-2.5">
          <!-- SVG Nativo Brújula / Navegación -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-amber-400 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 7.5l-2.25 6.75L7.5 16.5l2.25-6.75 4.5 0Z" />
          </svg>
          
          <span class="text-amber-400 font-sans font-extrabold text-xs uppercase tracking-[0.3em] block drop-shadow-sm">
            {{ categoryTag }}
          </span>
        </div>

        <h2 class="text-4xl sm:text-6xl lg:text-7xl font-manual text-white tracking-normal leading-[0.88] font-normal m-0 max-w-4xl drop-shadow-lg">
          {{ title }}
        </h2>

      </div>

      <!-- Número gigante de capítulo a la derecha -->
      <div class="shrink-0 select-none pointer-events-none opacity-25 hidden sm:block">
        <span class="font-manual text-7xl sm:text-8xl lg:text-9xl text-white font-bold leading-none block">
          {{ chapterNumber }}
        </span>
      </div>

    </div>

    <!-- Línea sutil de separación inferior -->
    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10"></div>

  </section>
</template>

<script setup>
import defaultImage from '~/assets/img/default.webp'

defineProps({
  chapterNumber: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  categoryTag: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: defaultImage
  }
})
</script>