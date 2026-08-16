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

    <!-- Contenido alineado al ancho de grilla (max-w-7xl) -->
    <div class="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
      
      <div class="space-y-2 text-left">
        <div class="flex items-center gap-3">
          <i :class="[icon, 'text-amber-400 text-xs sm:text-sm']"></i>
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
import defaultImage from '~/assets/img/default.jpg'

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
  icon: {
    type: String,
    default: 'fa-solid fa-compass'
  },
  backgroundImage: {
    type: String,
    default: defaultImage
  }
})
</script>