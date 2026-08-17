<template>
  <section class="w-full bg-[#fcfaf7] pt-24 sm:pt-28 px-4 md:px-8 lg:px-12 select-none">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center border-b border-stone-200/60 pb-16 overflow-hidden">
        
        <!-- Columna Izquierda: Título y Mensaje -->
        <div v-scroll class="lg:col-span-7 space-y-6">
          <span class="font-sans font-black text-sm text-[#3b6e4c] uppercase tracking-[0.2em] block">
            La experiencia campo viva
          </span>
          
          <h2 class="text-5xl sm:text-7xl lg:text-[6.25rem] font-manual text-stone-900 tracking-wide leading-[0.9] m-0 font-normal">
            Planifica tu <br />
            <span class="text-[#3b6e4c] font-bold block mt-2">propia ruta.</span>
          </h2>
          
          <p class="text-stone-700 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-2xl m-0 normal-case pt-2">
            Al llegar a la recepción de <strong class="text-stone-900 font-bold">Huerto de Lobras</strong>, te entregaremos un mapa impreso con las mejores rutas y te recomendaremos con mucho gusto itinerarios según la época del año.
          </p>
        </div>

        <!-- Columna Derecha: Botón de Acción -->
        <div v-scroll class="delay-100 lg:col-span-5 w-full lg:max-w-md lg:justify-self-end">
          <button 
            @click="scrollToNextSection"
            class="btn-lets-go group border-0 cursor-pointer w-full"
            aria-label="Explorar rutas"
          >
            <span>EXPLORAR RUTAS</span>
            <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-y-0.5">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="2.5" 
                stroke="currentColor" 
                class="w-4 h-4 text-white"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToNextSection = () => {
  const el = document.getElementById('senderos-del-agua')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.btn-lets-go {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 18px 36px;
  background: #3b6e4c;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 0.12em;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

@media (min-width: 768px) {
  .btn-lets-go {
    padding: 18px 40px;
  }
}

.btn-lets-go:hover {
  background: #315c3f;
  box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.25);
}

.btn-lets-go:active {
  transform: scale(0.98);
}
</style>