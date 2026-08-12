<template>
  <main class="w-full bg-[#fcfaf7] bg-texture min-h-screen antialiased relative">
    
    <MiniHero 
      title="Espacios con alma." 
      subtitle="Nuestros alojamientos"
      :backgroundImage="heroImage" 
    />

    <section class="relative pt-36 md:pt-48 pb-32 px-4 md:px-8 lg:px-12 w-full mx-auto select-none">
      
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-12 -right-20 w-[28rem] h-[28rem] md:w-[45rem] md:h-[45rem] rounded-full bg-[#e8decb]/60 blur-[100px] md:blur-[140px]"></div>
        <div class="absolute top-1/2 -left-24 w-[30rem] h-[30rem] md:w-[48rem] md:h-[48rem] rounded-full bg-[#d6c4ad]/50 blur-[90px] md:blur-[130px]"></div>
        <div class="absolute -bottom-20 right-10 w-[26rem] h-[26rem] md:w-[42rem] md:h-[42rem] rounded-full bg-[#e2d5c3]/70 blur-[80px] md:blur-[120px]"></div>
      </div>

      <div class="relative z-10 max-w-[96%] mx-auto">
        
        <div class="border-b border-stone-300/40 pb-16 mb-16 overflow-hidden">
          <div class="max-w-4xl space-y-4 animate-slide-left">
            <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.3em] block">
              Siente la Alpujarra Alta
            </span>
            <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.88] m-0 font-normal">
              Nuestros mejores<br />
              <span class="text-[#3b6e4c] font-black block mt-1">apartamentos.</span>
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 animate-fade-up">
          
          <div class="lg:col-span-3">
            <aside class="bg-white/70 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-stone-200/80 shadow-md shadow-stone-900/5 lg:sticky lg:top-28 z-20 space-y-6">
              <div class="space-y-1 pb-4 border-b border-stone-200/60">
                <span class="text-xs font-mono text-stone-400 uppercase tracking-[0.2em] block font-bold">
                  Buscador
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
                    class="flex items-center justify-center gap-3 bg-stone-900 hover:bg-[#3b6e4c] text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-4 rounded-full transition-all duration-300 shadow-sm text-center no-underline"
                  >
                    <i class="fa-solid fa-phone text-amber-400 text-sm"></i>
                    <span>Llamar Directo</span>
                  </a>

                  <a 
                    href="https://www.booking.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-3 bg-[#003580] hover:bg-[#00224f] text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-full transition-colors text-center no-underline shadow-sm"
                  >
                    <span>Tarifa Booking</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div class="lg:col-span-9 space-y-8">
            <div class="text-xs font-mono text-stone-400 uppercase tracking-[0.2em] pl-2 font-bold">
              Mostrando {{ filteredApartments.length }} de {{ apartmentsWithImages.length }} estancias
            </div>

            <div v-if="filteredApartments.length > 0" class="space-y-8">
              <ApartmentCard 
                v-for="apt in filteredApartments" 
                :key="apt.id" 
                :apartment="apt"
              />
            </div>

            <div v-else class="bg-white/80 backdrop-blur-md rounded-3xl p-12 md:p-16 text-center border border-stone-200/80 shadow-md shadow-stone-900/5 space-y-4">
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
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// Importaciones base
import heroImage from '~/assets/img/heroapartamentos.JPG'
import defaultImg from '~/assets/img/default.jpg'

// Carga global dinámica de las imágenes de las subcarpetas
const allImages = import.meta.glob('~/assets/img/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

// Función para recuperar la portada o la imagen fallback
const getCoverImage = (folder) => {
  const fullPath = `/assets/img/${folder}/portada.jpg`
  const fullPathUpper = `/assets/img/${folder}/portada.JPG`
  
  return allImages[fullPath] || allImages[fullPathUpper] || defaultImg
}

// Estado del Buscador Integrado
const selectedCapacity = ref('all')
const filterFireplace = ref(false)

const resetFilters = () => {
  selectedCapacity.value = 'all'
  filterFireplace.value = false
}

// Dataset de Alojamientos
const rawApartments = [
  {
    id: 'apartamento-las-golondrinas',
    folder: 'golondrinas',
    code: 'Las Golondrinas',
    name: 'Apartamento Las Golondrinas',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Tragaluces • Vista a la iglesia',
    description: 'Conservando pilares y fachada originales de la casa antigua. Dispone de dos tragaluces en el salón desde los que contemplar la iglesia iluminada de noche.',
    features: ['1 Dormitorio + Sofá cama', 'Dos tragaluces en el techo', 'Se admite 1 perro']
  },
  {
    id: 'apartamento-la-seda',
    folder: 'seda',
    code: 'La Seda',
    name: 'Apartamento La Seda',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '2 dormitorios • Terrazas privadas',
    description: 'Inspirado en la historia textil de Lobras de 1757. El único apartamento con dos dormitorios independientes, cada uno con su propia terraza privada.',
    features: ['2 Dormitorios (2 terrazas)', 'Rincón histórico y acogedor', 'Se admite 1 perro']
  },
  {
    id: 'apartamento-los-cerezos',
    folder: 'cerezos',
    code: 'Los Cerezos',
    name: 'Apartamento Los Cerezos',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Planta baja • Adaptado minusválidos',
    description: 'Ubicado en planta baja con acceso totalmente adaptado a personas con movilidad reducida. Cuenta con un dormitorio muy amplio y terraza al jardín.',
    features: ['Adaptado a minusválidos', 'Terraza directa al jardín', 'Chimenea tradicional']
  },
  {
    id: 'apartamento-los-trovos',
    folder: 'trovos',
    code: 'Los Trovos',
    name: 'Apartamento Los Trovos',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '1 dormitorio • Terraza alpujarreña',
    description: 'Homenaje a la tradición del trovo y los cantautores alpujarreños. Alojamiento rústico muy tranquilo con chimenea, salón y terraza propia.',
    features: ['1 Dormitorio principal', 'Terraza privada', 'Chimenea tradicional']
  },
  {
    id: 'apartamento-la-contraviesa',
    folder: 'contraviesa',
    code: 'La Contraviesa',
    name: 'Apartamento La Contraviesa',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Ático • La mayor terraza',
    description: 'Situado en la tercera planta (ático). Posee la terraza más grande del complejo, bordeando casi todo el apartamento con vistas panorámicas espectaculares.',
    features: ['Ático con gran terraza', 'Vistas panorámicas 360°', 'Chimenea + Sofá cama']
  },
  {
    id: 'estudio',
    folder: 'estudio',
    code: 'El Estudio',
    name: 'El Estudio',
    capacity: '2 plazas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Ideal parejas • Vistas a la plaza',
    description: 'Estancia íntima y diáfana pensada para dos personas. Cuenta con terraza hacia la plaza del ayuntamiento, perfecta para disfrutar de las puestas de sol.',
    features: ['Cama de matrimonio', 'Terraza hacia la plaza', 'Espectaculares atardeceres']
  },
  {
    id: 'la-biblioteca',
    folder: 'biblioteca',
    code: 'La Biblioteca',
    name: 'La Biblioteca',
    capacity: '2 a 3 plazas',
    maxGuests: 3,
    hasFireplace: false,
    tag: 'Rincón de lectura • Atmósfera de paz',
    description: 'Un rincón singular pensado para el descanso pausado y la lectura, combinando acabados de madera y piedra natural en un ambiente sereno.',
    features: ['Atmósfera pacífica', 'Detalles de piedra y madera', 'Ideal para el descanso']
  }
]

// Asignar las portadas calculadas a cada apartamento
const apartmentsWithImages = computed(() => {
  return rawApartments.map(apt => ({
    ...apt,
    image: getCoverImage(apt.folder)
  }))
})

// Computado de Filtrado Lógico
const filteredApartments = computed(() => {
  return apartmentsWithImages.value.filter(apt => {
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

<style scoped>
.bg-texture {
  position: relative;
}
.bg-texture::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.023;
  pointer-events: none;
  z-index: 99;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
}

.animate-slide-left {
  animation: slideFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

@keyframes slideFromLeft {
  0% { opacity: 0; transform: translateX(-60px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-left, .animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>