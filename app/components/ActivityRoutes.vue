<template>
  <section class="w-full bg-[#fcfaf7] py-28 px-4 md:px-8 lg:px-12 select-none">
    <div class="max-w-7xl mx-auto space-y-20">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-200/60 pb-16">
        
        <div class="lg:col-span-7 space-y-6">
          <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.2em] block">
            La experiencia campo viva
          </span>
          
          <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] m-0 font-normal">
            Planifica tu <br />
            <span class="text-[#3b6e4c] font-black block mt-2">propia ruta.</span>
          </h2>
          
          <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl m-0 normal-case pt-2">
            Cambia el ruido de las notificaciones por el murmullo de las acequias medievales. Explora senderos históricos directamente desde el huerto.
          </p>
        </div>

        <div class="lg:col-span-5 bg-[#f6f3eb] rounded-[2rem] p-8 border border-stone-200/40 shadow-[0_15px_40px_-20px_rgba(42,53,44,0.04)] space-y-6 w-full lg:max-w-md lg:justify-self-end">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-stone-300 overflow-hidden shrink-0 shadow-inner">
              <img 
                :src="whatsappGroupImage" 
                alt="Icono Grupo Senderismo" 
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 class="text-sm font-sans font-black text-stone-800 uppercase tracking-wider m-0">
                ¿Dudas con el camino?
              </h4>
              <p class="text-stone-500 text-xs font-medium m-0 mt-0.5">
                Comunidad de senderistas del Huerto
              </p>
            </div>
          </div>
          
          <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed m-0">
            Habla directamente con nosotros para recibir recomendaciones del estado de los senderos en tiempo real.
          </p>

          <a 
            href="https://wa.me/34600000000?text=Hola!%20Quería%20unirme%20al%20chat%20de%20senderismo"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] no-underline shadow-sm text-center w-full"
          >
            <i class="fa-brands fa-whatsapp text-base"></i>
            <span>Chat de Senderismo</span>
          </a>
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <NuxtLink 
          v-for="route in routes" 
          :key="route.id"
          :to="`/actividades/${route.id}`"
          class="bg-white rounded-[1.5rem] overflow-hidden border border-stone-200/50 shadow-[0_15px_45px_-20px_rgba(42,53,44,0.03)] flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_35px_70px_-15px_rgba(42,53,44,0.07)] hover:-translate-y-1-0.5 no-underline block bg-white"
        >
          <div class="relative aspect-[16/9] bg-stone-900 overflow-hidden">
            <div 
              class="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-103"
              :style="{ backgroundImage: `url(${route.image || defaultImage})` }"
            ></div>
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/30 to-transparent z-10"></div>
            
          </div>

          <div class="p-8 flex-1 flex flex-col justify-between space-y-8">
            <div class="space-y-3">
              <h3 class="font-sans font-black text-2xl text-stone-900 leading-snug m-0 group-hover:text-[#3b6e4c] transition-colors">
                {{ route.name }}
              </h3>
              <p class="text-stone-500 text-base font-medium leading-relaxed m-0 line-clamp-2">
                {{ route.description }}
              </p>
            </div>

            <div class="pt-5 border-t border-stone-100 flex items-center justify-between text-stone-700">
              <div class="flex items-center gap-2 text-base font-sans font-black">
                <i class="fa-solid fa-route text-[#3b6e4c]"></i>
                <span>{{ route.distance }}</span>
              </div>
              <div class="flex items-center gap-2 text-base font-sans font-black">
                <i class="fa-regular fa-clock text-[#3b6e4c]"></i>
                <span>{{ route.duration }}</span>
              </div>
            </div>
          </div>

          <div class="px-8 pb-8 pt-2">
            <div class="w-full bg-[#f6f3eb] group-hover:bg-[#3b6e4c] text-stone-800 group-hover:text-white font-sans font-black text-xs uppercase tracking-widest py-4 rounded-xl text-center block transition-colors">
              Ver detalles de la ruta
            </div>
          </div>
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import defaultImage from '~/assets/img/default.jpg'
import whatsappGroupImage from '~/assets/img/default.jpg'

const routes = [
  {
    id: 'ruta-acequias',
    name: 'Ruta de las Acequias Escondidas',
    difficulty: 'Fácil',
    distance: '4.5 km',
    duration: '1h 30m',
    description: 'Paseo sombreado siguiendo los canales medievales de agua que abastecen los huertos tradicionales. Ideal para mañanas frescas de verano.',
    image: null
  },
  {
    id: 'sendero-penon',
    name: 'Sendero del Peñón de Lobras',
    difficulty: 'Media',
    distance: '8.2 km',
    duration: '3h 00m',
    description: 'Ascenso continuo a la formación rocosa más imponente de la zona. Recompensa al caminante con vistas panorámicas de Sierra Nevada.',
    image: null
  },
  {
    id: 'caminos-reales',
    name: 'Caminos Reales hacia Cádiar',
    difficulty: 'Media-Alta',
    distance: '12.0 km',
    duration: '4h 30m',
    description: 'Ruta histórica que conecta los pueblos utilizando antiguos senderos de piedra, rodeados de almendros y vides de alta montaña.',
    image: null
  },
  {
    id: 'paseo-fluvial',
    name: 'Paseo Fluvial Río Guadalfeo',
    difficulty: 'Muy Fácil',
    distance: '3.0 km',
    duration: '1h 00m',
    description: 'Itinerario plano y familiar por la ribera del río. Perfecto para caminar con niños y observar la fauna activa del valle.',
    image: null
  }
]

const getDifficultyClass = (difficulty) => {
  switch (difficulty) {
    case 'Muy Fácil': return 'bg-emerald-600'
    case 'Fácil': return 'bg-teal-600'
    case 'Media': return 'bg-amber-600'
    case 'Media-Alta': return 'bg-orange-600'
    default: return 'bg-stone-600'
  }
}
</script>