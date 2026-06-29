<template>
  <section id="features" class="w-full bg-[#fcfaf7] antialiased select-none">
    
    <div class="w-full h-[50vh] md:h-[65vh] overflow-hidden relative">
      <div class="absolute inset-0 bg-cover bg-center bg-fixed feature-full-img scale-110"></div>
      <div class="absolute inset-0 bg-stone-900/10"></div>
      
      
    </div>

    <div class="max-w-7xl mx-auto py-24 px-6 md:px-12 text-center">
      <div class="max-w-4xl mx-auto space-y-10">
        
        <span class="font-sans font-black text-xs text-emerald-800 uppercase tracking-[0.2em] block">
          La experiencia campo viva
        </span>
        
        <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] m-0">
          El lujo de <br />
          <span class="text-amber-500 font-black">no hacer nada.</span>
        </h2>
        
        <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto normal-case">
          Cambia el ruido de las notificaciones por el murmullo de las acequias. Aquí la única urgencia es decidir qué echar a la brasa.
        </p>

        <div class="pt-8 flex flex-col items-center gap-6">
          <button 
            @click="$emit('navigate', 'alojamientos')"
            class="btn-minimal-premium group"
            aria-label="Planear mi escapada"
          >
            <span>Planear mi escapada</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-all duration-500 cubic-bezier group-hover:translate-x-1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-stone-400">
            Disponibilidad para grupos y familias
          </p>
        </div>

      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-200/50 pt-20">
      <div class="space-y-4">
        <h3 class="font-manual text-3xl text-stone-900 font-black tracking-wide">Fuego real</h3>
        <p class="text-stone-500 text-base leading-relaxed m-0">
          Nada de cocinas eléctricas. Barbacoas de piedra, leña de encina y el sabor ahumado que solo da el campo.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="font-manual text-3xl text-stone-900 font-black tracking-wide">Agua de sierra</h3>
        <p class="text-stone-500 text-base leading-relaxed m-0">
          Nuestra piscina se nutre del aire puro y la sombra de los frutales. Un refugio frío en los días de sol alpujarreño.
        </p>
      </div>
      <div class="space-y-4">
        <h3 class="font-manual text-3xl text-stone-900 font-black tracking-wide">Pasos lentos</h3>
        <p class="text-stone-500 text-base leading-relaxed m-0">
          Senderos que nacen en tu puerta. Sin coches, sin asfalto. Solo tú, el grupo y la montaña salvaje.
        </p>
      </div>
    </div>

  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>

<style scoped>
.feature-full-img {
  background-image: url('~/assets/img/lobras.png');
}

/* --- BOTÓN MINIMALISTA PREMIUM --- */
.btn-minimal-premium {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 44px;
  background: #1c1917; /* stone-900 de base */
  color: #ffffff;
  border: none;
  border-radius: 9999px; /* Píldora pura */
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
  background: #3b6e4c; /* Cambio fluido al verde de tu identidad */
  transform: translateY(-2px);
  box-shadow: 0 15px 35px -8px rgba(59, 110, 76, 0.4);
}

/* Curva de aceleración de estudio de diseño */
.cubic-bezier {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

@media (min-width: 768px) {
  .bg-fixed {
    background-attachment: fixed;
  }
}
</style>