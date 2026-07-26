<template>
  <div 
    class="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_50px_-20px_rgba(42,53,44,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(42,53,44,0.12)] transition-all duration-500 hover:-translate-y-2 border border-stone-200/50 grid grid-cols-1 lg:grid-cols-12 group relative cursor-pointer"
  >
    <NuxtLink 
      :to="`/apartamentos/${apartment.id}`" 
      class="absolute inset-0 z-10 opacity-0"
      :aria-label="`Ver detalles de ${apartment.name}`"
    />

    <div class="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden bg-stone-900 pointer-events-none">
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-90"
        :style="{ backgroundImage: `url(${imageSource})` }"
      ></div>
      
      <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-950/80 via-stone-950/20 to-transparent z-10"></div>
      <div class="absolute inset-0 bg-[#3b6e4c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      <div class="absolute bottom-8 left-8 right-8 flex flex-col items-start gap-3 z-20">
        <div 
          v-for="(feature, i) in apartment.features" 
          :key="i" 
          class="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white/95 text-xs font-bold tracking-wide uppercase shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3.5 h-3.5 text-emerald-400 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>

    <div class="lg:col-span-7 p-8 sm:p-14 lg:p-16 flex flex-col justify-between bg-white relative">
      
      <div>
        <div class="flex justify-between items-start mb-8 gap-4">
          <div class="space-y-1">
            <span class="text-stone-500 font-mono text-xs uppercase tracking-[0.2em] block font-bold">
              &bull; {{ apartment.code }}
            </span>
            <h2 class="font-manual text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal tracking-wide leading-none m-0 transition-colors duration-300 group-hover:text-[#3b6e4c]">
              {{ apartment.name }}
            </h2>
          </div>
          
          <div class="bg-stone-50 border border-stone-200/60 px-5 py-2.5 rounded-2xl text-right shrink-0 shadow-sm z-20">
            <span class="text-[10px] font-mono uppercase tracking-[0.15em] text-stone-400 font-black block mb-0.5">Espacio</span>
            <span class="text-sm font-sans font-black text-stone-800 tracking-tight">{{ apartment.capacity }}</span>
          </div>
        </div>
        
        <div class="inline-flex items-center gap-2 mb-6 bg-[#e9f2eb] px-4 py-1.5 rounded-full text-[#3b6e4c] text-xs font-mono uppercase tracking-widest font-black">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{{ apartment.tag }}</span>
        </div>

        <p class="text-stone-600 text-base sm:text-xl font-medium leading-relaxed m-0 normal-case max-w-2xl">
          {{ apartment.description }}
        </p>
      </div>

      <div class="mt-14 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
        <div class="space-y-0.5">
          <span class="text-xs font-mono uppercase tracking-[0.2em] text-stone-400 block font-bold">Garantía El Huerto</span>
          <span class="text-base font-sans font-black text-stone-800">Reserva directa sin intermediarios</span>
        </div>
        
        <NuxtLink 
          :to="`/apartamentos/${apartment.id}`" 
          class="btn-tourist-explore group/btn relative z-20 no-underline"
        >
          <span>Explorar Estancia</span>
          <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover/btn:scale-110 group-hover/btn:bg-white/30">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </NuxtLink>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import defaultImg from '~/assets/img/default.jpg'

const props = defineProps({
  apartment: {
    type: Object,
    required: true
  }
})

const imageSource = computed(() => {
  return props.apartment.image || defaultImg
})
</script>

<style scoped>
.btn-tourist-explore {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 14px 14px 36px;
  background: #1c1917; 
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  box-shadow: 0 12px 35px -12px rgba(28, 25, 23, 0.35);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .btn-tourist-explore {
  background: #3b6e4c;
  box-shadow: 0 20px 40px -10px rgba(59, 110, 76, 0.4);
}
</style>