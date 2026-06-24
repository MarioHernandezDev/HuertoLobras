<template>
  <div class="min-h-screen bg-[#fcfbf9] antialiased font-sans relative">
    
    <div 
      :class="[
        'fixed top-0 left-0 right-0 h-40 z-40 pointer-events-none transition-opacity duration-700 bg-gradient-to-b from-black/60 via-black/20 to-transparent',
        isScrolled ? 'opacity-0' : 'opacity-100'
      ]"
    ></div>

    <header 
      :class="[
        'fixed top-0 left-0 right-0 z-50 hidden max-[1270px]:hidden min-[1271px]:flex items-center justify-between transition-all duration-500 ease-in-out px-12 lg:px-16 h-28 bg-transparent'
      ]"
    >
      <div class="flex items-center gap-6">
        <NuxtLink to="/" class="block">
          <div class="overflow-hidden rounded-none bg-[#53433c] w-24 md:w-28 border border-white/10 shadow-xl">
            <img :src="logoUrl" alt="Logo El Huerto de Lobras" class="w-full h-auto block object-contain" />
          </div>
        </NuxtLink>
        
        <div 
          :class="[
            'hidden lg:block border-l pl-5 py-1 transition-all duration-500',
            isScrolled ? 'border-stone-300' : 'border-white/30'
          ]"
        >
          <span 
            :class="[
              'text-[11px] uppercase tracking-[0.5em] block leading-none transition-all duration-500 font-black',
              isScrolled ? 'text-[#53433c]' : 'text-white text-shadow-brand'
            ]"
          >
            Alojamiento Rural
          </span>
          <span 
            :class="[
              'text-[8px] uppercase tracking-[0.25em] block mt-1.5 font-bold transition-all duration-500',
              isScrolled ? 'text-stone-500' : 'text-stone-200 text-shadow-sub'
            ]"
          >
            Eco & Familiar &bull; Alpujarra
          </span>
        </div>
      </div>

      <nav 
        :class="[
          'flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-700 border backdrop-blur-xl shadow-2xl',
          isScrolled 
            ? 'bg-stone-900/90 border-stone-800 shadow-black/20' 
            : 'bg-white/10 border-white/20 shadow-black/10'
        ]"
      >
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path" 
          :class="[
            'nav-link group flex items-center gap-2.5 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 rounded-full relative',
            isScrolled 
              ? 'text-stone-300 hover:text-white' 
              : 'text-stone-100 hover:text-white hover:bg-white/10'
          ]"
        >
          <i :class="[item.icon, 'text-[13px] opacity-70 group-hover:opacity-100 transition-opacity']"></i>
          <span>{{ item.name }}</span>
        </NuxtLink>
      </nav>
    </header>

    <header class="min-[1271px]:hidden w-full h-24 px-6 md:px-12 flex items-center justify-between z-50 fixed top-0 bg-transparent text-white">
      <NuxtLink to="/" class="block mt-3">
        <div class="overflow-hidden rounded-none bg-[#53433c] border border-white/10 w-20 shadow-xl">
          <img :src="logoUrl" alt="Logo" class="w-full h-auto block" />
        </div>
      </NuxtLink>

      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="relative z-50 w-14 h-14 flex flex-col justify-center items-center rounded-full bg-[#53433c] text-white shadow-2xl border border-white/20"
      >
        <div class="space-y-1.5 w-6">
          <span :class="['block h-0.5 w-6 bg-current transform transition duration-500', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['block h-0.5 w-6 bg-current transition duration-500', isMobileMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['block h-0.5 w-6 bg-current transform transition duration-500', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>
    </header>

    <Transition name="menu-fade">
      <div v-if="isMobileMenuOpen" class="fixed inset-0 w-full h-screen bg-[#fcfbf9] z-[60] flex flex-col items-center justify-center p-12">
        <nav class="flex flex-col space-y-6 w-full max-w-sm">
          <NuxtLink 
            v-for="(item, index) in menuItems" 
            :key="item.path" 
            :to="item.path"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-between px-8 py-5 rounded-2xl bg-stone-100 text-stone-800 hover:bg-[#53433c] hover:text-white transition-all group"
          >
            <span class="text-xl font-black uppercase tracking-widest">{{ item.name }}</span>
            <i :class="[item.icon, 'text-2xl opacity-40 group-hover:opacity-100']"></i>
          </NuxtLink>
        </nav>
      </div>
    </Transition>

    <div class="flex flex-col min-h-screen w-full">
      <main class="flex-1 w-full content-reveal">
        <slot />
      </main>

      <footer class="bg-[#f6f5f2] border-t border-stone-200/70 py-20 px-6 md:px-12 lg:px-16 text-stone-500">
        <div class="max-w-[95rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-center text-center md:text-left font-bold uppercase tracking-widest text-[10px]">
          <div>
            <span class="font-black text-[#53433c] block mb-3 tracking-[0.5em]">Localización</span>
            <p class="leading-loose text-stone-600">Lobras, Granada &bull; Alpujarra Alta<br>Andalucía, España</p>
          </div>
          <div class="flex justify-center">
            <div class="w-20 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000 cursor-pointer">
               <img :src="logoUrl" alt="Logo" class="w-full h-auto block" />
            </div>
          </div>
          <div class="md:text-right">
            <span class="font-black text-stone-400 block mb-3 tracking-[0.5em]">El Huerto de Lobras</span>
            <p class="leading-loose text-stone-400">&copy; 2026 &bull; Todos los derechos reservados<br>Diseño Editorial Rural</p>
          </div>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logoUrl from '~/assets/img/logo.jpg'

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = [
  { name: 'Inicio', path: '/', icon: 'fa-solid fa-house' },
  { name: 'Alojamientos', path: '/apartamentos', icon: 'fa-solid fa-bed' },
  { name: 'Actividades', path: '/actividades', icon: 'fa-solid fa-person-hiking' },
  { name: 'Ofertas', path: '/ofertas', icon: 'fa-solid fa-calendar-check' },
  { name: 'Entorno', path: '/entorno', icon: 'fa-solid fa-mountain-sun' },
  { name: 'Contacto', path: '/contacto', icon: 'fa-solid fa-paper-plane' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
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
.text-shadow-brand {
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}
.text-shadow-sub {
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
}

header:not(.text-stone-900) .nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff !important;
}

.nav-link.router-link-active {
  background-color: #53433c !important;
  color: #ffffff !important;
}

.menu-fade-enter-active, .menu-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.menu-fade-enter-from, .menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.content-reveal {
  animation: reveal 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes reveal {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
</style>