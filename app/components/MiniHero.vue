<template>
  <div class="relative -mx-8 md:-mx-14 lg:-mx-20 -mt-8 md:-mt-14 lg:-mt-20 mb-16 overflow-hidden bg-stone-950 text-white min-h-[45vh] lg:min-h-[55vh] flex flex-col justify-end p-8 md:p-14 lg:p-20 select-none border-b border-stone-900 shadow-[0_15px_40px_rgba(0,0,0,0.1)]">
    
    <div class="absolute inset-0 z-0">
      <img 
        :src="imagenBg" 
        alt="Cabecera" 
        class="w-full h-full object-cover opacity-50 scale-105 animate-panoramic"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent"></div>
      <div class="absolute inset-0 bg-[#2d4a22]/15 mix-blend-multiply"></div>
      <div class="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 to-transparent"></div>
    </div>

    <div class="relative z-10 space-y-4 max-w-5xl transform translate-y-4 animate-reveal">
      
      <nav class="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-[0.3em] text-stone-300 font-sans backdrop-blur-sm bg-white/5 py-1.5 px-4 rounded-full w-fit border border-white/10 shadow-sm">
        <NuxtLink to="/" class="hover:text-[var(--color-secundario)] transition-colors duration-300">Inicio</NuxtLink>
        <span class="text-stone-500 font-normal">/</span>
        <span class="text-white font-extrabold">{{ sectionName }}</span>
      </nav>

      <h1 class="text-4xl md:text-5xl lg:text-7xl font-serif text-white tracking-tight leading-[1.05] m-0 drop-shadow-sm">
        {{ titulo }}
      </h1>

      <div class="h-[1.5px] w-16 bg-[var(--color-secundario)] my-2 opacity-90"></div>

      <p v-if="subtitulo" class="text-base md:text-lg lg:text-xl font-serif italic text-stone-200 font-medium max-w-3xl leading-relaxed drop-shadow-sm">
        {{ subtitulo }}
      </p>
    </div>

  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true
  },
  sectionName: {
    type: String,
    required: true
  },
  subtitulo: {
    type: String,
    default: ''
  },
  imagenBg: {
    type: String,
    default: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80'
  }
})
</script>

<style scoped>
/* ANIMACIONES CINEMATOGRÁFICAS EXCLUSIVAS DE AGENCIA */

/* Movimiento lento y majestuoso de la imagen (Efecto paneo de dron) */
.animate-panoramic {
  animation: panoramicMotion 24s ease-in-out infinite alternate;
}

/* Revelación elegante del texto con curva de velocidad premium */
.animate-reveal {
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes panoramicMotion {
  0% {
    transform: scale(1.02) translate(0px, 0px);
  }
  100% {
    transform: scale(1.08) translate(-10px, -5px);
  }
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>