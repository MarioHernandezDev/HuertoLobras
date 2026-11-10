<template>
  <section class="relative h-[100dvh] w-full flex flex-col justify-between p-4 sm:p-8 md:p-12 lg:p-16 pt-24 sm:pt-28 pb-8 overflow-hidden antialiased select-none">
    
    <div class="absolute inset-0 z-0 overflow-hidden bg-stone-900">
      <img
        :src="heroImg"
        alt="Vista de Lobras y El Huerto de Lobras en la Alpujarra Granadina"
        class="w-full h-full object-cover hero-zoom"
        fetchpriority="high"
        decoding="async"
      />
    </div>

    <div class="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-stone-950/10 z-0 pointer-events-none"></div>

    <div></div>

    <div class="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6 md:gap-8 pb-2">
      
      <div class="space-y-1 w-full">
        <span class="enter-up text-amber-400 font-sans font-extrabold text-xs uppercase tracking-[0.3em] block drop-shadow-sm" style="--enter-delay: 200ms">
          Alojamiento Rural
        </span>
        <h1 style="--enter-delay: 350ms" class="enter-up text-7xl sm:text-8xl md:text-8xl lg:text-[9rem] font-manual text-white tracking-normal leading-[0.82] font-normal m-0 drop-shadow-lg w-full break-words">
          El Huerto <br />
          <span class="text-white font-black block">de Lobras.</span>
        </h1>
      </div>

      <button 
        @click="$emit('navigate', 'experiencias')" 
        style="--enter-delay: 700ms" class="enter-up btn-lets-go group border-0 cursor-pointer w-full md:w-auto shrink-0 mt-2 md:mt-0"
        aria-label="Ir a experiencias"
      >
        <span>¡VAMOS!</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke-width="2.5" 
          stroke="currentColor" 
          class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

    </div>

  </section>
</template>

<script setup>
import heroImg from '~/assets/img/hero.webp'
defineEmits(['navigate'])
</script>

<style scoped>
.btn-lets-go {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 36px;
  background: #3b6e4c;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.12em;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 768px) {
  .btn-lets-go {
    padding: 18px 40px;
  }
}

.btn-lets-go:hover {
  background: #315c3f;
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.5);
}
</style>