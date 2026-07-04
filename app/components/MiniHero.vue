<template>
  <section class="relative w-full bg-[#fcfaf7] pt-32 pb-6 px-3 md:px-6 flex flex-col justify-between overflow-hidden antialiased select-none">
    
    <div class="absolute -right-20 top-10 w-[30rem] h-[30rem] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
    <div class="absolute left-10 bottom-5 w-[25rem] h-[25rem] bg-amber-100/40 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="w-full max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch">
      
      <div class="lg:col-span-7 bg-[#e9f2eb] rounded-[2rem] p-8 sm:p-12 lg:p-14 flex flex-col justify-center shadow-[0_25px_60px_-15px_rgba(59,110,76,0.05)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(59,110,76,0.08)]">
        <div class="space-y-4">
          <span class="font-sans font-black text-xs text-emerald-800 uppercase tracking-[0.2em] block">
            {{ subtitle }}
          </span>

          <h1 class="text-5xl sm:text-7xl lg:text-[6.2rem] font-manual text-stone-900 tracking-wide leading-[0.9] font-normal m-0 pt-2 pb-3">
            <slot name="title">{{ title }}</slot>
          </h1>
        </div>
      </div>

      <div class="lg:col-span-5 relative rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] group min-h-[380px] lg:min-h-auto">
        
        <video 
          v-if="backgroundVideo"
          autoplay 
          loop
          muted 
          playsinline
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        >
          <source :src="backgroundVideo" type="video/mp4" />
        </video>

        <div 
          v-else
          class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          :style="{ backgroundImage: `url(${backgroundImage})` }"
        ></div>

        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/10 z-10"></div>
        
        <div class="absolute bottom-8 left-8 z-20">
          <span class="font-sans text-[10px] tracking-[0.2em] bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-black uppercase border border-white/10">
            {{ backgroundVideo ? 'Ventana Viva' : 'Captura Real' }}
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
import defaultVideo from '~/assets/video/lobras.mp4'

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
  },
  backgroundVideo: {
    type: String,
    default: defaultVideo
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