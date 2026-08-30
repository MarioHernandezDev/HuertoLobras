<template>
  <section id="alojamientos-galeria" class="relative w-full bg-[#fcfaf7] pt-36 md:pt-48 pb-0 antialiased select-none overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="absolute -top-10 -right-20 w-[28rem] h-[28rem] md:w-[45rem] md:h-[45rem] rounded-full bg-[#e8decb]/60 blur-[100px] md:blur-[140px]"></div>
      <div class="absolute top-1/2 -left-24 w-[30rem] h-[30rem] md:w-[48rem] md:h-[48rem] rounded-full bg-[#d6c4ad]/50 blur-[90px] md:blur-[130px]"></div>
      <div class="absolute bottom-10 right-10 w-[26rem] h-[26rem] md:w-[42rem] md:h-[42rem] rounded-full bg-[#e2d5c3]/70 blur-[80px] md:blur-[120px]"></div>
    </div>

    <!-- Encabezado con animación de entrada -->
    <div v-scroll class="relative z-10 mb-16 md:mb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div class="max-w-3xl">
        <span class="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#3b6e4c] font-black block mb-4">
          El refugio por dentro
        </span>
        <h2 class="text-5xl sm:text-7xl lg:text-[6.2rem] font-manual text-stone-900 tracking-wide leading-[0.88] m-0">
          Un vistazo sincero <br />
          <span class="text-[#3b6e4c] font-black">a nuestras casas.</span>
        </h2>
      </div>
      
      <NuxtLink 
        to="/apartamentos" 
        class="btn-minimal-premium group no-underline text-center w-full md:w-auto shrink-0 mb-2 md:mb-0"
      >
        <span>Visitar apartamentos</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-all duration-500 cubic-bezier group-hover:translate-x-1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Grid de imágenes con revelado al scroll -->
    <div v-scroll class="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 p-0 m-0 bg-transparent">
      <div 
        v-for="index in 12" 
        :key="index"
        @click="openLightbox(index)"
        class="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-stone-900 cursor-pointer group p-0 m-0"
      >
        <img 
          :src="getImageSrc(index)" 
          :alt="`Casa rural en Lobras, vista ${index} del alojamiento ${index}`"
          class="w-full h-full object-cover block transition-all duration-500 group-hover:scale-105 group-hover:opacity-85" 
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white drop-shadow-md">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" />
          </svg>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[9999] bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          @click="closeLightbox"
        >
          <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer" @click="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div class="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center" @click.stop>
            <img 
              :src="getImageSrc(activeIndex)" 
              :alt="`Vista ampliada de alojamiento rural en Lobras, imagen ${activeIndex}`"
              class="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl block" 
              loading="eager"
              decoding="async"
            />
            <p class="text-stone-400 font-mono text-sm uppercase tracking-widest text-center mt-6 font-bold">
              Fotografía {{ activeIndex }} de 12
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>
    
  </section>
</template>

<script setup>
import { ref } from 'vue'
import defaultImage from '~/assets/img/default.webp'

const gridImages = Object.fromEntries(
  Object.entries(import.meta.glob('~/assets/img/grid/*.webp', { eager: true, import: 'default' })).map(([key, value]) => {
    const fileName = key.split('/').pop() || key
    const baseName = fileName.replace(/\.webp$/i, '')
    return [baseName, value]
  })
)

defineEmits(['navigate'])

const isOpen = ref(false)
const activeIndex = ref(null)

const getImageSrc = (index) => {
  const normalizedIndex = Number(index)
  const key = `grid${normalizedIndex}`
  return gridImages[key] || defaultImage
}

const openLightbox = (index) => {
  activeIndex.value = index
  isOpen.value = true
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isOpen.value = false
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.btn-minimal-premium {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 44px;
  background: #1c1917;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  box-shadow: 0 10px 30px -10px rgba(28, 25, 23, 0.3);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-minimal-premium:hover {
  background: #3b6e4c;
  transform: translateY(-2px);
  box-shadow: 0 15px 35px -8px rgba(59, 110, 76, 0.4);
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>