<template>
  <div class="min-h-screen bg-[#fcfaf7] antialiased font-sans relative">
    
    <div 
      :class="[
        'fixed top-0 left-0 right-0 h-32 z-40 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-stone-900/5 via-transparent to-transparent',
        isScrolled ? 'opacity-0' : 'opacity-100'
      ]"
    ></div>

    <header 
      :class="[
        'fixed top-0 left-0 right-0 z-50 w-full h-24 px-4 md:px-8 lg:px-12 flex items-center justify-between transition-all duration-500',
        isScrolled && !isMenuOpen ? 'bg-[#fcfaf7]/95 backdrop-blur-md border-b border-stone-200/60 shadow-sm' : 'bg-transparent'
      ]"
    >
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="block z-50">
          <div class="overflow-hidden rounded-none w-20 md:w-24 border border-white/10 shadow-xl transition-transform hover:scale-105 duration-300">
            <img :src="logoUrl" alt="Logo El Huerto de Lobras" class="w-full h-auto block object-contain" />
          </div>
        </NuxtLink>
        
        <div 
          v-if="!isMenuOpen"
          class="hidden sm:block border-l border-stone-300 pl-5 py-1 transition-all duration-500"
        >
          <span class="text-[11px] uppercase tracking-[0.4em] block leading-none font-black text-[#1c3323]">
            Alojamiento Rural
          </span>
        </div>
      </div>

      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="relative z-50 flex items-center gap-4 bg-transparent border-0 cursor-pointer group p-2"
        aria-label="Abrir navegación"
      >
        <span 
          :class="[
            'text-[10px] uppercase tracking-[0.4em] font-black transition-colors duration-300 hidden md:inline-block',
            isMenuOpen ? 'text-stone-900' : 'text-stone-800 group-hover:text-[#3b6e4c]'
          ]"
        >
          {{ isMenuOpen ? 'Cerrar' : 'Menú' }}
        </span>

        <div :class="['space-y-1.5 w-7 transition-colors', isMenuOpen ? 'text-stone-900' : 'text-stone-800 group-hover:text-[#3b6e4c]']">
          <span :class="['block h-[2px] w-7 bg-current transform transition duration-500 rounded-full', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block h-[2px] w-5 bg-current ml-auto transition duration-500 rounded-full', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['block h-[2px] w-7 bg-current transform transition duration-500 rounded-full', isMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </header>

    <Transition name="menu-fullscreen">
      <div v-if="isMenuOpen" class="fixed inset-0 w-full h-screen bg-[#fcfaf7] z-[45] flex flex-col md:flex-row items-stretch overflow-hidden">
        
        <div class="hidden md:flex md:w-5/12 bg-[#f6f3eb] p-12 lg:p-16 pt-32 flex-col justify-between relative overflow-hidden border-r border-stone-200">
          <div class="absolute -left-10 -bottom-16 font-manual text-[35rem] text-stone-200/40 pointer-events-none font-normal select-none leading-none">
            H
          </div>
          
          <div class="z-10 mt-12 md:mt-16">
            <span class="text-[10px] uppercase tracking-[0.4em] text-[#3b6e4c] font-black block mb-2">Vente al campo</span>
            <p class="font-serif italic text-2xl text-stone-700 leading-relaxed max-w-xs">
              Un rincón vivo protegido por las cumbres de la Alpujarra Alta.
            </p>
          </div>

          <div class="z-10 grid grid-cols-1 gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">
            <div>
              <span class="text-amber-500 block mb-1 tracking-widest">¿Hablamos?</span>
              <span class="normal-case font-semibold text-stone-600 text-sm">info@elhuertodelobras.com</span>
            </div>
          </div>
        </div>

        <div class="w-full md:w-7/12 flex flex-col justify-center px-6 sm:px-16 lg:px-24 py-32 overflow-y-auto">
          <div class="w-full flex flex-col space-y-1 md:space-y-2 max-w-xl">
            
            <NuxtLink 
              v-for="(item, index) in menuItems" 
              :key="item.path" 
              :to="item.path"
              @click="isMenuOpen = false"
              class="desktop-nav-item flex items-baseline gap-6 py-2 group border-b border-stone-200/60 relative overflow-hidden"
            >
              <span class="text-xs font-mono font-bold text-stone-400 tracking-wider group-hover:text-amber-500 transition-colors duration-300">
                0{{ index + 1 }}
              </span>
              
              <span class="text-4xl sm:text-6xl lg:text-[5rem] font-manual text-stone-800 tracking-tight leading-none group-hover:text-[#3b6e4c] group-hover:translate-x-4 transition-all duration-500 block select-none">
                {{ item.name }}
              </span>
            </NuxtLink>

          </div>
        </div>

      </div>
    </Transition>

    <div class="flex flex-col min-h-screen w-full">
      <main class="flex-1 w-full content-reveal">
        <slot />
      </main>

      <footer class="bg-[#f6f3eb] border-t border-stone-200 py-16 px-6 md:px-12 lg:px-16 text-stone-400">
        <div class="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center text-center md:text-left font-bold uppercase tracking-widest text-[10px]">
          <div>
            <span class="font-black text-[#3b6e4c] block mb-2 tracking-[0.3em]">Localización</span>
            <p class="leading-relaxed text-stone-600 normal-case font-medium m-0">
              Lobras, Granada &bull; Alpujarra Alta<br>Andalucía, España
            </p>
          </div>
          <div class="flex justify-center">
            <div class="w-16 opacity-40 hover:opacity-100 transition-all duration-500 cursor-pointer rounded-none overflow-hidden">
               <img :src="logoUrl" alt="Logo El Huerto de Lobras" class="w-full h-auto block" />
            </div>
          </div>
          <div class="md:text-right">
            <span class="font-black text-stone-400 block mb-2 tracking-[0.3em]">El Huerto de Lobras</span>
            <p class="leading-relaxed text-stone-500 font-medium normal-case m-0">&copy; 2026 &bull; Planes de Campo<br>Diseño Envolvente Rural</p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoUrl from '~/assets/img/logo.jpg'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Alojamientos', path: '/apartamentos' },
  { name: 'Rutas', path: '/rutas' },
  { name: 'Cultura', path: '/cultura' },
  { name: 'Contacto', path: '/contacto' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.desktop-nav-item.router-link-active span:last-child {
  color: #3b6e4c !important;
  transform: translateX(8px);
}
.desktop-nav-item.router-link-active span:first-child {
  color: #d9923b !important;
}

.menu-fullscreen-enter-active, 
.menu-fullscreen-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.menu-fullscreen-enter-from, 
.menu-fullscreen-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.content-reveal {
  animation: reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
@keyframes reveal {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>