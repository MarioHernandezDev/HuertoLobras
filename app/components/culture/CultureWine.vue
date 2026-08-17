<template>
  <section class="w-full space-y-16 pt-24 md:pt-32">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
      <div v-scroll class="max-w-4xl space-y-6">
        <h3 class="font-manual text-5xl sm:text-7xl lg:text-8xl text-stone-900 m-0 leading-none">
          Camposanto de <br />
          <span class="text-[#3b6e4c] font-black">Lobras.</span>
        </h3>
        <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
          Un espacio único catalogado por su valor arquitectónico y etnológico. Su disposición adaptada a las terrazas de la montaña refleja el profundo respeto por el paisaje y la memoria colectiva de la Alpujarra.
        </p>
      </div>

      <!-- DATOS DESTACADOS: Separados en 3 bloques claros e independientes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Bloque 1: Arquitectura Singular -->
        <div v-scroll class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#3b6e4c]/10 text-[#3b6e4c] flex items-center justify-center font-bold">
              <!-- SVG Monumento / Arquitectura -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
              </svg>
            </div>
            <p class="text-[#3b6e4c] font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Diseño Vernáculo</p>
            <p class="text-stone-900 text-2xl font-bold m-0 leading-snug">
              Disposición en bancales <br />
              <span class="text-lg font-semibold text-stone-700">Piedra y cal tradicional</span>
            </p>
          </div>
          <p class="text-stone-500 text-xs font-medium m-0 pt-2 border-t border-stone-100">
            Integración armónica con el relieve natural
          </p>
        </div>

        <!-- Bloque 2: Protección Histórica -->
        <div v-scroll class="delay-100 bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold">
              <!-- SVG Edificio de Patrimonio / Landmark -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5M4.5 21V10.5" />
              </svg>
            </div>
            <p class="text-amber-800 font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Patrimonio Protegido</p>
            <p class="text-stone-900 text-2xl font-bold m-0 leading-snug">
              Bien de Interés Cultural
            </p>
          </div>
          <p class="text-stone-500 text-xs font-medium m-0 pt-2 border-t border-stone-100">
            Máxima figura de protección patrimonial en Andalucía
          </p>
        </div>

        <!-- Bloque 3: Visita y Entorno / Acción Directa -->
        <div v-scroll class="delay-200 bg-[#3b6e4c] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-6">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center font-bold">
              <!-- SVG Ojo / Mirador -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </div>
            <p class="text-amber-300 font-black font-mono text-xs uppercase tracking-widest m-0 pt-2">Mirador Cultural</p>
            <p class="text-white text-2xl font-bold m-0 leading-snug">
              Vistas al Valle del Guadalfeo
            </p>
          </div>
          <div class="pt-2">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-stone-200 block">
              Acceso libre y respetuoso
            </span>
          </div>
        </div>

      </div>
    </div>

    <!-- BLOQUE INFERIOR: Grid de Imágenes Full-Width -->
    <div v-scroll class="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-stone-950">
      
      <div 
        @click="$emit('openLightbox', 1, 'Cementerio BIC de Lobras', images.length)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group"
      >
        <img :src="images[0]" alt="Camposanto de Lobras" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />

      </div>

      <div 
        @click="$emit('openLightbox', 2, 'Detalle Constructivo BIC', images.length)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="images[1]" alt="Detalles constructivos tradicionales" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />

      </div>

      <div 
        @click="$emit('openLightbox', 3, 'Panorámica del Camposanto', images.length)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="images[2]" alt="Entorno del Cementerio de Lobras" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />

      </div>

    </div>
  </section>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    default: () => []
  }
})

defineEmits(['openLightbox'])
</script>