<template>
  <section class="w-full bg-[#3b6e4c] grid grid-cols-1 md:grid-cols-12 h-auto lg:h-[700px] overflow-hidden relative my-24 md:my-32 shadow-[0_20px_50px_-25px_rgba(59,110,76,0.25)] animate-fade-up">
    <div class="md:col-span-5 bg-[#3b6e4c] text-white p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-8 z-20">
      <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400">Actividad Estacional</span>
      <h3 class="font-manual text-5xl lg:text-7xl text-white m-0 font-normal leading-tight">
        Vendimia en <br /><span class="font-black text-amber-400">Familia.</span>
      </h3>
      <p class="text-stone-100 text-lg lg:text-xl font-medium leading-relaxed m-0 opacity-95">
        En el Huerto de Lobras te ofrecemos la oportunidad de realizar una actividad única: la vendimia tradicional. Conoce todo el proceso desde la recogida hasta la pisada de la uva, transmitiendo a los niños el valor de la naturaleza.
      </p>
      <div class="pt-4">
        <NuxtLink to="/blog/beneficios-vendimia-familia" class="btn-minimal-premium-white">
          <span>Ver beneficios en el blog</span>
        </NuxtLink>
      </div>
    </div>

    <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 h-96 md:h-full gap-0 bg-stone-950">
      <div 
        v-for="(imgSrc, index) in images" 
        :key="index"
        @click="$emit('openLightbox', index + 1, 'Vendimia en el Huerto', images.length)"
        class="relative bg-stone-900 group overflow-hidden h-full cursor-pointer"
      >
        <img :src="imgSrc" alt="Vendimia tradicional en el Huerto de Lobras, cosecha familiar en la Alpujarra" class="w-full h-full object-cover block transition-all duration-500 group-hover:scale-105 group-hover:opacity-80" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

defineEmits(['openLightbox'])
</script>