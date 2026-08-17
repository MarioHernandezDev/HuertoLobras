<template>
  <section class="w-full space-y-16">
    <!-- BLOQUE SUPERIOR: Cabecera e Introducción -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
      <div v-scroll class="max-w-4xl space-y-6">
        <h3 class="font-manual text-5xl sm:text-7xl lg:text-8xl text-stone-900 m-0 leading-none">
          Museo Etnológico <br />
          <span class="text-[#3b6e4c] font-black">"El Malacate"</span>
        </h3>
        <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
          Ubicado en Tímar, este espacio rescata la memoria viva de la comarca: la minería tradicional de mercurio, los antiguos telares artesanales y la histórica sericicultura (cría de gusanos de seda).
        </p>
      </div>

      <!-- DATOS DESTACADOS: Separados en 3 bloques claros e independientes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Bloque 1: Tarifas -->
        <div v-scroll class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#3b6e4c]/10 text-[#3b6e4c] flex items-center justify-center font-bold">
              <!-- SVG Ticket / Entrada -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-12v.75m0 3v.75m0 3v.75m0 3V18M3 7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v2.25a1.5 1.5 0 0 0 0 3V16.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 16.5v-3a1.5 1.5 0 0 0 0-3V7.5z" />
              </svg>
            </div>
            <p class="text-[#3b6e4c] font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Tarifas</p>
            <p class="text-stone-900 text-2xl font-bold m-0 leading-snug">
              General: 2€ <br />
              <span class="text-lg font-semibold text-stone-700">Grupos: 1,50€</span>
            </p>
          </div>
          <p class="text-stone-500 text-xs font-medium m-0 pt-2 border-t border-stone-100">
            Entrada gratuita para mayores de 65 años
          </p>
        </div>

        <!-- Bloque 2: Documento Exclusivo -->
        <div v-scroll class="delay-100 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
              <!-- SVG Documento / Pergamino -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
              </svg>
            </div>
            <p class="text-amber-800 font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Documento Exclusivo</p>
            <p class="text-stone-900 text-2xl font-bold m-0 leading-snug">
              Reparto de tierras original
            </p>
          </div>
          <p class="text-stone-500 text-xs font-medium m-0 pt-2 border-t border-stone-100">
            Copia facsímil firmada por los Reyes Católicos
          </p>
        </div>

        <!-- Bloque 3: Reserva de Cita / Acción Directa -->
        <div v-scroll class="delay-200 bg-[#3b6e4c] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-6">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
              <!-- SVG Calendario -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5" />
              </svg>
            </div>
            <p class="text-amber-300 font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Visitas Guiadas</p>
            <p class="text-white text-2xl font-bold m-0 leading-snug">
              Reserva tu cita previa
            </p>
          </div>
          <a href="tel:+34679038079" class="btn-minimal-premium-white text-center justify-center w-full">
            <span>679 038 079</span>
          </a>
        </div>

      </div>
    </div>

    <!-- BLOQUE INFERIOR: Grid de Imágenes Full-Width -->
    <div v-scroll class="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-stone-950">
      
      <div 
        @click="$emit('openLightbox', 1, 'Museo El Malacate', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group"
      >
        <img :src="image" alt="Museo El Malacate" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Exposición</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Instalaciones del Museo</h4>
        </div>
      </div>

      <div 
        @click="$emit('openLightbox', 2, 'Minería y Telares', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="image" alt="Minería Tradicional y Telares" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Colección</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Minería & Telares</h4>
        </div>
      </div>

      <div 
        @click="$emit('openLightbox', 3, 'Documento Reyes Católicos', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="image" alt="Documento Reyes Católicos" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Archivo</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Reparto de Tierras</h4>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  image: String
})

defineEmits(['openLightbox'])
</script>