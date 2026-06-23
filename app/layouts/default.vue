<template>
  <div class="min-h-screen bg-[var(--color-fondo)] antialiased font-sans relative">
    
    <aside 
      class="fixed left-4 top-4 bottom-4 z-50 hidden md:flex flex-col w-64 bg-[#1e221a]/95 backdrop-blur-md text-stone-200 overflow-hidden shadow-[0_10px_40px_rgba(26,31,22,0.2)] rounded-lg border border-stone-800/30"
    >
      <div class="relative flex flex-col items-center justify-center pt-8 pb-6 px-4 border-b border-stone-800/40 shrink-0">
        <NuxtLink to="/">
          <img :src="logoUrl" alt="El Huerto de Lobras" class="object-contain w-32 h-auto" />
        </NuxtLink>
        <div class="mt-4 text-center">
          <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400 block">Alojamiento Rural</span>
        </div>
      </div>

      <nav class="flex-1 py-8 overflow-y-auto space-y-2 scrollbar-premium">
        <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" class="nav-sidebar-link group px-8">
          <span class="indicador-activo-linea"></span>
          <span class="text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">{{ item.name }}</span>
        </NuxtLink>
      </nav>

      <div class="p-6 border-t border-stone-800/40 bg-[#171a14]/60 text-center shrink-0">
        <p class="text-[9px] uppercase tracking-widest text-stone-500 font-bold">Lobras, Alpujarra</p>
      </div>
    </aside>

    <div class="flex flex-col min-h-screen w-full">
      
      <header class="md:hidden w-full bg-[#1e221a] h-20 px-6 flex items-center justify-between z-40 sticky top-0 shadow-md">
        <img :src="logoUrl" alt="Logo" class="h-10 w-auto" />
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-stone-300 text-xs font-bold uppercase tracking-widest border border-stone-700 px-4 py-2 rounded">
          {{ isMobileMenuOpen ? 'Cerrar' : 'Menú' }}
        </button>
      </header>

      <main class="flex-1 w-full content-fade-in">
        <slot />
      </main>

      <footer class="w-full bg-stone-900 text-stone-500 py-10 border-t border-stone-800 mt-auto md:pl-72">
        <div class="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
          <p class="m-0 text-stone-400">Lobras, La Alpujarra Granadina</p>
          <p class="m-0">&copy; 2026 El Huerto de Lobras</p>
        </div>
      </footer>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import logoUrl from '~/assets/img/logo.jpg'

const isMobileMenuOpen = ref(false)
const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Alojamientos', path: '/apartamentos' },
  { name: 'Actividades', path: '/actividades' },
  { name: 'Temporadas', path: '/ofertas' },
  { name: 'El Entorno', path: '/entorno' },
  { name: 'Contacto', path: '/contacto' }
]
</script>

<style scoped>
.nav-sidebar-link { position: relative; display: flex; align-items: center; height: 3.5rem; color: #78716c; text-decoration: none; transition: all 0.3s ease; }
.nav-sidebar-link:hover { color: #d6d3d1; background-color: rgba(255, 255, 255, 0.02); }
.nav-sidebar-link.router-link-active { color: #ffffff; background-color: rgba(45, 74, 34, 0.15); }
.indicador-activo-linea { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background-color: var(--color-secundario); transform: scaleY(0); transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1); }
.nav-sidebar-link.router-link-active .indicador-activo-linea { transform: scaleY(1); }
</style>