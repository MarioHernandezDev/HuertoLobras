<template>
  <section class="relative min-h-screen w-full bg-[#fcfaf7] pt-24 pb-6 px-3 md:px-6 flex flex-col justify-between overflow-hidden antialiased select-none">
    
    <div class="absolute -right-20 top-20 w-[35rem] h-[35rem] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
    <div class="absolute left-10 bottom-10 w-[30rem] h-[30rem] bg-amber-100/50 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="w-full max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 my-auto z-10 items-stretch">
      
      <div class="lg:col-span-7 bg-[#f6f3eb] rounded-[1.5rem] p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-[0_25px_60px_-15px_rgba(42,53,44,0.06)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(42,53,44,0.1)] hover:-translate-y-0.5 animate-slide-left">
        <div class="space-y-6">
          <h1 class="text-5xl sm:text-7xl lg:text-[8.5rem] font-manual text-stone-900 tracking-wide leading-[0.9] font-normal m-0 pb-2">
            Nuestro Huerto <br />
            <span class="text-[#3b6e4c] font-black tracking-wider block mt-2">
              de Lobras.
            </span>
          </h1>

          <p class="text-stone-600 text-base sm:text-xl font-medium leading-relaxed max-w-2xl m-0 normal-case">
            Tu refugio natural en la Alpujarra Alta. Ven a pasarlo en grande en familia o como <span class="text-[#3b6e4c] font-bold underline decoration-amber-400 decoration-2">disfrutador profesional</span> además de respirar aire puro.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 pt-10 w-full sm:w-auto">
          <NuxtLink 
            to="/apartamentos" 
            class="btn-organic-primary group w-full sm:w-auto no-underline text-center" 
            aria-label="Reservar ya"
          >
            <span>Reservar</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </NuxtLink>
          
          <NuxtLink 
            to="/apartamentos" 
            class="btn-organic-secondary w-full sm:w-auto no-underline text-center" 
            aria-label="Ver casas"
          >
            <span>Ver Alojamientos</span>
          </NuxtLink>
        </div>
      </div>

      <div class="lg:col-span-5 relative rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 group min-h-[380px] lg:min-h-auto flex flex-col justify-end p-8 sm:p-10 animate-fade-up">
        <div class="absolute inset-0 bg-cover bg-center main-frame-img group-hover:scale-105 transition-transform duration-1000"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-900/20 to-transparent z-10"></div>
        
        <div class="relative z-20">
          <span class="font-sans text-sm tracking-widest bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full font-bold uppercase mb-3 inline-block border border-white/10">
            El Entorno
          </span>
          <h3 class="font-manual text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide leading-tight m-0">Nuestro huerto escondido en Lobras</h3>
        </div>
      </div>

      <div class="lg:col-span-4 relative rounded-[1.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 group min-h-[420px] lg:min-h-auto flex flex-col justify-between p-8 sm:p-10 text-white animate-fade-up">
        <div class="absolute inset-0 bg-cover bg-center secondary-frame-img group-hover:scale-105 transition-transform duration-1000"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/40 to-transparent z-10"></div>
        
        <div class="relative z-20 flex justify-between items-center w-full">
          <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-2xl border border-white/10 text-amber-400">
            <i class="fa-solid fa-people-group"></i>
          </div>
          <span class="font-sans text-sm tracking-widest bg-white/20 backdrop-blur-md text-white px-4 py-1.5 rounded-full font-bold uppercase border border-white/10">
            Grandes espacios
          </span>
        </div>
        
        <div class="relative z-20 mt-16 lg:mt-24">
          <h3 class="font-manual text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-wide leading-tight mb-4">
            Pensado para <br />
            <span class="text-amber-400 font-black">viajar juntos.</span>
          </h3>
          <p class="text-stone-200 text-sm sm:text-base font-medium leading-relaxed normal-case m-0">
            Casas conectadas, porche con barbacoa, piscina y rincones libres bajo los árboles para disfrutar de grandes sobremesas en total libertad.
          </p>
        </div>
      </div>

      <div class="lg:col-span-8 bg-[#e9f2eb] rounded-[1.5rem] p-8 sm:p-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 shadow-[0_25px_60px_-15px_rgba(59,110,76,0.06)] transition-all duration-500 hover:shadow-[0_30px_70px_-10px_rgba(59,110,76,0.1)] hover:-translate-y-0.5 animate-slide-right">
        <div class="space-y-3 max-w-xl">
          <span class="font-sans font-bold text-sm text-emerald-800 uppercase tracking-[0.2em] block">Entorno salvaje</span>
          <h4 class="font-manual text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal tracking-wide leading-none">Lobras &bull; Alpujarra Alta</h4>
          <p class="text-stone-600 text-sm sm:text-base font-medium leading-relaxed normal-case m-0">
            Un pequeño pueblo andaluz rodeado de bancales y frutales. Aire limpio de montaña, senderos infinitos y desconexión total para recargar pilas con los tuyos.
          </p>
        </div>
        
        <button 
          @click="$emit('navigate', 'features')"
          class="btn-organic-action group shrink-0 w-full lg:w-auto justify-center"
        >
          <span>Quiero Divertirme</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 text-[#3b6e4c] group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>

    </div>

    <div class="w-full max-w-full mx-auto pt-6 px-2 border-t border-stone-200 flex justify-between items-center z-10 mt-8">
      <div class="text-sm font-mono text-stone-500 uppercase tracking-widest font-bold">
        El Huerto de Lobras &bull; 2026
      </div>
      
      <button 
        @click="scrollDown"
        class="flex items-center gap-2 bg-transparent border-0 cursor-pointer font-bold text-sm uppercase tracking-widest text-stone-700 hover:text-[#3b6e4c] transition-colors"
      >
        <span>Descubre la experiencia</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 animate-bounce">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </div>

  </section>
</template>

<script setup>
defineEmits(['navigate'])

const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.main-frame-img, .secondary-frame-img {
  background-image: url('~/assets/img/lobras.png');
}

/* COREOGRAFÍA DE ANIMACIONES INTERNAS NATIVAS */
.animate-slide-left {
  animation: slideFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-slide-right {
  animation: slideFromRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}
.animate-fade-up {
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards;
}

@keyframes slideFromLeft {
  0% { opacity: 0; transform: translateX(-40px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes slideFromRight {
  0% { opacity: 0; transform: translateX(40px); }
  100% { opacity: 1; transform: translateX(0); }
}
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(25px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* BOTONES PREMIUM ORGÁNICOS REFINADOS */
.btn-organic-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 42px; 
  background: #3b6e4c;
  color: #ffffff;
  border: none;
  border-radius: 9999px; 
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 10px 25px -5px rgba(59, 110, 76, 0.3);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-organic-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -5px rgba(59, 110, 76, 0.4);
  background: #315c3f;
}

.btn-organic-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 18px 42px;
  background: rgba(42, 53, 44, 0.04);
  color: #2a352c;
  border: none;
  border-radius: 9999px; 
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-organic-secondary:hover {
  background: rgba(42, 53, 44, 0.08);
  color: #1a211b;
  transform: translateY(-1px);
}

.btn-organic-action {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 18px 42px;
  background: #ffffff;
  border: 2px solid #e5e5e0;
  border-radius: 9999px; 
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #292524;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.btn-organic-action:hover {
  background: #3b6e4c;
  border-color: #3b6e4c;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -8px rgba(59, 110, 76, 0.3);
}

@keyframes pulseSlow { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.03); } }
.animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .animate-slide-left, .animate-slide-right, .animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>