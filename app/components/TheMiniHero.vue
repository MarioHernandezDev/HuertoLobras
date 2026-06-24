<template>
  <div class="relative w-full bg-stone-900 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-stone-800">
    <div class="absolute inset-0 z-0 opacity-20">
      <img 
        src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop" 
        alt="Textura piedra" 
        class="w-full h-full object-cover"
      />
    </div>
    
    <div class="relative z-10 max-w-[85rem] mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
      
      <nav class="mb-4 text-[9px] uppercase tracking-[0.3em] font-bold text-stone-400">
        <NuxtLink to="/" class="hover:text-white transition-colors">Inicio</NuxtLink>
        <span class="mx-2 text-stone-600">&gt;</span>
        <span class="text-stone-300">{{ title }}</span>
      </nav>

      <h1 class="font-manual text-5xl md:text-7xl text-white font-normal m-0 leading-none">
        {{ title }}
      </h1>
      
      <p v-if="subtitle" class="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-stone-400 font-medium max-w-xl">
        {{ subtitle }}
      </p>

    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>