<template>
  <section class="w-full space-y-16 pt-24 md:pt-32">
    <!-- RESTO DEL CÓDIGO PERMANECE IGUAL -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
      <div class="max-w-4xl space-y-6 animate-slide-left">
        <h3 class="font-manual text-5xl sm:text-7xl lg:text-8xl text-stone-900 m-0 leading-none">
          Camposanto de <br />
          <span class="text-[#3b6e4c] font-black">Lobras.</span>
        </h3>
        <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
          Un espacio único catalogado por su valor arquitectónico y etnológico. Su disposición adaptada a las terrazas de la montaña refleja el profundo respeto por el paisaje y la memoria colectiva de la Alpujarra.
        </p>
      </div>

      <!-- DATOS DESTACADOS: Separados en 3 bloques claros e independientes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up">
        
        <!-- Bloque 1: Arquitectura Singular -->
        <div class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-[#3b6e4c]/10 text-[#3b6e4c] flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-[#3b6e4c] fa-monument"></i>
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
        <div class="bg-white p-8 rounded-3xl border border-stone-200/60 shadow-sm flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-landmark"></i>
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
        <div class="bg-[#3b6e4c] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between space-y-6">
          <div class="space-y-2">
            <div class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-eye"></i>
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

    <!-- BLOQUE INFERIOR: Grid de Imágenes Full-Width (3 columnas PC / 1 columna Móvil sin bordes) -->
    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-0 bg-stone-950 animate-fade-up">
      
      <div 
        @click="$emit('openLightbox', 1, 'Cementerio BIC de Lobras', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group"
      >
        <img :src="image" alt="Camposanto de Lobras" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Arquitectura</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Estructura en Bancales</h4>
        </div>
      </div>

      <div 
        @click="$emit('openLightbox', 2, 'Detalle Constructivo BIC', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="image" alt="Detalles constructivos tradicionales" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Detalle</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Construcción Vernácula</h4>
        </div>
      </div>

      <div 
        @click="$emit('openLightbox', 3, 'Panorámica del Camposanto', 3)"
        class="relative h-80 lg:h-[450px] overflow-hidden bg-stone-900 cursor-pointer group border-t md:border-t-0 md:border-l border-stone-800"
      >
        <img :src="image" alt="Entorno del Cementerio de Lobras" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-75" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent p-8 flex flex-col justify-end">
          <span class="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest">Entorno</span>
          <h4 class="text-white font-sans font-bold text-xl m-0">Paisaje e Integración</h4>
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