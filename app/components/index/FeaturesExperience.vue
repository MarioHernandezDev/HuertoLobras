<template>
  <section id="features" class="relative w-full bg-[#fcfaf7] antialiased select-none overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="absolute -top-10 -left-20 w-[30rem] h-[30rem] md:w-[45rem] md:h-[45rem] rounded-full bg-[#e8decb]/60 blur-[100px] md:blur-[140px]"></div>
      
      <div class="absolute top-1/3 -right-24 w-[28rem] h-[28rem] md:w-[40rem] md:h-[40rem] rounded-full bg-[#d6c4ad]/50 blur-[90px] md:blur-[130px]"></div>
      
      <div class="absolute -bottom-20 left-10 w-[25rem] h-[25rem] md:w-[38rem] md:h-[38rem] rounded-full bg-[#e2d5c3]/70 blur-[80px] md:blur-[120px]"></div>
    </div>

    

    <div class="relative z-10 max-w-7xl mx-auto py-20 md:py-24 px-6 md:px-12 text-center">
      <div class="max-w-4xl mx-auto space-y-8">
        
        <span class="font-sans font-black text-xs text-emerald-800 uppercase tracking-[0.2em] block">
          Hospitalidad & Vida de Pueblo
        </span>
        
        <h2 class="text-5xl sm:text-7xl lg:text-[6.2rem] font-manual text-stone-900 tracking-wide leading-[0.88] m-0">
          Como en casa, <br />
          <span class="text-amber-600 font-black">pero en la Alpujarra.</span>
        </h2>
        
        <p class="text-stone-700 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto normal-case">
          Aquí el tiempo se detiene y la atención es sincera. Nos dedicamos a esto de corazón y de por vida: estamos a tu entera disposición para que tu única preocupación sea disfrutar del entorno.
        </p>

        <div class="pt-6 flex flex-col items-center gap-6">
          <button 
            @click="$emit('navigate', 'alojamientos')"
            class="btn-minimal-premium group"
            aria-label="Planear mi escapada"
          >
            <span>Descubrir Alojamientos</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-all duration-500 cubic-bezier group-hover:translate-x-1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
          
          <p class="text-xs font-mono uppercase tracking-[0.2em] text-stone-400">
            Atención cercana &bull; Espacios totalmente equipados
          </p>
        </div>

      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 border-t border-stone-300/40 pt-20">
      
      <div class="space-y-4 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200/80 shadow-md shadow-stone-900/5 transition-all duration-300 hover:shadow-lg hover:bg-white/95">
        <div class="flex items-center gap-3">
          <h3 class="font-manual text-2xl md:text-3xl text-stone-900 font-black tracking-wide m-0">Lobras en Pura Calma</h3>
        </div>
        <p class="text-stone-800 text-base leading-relaxed m-0 font-normal">
          Lobras conserva la paz de antaño: <strong class="font-bold text-stone-950">aquí no hay bares ni comercios</strong>. Si vas a quedarte a disfrutar de la finca, te aconsejamos traer tus compras para cocinar o hacer barbacoa con total tranquilidad.
        </p>
      </div>

      <div class="space-y-4 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200/80 shadow-md shadow-stone-900/5 transition-all duration-300 hover:shadow-lg hover:bg-white/95">
        <div class="flex items-center gap-3">
          <h3 class="font-manual text-2xl md:text-3xl text-stone-900 font-black tracking-wide m-0">Cádiar a 5 Minutos</h3>
        </div>
        <p class="text-stone-800 text-base leading-relaxed m-0 font-normal">
          Lo habitual es salir a explorar la comarca. A solo unos minutos en coche se encuentra Cádiar, donde dispones de <strong class="font-bold text-stone-950">Carrefour Express</strong>, supermercados locales, bares tradicionales y restaurantes.
        </p>
      </div>

      <div class="space-y-4 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-stone-200/80 shadow-md shadow-stone-900/5 transition-all duration-300 hover:shadow-lg hover:bg-white/95">
        <div class="flex items-center gap-3">
          <h3 class="font-manual text-2xl md:text-3xl text-stone-900 font-black tracking-wide m-0">Atención 100% Humana</h3>
        </div>
        <p class="text-stone-800 text-base leading-relaxed m-0 font-normal">
          Nuestro equipo lleva toda la vida dedicado a la hospitalidad rural. Nos apasiona lo que hacemos y estamos siempre disponibles para recomendarte rutas, resolver dudas o ayudarte en todo lo que necesites.
        </p>
      </div>

    </div>

    <div class="w-full h-[70vh] md:h-[85vh] overflow-hidden relative z-10">
      <div class="absolute inset-0 bg-cover bg-center bg-fixed feature-full-img scale-110"></div>
      <div class="absolute inset-0 bg-stone-900/20"></div>
    </div>

  </section>
</template>

<script setup>
defineEmits(['navigate'])
</script>

<style scoped>
.feature-full-img {
  background-image: url('~/assets/img/fondo01.JPG');
}

/* --- BOTÓN MINIMALISTA PREMIUM --- */
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

@media (min-width: 768px) {
  .bg-fixed {
    background-attachment: fixed;
  }
}
</style>