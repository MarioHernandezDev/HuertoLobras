<template>
  <section class="relative h-screen w-full flex flex-col justify-end antialiased overflow-hidden select-none bg-stone-900">
    
    <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed hero-bg">
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/40 to-transparent"></div>
    </div>

    <div class="relative z-10 w-full max-w-[95rem] mx-auto px-6 md:px-12 lg:px-16 pb-12 md:pb-20">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center border-b border-white/20 pb-12">
        
        <div class="lg:col-span-6 flex flex-col items-start space-y-0">
          <span class="text-xs sm:text-sm uppercase tracking-[0.5em] text-emerald-400 font-bold mb-4 animate-fade-in text-shadow-md">
            Estancia Rural & Eco
          </span>
          <h1 class="text-6xl sm:text-8xl lg:text-[10rem] font-romance text-white tracking-tighter leading-[0.85] font-light text-shadow-xl">
            El Huerto <br />
            <span class="lg:pl-12 text-stone-200">de Lobras</span>
          </h1>
        </div>

        <div class="lg:col-span-4 flex flex-col space-y-5 lg:px-4 w-full max-w-md">
          <p class="text-sm sm:text-base text-white font-medium leading-relaxed mb-1 text-shadow-lg opacity-95">
            Explora senderos milenarios y vive la magia de la Alpujarra en un entorno natural diseñado para disfrutar con toda la familia.
          </p>
          
          <button class="btn-accessible-primary shadow-2xl" aria-label="Reservar estancia">
            <span class="btn-text">Reservar estancia</span>
            <span class="btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </span>
          </button>
          
          <button class="btn-accessible-secondary shadow-xl" aria-label="Ver alojamientos disponibles">
            <span class="btn-text">Ver Alojamientos</span>
          </button>
        </div>

        <div class="lg:col-span-2 flex justify-start lg:justify-end">
          <button 
            @click="scrollDown"
            class="group relative flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-white/30 backdrop-blur-md bg-white/10 hover:bg-white transition-all duration-700 ease-in-out shadow-2xl"
            aria-label="Desplazar hacia abajo para ver más contenido"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 lg:w-14 lg:h-14 text-white group-hover:text-stone-900 icon-arrow-smooth">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
            
            <div class="absolute inset-0 rounded-full border border-solid border-white/20 transition-all duration-700 group-hover:border-stone-900/30"></div>
          </button>
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
const scrollDown = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.hero-bg {
  background-image: url('~/assets/img/lobras.jpg');
}

h1 {
  font-feature-settings: "ss01" on, "ss02" on, "liga" on;
}

section {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

/* --- ANIMACIÓN FLUIDA DE LA FLECHA (SMOOTH HOVER) --- */
.icon-arrow-smooth {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), color 0.7s ease-in-out;
  transform: translateY(0);
}

.group:hover .icon-arrow-smooth {
  transform: translateY(8px); /* Desplazamiento progresivo y limpio hacia abajo */
}

/* --- BOTONES ACCESIBLES --- */
.btn-accessible-primary, .btn-accessible-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 18px 28px;
  border-radius: 6px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

/* Botón de Reserva (Marrón Ocre Premium) */
.btn-accessible-primary {
  background: #53433c;
  border: 2px solid #53433c;
  color: #ffffff;
}

.btn-accessible-primary:hover {
  background: #3e322d;
  border-color: #3e322d;
  transform: translateY(-3px);
}

.btn-icon {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.btn-accessible-primary:hover .btn-icon {
  transform: translateX(4px);
}

/* Botón Secundario (Cristal espeso) */
.btn-accessible-secondary {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(16px);
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
}

.btn-accessible-secondary:hover {
  background: #ffffff;
  color: #1c1917;
  border-color: #ffffff;
  text-shadow: none;
  transform: translateY(-3px);
}

/* Sombras protectoras de capa de texto */
.text-shadow-xl {
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 4px 8px rgba(0, 0, 0, 0.4);
}

.text-shadow-lg {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.7);
}

.text-shadow-md {
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1.2s ease forwards;
}
</style>