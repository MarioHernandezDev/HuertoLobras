<template>
  <div class="w-full bg-stone-900 pt-32 pb-0 mt-0">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center space-y-6 pb-24 overflow-hidden">
      <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400 block animate-fade-up">Identidad Popular</span>
      <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-white tracking-wide leading-[0.9] m-0 font-normal pb-4 animate-fade-up">
        Fiestas en <span class="font-black text-amber-400">Lobras.</span>
      </h2>
      <p class="text-stone-300 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto m-0 animate-fade-up">
        En Lobras las fiestas son sagradas. Una mezcla de cultura, repostería artesanal y diversión compartida entre vecinos de todas las edades. ¡Te sugerimos venir a vivirlas!
      </p>
    </div>

    <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0 bg-stone-950 border-t border-stone-800 animate-fade-up">
      <div 
        v-for="index in 9" 
        :key="index"
        @click="$emit('openLightbox', index, 'Fiestas de Lobras', 9)"
        class="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden bg-stone-900 cursor-pointer group"
      >
        <img :src="image" alt="Fiestas tradicionales y cultura popular de Lobras en la Alpujarra" class="w-full h-full object-cover block transition-all duration-700 group-hover:scale-105 group-hover:opacity-75" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: String
})

defineEmits(['openLightbox'])
</script>