<template>
  <section 
    :class="[
      'w-full py-24 md:py-36 border-t border-stone-200/60 relative overflow-hidden transition-colors duration-500',
      theme === 'water' ? 'bg-[#f0f4f1]' : 'bg-[#fcfaf7]'
    ]"
  >
    <!-- Elemento decorativo de fondo (Número de capítulo gigante) -->
    <div class="absolute -top-10 -right-10 md:right-12 select-none pointer-events-none opacity-[0.04]">
      <span class="font-manual text-[18rem] md:text-[26rem] leading-none text-stone-900 font-bold block">
        {{ chapterNumber }}
      </span>
    </div>

    <!-- Encabezado Principal de Sección (Más grande y protagonista) -->
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-16 md:mb-24 relative z-10">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-stone-300/60 pb-12">
        
        <div class="space-y-4 max-w-3xl">
          <!-- Tag / Badge de Categoría -->
          <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 border border-stone-200/80 shadow-sm backdrop-blur-sm">
            <i :class="[icon, theme === 'water' ? 'text-teal-700' : 'text-[#3b6e4c]']"></i>
            <span class="font-sans font-black text-xs text-stone-800 uppercase tracking-[0.25em]">
              {{ categoryTag }}
            </span>
          </div>

          <!-- Título Típografico Gigante -->
          <h2 class="text-4xl sm:text-6xl lg:text-7xl font-manual text-stone-900 leading-[0.95] m-0 font-normal tracking-wide">
            {{ title }}
          </h2>

          <!-- Descripción -->
          <p v-if="description" class="text-stone-600 text-lg md:text-2xl font-medium leading-relaxed m-0 pt-2 max-w-2xl">
            {{ description }}
          </p>
        </div>

        <!-- Indicador de total de rutas -->
        <div class="shrink-0 self-start md:self-end">
          <span class="font-mono text-xs font-bold text-stone-400 uppercase tracking-widest block">
            {{ routes.length }} {{ routes.length === 1 ? 'RUTA DISPONIBLE' : 'RUTAS DISPONIBLES' }}
          </span>
        </div>

      </div>
    </div>

    <!-- Listado de tarjetas de rutas -->
    <div class="flex flex-col gap-16 md:gap-28 relative z-10">
      <RouteCard 
        v-for="(route, idx) in routes" 
        :key="route.id" 
        :route="route" 
        :index="idx" 
      />
    </div>

  </section>
</template>

<script setup>
import RouteCard from '~/components/routes/RouteCard.vue'

defineProps({
  chapterNumber: {
    type: String,
    default: '01'
  },
  title: {
    type: String,
    required: true
  },
  categoryTag: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'fa-solid fa-compass'
  },
  description: {
    type: String,
    default: ''
  },
  theme: {
    type: String,
    default: 'default' // 'water' | 'default'
  },
  routes: {
    type: Array,
    required: true
  }
})
</script>