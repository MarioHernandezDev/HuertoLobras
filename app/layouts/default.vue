<template>
  <div class="min-h-screen bg-[#faf9f6] flex flex-col md:flex-row antialiased select-none font-sans">
    
    <header class="md:hidden bg-white/90 backdrop-blur-md text-stone-900 p-5 flex justify-between items-center sticky top-0 z-50 border-b border-stone-100 shadow-[0_2px_25px_rgba(0,0,0,0.03)]">
      <NuxtLink to="/" class="flex items-center">
        <img :src="logoUrl" alt="El Huerto de Lobras" class="h-9 w-auto mix-blend-multiply" />
      </NuxtLink>
      
      <button @click="isOpen = !isOpen" class="p-2 text-stone-900 focus:outline-none" aria-label="Menú">
        <div class="w-6 h-5 flex flex-col justify-between items-end">
          <span class="h-[1.5px] bg-stone-900 transition-all duration-300" :class="isOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'"></span>
          <span class="h-[1.5px] bg-stone-900 transition-all duration-300" :class="isOpen ? 'w-0 opacity-0' : 'w-4'"></span>
          <span class="h-[1.5px] bg-stone-900 transition-all duration-300" :class="isOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-5'"></span>
        </div>
      </button>

      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <nav v-if="isOpen" class="absolute top-full left-0 w-full bg-white border-t border-stone-100 flex flex-col p-6 space-y-4 shadow-xl">
          <NuxtLink 
            v-for="item in menuItems" 
            :key="item.path" 
            :to="item.path" 
            @click="isOpen = false" 
            class="text-base font-semibold tracking-widest text-stone-500 uppercase hover:text-[var(--color-principal)] transition-colors"
            active-class="text-[var(--color-principal)] !font-bold"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>
      </Transition>
    </header>

    <aside class="hidden md:flex md:w-64 lg:w-72 flex-col justify-between p-8 lg:p-10 fixed h-screen top-0 left-0 z-40 bg-white/80 backdrop-blur-xl border-r border-stone-200/40 shadow-[4px_0_24px_rgba(0,0,0,0.03),_12px_0_48px_rgba(0,0,0,0.03)]">
      
      <div class="flex flex-col items-center pt-2 text-center shrink-0">
        <NuxtLink to="/" class="block transition-all duration-500 hover:opacity-80">
          <img 
            :src="logoUrl" 
            alt="El Huerto de Lobras" 
            class="w-32 lg:w-36 h-auto object-contain mix-blend-multiply contrast-[1.03]" 
          />
        </NuxtLink>
        <span class="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-bold mt-4 font-sans block">Alojamiento Rural</span>
        <div class="h-[1px] w-12 bg-stone-200/80 mt-6"></div>
      </div>

      <nav class="flex flex-col justify-center flex-grow space-y-8 py-12 lg:py-16">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.path" 
          :to="item.path" 
          class="desktop-nav-link group" 
          active-class="desktop-nav-link-active"
        >
          <span class="w-2 h-2 rounded-full bg-[var(--color-principal)] opacity-0 -ml-4 mr-2.5 transition-all duration-300 ease-out [.desktop-nav-link-active_&]:opacity-100 [.desktop-nav-link-active_&]:ml-0"></span>
          
          <span class="transition-transform duration-300 group-hover:translate-x-1.5">
            {{ item.name }}
          </span>
        </NuxtLink>
      </nav>

      <div class="flex flex-col items-center text-center text-stone-500 font-sans tracking-wide shrink-0 border-t border-stone-200/60 pt-6 mb-2">
        <p class="text-sm font-serif italic text-stone-600 font-medium tracking-normal">Lobras, La Alpujarra</p>
        <p class="text-[10px] font-bold uppercase mt-2 text-stone-400 tracking-[0.2em]">&copy; 2026 Huerto de Lobras</p>
      </div>
    </aside>

    <div class="flex-1 md:ml-64 lg:ml-72 min-h-screen flex flex-col bg-[#faf9f6]">
      <main class="flex-1 p-8 md:p-14 lg:p-20 max-w-6xl w-full mx-auto">
        <div class="animate-fade-in">
          <slot />
        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import logoUrl from '~/assets/img/logo.jpg'

const isOpen = ref(false)

const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Apartamentos', path: '/apartamentos' },
  { name: 'Experiencias', path: '/actividades' },
  { name: 'Ofertas', path: '/ofertas' },
  { name: 'El Entorno', path: '/entorno' },
  { name: 'Contacto', path: '/contacto' }
]
</script>

<style scoped>
/* --- CONFIGURACIÓN ESTILOS PREMIUM CORREGIDOS --- */
.desktop-nav-link {
  /* Aumentado a text-sm en pantallas estándar y lg:text-base en pantallas grandes */
  @apply flex items-center text-sm lg:text-base font-semibold tracking-[0.2em] text-stone-400 uppercase
         hover:text-stone-900 transition-all duration-300 ease-out font-sans py-1;
}

.desktop-nav-link-active {
  @apply text-[var(--color-principal)] font-bold tracking-[0.22em];
}

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>