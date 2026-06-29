<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased">
    
    <MiniHero 
      title="Espacios con alma." 
      subtitle="Nuestros alojamientos"
      :backgroundImage="heroImage" 
    />

    <section class="py-16 px-4 md:px-6 w-full mx-auto select-none">
      <div class="max-w-[98%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <aside class="lg:col-span-3 bg-[#f6f3eb] rounded-[2rem] p-6 md:p-8 border border-stone-200/40 shadow-[0_15px_40px_-20px_rgba(42,53,44,0.04)] lg:sticky lg:top-28 z-20 space-y-6">
          
          <div class="space-y-1 pb-4 border-b border-stone-200/60">
            <span class="text-xs font-mono text-stone-500 uppercase tracking-[0.2em] block font-bold">
              Buscador
            </span>
          </div>

          <div class="space-y-3">
            <label for="capacity-select" class="text-sm font-sans font-black uppercase tracking-wider text-stone-700 block">
              ¿Cuántos vais a ser?
            </label>
            <div class="relative w-full">
              <select 
                id="capacity-select"
                v-model="selectedCapacity"
                class="w-full bg-white border border-stone-200/80 text-stone-800 rounded-xl px-4 py-4 text-sm font-sans font-bold shadow-sm focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] appearance-none cursor-pointer"
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
            <span class="text-sm font-sans font-black uppercase tracking-wider text-stone-700 block">
              Extras Clave
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
              class="w-full bg-stone-900/10 hover:bg-stone-900/20 text-stone-800 font-sans font-black text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer border-none"
            >
              Limpiar Filtros
            </button>
          </div>

          <div class="pt-6 border-t border-stone-200/60 space-y-4">
            <span class="text-sm font-sans font-black uppercase tracking-wider text-stone-700 block">
              ¿Prefieres ayuda directa?
            </span>
            
            <div class="flex flex-col gap-2.5">
              <a 
                href="https://www.booking.com" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-3 bg-[#003580] hover:bg-[#00224f] text-white font-sans font-bold text-sm py-4 px-4 rounded-xl transition-colors shadow-sm text-center no-underline"
              >
                <span>Booking.com</span>
              </a>

              <a 
                href="tel:+34600000000" 
                class="flex items-center justify-center gap-3 bg-white border border-stone-200 hover:border-stone-400 text-stone-800 font-sans font-bold text-sm py-4 px-4 rounded-xl transition-colors shadow-sm text-center no-underline"
              >
                <i class="fa-solid fa-phone text-[#3b6e4c] text-base"></i>
                <span>Llamar: 600 00 00 00</span>
              </a>
            </div>
          </div>

        </aside>

        <div class="lg:col-span-9 space-y-8">
          
          <div class="text-sm font-mono text-stone-500 uppercase tracking-widest pl-2 font-bold">
            Mostrando {{ filteredApartments.length }} de {{ apartments.length }} estancias
          </div>

          <div v-if="filteredApartments.length > 0" class="space-y-8">
            <ApartmentCard 
              v-for="apt in filteredApartments" 
              :key="apt.id" 
              :apartment="apt"
            />
          </div>

          <div v-else class="bg-white rounded-[2.5rem] p-12 md:p-16 text-center border border-stone-200/40 shadow-sm space-y-4">
            <div class="text-stone-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-16 h-16 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
            </div>
            <h4 class="font-manual text-3xl text-stone-900 m-0">No encontramos coincidencias</h4>
            <p class="text-stone-600 text-base max-w-md mx-auto m-0 leading-relaxed font-medium">
              Prueba a cambiar tus criterios o utiliza las opciones de asistencia directa a la izquierda para diseñar una alternativa a tu medida.
            </p>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import heroImage from '~/assets/img/default.jpg'

// ESTADOS DE FILTRADO REACTIVOS
const selectedCapacity = ref('all')
const filterFireplace = ref(false)

const resetFilters = () => {
  selectedCapacity.value = 'all'
  filterFireplace.value = false
}

// DATA OFICIAL DE LOS 10 APARTAMENTOS
const apartments = [
  {
    id: 'casa-el-olivo',
    code: 'Casa El Olivo',
    name: 'La Casa Principal',
    capacity: '4 a 6 plazas',
    maxGuests: 6,
    hasFireplace: true,
    tag: 'Recomendado para grupos',
    description: 'Perfecta para grupos que quieren compartirlo todo. Cuenta con un salón enorme con chimenea tradicional andaluza, cocina rústica equipada al completo y acceso directo al porche principal de las barbacoas.',
    features: ['Cancelación flexible', 'Leña de cortesía incluida', 'Acceso directo a barbacoas'],
    image: null
  },
  {
    id: 'casa-el-almendro',
    code: 'Casa El Almendro',
    name: 'El Refugio del Valle',
    capacity: '2 a 4 plazas',
    maxGuests: 4,
    hasFireplace: false,
    tag: 'Vistas panorámicas',
    description: 'Un rincón independiente y acogedor, pensado para parejas o familias pequeñas que buscan intimidad. Disfruta de las mañanas con vistas infinitas a los bancales frutales y valles de la Alpujarra Alta.',
    features: ['Balcón privado al valle', 'Espacio independiente', 'Soporte directo 24/7'],
    image: null
  },
  {
    id: 'casa-la-acequia',
    code: 'Casa La Acequia',
    name: 'El Rincón del Agua',
    capacity: '2 plazas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Ideal parejas',
    description: 'Un apartamento íntimo donde el murmullo del agua es el único sonido de fondo. Cuenta con un dormitorio abovedado de piedra, baño artesanal y una pequeña cocina de leña completamente funcional.',
    features: ['Entrada independiente', 'Vistas al riachuelo', 'Cama King Size'],
    image: null
  },
  {
    id: 'casa-la-parra',
    code: 'Casa La Parra',
    name: 'El Porche Secreto',
    capacity: '4 plazas',
    maxGuests: 4,
    hasFireplace: false,
    tag: 'Sombra natural',
    description: 'Destaca por su espectacular terraza privada techada por una parra centenaria. Ideal para almuerzos frescos al aire libre y largas conversaciones al atardecer contemplando la sierra alta.',
    features: ['Terraza exclusiva', 'Barbacoa individual', 'Wifi de alta velocidad'],
    image: null
  },
  {
    id: 'casa-el-castano',
    code: 'Casa El Castaño',
    name: 'La Estancia de la Sierra',
    capacity: '6 plazas',
    maxGuests: 6,
    hasFireplace: true,
    tag: 'Gran formato familiar',
    description: 'Espacio masivo distribuido en dos plantas de arquitectura tradicional alpujarreña. Grandes muros de piedra que mantienen la temperatura perfecta y ventanales orientados al sol de la mañana.',
    features: ['Dos niveles completos', 'Chimenea de forja', 'Parking próximo'],
    image: null
  },
  {
    id: 'casa-el-mirador',
    code: 'Casa El Mirador',
    name: 'La Atalaya de Lobras',
    capacity: '2 a 3 plazas',
    maxGuests: 3,
    hasFireplace: false,
    tag: 'Máxima altura',
    description: 'Ubicado en el punto más alto del complejo, ofrece una perspectiva de 360 grados del entorno rural. Perfecto para desconectar del mundo y disfrutar del cielo estrellado más limpio de Andalucía.',
    features: ['Solárium privado', 'Techos de vigas vistas', 'Cafetera de especialidad'],
    image: null
  },
  {
    id: 'casa-la-higuera',
    code: 'Casa La Higuera',
    name: 'El Patio Escondido',
    capacity: '4 plazas',
    maxGuests: 4,
    hasFireplace: false,
    tag: 'Arquitectura viva',
    description: 'Organizado alrededor de un patio interior tradicional andaluz dominado por una higuera frondosa. Ofrece frescor absoluto en verano y una privacidad total ideal para familias con niños.',
    features: ['Patio privado andaluz', 'Cocina equipada premium', 'Pet friendly bajo petición'],
    image: null
  },
  {
    id: 'casa-el-granado',
    code: 'Casa El Granado',
    name: 'La Suite del Huerto',
    capacity: '2 plazas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Detalles de autor',
    description: 'Un estudio de diseño rústico minimalista con acceso directo a los frutales del complejo. Ideal para estancias largas de teletrabajo rural o escapadas románticas de desconexión absoluta.',
    features: ['Salida directo al huerto', 'Escritorio de castaño', 'Baño con ducha de piedra'],
    image: null
  },
  {
    id: 'casa-la-solana',
    code: 'Casa La Solana',
    name: 'El Refugio del Sol',
    capacity: '4 a 5 plazas',
    maxGuests: 5,
    hasFireplace: false,
    tag: 'Luz natural continua',
    description: 'Orientado completamente al sur, este apartamento goza de una iluminación espectacular durante todo el año. Su salón integrado conecta fluidamente con un comedor exterior empedrado.',
    features: ['Orientación sur total', 'Comedor exterior', 'Calefacción ecológica'],
    image: null
  },
  {
    id: 'casa-la-bodega',
    code: 'Casa La Bodega',
    name: 'El Santuario de Piedra',
    capacity: '2 plazas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Experiencia inmersiva',
    description: 'Construido sobre las bases de una antigua bodega subterránea, este alojamiento ofrece una experiencia arquitectónica única, con muros de roca pura expuesta y un aislamiento acústico insuperable.',
    features: ['Muros de piedra nativa', 'Temperatura autorregulada', 'Iluminación cálida de autor'],
    image: null
  }
]

// LÓGICA DE FILTRADO
const filteredApartments = computed(() => {
  return apartments.filter(apt => {
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