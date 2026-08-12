<template>
  <main class="w-full bg-[#fcfaf7] bg-texture min-h-screen antialiased relative" v-if="apartment">
    
    <MiniHero 
      :title="apartment.name" 
      :subtitle="`Alojamientos • ${apartment.code}`"
      :backgroundImage="heroImage || defaultImg" 
    />

    <section class="relative pt-12 md:pt-16 pb-28 px-4 md:px-8 lg:px-12 w-full mx-auto select-none">
      
      <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div class="absolute top-10 -right-20 w-[28rem] h-[28rem] md:w-[45rem] md:h-[45rem] rounded-full bg-[#e8decb]/50 blur-[100px] md:blur-[140px]"></div>
        <div class="absolute top-1/2 -left-24 w-[30rem] h-[30rem] md:w-[48rem] md:h-[48rem] rounded-full bg-[#d6c4ad]/40 blur-[90px] md:blur-[130px]"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto space-y-10">
        
        <div>
          <NuxtLink 
            to="/apartamentos" 
            class="inline-flex items-center gap-2 text-stone-700 font-sans font-bold text-xs uppercase tracking-widest no-underline bg-white/80 backdrop-blur-md px-5 py-3 rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 border border-stone-200 shadow-sm group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-[#3b6e4c] group-hover:text-amber-400 transition-colors">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Volver a estancias</span>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div class="lg:col-span-7 space-y-12">
            
            <div class="space-y-6">
              <p class="text-stone-800 text-xl sm:text-2xl font-medium leading-relaxed m-0 normal-case">
                {{ apartment.description }}
              </p>
            </div>

            <div class="space-y-4">
              <span class="font-sans font-black text-xs text-stone-400 uppercase tracking-[0.25em] block">
                Galería fotográfica
              </span>
              
              <div class="w-full h-[360px] sm:h-[460px] rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/80 shadow-md shadow-stone-900/5 relative">
                <img 
                  :src="activeImage || defaultImg" 
                  :alt="apartment.name"
                  class="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              
              <div class="grid grid-cols-4 gap-3 sm:gap-4">
                <button 
                  v-for="(img, idx) in galleryImages" 
                  :key="idx"
                  @click="activeImage = img"
                  class="h-20 sm:h-24 rounded-2xl overflow-hidden bg-stone-100 border transition-all duration-300 relative cursor-pointer p-0 shadow-sm"
                  :class="activeImage === img ? 'border-[#3b6e4c] ring-2 ring-[#3b6e4c]/30 scale-[1.02]' : 'border-stone-200 hover:border-stone-400 opacity-70 hover:opacity-100'"
                >
                  <img :src="img" class="w-full h-full object-cover" alt="Miniatura" />
                </button>
              </div>
            </div>

            <div class="space-y-6 pt-8 border-t border-stone-300/40">
              <span class="font-sans font-black text-xs text-stone-400 uppercase tracking-[0.25em] block">
                Servicios & Comodidades
              </span>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div 
                  v-for="(feature, idx) in apartment.features" 
                  :key="idx"
                  class="flex items-center gap-3.5 py-1"
                >
                  <div class="w-6 h-6 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3.5 h-3.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span class="text-stone-700 text-base font-sans font-bold">{{ feature }}</span>
                </div>
                
                <div class="flex items-center gap-3.5 py-1">
                  <div class="w-6 h-6 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-wifi text-xs"></i></div>
                  <span class="text-stone-700 text-base font-sans font-bold">Wi-Fi de alta velocidad</span>
                </div>
                <div class="flex items-center gap-3.5 py-1">
                  <div class="w-6 h-6 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-snowflake text-xs"></i></div>
                  <span class="text-stone-700 text-base font-sans font-bold">Calefacción regulable</span>
                </div>
                <div class="flex items-center gap-3.5 py-1" v-if="apartment.hasFireplace">
                  <div class="w-6 h-6 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-fire text-xs"></i></div>
                  <span class="text-stone-700 text-base font-sans font-bold">Chimenea tradicional</span>
                </div>
              </div>
            </div>

          </div>

          <aside class="lg:col-span-5 bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md shadow-stone-900/5 lg:sticky lg:top-28 z-20 space-y-6">
            
            <div class="space-y-1 pb-5 border-b border-stone-200/60">
              <span class="text-xs font-mono text-stone-400 uppercase tracking-[0.2em] block font-bold">
                Gestión de Reserva
              </span>
              <h4 class="font-manual text-3xl sm:text-4xl text-stone-900 m-0 font-normal">
                Elige cómo reservar
              </h4>
            </div>

            <div class="space-y-4">
              
              <div class="bg-white rounded-2xl p-6 border-2 border-[#3b6e4c] shadow-md space-y-4 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div class="absolute top-0 right-0 bg-[#3b6e4c] text-white text-[10px] font-sans font-black uppercase tracking-widest px-3.5 py-1 rounded-bl-xl">
                  Mejor Precio
                </div>
                
                <div class="pt-1">
                  <div class="flex items-center gap-1.5 text-[#3b6e4c]">
                    <i class="fa-solid fa-shield-halved text-xs"></i>
                    <span class="text-xs font-mono font-bold uppercase tracking-wider">Canal Directo Oficial</span>
                  </div>
                  <h5 class="text-xl font-sans font-black text-stone-900 m-0 mt-1">Reserva Online Directa</h5>
                </div>
                
                <p class="text-stone-600 text-xs font-medium m-0 leading-relaxed">
                  Disponibilidad en tiempo real y pago 100% seguro con confirmación inmediata a través de <strong class="text-stone-800">AvaiBook</strong>.
                </p>

                <a 
                  :href="apartment?.avaibookUrl || 'https://bookonline.pro/es/properties/11361?unidades=1'"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2.5 bg-[#3b6e4c] hover:bg-[#2e563b] text-white text-xs font-sans font-black uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300 no-underline shadow-md shadow-[#3b6e4c]/20 hover:scale-[1.01] text-center w-full"
                >
                  <i class="fa-solid fa-calendar-check text-amber-400 text-sm"></i>
                  <span>Reservar con AvaiBook</span>
                </a>
              </div>

              <div class="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-[#003580]"></span>
                    <span class="text-[11px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Agencia Externa</span>
                  </div>
                </div>

                <div>
                  <h5 class="text-base font-sans font-black text-stone-800 m-0">Plataforma Booking.com</h5>
                  <p class="text-stone-500 text-xs font-medium m-0 pt-0.5 leading-normal">
                    Ficha directa de nuestro complejo en Booking.
                  </p>
                </div>
                
                <a 
                  :href="apartment?.bookingUrl || 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 hover:text-stone-900 font-sans font-black text-xs uppercase tracking-widest py-3.5 px-5 rounded-full no-underline transition-all text-center w-full shadow-sm"
                >
                  <span>Ver en Booking.com</span>
                  <i class="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-60"></i>
                </a>
              </div>

            </div>

            <div class="pt-4 border-t border-stone-200/60 flex items-start gap-3 text-stone-500">
              <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <p class="text-xs font-medium m-0 leading-relaxed text-stone-600">
                Reservando a través de AvaiBook garantizas el precio oficial directo y sin comisiones de intermediarios.
              </p>
            </div>

          </aside>

        </div>
      </div>
    </section>

  </main>
  
  <div v-else class="min-h-screen bg-[#fcfaf7] flex items-center justify-center text-center p-12">
    <div class="space-y-4">
      <p class="text-stone-500 font-mono text-base uppercase tracking-widest font-bold">Buscando el rincón...</p>
      <NuxtLink to="/apartamentos" class="text-[#3b6e4c] font-sans font-black uppercase text-sm tracking-wider">Volver al listado</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import defaultImg from '~/assets/img/default.jpg'

// Cargar dinámicamente todas las imágenes
const allImages = import.meta.glob('~/assets/img/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default'
})

const route = useRoute()
const apartment = ref(null)

// Estados separados para el Hero y la Galería
const heroImage = ref(null)
const activeImage = ref(null)
const galleryImages = ref([])

const getImage = (path) => {
  const fullPath = `/assets/img/${path}`
  return allImages[fullPath] || defaultImg
}

const apartmentsCollection = [
  {
    id: 'apartamento-las-golondrinas',
    folder: 'golondrinas',
    code: 'Las Golondrinas',
    name: 'Apartamento Las Golondrinas',
    capacity: 'Hasta 4 personas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '1 dormitorio • Tragaluces y vistas',
    description: 'Este apartamento se llama Las Golondrinas porque mientras se rehabilitaba la casa antigua, dos parejas de golondrinas vivieron un verano entero dentro. Cuenta con pilares y fachada originales de la antigua casa. Por la noche en verano, desde el salón se contempla la iglesia iluminada reflejada en sus dos tragaluces.',
    photos: {
      hero: 'portada.jpg', // Foto exclusiva para el Hero
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg'] // Las 4 fotos de la galería
    },
    features: [
      '1 Dormitorio principal',
      'Salón con dos sofás cama',
      'Chimenea tradicional',
      'Dos tragaluces en el techo',
      'Calefacción central en todas las habitaciones',
      '1 Baño completo y cocina',
      'Máximo 1 perro por apartamento'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'apartamento-la-seda',
    folder: 'seda',
    code: 'La Seda',
    name: 'Apartamento La Seda',
    capacity: 'Hasta 4 personas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '2 dormitorios • Terrazas privadas',
    description: 'Su nombre rinde homenaje a 1757, cuando Lobras destacó por el cultivo de moreras para la seda y sus mujeres bordaban tejidos en telares. Es el único apartamento con dos dormitorios y terrazas privadas independientes en cada uno de ellos.',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      '2 Dormitorios (matrimonio + 2 camas)',
      '2 Terrazas privadas (una por dormitorio)',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Salón confort y cocina equipada',
      '1 Baño completo',
      'Máximo 1 perro por apartamento'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'apartamento-los-cerezos',
    folder: 'cerezos',
    code: 'Los Cerezos',
    name: 'Apartamento Los Cerezos',
    capacity: 'Hasta 4 personas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Planta baja • Adaptado minusválidos',
    description: 'Ubicado en la planta baja y completamente adaptado para personas con movilidad reducida o minusvalía. Cuenta con un amplio dormitorio, terraza directa al jardín y ambiente muy accesible.',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      '1 Dormitorio muy amplio',
      'Totalmente adaptado a minusválidos',
      'Terraza privada con salida al jardín',
      'Salón con sofá cama',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño adaptado'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'apartamento-los-trovos',
    folder: 'trovos',
    code: 'Los Trovos',
    name: 'Apartamento Los Trovos',
    capacity: 'Hasta 4 personas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '1 dormitorio • Terraza alpujarreña',
    description: 'Inspirado en la tradición del trovo o trovador alpujarreño, arte de cantar improvisando versos al son de la bandurria. Disfruta de un ambiente tradicional con terraza propia y un entorno tranquilo.',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      '1 Dormitorio principal',
      'Terraza privada',
      'Chimenea tradicional',
      'Salón confortable',
      'Calefacción central en todas las habitaciones',
      'Cocina y 1 baño completo'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'apartamento-la-contraviesa',
    folder: 'contraviesa',
    code: 'La Contraviesa',
    name: 'Apartamento La Contraviesa',
    capacity: 'Hasta 4 personas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Ático • Gran terraza panorámica',
    description: 'Bautizado por la sierra de La Contraviesa que separa Sierra Nevada de la costa. Situado en la tercera planta, es el ático con la terraza más grande de toda la casa, bordeando casi todo el alojamiento con vistas inmejorables.',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      '1 Dormitorio principal',
      'Gran terraza panorámica envolvente',
      'Salón amplio con sofá cama',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño completo'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'estudio',
    folder: 'estudio',
    code: 'El Estudio',
    name: 'El Estudio',
    capacity: '2 personas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Ideal parejas • Vistas a la Plaza',
    description: 'Alojamiento diáfano y acogedor para dos personas, con terraza orientada a la plaza del pueblo y la del ayuntamiento. Desde su terraza se aprecian espectaculares puestas de sol sobre Lobras (esta estancia no dispone de chimenea).',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      '1 Dormitorio con cama de matrimonio',
      'Terraza con vistas a la plaza del pueblo',
      'Vistas a la puesta de sol y ayuntamiento',
      'Salón amplio y diáfano',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño completo'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  },
  {
    id: 'la-biblioteca',
    folder: 'biblioteca',
    code: 'La Biblioteca',
    name: 'La Biblioteca',
    capacity: '2 a 3 personas',
    maxGuests: 3,
    hasFireplace: false,
    tag: 'Rincón de lectura • 2/3 pax',
    description: 'Un rincón lleno de encanto y calma, diseñado especialmente para la lectura, el descanso o una estancia pausada con carácter tradicional.',
    photos: {
      hero: 'portada.jpg',
      gallery: ['general.jpg', 'bano.jpg', 'dormitorio.jpg', 'detalle.jpg']
    },
    features: [
      'Atmósfera de descanso y lectura',
      'Capacidad para 2 a 3 personas',
      'Calefacción central',
      'Cocina equipada y baño completo'
    ],
    avaibookUrl: 'https://bookonline.pro/es/properties/11361?unidades=1',
    bookingUrl: 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'
  }
]

onMounted(() => {
  const targetId = route.params.id
  const found = apartmentsCollection.find(apt => apt.id === targetId)
  
  if (found) {
    apartment.value = found
    
    // 1. Imagen única fijada para el MiniHero arriba
    heroImage.value = getImage(`${found.folder}/${found.photos.hero}`)

    // 2. Galería de 4 fotos
    galleryImages.value = found.photos.gallery.map(filename => {
      return getImage(`${found.folder}/${filename}`)
    })

    // 3. Foto seleccionada por defecto en el visor de la galería (la primera de las 4)
    activeImage.value = galleryImages.value[0]
  }
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
</style>