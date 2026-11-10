<template>
  <div v-if="apartment" class="w-full bg-[#fcfaf7] min-h-screen antialiased relative">

    <MiniHero
      :title="apartment.name"
      :subtitle="`Alojamientos • ${apartment.code}`"
      :backgroundImage="photos[0]"
    />

    <section class="relative pt-10 md:pt-16 pb-32 lg:pb-28 px-4 md:px-8 lg:px-12 w-full mx-auto">

      <div class="absolute inset-0 pointer-events-none z-0 bg-blobs"></div>

      <div class="relative z-10 max-w-7xl mx-auto space-y-10">

        <!-- Botón Volver -->
        <div v-scroll="'fade'">
          <NuxtLink
            to="/apartamentos"
            class="inline-flex items-center gap-2 text-stone-700 font-sans font-bold text-xs uppercase tracking-widest no-underline bg-white px-5 py-3 rounded-full hover:bg-stone-900 hover:text-white transition-colors duration-300 border border-stone-200 shadow-sm group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 text-[#3b6e4c] group-hover:text-amber-400 transition-colors">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            <span>Volver a estancias</span>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div class="lg:col-span-7 space-y-12 min-w-0">

            <!-- Descripción general -->
            <div v-scroll class="space-y-6">
              <p class="text-stone-800 text-xl sm:text-2xl font-medium leading-relaxed m-0 normal-case">
                {{ apartment.description }}
              </p>
            </div>

            <!-- Galería fotográfica (admite cualquier nº de fotos) -->
            <div v-scroll class="space-y-4" aria-label="Galería fotográfica">
              <div class="flex items-end justify-between">
                <span class="font-sans font-black text-xs text-stone-400 uppercase tracking-[0.25em] block">
                  Galería fotográfica
                </span>
                <span v-if="photos.length > 1" class="font-mono text-xs font-bold text-stone-400 tabular-nums">
                  {{ activeIndex + 1 }} / {{ photos.length }}
                </span>
              </div>

              <div class="relative group">
                <div
                  ref="track"
                  class="gallery-track flex overflow-x-auto snap-x snap-mandatory rounded-3xl bg-stone-100 border border-stone-200/80 shadow-md shadow-stone-900/5 aspect-[4/3] sm:aspect-[16/10] outline-none focus-visible:ring-2 focus-visible:ring-[#3b6e4c]"
                  tabindex="0"
                  role="group"
                  aria-roledescription="carrusel"
                  @scroll.passive="onTrackScroll"
                  @keydown.left.prevent="goTo(activeIndex - 1)"
                  @keydown.right.prevent="goTo(activeIndex + 1)"
                >
                  <img
                    v-for="(img, idx) in photos"
                    :key="img"
                    :src="img"
                    :alt="`${apartment.name} en Lobras, Alpujarra Granadina - foto ${idx + 1} de ${photos.length}`"
                    class="w-full h-full shrink-0 snap-center object-cover"
                    :loading="idx === 0 ? 'eager' : 'lazy'"
                    :fetchpriority="idx === 0 ? 'high' : 'auto'"
                    decoding="async"
                    draggable="false"
                  />
                </div>

                <template v-if="photos.length > 1">
                  <button
                    class="gallery-arrow left-3 hidden sm:flex"
                    :disabled="activeIndex === 0"
                    aria-label="Foto anterior"
                    @click="goTo(activeIndex - 1)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                  </button>
                  <button
                    class="gallery-arrow right-3 hidden sm:flex"
                    :disabled="activeIndex === photos.length - 1"
                    aria-label="Foto siguiente"
                    @click="goTo(activeIndex + 1)"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                  </button>
                </template>
              </div>

              <!-- Miniaturas: se adaptan a cualquier cantidad (scroll en móvil, varias filas en pantallas grandes) -->
              <div
                v-if="photos.length > 1"
                ref="thumbs"
                class="gallery-thumbs flex gap-2 sm:gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-1"
              >
                <button
                  v-for="(img, idx) in photos"
                  :key="img"
                  :ref="el => (thumbEls[idx] = el)"
                  class="shrink-0 w-20 h-16 sm:w-24 sm:h-[4.5rem] rounded-xl overflow-hidden bg-stone-100 border-2 p-0 cursor-pointer transition-[opacity,border-color] duration-200"
                  :class="activeIndex === idx ? 'border-[#3b6e4c] opacity-100' : 'border-transparent opacity-60 hover:opacity-100'"
                  :aria-label="`Ver foto ${idx + 1} de ${apartment.name}`"
                  :aria-current="activeIndex === idx"
                  @click="goTo(idx)"
                >
                  <img :src="img" class="w-full h-full object-cover" alt="" loading="lazy" decoding="async" draggable="false" />
                </button>
              </div>
            </div>

            <!-- Servicios y comodidades -->
            <div v-scroll class="space-y-6 pt-8 border-t border-stone-300/40">
              <span class="font-sans font-black text-xs text-stone-400 uppercase tracking-[0.25em] block">
                Servicios & Comodidades
              </span>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div
                  v-for="feature in allFeatures"
                  :key="feature"
                  class="flex items-center gap-3.5 py-1"
                >
                  <div class="w-6 h-6 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3.5 h-3.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span class="text-stone-700 text-base font-sans font-bold">{{ feature }}</span>
                </div>
              </div>
            </div>

          </div>

          <!-- Lateral de Reserva Directa -->
          <aside id="reservar" ref="reserveBox" v-scroll class="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-md shadow-stone-900/5 lg:sticky lg:top-28 z-20 space-y-6 scroll-mt-28">

            <div class="space-y-1 pb-5 border-b border-stone-200/60">
              <span class="text-xs font-mono text-stone-400 uppercase tracking-[0.2em] block font-bold">
                Gestión de Reserva
              </span>
              <h2 class="font-manual text-3xl sm:text-4xl text-stone-900 m-0 font-normal">
                Elige cómo reservar
              </h2>
            </div>

            <div class="space-y-4">

              <!-- Opción AvaiBook -->
              <div class="bg-white rounded-2xl p-6 border-2 border-[#3b6e4c] shadow-md space-y-4 relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-[#3b6e4c] text-white text-[10px] font-sans font-black uppercase tracking-widest px-3.5 py-1 rounded-bl-xl">
                  Mejor Precio
                </div>

                <div class="pt-1">
                  <div class="flex items-center gap-1.5 text-[#3b6e4c]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
                    </svg>
                    <span class="text-xs font-mono font-bold uppercase tracking-wider">Canal Directo Oficial</span>
                  </div>
                  <h3 class="text-xl font-sans font-black text-stone-900 m-0 mt-1 tracking-normal">Reserva Online Directa</h3>
                </div>

                <p class="text-stone-600 text-xs font-medium m-0 leading-relaxed">
                  Disponibilidad en tiempo real y pago 100% seguro con confirmación inmediata a través de <strong class="text-stone-800">AvaiBook</strong>.
                </p>

                <a
                  :href="apartment.avaibookUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2.5 bg-[#3b6e4c] hover:bg-[#2e563b] text-white text-xs font-sans font-black uppercase tracking-widest py-4 px-6 rounded-full transition-colors duration-300 no-underline shadow-md shadow-[#3b6e4c]/20 text-center w-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-amber-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5" />
                  </svg>
                  <span>Reservar con AvaiBook</span>
                </a>
              </div>

              <!-- Opción Booking -->
              <div class="bg-stone-50 rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-3">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#003580]"></span>
                  <span class="text-[11px] font-mono font-bold text-stone-400 uppercase tracking-wider block">Agencia Externa</span>
                </div>

                <div>
                  <h3 class="text-base font-sans font-black text-stone-800 m-0 tracking-normal">Plataforma Booking.com</h3>
                  <p class="text-stone-500 text-xs font-medium m-0 pt-0.5 leading-normal">
                    Ficha directa de nuestro complejo en Booking.
                  </p>
                </div>

                <a
                  :href="apartment.bookingUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-stone-700 hover:text-stone-900 font-sans font-black text-xs uppercase tracking-widest py-3.5 px-5 rounded-full no-underline transition-colors text-center w-full shadow-sm"
                >
                  <span>Ver en Booking.com</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-3.5 h-3.5 opacity-60">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

            </div>

            <div class="pt-4 border-t border-stone-200/60 flex items-start gap-3 text-stone-500">
              <div class="w-5 h-5 rounded-full bg-[#e9f2eb] flex items-center justify-center text-[#3b6e4c] shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-3 h-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
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

    <!-- Barra de reserva fija solo en móvil (se oculta cuando el panel de reserva ya está a la vista) -->
    <Transition name="sticky-bar">
      <div
        v-show="showStickyBar"
        class="lg:hidden fixed bottom-0 inset-x-0 z-40 px-4 pb-4 pt-3 bg-[#fcfaf7] border-t border-stone-200 flex items-center justify-between gap-4"
      >
        <div class="min-w-0">
          <span class="block text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400">{{ apartment.capacity }}</span>
          <span class="block text-sm font-sans font-black text-stone-800 truncate">{{ apartment.code }}</span>
        </div>
        <a
          href="#reservar"
          class="shrink-0 bg-[#3b6e4c] text-white text-xs font-sans font-black uppercase tracking-widest py-3.5 px-7 rounded-full no-underline shadow-md shadow-[#3b6e4c]/25"
          @click.prevent="scrollToReserve"
        >
          Reservar
        </a>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import defaultImg from '~/assets/img/default.webp'

const route = useRoute()
const apartment = getApartment(String(route.params.id))

if (!apartment) {
  throw createError({ statusCode: 404, statusMessage: 'Alojamiento no encontrado', fatal: true })
}

// Todas las fotos de la carpeta (la "portada" siempre primera). Sirve cualquier cantidad.
const photos = computed(() => {
  const list = getApartmentPhotos(apartment.folder)
  return list.length ? list : [defaultImg]
})

const allFeatures = computed(() => {
  const extra = ['Wi-Fi de alta velocidad', 'Calefacción regulable']
  return [...apartment.features, ...extra.filter(f => !apartment.features.some(x => x.toLowerCase().includes(f.split(' ')[0].toLowerCase())))]
})

// ---- Carrusel (scroll-snap nativo: gesto táctil fluido, sin JS por frame) ----
const track = ref(null)
const thumbs = ref(null)
const thumbEls = []
const activeIndex = ref(0)
let raf = 0

const onTrackScroll = () => {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const el = track.value
    if (!el || !el.clientWidth) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    activeIndex.value = Math.min(Math.max(i, 0), photos.value.length - 1)
  })
}

const goTo = (i) => {
  const el = track.value
  if (!el) return
  const target = Math.min(Math.max(i, 0), photos.value.length - 1)
  el.scrollTo({ left: target * el.clientWidth, behavior: 'smooth' })
  activeIndex.value = target
}

// Mantiene la miniatura activa visible sin mover la página en vertical
watch(activeIndex, async (i) => {
  await nextTick()
  const box = thumbs.value
  const btn = thumbEls[i]
  if (!box || !btn || box.scrollWidth <= box.clientWidth) return
  box.scrollTo({ left: btn.offsetLeft - (box.clientWidth - btn.clientWidth) / 2, behavior: 'smooth' })
})

// ---- Barra de reserva móvil ----
const reserveBox = ref(null)
const showStickyBar = ref(false)
let io

const scrollToReserve = () => {
  document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  io = new IntersectionObserver(([entry]) => {
    // visible solo cuando el panel de reserva aún no se ve ni lo hemos pasado
    showStickyBar.value = !entry.isIntersecting && entry.boundingClientRect.top > 0
  })
  if (reserveBox.value) io.observe(reserveBox.value)
})
onBeforeUnmount(() => io?.disconnect())

// ---- SEO (se renderiza en servidor) ----
const url = `https://elhuertodelobras.com/apartamentos/${apartment.id}`
useSiteSeo({
  title: `${apartment.name} en Lobras`,
  description: `${apartment.description.slice(0, 155)}...`,
  ogTitle: `${apartment.name} | Casa Rural en Lobras`,
  ogDescription: apartment.description,
  path: `/apartamentos/${apartment.id}`
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Accommodation',
        name: apartment.name,
        description: apartment.description,
        url,
        occupancy: { '@type': 'QuantitativeValue', maxValue: apartment.maxGuests },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Lobras',
          addressRegion: 'Granada',
          postalCode: '18449',
          addressCountry: 'ES'
        }
      })
    }
  ]
})
</script>

<style scoped>
.gallery-track {
  scrollbar-width: none;
  overscroll-behavior-x: contain;
  -webkit-overflow-scrolling: touch;
}
.gallery-track::-webkit-scrollbar,
.gallery-thumbs::-webkit-scrollbar {
  display: none;
}
.gallery-thumbs {
  scrollbar-width: none;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.75rem;
  height: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 0;
  background: rgba(255, 255, 255, 0.92);
  color: #1c1917;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.18);
  opacity: 0;
  transition: opacity 0.25s ease, background-color 0.2s ease;
}
.group:hover .gallery-arrow,
.gallery-arrow:focus-visible {
  opacity: 1;
}
.gallery-arrow:hover {
  background: #fff;
}
.gallery-arrow:disabled {
  opacity: 0 !important;
  pointer-events: none;
}

.sticky-bar-enter-active,
.sticky-bar-leave-active {
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}
.sticky-bar-enter-from,
.sticky-bar-leave-to {
  transform: translateY(100%);
}
</style>
