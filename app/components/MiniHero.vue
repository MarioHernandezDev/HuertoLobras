<template>
  <section class="relative w-full h-[48vh] min-h-[360px] md:h-[55vh] lg:h-[60vh] flex items-end pb-10 md:pb-14 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none antialiased bg-stone-950 hero-contain">
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        class="w-full h-full bg-cover bg-center transform-gpu hero-bg"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      ></div>

      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/10"></div>
    </div>

    <div class="relative z-10 w-full max-w-7xl mx-auto space-y-1 text-left pb-2">
      <span 
        v-if="subtitle" 
        class="text-amber-400 font-sans font-extrabold text-xs uppercase tracking-[0.3em] block drop-shadow-sm"
      >
        {{ subtitle }}
      </span>

      <h1 class="text-5xl sm:text-7xl lg:text-8xl font-manual text-white tracking-normal leading-[0.82] font-normal m-0 max-w-5xl drop-shadow-lg break-words">
        <slot name="title">{{ title }}</slot>
      </h1>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10"></div>
  </section>
</template>

<script setup>
import defaultImage from '~/assets/img/default.webp'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundImage: {
    type: String,
    default: defaultImage
  }
})
</script>

<style scoped>
/* contain evita que este bloque dispare reflow/repaint del resto de la página al hacer scroll */
.hero-contain {
  contain: layout paint style;
}

/* capa GPU propia y estática: el navegador la rasteriza una vez y la mueve en scroll sin repintar */
.hero-bg {
  will-change: transform;
  backface-visibility: hidden;
}
</style>