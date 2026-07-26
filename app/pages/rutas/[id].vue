<template>
  <main v-if="route" class="w-full bg-[#fcfaf7] bg-texture min-h-screen antialiased relative pt-32 pb-32">
    
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <nav class="mb-12 animate-fade-in">
        <NuxtLink 
          to="/rutas" 
          class="group inline-flex items-center gap-3 text-stone-400 hover:text-[#3b6e4c] font-sans font-black text-xs uppercase tracking-[0.2em] transition-all no-underline"
        >
          <i class="fa-solid fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
          <span>Volver al catálogo de senderos</span>
        </NuxtLink>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-7 space-y-12">
          
          <header class="space-y-6">
            <div class="flex items-center gap-4">
              <span :class="['text-[10px] font-sans font-black uppercase tracking-widest text-white px-4 py-1.5 rounded-full shadow-sm', getDifficultyClass(route.difficulty)]">
                {{ route.difficulty }}
              </span>
              <span class="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
                ID: LOB-0{{ route.id.length }}
              </span>
            </div>

            <h1 class="text-5xl sm:text-7xl font-manual text-stone-900 leading-[0.95] m-0">
              {{ route.name }}
            </h1>
            
            <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed m-0 border-l-4 border-[#3b6e4c]/20 pl-6">
              {{ route.description }}
            </p>
          </header>

          <div class="aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden bg-stone-200 shadow-inner relative group">
            <img 
              :src="route.image || defaultImage" 
              class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              :alt="route.name"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
          </div>

          <section class="space-y-8 pt-4">
            <h3 class="font-sans font-black text-sm text-stone-400 uppercase tracking-[0.2em] m-0">
              Puntos clave del recorrido
            </h3>
            <div class="grid grid-cols-1 gap-6">
              <div v-for="(point, idx) in route.highlights" :key="idx" class="flex gap-6 items-start">
                <span class="font-manual text-3xl text-[#3b6e4c] opacity-40">0{{ idx + 1 }}</span>
                <div>
                  <h4 class="font-sans font-black text-stone-800 text-lg uppercase m-0">{{ point.title }}</h4>
                  <p class="text-stone-500 text-base leading-relaxed m-0 mt-1">{{ point.text }}</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside class="lg:col-span-5 space-y-8">
          
          <div class="bg-white rounded-[2.5rem] p-8 md:p-10 border border-stone-200/60 shadow-[0_20px_50px_-15px_rgba(42,53,44,0.05)] sticky top-32">
            
            <h3 class="font-sans font-black text-sm text-stone-400 uppercase tracking-[0.2em] mb-10 block">
              Ficha Técnica
            </h3>

            <div class="grid grid-cols-2 gap-y-10 gap-x-4 mb-12">
              <div class="space-y-2">
                <div class="flex items-center gap-2 text-[#3b6e4c]">
                  <i class="fa-solid fa-route"></i>
                  <span class="text-[10px] font-mono uppercase font-black tracking-widest">Distancia</span>
                </div>
                <p class="text-2xl font-sans font-black text-stone-900 m-0">{{ route.distance }}</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2 text-[#3b6e4c]">
                  <i class="fa-regular fa-clock"></i>
                  <span class="text-[10px] font-mono uppercase font-black tracking-widest">Tiempo</span>
                </div>
                <p class="text-2xl font-sans font-black text-stone-900 m-0">{{ route.duration }}</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2 text-[#3b6e4c]">
                  <i class="fa-solid fa-mountain"></i>
                  <span class="text-[10px] font-mono uppercase font-black tracking-widest">Desnivel</span>
                </div>
                <p class="text-2xl font-sans font-black text-stone-900 m-0">{{ route.elevation }}</p>
              </div>

              <div class="space-y-2">
                <div class="flex items-center gap-2 text-[#3b6e4c]">
                  <i class="fa-solid fa-arrows-spin"></i>
                  <span class="text-[10px] font-mono uppercase font-black tracking-widest">Tipo</span>
                </div>
                <p class="text-2xl font-sans font-black text-stone-900 m-0">{{ route.type }}</p>
              </div>
            </div>

            <div class="bg-[#598c14] rounded-3xl p-8 text-white space-y-6 relative overflow-hidden group/wiki">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full transition-transform duration-700 group-hover/wiki:scale-150"></div>
              
              <div class="relative z-10 space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center font-black text-sm">W</div>
                  <span class="text-[10px] font-sans font-black uppercase tracking-[0.2em]">Live Navigation</span>
                </div>
                <h4 class="text-xl font-sans font-black leading-tight m-0">Sigue el track GPS en Wikiloc</h4>
                <p class="text-white/80 text-xs font-medium leading-relaxed">Evita perderte en la sierra. Descarga el track oficial y navega sin conexión con tu móvil.</p>
                
                <a 
                  :href="route.wikilocUrl" 
                  target="_blank" 
                  class="flex items-center justify-center gap-3 bg-white text-[#598c14] hover:bg-stone-100 font-sans font-black text-[11px] uppercase tracking-widest py-4 px-6 rounded-xl transition-all no-underline shadow-lg"
                >
                  <span>Abrir mapa interactivo</span>
                  <i class="fa-solid fa-location-arrow text-xs"></i>
                </a>
              </div>
            </div>

            <div class="mt-8 pt-8 border-t border-stone-100 flex items-center gap-4">
              <i class="fa-solid fa-circle-info text-stone-300"></i>
              <p class="text-[11px] text-stone-400 font-medium m-0 leading-relaxed">
                ¿Dudas con el terreno? Escríbenos por el grupo de senderismo del Huerto y te informamos del estado actual.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>

    <div v-if="!route" class="max-w-md mx-auto text-center py-40 px-4 space-y-6 select-none">
      <h2 class="text-3xl font-manual text-stone-900 m-0">Sendero no encontrado</h2>
      <NuxtLink to="/rutas" class="inline-block bg-stone-900 text-white font-black text-xs uppercase tracking-widest px-6 py-3 rounded-full no-underline shadow-sm">
        Volver a la selección
      </NuxtLink>
    </div>

  </main>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import defaultImage from '~/assets/img/default.jpg'

const routeParam = useRoute()

// Dataset Enriquecido con Puntos de Interés
const routes = [
  {
    id: 'lobras-nichar-timar',
    name: 'Circular Lobras - Níchar - Tímar',
    difficulty: 'Fácil',
    distance: '5.8 km',
    duration: '2h 15m',
    elevation: '+240m',
    type: 'Circular',
    description: 'Un viaje en el tiempo a través de la arquitectura bereber y los castaños centenarios que unen estos tres núcleos históricos.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/lobras-nichar-timar-alpujarra',
    highlights: [
      { title: 'Tímar y su seda', text: 'Descubre los restos de la antigua industria de la seda que dio fama a esta zona en el siglo XVIII.' },
      { title: 'Acequias medievales', text: 'Caminarás junto a canales de agua que llevan funcionando más de 500 años sin interrupción.' }
    ]
  },
  {
    id: 'caminos-reales-cadiar',
    name: 'Camino Real de Lobras a Cádiar (GR-142)',
    difficulty: 'Media',
    distance: '9.4 km',
    duration: '3h 10m',
    elevation: '+380m',
    type: 'Lineal',
    description: 'La espina dorsal de la Alpujarra Alta. Un sendero que atraviesa los viñedos más altos de Europa y bosques de alcornoques.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/gr-142-lobras-cadiar',
    highlights: [
      { title: 'Vistas al Guadalfeo', text: 'El valle se abre ante ti mostrando la magnitud de la Alpujarra y el río que la divide.' },
      { title: 'Arquitectura de piedra', text: 'Observarás los "balates" o muros de piedra seca declarados Patrimonio de la Humanidad.' }
    ]
  },
  {
    id: 'acequias-minas-nichar',
    name: 'Sendero de las Acequias y Minas de Níchar',
    difficulty: 'Media-Alta',
    distance: '11.2 km',
    duration: '4h 00m',
    elevation: '+520m',
    type: 'Circular',
    description: 'Ruta para los amantes del patrimonio industrial y la geología. Visita las antiguas minas de mercurio de la zona.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/minas-de-nichar-y-acequias-lobras',
    highlights: [
      { title: 'Patrimonio minero', text: 'Entradas de minas históricas que fueron motor económico de la comarca durante siglos.' },
      { title: 'Biodiversidad', text: 'Zona de especial protección donde es frecuente avistar cabras montesas al amanecer.' }
    ]
  },
  {
    id: 'paseo-penon-lavaderos',
    name: 'Paseo del Peñón y Lavaderos de Lobras',
    difficulty: 'Muy Fácil',
    distance: '2.5 km',
    duration: '0h 50m',
    elevation: '+80m',
    type: 'Circular',
    description: 'Ideal para familias. Un recorrido pausado por el alma de Lobras, sus fuentes de agua cristalina y sus monumentos naturales.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/paseo-urbano-lobras-lavaderos',
    highlights: [
      { title: 'El Peñón de Lobras', text: 'La formación rocosa que vigila el pueblo. Un lugar místico con cuevas naturales.' },
      { title: 'Lavaderos Tradicionales', text: 'Espacios rehabilitados donde se respira la vida social que tenían los pueblos alpujarreños.' }
    ]
  }
]

const route = computed(() => {
  return routes.find(r => r.id === routeParam.params.id)
})

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
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>