<template>
  <div class="w-full bg-[#fcfaf7] min-h-screen antialiased relative overflow-x-hidden">
    
    <!-- Hero Principal -->
    <MiniHero 
      title="Planes & Experiencias" 
      subtitle="Siente la Alpujarra Alta"
      :backgroundImage="heroImage" 
    />

    <!-- Componente Hero de Introducción a Rutas -->
    <RoutesHero />

    <!-- Bloque 1: Senderos del Agua (Fullwidth Banner) -->
    <RouteCategoryBanner 
      id="senderos-del-agua"
      chapterNumber="01"
      title="Senderos del Agua y Acequias"
      categoryTag="Arquitectura del Agua"
      description="Rutas guiadas por la red de Acequias Reales, fuentes ferruginosas y lavaderos tradicionales de la Alpujarra."
      :backgroundImage="waterHeroImg"
    />
    
    <!-- Listado Fullwidth: Rutas de Agua -->
    <div class="w-full flex flex-col border-t border-stone-200/40">
      <div v-for="(route, idx) in waterRoutes" :key="route.id">
        <RouteCard 
          :route="route" 
          :index="idx"
        />
      </div>

      <!-- Enlace / CTA para ver más rutas de agua en Wikiloc -->
      <a 
        href="https://es.wikiloc.com/wikiloc/map.do?sw=36.92322175297183%2C-3.2175564765930176&ne=36.93296468651231%2C-3.2064843177795415&page=1" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full py-10 px-6 sm:px-10 md:px-16 bg-amber-100/40 hover:bg-amber-100/70 border-b border-stone-200/60 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group no-underline"
        aria-label="Ver más rutas de agua y acequias en Lobras registradas en Wikiloc"
      >
        <div class="flex items-start md:items-center gap-5">
          <div class="w-12 h-12 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
            <!-- SVG Gota de Agua Nativa -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-manual text-stone-900 font-bold group-hover:text-amber-900 transition-colors m-0">
              ¿Quieres descubrir más rutas de agua?
            </h3>
            <p class="text-base sm:text-lg text-stone-700 font-medium mt-1 m-0">
              Explora todas las acequias y recorridos hídricos registrados en Wikiloc en el entorno de Lobras.
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 font-sans text-sm sm:text-base font-bold uppercase tracking-wider text-amber-900 shrink-0">
          <span>Buscar rutas en Wikiloc</span>
          <!-- SVG Flecha Derecha -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1.5 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </a>
    </div>

    <!-- Bloque 2: Paseos Históricos (Fullwidth Banner) -->
    <RouteCategoryBanner 
      chapterNumber="02"
      title="Paseos y Senderos Históricos"
      categoryTag="Caminos Moriscos"
      description="Caminos medievales de herradura, senderos de gran recorrido (GR-7 / GR-142) y conexión entre pueblos."
      :backgroundImage="walkHeroImg"
    />

    <!-- Listado Fullwidth: Rutas Históricas y Senderismo -->
    <div class="w-full flex flex-col border-t border-stone-200/40">
      <div v-for="(route, idx) in walkRoutes" :key="route.id">
        <RouteCard 
          :route="route" 
          :index="idx"
        />
      </div>

      <!-- Enlace / CTA para ver más rutas de senderismo y BTT en Wikiloc -->
      <a 
        href="https://es.wikiloc.com/wikiloc/map.do?sw=36.92322175297183%2C-3.2175564765930176&ne=36.93296468651231%2C-3.2064843177795415&page=1" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full py-10 px-6 sm:px-10 md:px-16 bg-stone-200/50 hover:bg-stone-200/80 border-b border-stone-200/60 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group no-underline"
        aria-label="Ver más rutas de senderismo y BTT en Lobras registradas en Wikiloc"
      >
        <div class="flex items-start md:items-center gap-5">
          <div class="w-12 h-12 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
            <!-- SVG Senderismo / Brújula Nativa -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503-12.485-5.558 3.087a1.125 1.125 0 0 0-1.09 0L3.312 6.273A1.125 1.125 0 0 0 2.25 7.27v10.18a1.125 1.125 0 0 0 .597.989l5.558 3.087a1.125 1.125 0 0 0 1.09 0l5.558-3.087a1.125 1.125 0 0 1 1.09 0l5.223 2.902a1.125 1.125 0 0 0 1.635-.989V8.136a1.125 1.125 0 0 0-.597-.989l-5.223-2.902a1.125 1.125 0 0 0-1.09 0Z" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-manual text-stone-900 font-bold group-hover:text-amber-900 transition-colors m-0">
              Explora más rutas de senderismo y BTT
            </h3>
            <p class="text-base sm:text-lg text-stone-700 font-medium mt-1 m-0">
              Consulta el catálogo completo de itinerarios a pie y en bicicleta por la comarca en Wikiloc.
            </p>
          </div>
        </div>
        <div class="flex items-center gap-3 font-sans text-sm sm:text-base font-bold uppercase tracking-wider text-stone-900 shrink-0">
          <span>Buscar rutas en Wikiloc</span>
          <!-- SVG Flecha Derecha -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 group-hover:translate-x-1.5 transition-transform">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </a>
    </div>

    <!-- Call To Action Final -->
    <RoutesCallToAction />

  </div>
</template>

<script setup>
import { computed } from 'vue'

// SEO Head Configuration
useHead({
  title: 'Rutas de Senderismo y Acequias en Lobras | El Huerto de Lobras',
  meta: [
    { 
      name: 'description', 
      content: 'Descubre las mejores rutas de senderismo en Lobras y la Alpujarra Granadina: Acequia de los Castaños, Sendero Medieval PR-A 299, tramos GR-7 y GR-142.' 
    },
    { 
      name: 'keywords', 
      content: 'rutas senderismo Lobras, Acequia de los Castaños, GR7 Alpujarra, GR142, senderismo Tímar, ruta del agua Cádiar, caminos moriscos Granada' 
    },
    { property: 'og:title', content: 'Rutas y Senderismo en Lobras (Alpujarra) | El Huerto de Lobras' },
    { property: 'og:description', content: 'Explora acequias reales, lavaderos históricos y caminos moriscos alrededor de Lobras y Tímar.' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'canonical', href: 'https://elhuertodelobras.com/experiencias' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Rutas de Senderismo en Lobras y la Alpujarra',
        'itemListElement': [
          {
            '@type': 'TouristTrip',
            'position': 1,
            'name': 'Ruta del Agua Mora (Cádiar - Narila)',
            'touristType': ['Hiking', 'Nature'],
            'description': 'Recorrido circular en torno a la Acequia Real de Narila, el Barranco de Pedro Conde y la fuente ferruginosa.',
            'url': 'https://es.wikiloc.com/rutas-senderismo/ruta-del-agua-mora-cadiar-narila-79715404'
          },
          {
            '@type': 'TouristTrip',
            'position': 2,
            'name': 'Lobras - Sendero Acequia de los Castaños (SL-A 203) - Tímar',
            'touristType': ['Hiking', 'Culture'],
            'description': 'Ruta por la Acequia de los Castaños, lavaderos tradicionales, la Balsa Medieval de Tímar y ruinas mineras.',
            'url': 'https://es.wikiloc.com/rutas-senderismo/lobras-sendero-acequia-de-los-castanos-sl-203-timar-gr-7-sendero-medieval-pr-a-299-gr-142-96247107'
          },
          {
            '@type': 'TouristTrip',
            'position': 3,
            'name': 'Cádiar - GR 7 - GR 142 - Vereda de Escalona - Tímar',
            'touristType': ['Hiking'],
            'description': 'Travesía senderista conectando Cádiar, Lobras y Tímar combinando tramos del GR-7 y GR-142.',
            'url': 'https://es.wikiloc.com/rutas-senderismo/cadiar-gr-7-gr-142-vereda-de-escalona-acequia-de-los-castanos-timar-128456812'
          },
          {
            '@type': 'TouristTrip',
            'position': 4,
            'name': 'Juviles - Sendero Medieval - Cástaras - Lobras - Tímar - Juviles',
            'touristType': ['Hiking', 'Hard Hiking'],
            'description': 'Gran circular de larga distancia por la Alpujarra media siguiendo el Sendero Medieval PR-A 299.',
            'url': 'https://es.wikiloc.com/rutas-senderismo/juviles-medieval-pr-a-299-tramo-iv-castaras-lobras-timar-juviles-9975762'
          }
        ]
      })
    }
  ]
})

import heroImage from '~/assets/img/rutashero.webp'
import waterHeroImg from '~/assets/img/rutasagua.webp'
import walkHeroImg from '~/assets/img/rutassendero.webp'

import RoutesHero from '~/components/routes/RoutesHero.vue'
import RouteCategoryBanner from '~/components/routes/RouteCategoryBanner.vue'
import RouteCard from '~/components/routes/RouteCard.vue'
import RoutesCallToAction from '~/components/routes/RoutesCallToAction.vue'

// Dataset real basado en Wikiloc
const allRoutes = [
  {
    id: 'ruta-agua-mora-cadiar-narila',
    category: 'water',
    name: 'Ruta del Agua Mora (Cádiar - Narila)',
    difficulty: 'Fácil',
    distance: '8.16 km',
    duration: '2h 20m',
    elevation: '+182 m',
    description: 'Recorrido circular en torno a la Acequia Real de Narila, el Barranco de Pedro Conde, el Paraje de Agua Agria con su fuente ferruginosa y el patrimonio histórico de Narila y Cádiar.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/ruta-del-agua-mora-cadiar-narila-79715404',
    image: null
  },
  {
    id: 'lobras-acequia-castanos-timar',
    category: 'water',
    name: 'Lobras - Sendero Acequia de los Castaños (SL-A 203) - Tímar - GR 7 - PR-A 299',
    difficulty: 'Fácil',
    distance: '10.52 km',
    duration: '2h 25m',
    elevation: '+390 m',
    description: 'Ruta por la Alpujarra media conectando Lobras y Tímar. Recorre la Acequia de los Castaños, lavaderos tradicionales, la Balsa Medieval de Tímar, ruinas mineras y el Camino Medieval.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/lobras-sendero-acequia-de-los-castanos-sl-203-timar-gr-7-sendero-medieval-pr-a-299-gr-142-96247107',
    image: null
  },
  {
    id: 'cadiar-gr7-gr142-acequia-castanos-timar',
    category: 'walk',
    name: 'Cádiar - GR 7 - GR 142 - Vereda de Escalona - Acequia de los Castaños - Tímar',
    difficulty: 'Moderado',
    distance: '13.67 km',
    duration: '3h 32m',
    elevation: '+418 m',
    description: 'Travesía senderista que une Cádiar, Lobras y Tímar combinando tramos del GR-7, la Vereda de Escalona por el GR-142 y el pintoresco paso junto a la Acequia de los Castaños.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/cadiar-gr-7-gr-142-vereda-de-escalona-acequia-de-los-castanos-timar-128456812',
    image: null
  },
  {
    id: 'juviles-medieval-castaras-lobras-timar-juviles',
    category: 'walk',
    name: 'Juviles - Sendero Medieval (PR-A 299 IV) - Cástaras - Lobras - Tímar - Juviles',
    difficulty: 'Difícil',
    distance: '23.59 km',
    duration: '8h 54m',
    elevation: '+863 m',
    description: 'Gran ruta circular de larga distancia por la Alpujarra media. Conecta Juviles, Cástaras, Lobras y Tímar siguiendo el Sendero Medieval, el GR-142 y el GR-7 entre minas históricas, eras, balsas medievales y acequias.',
    wikilocUrl: 'https://es.wikiloc.com/rutas-senderismo/juviles-medieval-pr-a-299-tramo-iv-castaras-lobras-timar-juviles-9975762',
    image: null
  }
]

const waterRoutes = computed(() => allRoutes.filter(r => r.category === 'water'))
const walkRoutes = computed(() => allRoutes.filter(r => r.category === 'walk'))
</script>