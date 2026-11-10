<template>
  <section class="relative pt-36 md:pt-48 pb-24 px-4 md:px-6 w-full mx-auto select-none antialiased overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-blobs">
    </div>

    <!-- Contenedor principal con v-scroll -->
    <div v-scroll class="relative z-10 bg-[#e69d45] rounded-[2.5rem] p-8 sm:p-16 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_20px_50px_-15px_rgba(230,157,69,0.3)] overflow-hidden group max-w-[98%] mx-auto">
      
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden cta-glow">
        <div class="absolute inset-0 bg-cover bg-center bg-lobras opacity-10"></div>
      </div>
      
      <!-- Texto con revelado directo -->
      <div class="max-w-3xl relative z-10 space-y-6 text-left">
        <span class="text-[11px] uppercase tracking-[0.3em] bg-white/25 text-white px-5 py-2 rounded-full font-black inline-block border border-white/20">
          ¿Listos para la escapada?
        </span>
        
        <h2 class="text-5xl sm:text-7xl font-manual text-white tracking-wide leading-[0.85] m-0">
          Haced las maletas, <br />
          <span class="text-stone-900 font-black">el huerto os espera.</span>
        </h2>
        
        <p class="text-amber-50/90 text-lg sm:text-2xl font-medium leading-relaxed max-w-2xl m-0 normal-case">
          Reservad vuestras fechas ahora y empezad a coordinar el grupo. Las mejores parrilladas y los amaneceres limpios de la Alpujarra Alta están a un solo clic.
        </p>
      </div>

      <!-- Botón con leve retardo (delay-100) para un remate elegante -->
      <div class="relative z-10 shrink-0 w-full lg:w-auto" v-scroll="{ variant: 'fade', delay: 150 }">
        <NuxtLink 
          to="/contacto" 
          class="btn-minimal-premium-light group w-full lg:w-auto"
        >
          <span>Contactar & Reservar</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transition-all duration-500 cubic-bezier group-hover:translate-x-1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.cta-glow {
  background:
    radial-gradient(26rem 26rem at 0% 0%, rgba(255, 255, 255, 0.22), transparent 70%),
    radial-gradient(26rem 26rem at 100% 100%, rgba(120, 53, 15, 0.22), transparent 70%);
}
.bg-lobras { 
  background-image: url('~/assets/img/lobras.webp'); 
}

/* --- BOTÓN PREMIUM VERSIÓN CLARA --- */
.btn-minimal-premium-light {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 48px;
  background: #ffffff;
  color: #1c1917;
  border: none;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-minimal-premium-light:hover {
  background: #1c1917;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 15px 35px -8px rgba(28, 25, 23, 0.3);
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>