<template>
  <section class="w-full space-y-16">
    <!-- BLOQUE SUPERIOR: Cabecera e Introducción -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
      <div class="max-w-4xl space-y-6 animate-slide-left">
        <h3 class="font-manual text-5xl sm:text-7xl lg:text-8xl text-stone-900 m-0 leading-none">
          Museo Etnológico <br />
          <span class="text-[#3b6e4c] font-black">"El Malacate"</span>
        </h3>
        <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
          Ubicado en Tímar, este espacio rescata la memoria viva de la comarca: la minería tradicional de mercurio, los antiguos telares artesanales y la histórica sericicultura (cría de gusanos de seda).
        </p>
      </div>

      <!-- DATOS DESTACADOS: Separados en 3 bloques claros e independientes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
        
        <!-- Bloque 1: Tarifas -->
        <div class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#3b6e4c]/10 text-[#3b6e4c] flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-ticket"></i>
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
        <div class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-scroll"></i>
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
        <div class="bg-[#3b6e4c] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-6">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-calendar-check"></i>
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

    <!-- BLOQUE INFERIOR: Grid de Imágenes Full-Width (3 columnas PC / 1 columna Móvil sin bordes) -->
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-stone-950 animate-fade-up">
      
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