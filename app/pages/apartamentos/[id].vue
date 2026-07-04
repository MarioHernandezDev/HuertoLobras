<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased" v-if="apartment">
    
    <div class="w-full h-[60vh] md:h-[75vh] relative bg-stone-900 overflow-hidden">
      <div 
        class="absolute inset-0 bg-cover bg-center opacity-80"
        :style="{ backgroundImage: `url(${activeImage || defaultImg})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#fcfaf7] via-stone-950/30 to-transparent z-10"></div>
      
      <div class="absolute bottom-12 left-4 md:left-8 lg:left-12 right-4 z-20 max-w-7xl mx-auto">
        <div class="space-y-3">
          <NuxtLink 
            to="/apartamentos" 
            class="inline-flex items-center gap-2 text-stone-700 font-sans font-bold text-sm no-underline bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full hover:bg-white transition-all border border-stone-200 shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-[#3b6e4c]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Volver a estancias</span>
          </NuxtLink>
          
          <div class="pt-4">
            <span class="text-stone-800 font-mono text-sm uppercase tracking-[0.2em] block font-bold">
              &bull; {{ apartment.code }}
            </span>
            <h1 class="font-manual text-5xl sm:text-7xl lg:text-8xl text-stone-900 font-normal tracking-wide leading-none m-0 mt-1">
              {{ apartment.name }}
            </h1>
          </div>
        </div>
      </div>
    </div>

    <section class="py-20 px-4 md:px-8 lg:px-12 w-full mx-auto select-none">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div class="lg:col-span-7 space-y-16">
          
          <div class="space-y-6">
            <div class="inline-flex items-center gap-2 bg-[#e9f2eb] px-4 py-2 rounded-full text-[#3b6e4c] text-sm font-sans font-black uppercase tracking-wider">
              <span>{{ apartment.tag }}</span>
            </div>
            <p class="text-stone-800 text-xl sm:text-2xl font-medium leading-relaxed m-0 normal-case">
              {{ apartment.description }}
            </p>
          </div>

          <div class="space-y-4">
            <h3 class="font-sans font-black text-sm text-stone-400 uppercase tracking-[0.2em] m-0">
              Galería fotográfica
            </h3>
            
            <div class="w-full h-[350px] sm:h-[450px] rounded-[2rem] overflow-hidden bg-stone-100 border border-stone-200/40 relative">
              <img 
                :src="activeImage || defaultImg" 
                :alt="apartment.name"
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="grid grid-cols-4 gap-4">
              <button 
                v-for="(img, idx) in galleryImages" 
                :key="idx"
                @click="activeImage = img"
                class="h-20 sm:h-24 rounded-xl overflow-hidden bg-stone-100 border transition-all relative cursor-pointer p-0"
                :class="activeImage === img ? 'border-[#3b6e4c] ring-2 ring-[#3b6e4c]/20' : 'border-stone-200 hover:border-stone-400'"
              >
                <img :src="img" class="w-full h-full object-cover" alt="Miniatura" />
              </button>
            </div>
          </div>

          <div class="space-y-6 pt-8 border-t border-stone-200/60">
            <h3 class="font-sans font-black text-sm text-stone-400 uppercase tracking-[0.2em] m-0">
              Servicios & Comodidades
            </h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <div 
                v-for="(feature, idx) in apartment.features" 
                :key="idx"
                class="flex items-center gap-3.5 py-1"
              >
                <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span class="text-stone-700 text-base font-sans font-bold">{{ feature }}</span>
              </div>
              
              <div class="flex items-center gap-3.5 py-1">
                <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-wifi text-xs"></i></div>
                <span class="text-stone-700 text-base font-sans font-bold">Wi-Fi de alta velocidad</span>
              </div>
              <div class="flex items-center gap-3.5 py-1">
                <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-snowflake text-xs"></i></div>
                <span class="text-stone-700 text-base font-sans font-bold">Calefacción regulable</span>
              </div>
              <div class="flex items-center gap-3.5 py-1" v-if="apartment.hasFireplace">
                <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0"><i class="fa-solid fa-fire text-xs"></i></div>
                <span class="text-stone-700 text-base font-sans font-bold">Chimenea tradicional</span>
              </div>
            </div>
          </div>

        </div>

        <aside class="lg:col-span-5 bg-[#f6f3eb] rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/40 shadow-[0_30px_70px_-20px_rgba(42,53,44,0.06)] lg:sticky lg:top-28 z-20 space-y-8">
          
          <div class="space-y-2 pb-6 border-b border-stone-200/60">
            <span class="text-sm font-mono text-stone-500 uppercase tracking-[0.2em] block font-bold">
              Gestión de Reserva
            </span>
            <h4 class="font-manual text-3xl sm:text-4xl text-stone-900 m-0 font-normal">
              Elige cómo reservar
            </h4>
          </div>

          <div class="space-y-5">
            
            <div class="bg-white rounded-2xl p-6 border-2 border-[#3b6e4c] shadow-sm space-y-4 relative overflow-hidden">
              <div class="absolute top-0 right-0 bg-[#3b6e4c] text-white text-xs font-sans font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">
                Recomendado
              </div>
              
              <div class="flex justify-between items-start pt-2">
                <div>
                  <span class="text-xs font-mono font-bold text-[#3b6e4c] uppercase tracking-wider block">Opción Directa</span>
                  <h5 class="text-lg font-sans font-black text-stone-900 m-0 mt-0.5">Tarifa Web Garantizada</h5>
                </div>
                <div class="text-right">
                  <span class="text-sm text-stone-400 font-bold line-through block">120€ / noche</span>
                  <span class="text-2xl font-sans font-black text-[#3b6e4c]">102€ <span class="text-sm font-medium text-stone-500">/ noche</span></span>
                </div>
              </div>
              
              <p class="text-stone-600 text-sm font-medium m-0 leading-relaxed">
                Ahorra comisiones externas. Incluye obsequio de bienvenida y flexibilidad total en entrada/salida bajo disponibilidad de fechas.
              </p>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a 
                  :href="`https://wa.me/34679038079?text=Hola!%20Me%20gustaría%20reservar%20el%20alojamiento%20${apartment.name}%20con%20la%20tarifa%20directa%20web.`"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba56] text-white text-sm font-sans font-black uppercase tracking-wider py-4 px-4 rounded-xl transition-transform hover:scale-[1.01] no-underline shadow-sm text-center"
                >
                  <i class="fa-brands fa-whatsapp text-base"></i>
                  <span>Por WhatsApp</span>
                </a>
                
                <a 
                  href="tel:+34679038079"
                  class="flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-sm font-sans font-black uppercase tracking-wider py-4 px-4 rounded-xl transition-transform hover:scale-[1.01] no-underline shadow-sm text-center"
                >
                  <i class="fa-solid fa-phone text-amber-400 text-sm"></i>
                  <span>Llamar Ahora</span>
                </a>
              </div>
            </div>

            <div class="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
              <div class="space-y-1 max-w-full sm:max-w-[65%]">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span class="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider block">Agencia Externa</span>
                </div>
                <h5 class="text-base font-sans font-black text-stone-800 m-0">Plataforma Booking.com</h5>
                <p class="text-stone-600 text-sm font-medium m-0 pt-0.5 leading-relaxed">
                  Sujeto a incrementos convencionales por tasas de gestión ajenas a nuestra política rural.
                </p>
              </div>
              
              <div class="text-left sm:text-right shrink-0 flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-3 sm:gap-1 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                <span class="text-xl font-sans font-black text-stone-700 block">
                  120€ <span class="text-xs font-medium text-stone-400">/ noche</span>
                </span>
                <a 
                  href="https://www.booking.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center bg-stone-100 hover:bg-stone-200 border border-stone-300 text-stone-800 font-sans font-black text-xs uppercase tracking-widest py-3 px-4 rounded-xl no-underline transition-colors min-w-[120px] text-center"
                >
                  Ir a Booking
                </a>
              </div>
            </div>

          </div>

          <div class="pt-5 border-t border-stone-200/60 flex items-start gap-3 text-stone-500">
            <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <p class="text-sm font-medium m-0 leading-relaxed">
              Al gestionar tu estancia de forma directa tratas con nosotros, los dueños de las llaves. Sin centralitas, sin sorpresas y con la mejor tarifa garantizada del complejo.
            </p>
          </div>

        </aside>

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

const route = useRoute()
const apartment = ref(null)
const activeImage = ref(null)

const galleryImages = ref([
  defaultImg,
  defaultImg,
  defaultImg,
  defaultImg
])

const apartmentsCollection = [
  {
    id: 'casa-el-olivo',
    code: 'Casa El Olivo',
    name: 'La Casa Principal',
    capacity: '4 a 6 plazas',
    hasFireplace: true,
    tag: 'Recomendado para grupos',
    description: 'Perfecta para grupos que quieren compartirlo todo. Cuenta con un salón enorme con chimenea tradicional andaluza, cocina rústica equipada al completo y acceso directo al porche principal de las barbacoas.',
    features: ['Cancelación flexible directa', 'Leña de cortesía incluida', 'Acceso directo a barbacoas', 'Salón en formato imperial', 'Ventanales térmicos de madera'],
  },
  {
    id: 'casa-el-almendro',
    code: 'Casa El Almendro',
    name: 'El Refugio del Valle',
    capacity: '2 a 4 plazas',
    hasFireplace: false,
    tag: 'Vistas panorámicas',
    description: 'Un rincón independiente y acogedor, pensado para parejas o familias pequeñas que buscan intimidad. Disfruta de las mañanas con vistas infinitas a los bancales frutales y valles de la Alpujarra Alta.',
    features: ['Balcón privado al valle', 'Espacio independiente de lectura', 'Soporte directo 24/7', 'Cocina equipada integrada'],
  },
  {
    id: 'casa-la-acequia',
    code: 'Casa La Acequia',
    name: 'El Rincón del Agua',
    capacity: '2 plazas',
    hasFireplace: false,
    tag: 'Ideal parejas',
    description: 'Un apartamento íntimo donde el murmullo del agua es el único sonido de fondo. Cuenta con un dormitorio abovedado de piedra, baño artesanal y una pequeña cocina de leña completamente funcional.',
    features: ['Entrada independiente', 'Vistas al riachuelo del huerto', 'Cama King Size de algodón orgánico', 'Aislamiento de roca nativa'],
  },
  {
    id: 'casa-la-parra',
    code: 'Casa La Parra',
    name: 'El Porche Secreto',
    capacity: '4 plazas',
    hasFireplace: false,
    tag: 'Sombra natural',
    description: 'Destaca por su espectacular terraza privada techada por una parra centenaria. Ideal para almuerzos frescos al aire libre y largas conversations al atardecer contemplando la sierra alta.',
    features: ['Terraza exclusiva exterior', 'Barbacoa individual', 'Wifi de alta velocidad', 'Mobiliario exterior de forja'],
  },
  {
    id: 'casa-el-castano',
    code: 'Casa El Castaño',
    name: 'La Estancia de la Sierra',
    capacity: '6 plazas',
    hasFireplace: true,
    tag: 'Gran formato familiar',
    description: 'Espacio masivo distribuido en dos plantas de arquitectura tradicional alpujarreña. Grandes muros de piedra que mantienen la temperatura perfecta y ventanales orientados al sol de la mañana.',
    features: ['Dos niveles completos comunicados', 'Chimenea de forja de alto rendimiento', 'Parking próximo', 'Doble baño rústico completo'],
  },
  {
    id: 'casa-el-mirador',
    code: 'Casa El Mirador',
    name: 'La Atalaya de Lobras',
    capacity: '2 a 3 plazas',
    hasFireplace: false,
    tag: 'Máxima altura',
    description: 'Ubicado en el punto más alto del complejo, ofrece una perspectiva de 360 grados del entorno rural. Perfecto para desconectar del mundo y disfrutar del cielo estrellado más limpio de Andalucía.',
    features: ['Solárium privado superior', 'Techos de vigas de castaño vistas', 'Cafetera de especialidad incluida', 'Mirador interior acristalado'],
  },
  {
    id: 'casa-la-higuera',
    code: 'Casa La Higuera',
    name: 'El Patio Escondido',
    capacity: '4 plazas',
    hasFireplace: false,
    tag: 'Arquitectura viva',
    description: 'Organizado alrededor de un patio interior tradicional andaluz dominado por una higuera frondosa. Ofrece frescor absoluto en verano y una privacidad total ideal para familias con niños.',
    features: ['Patio privado andaluz', 'Cocina equipada premium', 'Pet friendly bajo petición previa', 'Suelo de barro artesanal'],
  },
  {
    id: 'casa-el-granado',
    code: 'Casa El Granado',
    name: 'La Suite del Huerto',
    capacity: '2 plazas',
    hasFireplace: false,
    tag: 'Detalles de autor',
    description: 'Un estudio de diseño rústico minimalista con acceso directo a los frutales del complejo. Ideal para estancias largas de teletrabajo rural o escapadas románticas de desconexión absoluta.',
    features: ['Salida directo al huerto', 'Escritorio integrado de madera de castaño', 'Baño con ducha de piedra natural', 'Ventilación cruzada ecológica'],
  },
  {
    id: 'casa-la-solana',
    code: 'Casa La Solana',
    name: 'El Refugio del Sol',
    capacity: '4 a 5 plazas',
    hasFireplace: false,
    tag: 'Luz natural continua',
    description: 'Orientado completamente al sur, este apartamento goza de una iluminación espectacular durante todo el año. Su salón integrado conecta fluidamente con un comedor exterior empedrado.',
    features: ['Orientación sur total', 'Comedor exterior empedrado', 'Calefacción ecológica', 'Vistas al prado central'],
  },
  {
    id: 'casa-la-bodega',
    code: 'Casa La Bodega',
    name: 'El Santuario de Piedra',
    capacity: '2 plazas',
    hasFireplace: false,
    tag: 'Experiencia inmersiva',
    description: 'Construido sobre las bases de una antigua bodega subterránea, este alojamiento ofrece una experiencia arquitectónica única, con muros de roca pura expuesta y un aislamiento acústico insuperable.',
    features: ['Muros de piedra nativa expuesta', 'Temperatura autorregulada de forma natural', 'Iluminación cálida de autor', 'Silencio absoluto garantizado'],
  }
]

onMounted(() => {
  const targetId = route.params.id
  const found = apartmentsCollection.find(apt => apt.id === targetId)
  
  if (found) {
    apartment.value = found
    activeImage.value = defaultImg
  }
})
</script>