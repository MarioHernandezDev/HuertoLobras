<template>
  <a 
    v-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="clasesEstilo"
  >
    <slot />
    <span v-if="conFlecha" class="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1 ml-1.5">→</span>
  </a>

  <NuxtLink
    v-else-if="to"
    :to="to"
    :class="clasesEstilo"
  >
    <slot />
    <span v-if="conFlecha" class="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1 ml-1.5">→</span>
  </NuxtLink>

  <button
    v-else
    :type="type"
    :class="clasesEstilo"
  >
    <slot />
    <span v-if="conFlecha" class="inline-block transition-transform duration-300 ease-out group-hover/btn:translate-x-1 ml-1.5">→</span>
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'solido' // 'solido' o 'linea'
  },
  to: { type: String, default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  conFlecha: { type: Boolean, default: false }
})

const clasesEstilo = computed(() => {
  // Añadimos 'group/btn' para aislar por completo el hover del botón del hover de la tarjeta grande
  const base = "group/btn inline-flex items-center justify-center text-center text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold font-sans py-4 px-6 rounded-none transition-all duration-300 ease-in-out select-none cursor-pointer w-full sm:w-auto h-[52px]"
  
  // Variante Sólida: Verde oliva limpio. Al hacer hover, cambia suavemente a un tono carbón elegante
  const solido = "bg-[#2d4a22] text-white border border-transparent hover:bg-stone-900 shadow-[0_4px_12px_rgba(45,74,34,0.08)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] active:scale-[0.99]"
  
  // Variante Línea (Detalles): Fondo transparente, borde gris fino. Al pasar el ratón, el borde se oscurece y el fondo se vuelve sutilmente gris piedra limpísimo
  const linea = "bg-transparent text-stone-800 border border-stone-300 hover:border-stone-900 hover:bg-stone-100/60 transition-colors"

  return `${base} ${props.variant === 'solido' ? solido : linea}`
})
</script>