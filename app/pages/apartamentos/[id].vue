<template>
  <div v-if="apto" class="space-y-12 animate-fade-in">
    
    <NuxtLink to="/apartamentos" class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors duration-300 group">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Volver al catálogo
    </NuxtLink>

    <div class="space-y-3">
      <div class="flex flex-wrap items-baseline gap-3">
        <h1 class="text-3xl lg:text-5xl font-serif text-stone-950 mb-0 tracking-tight">{{ apto.nombre }}</h1>
        <span v-if="apto.adaptado" class="bg-[#2d4a22] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          Alojamiento Adaptado
        </span>
      </div>
      <p class="text-lg font-serif italic text-[var(--color-secundario)]">{{ apto.subtitulo }}</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      
      <div class="lg:col-span-2 space-y-6">
        <div class="aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-sm bg-stone-100">
          <img :src="apto.imagenes[0]" :alt="apto.nombre" class="w-full h-full object-cover" />
        </div>
        <div class="bg-white p-8 rounded-3xl border border-stone-100 space-y-4">
          <h3 class="font-serif text-xl text-stone-900">Sobre el alojamiento</h3>
          <p class="text-stone-600 font-sans leading-relaxed text-base">{{ apto.descripcion }}</p>
        </div>
      </div>

      <div class="bg-white border border-stone-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] p-8 rounded-3xl space-y-8 sticky top-24">
        
        <div class="flex justify-between items-center border-b border-stone-100 pb-4">
          <div>
            <span class="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">Estancia</span>
            <span class="text-3xl font-bold font-sans text-[var(--color-principal)]">{{ apto.precioDesde }}€</span>
            <span class="text-xs text-stone-400 font-sans">/ noche</span>
          </div>
          <div class="text-right">
            <span class="text-[10px] uppercase tracking-widest text-stone-400 font-bold block">Capacidad</span>
            <span class="text-sm font-semibold text-stone-700 font-sans block mt-1">{{ apto.capacidad }}</span>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-stone-400">Equipamiento Incluido</h4>
          <ul class="grid grid-cols-1 gap-2.5">
            <li v-for="servicio in apto.servicios" :key="servicio" class="flex items-center text-sm text-stone-600 font-sans">
              <span class="w-1.5 h-1.5 rounded-full bg-[var(--color-principal)] mr-3 shrink-0"></span>
              {{ servicio }}
            </li>
          </ul>
        </div>

        <div class="space-y-3 pt-4 border-t border-stone-100">
          <a :href="apto.urlBooking" target="_blank" class="w-full block text-center text-xs uppercase tracking-widest font-bold font-sans py-4 bg-[var(--color-principal)] text-white rounded-xl shadow-md hover:bg-opacity-90 transition-all">
            Reservar Apartamento
          </a>
          <p class="text-[11px] text-center text-stone-400 font-sans">Gestión directa y segura a través de Booking.com</p>
        </div>

      </div>
    </div>

  </div>
  
  <div v-else class="text-center py-20 space-y-4">
    <p class="text-stone-400 font-serif italic">Buscando el rincón de paz...</p>
  </div>
</template>

<script setup>
import { useRoute } from 'nuxt/app'
import { computed } from 'vue'

const route = useRoute()

// Buscamos mágicamente en la lista el apartamento que coincida con el ID de la URL
const apto = computed(() => {
  return apartamentos.find(a => a.id === route.params.id)
})
</script>