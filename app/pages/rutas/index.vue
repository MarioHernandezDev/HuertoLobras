<template>
  <main class="w-full bg-[#fcfaf7] bg-texture min-h-screen antialiased relative">
    
    <MiniHero 
      title="Planes & Experiencias" 
      subtitle="Siente la Alpujarra Alta"
      :backgroundImage="heroImage" 
      :backgroundVideo="heroVideo"
    />

    <section class="w-full bg-[#fcfaf7] pt-28 px-4 md:px-8 lg:px-12 select-none">
      <div class="max-w-7xl mx-auto">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-200/60 pb-16 overflow-hidden">
          
          <div class="lg:col-span-7 space-y-6 animate-slide-left">
            <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.2em] block">
              La experiencia campo viva
            </span>
            
            <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.9] m-0 font-normal pb-3">
              Planifica tu <br />
              <span class="text-[#3b6e4c] font-black block mt-2">propia ruta.</span>
            </h2>
            
            <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl m-0 normal-case pt-2">
              Cambia el ruido de las notificaciones por el murmullo de las acequias medievales. Senderos históricos de la Alpujarra directa desde la puerta de la estancia.
            </p>
          </div>

          <div class="lg:col-span-5 bg-[#f6f3eb] rounded-[2rem] p-8 border border-stone-200/40 shadow-[0_25px_50px_-20px_rgba(42,53,44,0.06)] space-y-6 w-full lg:max-w-md lg:justify-self-end animate-fade-up">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-2xl bg-[#598c14] flex items-center justify-center shrink-0 shadow-md text-white font-black text-xl">
                W
              </div>
              <div>
                <h4 class="text-sm font-sans font-black text-stone-800 uppercase tracking-wider m-0">
                  Rutas en Wikiloc
                </h4>
                <p class="text-stone-500 text-xs font-medium m-0 mt-0.5">
                  Tracks GPS listos para descargar
                </p>
              </div>
            </div>
            
            <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed m-0 opacity-90">
              Sigue los mapas directamente desde tu móvil con la aplicación de Wikiloc o consúltanos cualquier recomendación según la época del año.
            </p>

            <a 
              href="https://es.wikiloc.com/wikiloc/user.do?id=1254823" 
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-3 bg-[#598c14] hover:bg-[#4a7510] text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-95 no-underline shadow-md text-center w-full"
            >
              <i class="fa-solid fa-location-dot"></i>
              <span>Ver Perfil de Wikiloc</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section class="w-full bg-[#fcfaf7] py-12 select-none overflow-hidden flex flex-col gap-12 md:gap-20 animate-fade-up">
      
      <div 
        v-for="(route, idx) in routes" 
        :key="route.id"
        class="w-full grid grid-cols-1 md:grid-cols-2 min-h-[500px] lg:min-h-[650px] border-y border-stone-200/40 group bg-[#fcfaf7]"
      >
        <div 
          :class="[
            'relative w-full h-80 md:h-full bg-stone-900 overflow-hidden',
            idx % 2 === 1 ? 'md:order-2' : 'md:order-1'
          ]"
        >
          <div 
            class="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-105"
            :style="{ backgroundImage: `url(${route.image || defaultImage})` }"
          ></div>
          <div class="absolute inset-0 bg-stone-950/20 group-hover:bg-stone-950/0 transition-colors duration-500"></div>
          
          <span :class="['absolute top-6 z-20 text-[10px] font-sans font-black uppercase tracking-widest text-white px-4 py-2 rounded-full shadow-md backdrop-blur-sm border border-white/10', 
            idx % 2 === 1 ? 'right-6' : 'left-6',
            getDifficultyClass(route.difficulty)
          ]">
            {{ route.difficulty }}
          </span>
        </div>

        <div 
          :class="[
            'flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 space-y-8 bg-[#fcfaf7] transition-colors duration-500 group-hover:bg-[#f6f3eb]/40',
            idx % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : 'md:order-2 md:text-left md:items-start'
          ]"
        >
          <div class="space-y-4 w-full">
            <span class="font-mono text-xs font-bold text-stone-400 tracking-widest block">
              SENDERO 0{{ idx + 1 }}
            </span>
            <h3 class="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight m-0 group-hover:text-[#3b6e4c] transition-colors duration-300">
              {{ route.name }}
            </h3>
            <p class="text-stone-500 text-base lg:text-lg font-medium leading-relaxed m-0 max-w-xl">
              {{ route.description }}
            </p>
          </div>

          <div 
            :class="[
              'pt-6 border-t border-stone-200/60 flex flex-wrap items-center gap-6 text-stone-700 w-full max-w-xl',
              idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'
            ]"
          >
            <div class="flex items-center gap-2 text-sm font-sans font-black">
              <i class="fa-solid fa-route text-[#3b6e4c]"></i>
              <span>{{ route.distance }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm font-sans font-black">
              <i class="fa-regular fa-clock text-[#3b6e4c]"></i>
              <span>{{ route.duration }}</span>
            </div>
            <div class="flex items-center gap-2 text-sm font-sans font-black">
              <i class="fa-solid fa-mountain text-[#3b6e4c]"></i>
              <span>{{ route.elevation }}</span>
            </div>
          </div>

          <div class="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-xl">
            
            <a 
              v-if="route.wikilocUrl"
              :href="route.wikilocUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 bg-[#598c14] hover:bg-[#4a7510] text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 no-underline shadow-md hover:shadow-lg text-center flex-1"
            >
              <span>Abrir en Wikiloc</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>

            <NuxtLink 
              :to="`/rutas/${route.id}`"
              class="inline-flex items-center justify-center gap-3 bg-stone-900 hover:bg-[#3b6e4c] text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 no-underline shadow-md hover:shadow-lg text-center flex-1"
            >
              <span>Ver Ruta</span>
              <i class="fa-solid fa-chevron-right text-xs"></i>
            </NuxtLink>

          </div>

        </div>

      </div>

    </section>

    <section class="py-32 px-4 md:px-6 max-w-4xl mx-auto text-center select-none space-y-6 overflow-hidden">
      <h3 class="font-manual text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal m-0 pb-2 animate-fade-up">
        ¿Quieres un plan a medida?
      </h3>
      <p class="text-stone-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto font-medium leading-relaxed m-0 animate-fade-up">
        Si buscas guías oficiales de montaña para Sierra Nevada o rutas familiares adaptadas, dinos antes de llegar y lo organizamos.
      </p>
      <div class="pt-4 animate-fade-up">
        <a href="tel:+34679038079" class="btn-premium-dark group">
          <i class="fa-solid fa-phone text-amber-400"></i>
          <span>Llamar y Consultar</span>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import heroImage from '~/assets/img/default.jpg'
import defaultImage from '~/assets/img/default.jpg'
import heroVideo from '~/assets/video/lobras.mp4'

// DATASET REAL DE RUTAS DESDE LOBRAS / TÍMAR / NÍCHAR (ALPUJARRA)
const routes = [
  {
    id: 'lobras-nichar-timar',
    name: 'Ruta de los Tres Pueblos: Lobras - Tímar - Níchar',
    difficulty: 'Fácil',
    distance: '6.2 km',
    duration: '2h 15m',
    elevation: '+260m',
    description: 'Ruta circular clásica que interconecta los tres núcleos del municipio entre castañares centenarios, acequias medievales y caminos de herradura moriscos.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/lobras-timar-nichar-lobras-14732128',
    image: null
  },
  {
    id: 'caminos-reales-cadiar',
    name: 'Sendero de la Alpujarra: Lobras a Cádiar (GR-142)',
    difficulty: 'Media',
    distance: '8.8 km',
    duration: '3h 00m',
    elevation: '+320m',
    description: 'Tramo histórico del Gran Recorrido GR-142. Discurre por antiguos caminos reales entre viñedos, alcornoques y terrazas de cultivo con vistas al río Guadalfeo.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/cadiar-lobras-cadiar-gr-142-88182963',
    image: null
  },
  {
    id: 'acequias-minas-nichar',
    name: 'Acequias Reales y Minas de Mercury en Níchar',
    difficulty: 'Media-Alta',
    distance: '10.5 km',
    duration: '3h 45m',
    elevation: '+480m',
    description: 'Trazado etnográfico por la red de agua morisca y las antiguas explotaciones mineras de Níchar, ofreciendo algunas de las mejores vistas panorámicas de la Contraviesa.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/minas-de-nichar-y-acequias-de-lobras-41239821',
    image: null
  },
  {
    id: 'paseo-penon-lavaderos',
    name: 'Paseo del Peñón y Arquitectura del Agua en Lobras',
    difficulty: 'Muy Fácil',
    distance: '2.8 km',
    duration: '1h 00m',
    elevation: '+90m',
    description: 'Recorrido urbano y periurbano perfecto para un paseo relajado. Visita los lavaderos tradicionales, fuentes históricas y el imponente mirador del Peñón.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/paseo-urbano-lobras-y-lavaderos-52849102',
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

.btn-premium-dark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: #1c1917;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px -10px rgba(28, 25, 23, 0.3);
}

.btn-premium-dark:hover {
  background: #292524;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -10px rgba(28, 25, 23, 0.4);
}
</style>