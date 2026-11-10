<template>
  <div class="min-h-screen bg-[#fcfaf7] antialiased font-sans relative">

    <header class="enter-fade fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 lg:px-12 pt-4 md:pt-5 pb-2 transition-all duration-500 pointer-events-none">
      <div class="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18 px-6 rounded-full bg-[#fbf9f5]/95 md:bg-[#fbf9f5]/90 md:backdrop-blur-md border border-stone-200/80 shadow-sm pointer-events-auto transition-all duration-300">
        <NuxtLink to="/" class="flex items-center no-underline group h-full" aria-label="Ir a Inicio">
          <span class="font-manual text-2xl md:text-3xl font-normal text-stone-900 tracking-wide transition-colors group-hover:text-[#3b6e4c]">
            El Huerto <span class="font-bold text-[#3b6e4c]">de Lobras</span>
          </span>
        </NuxtLink>

        <nav class="hidden md:flex items-center h-full gap-1">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path"
            class="nav-link-full h-full flex items-center px-5 text-xs font-extrabold uppercase tracking-[0.15em] text-stone-700 hover:text-[#3b6e4c] hover:bg-stone-200/40 transition-all duration-200 no-underline relative group"
          >
            <span>{{ item.name }}</span>
            <span class="absolute bottom-0 left-0 right-0 h-[3px] bg-[#3b6e4c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-t-full"></span>
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3 h-full py-2.5">
          <NuxtLink 
            to="/apartamentos" 
            class="hidden sm:inline-flex items-center justify-center px-6 h-full rounded-full text-xs font-extrabold uppercase tracking-widest no-underline transition-all duration-300 bg-[#3b6e4c] text-white hover:bg-[#315c3f] shadow-sm shadow-[#3b6e4c]/20"
          >
            Reservar
          </NuxtLink>

          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen" 
            class="md:hidden p-2 rounded-full transition-colors cursor-pointer border-0 bg-transparent text-stone-900"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Abrir o cerrar menú de navegación"
          >
            <div class="w-5 h-4 flex flex-col justify-between items-center">
              <span :class="['block h-[2px] w-5 bg-current transition-transform duration-300 rounded-full', isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : '']"></span>
              <span :class="['block h-[2px] w-3.5 bg-current ml-auto transition-opacity duration-200 rounded-full', isMobileMenuOpen ? 'opacity-0' : '']"></span>
              <span :class="['block h-[2px] w-5 bg-current transition-transform duration-300 rounded-full', isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : '']"></span>
            </div>
          </button>
        </div>
      </div>
    </header>

    <Transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 z-40 bg-[#fbf9f5] flex flex-col justify-between px-8 pt-28 pb-12 text-stone-900">
        <nav class="flex flex-col space-y-2 my-auto">
          <NuxtLink 
            v-for="(item, index) in menuItems" 
            :key="item.path" 
            :to="item.path"
            @click="isMobileMenuOpen = false"
            class="menu-item flex items-center gap-5 py-4 border-b border-stone-200/80 no-underline group"
            :style="{ '--i': index }"
          >
            <span class="text-xs font-mono font-bold text-[#3b6e4c]">0{{ index + 1 }}</span>
            <span class="text-3xl font-manual text-stone-800 group-hover:text-[#3b6e4c] transition-colors">{{ item.name }}</span>
          </NuxtLink>
        </nav>

        <div class="pt-6">
          <NuxtLink 
            to="/apartamentos" 
            @click="isMobileMenuOpen = false"
            class="btn-organic-primary w-full text-center block no-underline shadow-md shadow-[#3b6e4c]/20"
          >
            Reservar Ahora
          </NuxtLink>
        </div>
      </div>
    </Transition>

    <div class="flex flex-col min-h-screen w-full">
      <main class="flex-1 w-full">
        <slot />
      </main>

      <footer class="bg-[#f6f3eb] border-t border-stone-200 py-16 px-6 md:px-12 lg:px-16 text-stone-400">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center text-center md:text-left font-bold uppercase tracking-widest text-[10px]">
          <div>
            <span class="font-black text-[#3b6e4c] block mb-2 tracking-[0.3em]">Localización</span>
            <p class="leading-relaxed text-stone-600 normal-case font-medium m-0">
              Lobras, Granada &bull; Alpujarra Alta<br>Andalucía, España
            </p>
          </div>
          <div class="flex justify-center">
            <span class="font-manual text-2xl text-stone-700 tracking-wide">
              El Huerto <span class="text-[#3b6e4c] font-bold">de Lobras</span>
            </span>
          </div>
          <div class="md:text-right">
            <span class="font-black text-stone-400 block mb-2 tracking-[0.3em]">El Huerto de Lobras</span>
            <p class="leading-relaxed text-stone-500 font-medium normal-case m-0">&copy; 2026 &bull; Turismo Rural y Alojamiento</p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'

const isMobileMenuOpen = ref(false)
const route = useRoute()

// Cierra el menú al navegar y bloquea el scroll de la página mientras está abierto
watch(() => route.fullPath, () => { isMobileMenuOpen.value = false })
watch(isMobileMenuOpen, (open) => {
  if (import.meta.client) document.documentElement.style.overflow = open ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (import.meta.client) document.documentElement.style.overflow = ''
})

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Alojamientos', path: '/apartamentos' },
  { name: 'Rutas', path: '/rutas' },
  { name: 'Cultura', path: '/cultura' },
  { name: 'Contacto', path: '/contacto' }
]
</script>

<style scoped>
.router-link-active.nav-link-full {
  color: #3b6e4c !important;
  background-color: rgba(59, 110, 76, 0.08);
}
.router-link-active.nav-link-full span:last-child {
  transform: scaleX(1);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}
/* Los enlaces del menú entran escalonados */
.mobile-menu-enter-active .menu-item {
  animation: enter-up 0.6s var(--ease-out-expo) both;
  animation-delay: calc(var(--i) * 60ms + 80ms);
}

.btn-organic-primary {
  display: inline-block;
  padding: 16px 32px;
  background: #3b6e4c;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
</style>