<template>
  <div class="w-full bg-[#fcfaf7] min-h-screen antialiased relative">
    
    <!-- Hero Principal -->
    <MiniHero 
      title="Espacios con alma." 
      subtitle="Nuestros alojamientos en Lobras"
      :backgroundImage="heroImage" 
    />

    <section class="relative pt-28 md:pt-40 pb-32 px-4 md:px-8 lg:px-12 w-full mx-auto select-none">
      
      <!-- Fondos decorativos -->
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-blobs">
      </div>

      <div class="relative z-10 max-w-[96%] mx-auto">
        
        <!-- Encabezado de Sección Optimizado con v-scroll -->
        <header v-scroll class="border-b border-stone-300/40 pb-12 mb-16 overflow-hidden">
          <div class="max-w-4xl space-y-4">
            <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.3em] block">
              Turismo Rural en la Alpujarra Granadina
            </span>
            <h1 class="text-4xl sm:text-6xl lg:text-[5.5rem] font-manual text-stone-900 tracking-wide leading-[0.95] m-0 font-normal">
              Nuestros mejores <span class="text-[#3b6e4c] font-black block mt-1">Apartamentos.</span>
            </h1>
          </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          <!-- Filtro / Buscador Lateral con v-scroll -->
          <div class="lg:col-span-3">
            <aside v-scroll class="bg-white/90 rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-md shadow-stone-900/5 lg:sticky lg:top-28 z-20 space-y-6">
              <div class="space-y-1 pb-4 border-b border-stone-200/60">
                <span class="text-xs font-mono text-stone-400 uppercase tracking-[0.2em] block font-bold">
                  Buscador de Estancias
                </span>
              </div>

              <div class="space-y-3">
                <label for="capacity-select" class="text-xs font-sans font-black uppercase tracking-widest text-stone-700 block">
                  ¿Cuántos vais a ser?
                </label>
                <div class="relative w-full">
                  <select 
                    id="capacity-select"
                    v-model="selectedCapacity"
                    class="w-full bg-white border border-stone-300/80 text-stone-800 rounded-2xl px-4 py-4 text-sm font-sans font-bold shadow-sm focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] appearance-none cursor-pointer"
                  >
                    <option value="all">Cualquier capacidad</option>
                    <option value="2">Ideal Parejas (2 plazas)</option>
                    <option value="4">Medianos (4-5 plazas)</option>
                    <option value="6">Grandes grupos (6+ plazas)</option>
                  </select>
                  <div class="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="space-y-3 pb-2">
                <span class="text-xs font-sans font-black uppercase tracking-widest text-stone-700 block">
                  Comodidades
                </span>
                <div class="space-y-2.5">
                  <label class="flex items-center gap-3 cursor-pointer text-sm font-sans text-stone-800 font-bold select-none">
                    <input 
                      type="checkbox" 
                      v-model="filterFireplace"
                      class="rounded text-[#3b6e4c] focus:ring-[#3b6e4c] border-stone-300 w-5 h-5 accent-[#3b6e4c]"
                    />
                    <span>Con Chimenea / Leña</span>
                  </label>
                </div>
              </div>

              <div v-if="selectedCapacity !== 'all' || filterFireplace" class="pb-2">
                <button 
                  @click="resetFilters" 
                  class="w-full bg-stone-900/10 hover:bg-stone-900/20 text-stone-800 font-sans font-black text-xs uppercase tracking-wider py-3.5 rounded-2xl transition-colors cursor-pointer border-none"
                >
                  Limpiar Filtros
                </button>
              </div>

              <div class="pt-6 border-t border-stone-200/60 space-y-4">
                <span class="text-xs font-sans font-black uppercase tracking-widest text-stone-700 block">
                  ¿Prefieres reservar ya?
                </span>
                
                <div class="flex flex-col gap-2.5">
                  <a 
                    href="tel:+34679038079" 
                    class="flex items-center justify-center gap-3 bg-stone-900 hover:bg-[#3b6e4c] text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-4 rounded-full shadow-sm text-center no-underline transition-colors"
                    aria-label="Llamar directamente para reservar casa rural en Lobras"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-amber-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    <span>Llamar Directo</span>
                  </a>

                  <a 
                    href="https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-3 bg-[#003580] hover:bg-[#00224f] text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-full text-center no-underline shadow-sm transition-colors"
                    aria-label="Reservar apartamentos rurales en Booking"
                  >
                    <span>Tarifa Booking</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <!-- Listado de Apartamentos -->
          <div class="lg:col-span-9 space-y-8">
            <div class="text-xs font-mono text-stone-500 uppercase tracking-[0.2em] pl-2 font-bold">
              Mostrando {{ filteredApartments.length }} de {{ apartmentsWithImages.length }} alojamientos en Lobras
            </div>

            <div v-if="filteredApartments.length > 0" class="space-y-8">
              <div 
                v-for="(apt, i) in filteredApartments" 
                :key="apt.id"
                v-scroll
              >
                <ApartmentCard 
                  :apartment="apt"
                  :eager="i < 2"
                />
              </div>
            </div>

            <div v-else v-scroll class="bg-white/90 rounded-3xl p-12 md:p-16 text-center border border-stone-200/80 shadow-md shadow-stone-900/5 space-y-4">
              <div class="text-stone-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-16 h-16 mx-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                </svg>
              </div>
              <h2 class="font-manual text-3xl text-stone-900 m-0">No encontramos coincidencias</h2>
              <p class="text-stone-600 text-base max-w-md mx-auto m-0 leading-relaxed font-medium">
                Prueba a cambiar tus criterios o utiliza las opciones de asistencia directa a la izquierda para diseñar una alternativa a tu medida.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useSiteSeo({
  title: 'Alojamientos rurales en Lobras | El Huerto de Lobras',
  description: 'Descubre donde dormir en Lobras, Alpujarra Granada. Casas rurales, apartamentos con chimenea y vistas para reservar alojamiento rural en la Sierra Nevada.',
  path: '/apartamentos',
  ogTitle: 'Dónde dormir en Lobras | Casas rurales en la Alpujarra',
  ogDescription: 'Reserva alojamiento rural en Lobras, Granada. Apartamentos y casas con chimenea, terrazas y encanto alpujarreño para escapadas auténticas.',
  twitterTitle: 'Dónde dormir en Lobras | Alojamiento rural Alpujarra',
  twitterDescription: 'Habitaciones rurales en Lobras, Alpujarra. Alojamiento en Granada para parejas, familias y grupos.',
  image: 'https://elhuertodelobras.com/og/huerto-lobras-alojamientos.webp'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: 'El Huerto de Lobras - Alojamientos',
        url: 'https://elhuertodelobras.com/apartamentos',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lobras',
          addressRegion: 'Granada',
          postalCode: '18449',
          addressCountry: 'ES'
        },
        containsPlace: [
          { '@type': 'Accommodation', name: 'Apartamento Las Golondrinas' },
          { '@type': 'Accommodation', name: 'Apartamento La Seda' },
          { '@type': 'Accommodation', name: 'Apartamento Los Cerezos' },
          { '@type': 'Accommodation', name: 'Apartamento La Contraviesa' },
          { '@type': 'Accommodation', name: 'El Estudio' },
          { '@type': 'Accommodation', name: 'La Biblioteca' }
        ]
      })
    }
  ]
})

// Importaciones base
import heroImage from '~/assets/img/heroapartamentos.webp'

// Estado del Buscador Integrado
const selectedCapacity = ref('all')
const filterFireplace = ref(false)

const resetFilters = () => {
  selectedCapacity.value = 'all'
  filterFireplace.value = false
}

// Datos centralizados en utils/apartamentos.ts (la portada sale de assets/img/<carpeta>/portada.webp)
const apartmentsWithImages = apartments.map(apt => ({
  ...apt,
  image: getApartmentPhotos(apt.folder)[0]
}))

const filteredApartments = computed(() => {
  return apartmentsWithImages.filter(apt => {
    let matchCapacity = true
    if (selectedCapacity.value !== 'all') {
      const target = parseInt(selectedCapacity.value)
      if (target === 2) matchCapacity = (apt.maxGuests === 2)
      else if (target === 4) matchCapacity = (apt.maxGuests === 4 || apt.maxGuests === 5)
      else if (target === 6) matchCapacity = (apt.maxGuests >= 6)
    }

    let matchFireplace = true
    if (filterFireplace.value) {
      matchFireplace = apt.hasFireplace
    }

    return matchCapacity && matchFireplace
  })
})
</script>