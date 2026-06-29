<template>
  <section class="relative w-full bg-[#fcfaf7] pt-32 pb-6 px-3 md:px-6 flex flex-col justify-between overflow-hidden antialiased select-none">
    
    <div class="absolute -right-20 top-10 w-[30rem] h-[30rem] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
    <div class="absolute left-10 bottom-5 w-[25rem] h-[25rem] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto z-10 items-stretch">
      
      <div class="lg:col-span-8 bg-[#e9f2eb] rounded-[1.5rem] p-8 sm:p-12 lg:p-14 flex flex-col justify-center shadow-[0_25px_60px_-15px_rgba(59,110,76,0.05)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(59,110,76,0.08)]">
        <div class="space-y-4">
          
          <span class="font-sans font-black text-xs text-emerald-800 uppercase tracking-[0.2em] block">
            {{ subtitle }}
          </span>

          <h1 class="text-5xl sm:text-7xl lg:text-[7.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] font-normal m-0 pt-2">
            <slot name="title">{{ title }}</slot>
          </h1>
          
        </div>
      </div>

      <div class="lg:col-span-4 relative rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] group min-h-[300px] lg:min-h-auto">
        <div 
          class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent z-10"></div>
        
        <div class="absolute bottom-8 left-8 z-20">
          <span class="font-sans text-[10px] tracking-[0.2em] bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-black uppercase border border-white/10">
            Captura Real
          </span>
        </div>
      </div>

    </div>

    <div class="w-full max-w-full mx-auto pt-6 px-2 border-t border-stone-200 flex justify-between items-center z-10 mt-10">
      <div class="text-xs font-mono text-stone-400 uppercase tracking-widest">
        {{ subtitle }} &bull; El Huerto de Lobras
      </div>
      <div class="flex gap-1 text-[#3b6e4c]/40 text-[8px]">
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
        <i class="fa-solid fa-circle"></i>
      </div>
    </div>

  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: 'Nuestros Alojamientos'
  },
  backgroundImage: {
    type: String,
    default: '/img/default.jpg'
  }
})
</script>

<style scoped>
@keyframes pulseSlow { 
  0%, 100% { opacity: 0.8; transform: scale(1); } 
  50% { opacity: 1; transform: scale(1.05); } 
}
.animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
</style>