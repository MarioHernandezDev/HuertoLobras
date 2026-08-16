<template>
  <a 
    :href="route.wikilocUrl" 
    target="_blank" 
    rel="noopener noreferrer"
    class="w-full group relative block py-10 md:py-14 px-6 sm:px-10 md:px-16 border-b border-stone-200/70 hover:bg-white/80 transition-all duration-300 no-underline select-none"
  >
    <!-- Indicador de acento lateral al hacer hover -->
    <div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3b6e4c] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-8">
      
      <!-- Contenido principal -->
      <div class="space-y-4 max-w-4xl">
        
        <!-- Badges & Metadatos visuales -->
        <div class="flex flex-wrap items-center gap-4 sm:gap-6 font-sans text-sm sm:text-base text-stone-600 font-semibold">
          
          <!-- Dificultad con color según nivel -->
          <span 
            class="px-3.5 py-1 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm"
            :class="difficultyClass(route.difficulty)"
          >
            {{ route.difficulty }}
          </span>

          <!-- Distancia -->
          <span class="flex items-center gap-2 text-stone-700">
            <i class="fa-solid fa-route text-[#3b6e4c] text-base"></i>
            <span>{{ route.distance }}</span>
          </span>

          <!-- Tiempo -->
          <span class="flex items-center gap-2 text-stone-700">
            <i class="fa-regular fa-clock text-[#3b6e4c] text-base"></i>
            <span>{{ route.duration }}</span>
          </span>

          <!-- Desnivel -->
          <span class="flex items-center gap-2 text-stone-700">
            <i class="fa-solid fa-mountain text-[#3b6e4c] text-base"></i>
            <span>{{ route.elevation }}</span>
          </span>

        </div>

        <!-- Título de la Ruta -->
        <h3 class="text-3xl sm:text-4xl lg:text-5xl font-manual text-stone-900 font-normal leading-tight group-hover:text-[#3b6e4c] transition-colors duration-200 m-0">
          {{ route.name }}
        </h3>

        <!-- Descripción -->
        <p class="text-stone-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-3xl m-0">
          {{ route.description }}
        </p>

      </div>

      <!-- Botón de Redirección Externa (Estilo Botón Hero) -->
      <div class="shrink-0 flex items-center gap-4">
        <span class="font-sans font-extrabold text-sm sm:text-base uppercase tracking-widest text-stone-900 group-hover:text-[#3b6e4c] transition-colors">
          Ver en Wikiloc
        </span>
        <div class="w-12 h-12 rounded-full bg-stone-200/80 group-hover:bg-[#3b6e4c] group-hover:text-white text-stone-800 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
          <i class="fa-solid fa-arrow-up-right-from-square text-base transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
        </div>
      </div>

    </div>
  </a>
</template>

<script setup>
defineProps({
  route: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

// Función para dar color dinámico a la etiqueta de dificultad
const difficultyClass = (difficulty) => {
  const d = (difficulty || '').toLowerCase()
  if (d.includes('fácil')) {
    return 'bg-emerald-100 text-emerald-900 border border-emerald-200'
  }
  if (d.includes('moderado') || d.includes('media')) {
    return 'bg-amber-100 text-amber-900 border border-amber-200'
  }
  if (d.includes('difícil') || d.includes('alta')) {
    return 'bg-rose-100 text-rose-900 border border-rose-200'
  }
  return 'bg-stone-200 text-stone-800'
}
</script>