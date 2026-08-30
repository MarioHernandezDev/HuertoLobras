<template>
  <nav
    v-if="items.length > 0"
    aria-label="Miga de pan"
    class="w-full px-4 md:px-8 lg:px-12 pt-24 md:pt-28"
  >
    <ol class="max-w-7xl mx-auto flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] text-stone-500">
      <li v-for="(item, index) in items" :key="`${item.label}-${index}`" class="flex items-center gap-2">
        <NuxtLink
          v-if="item.to && index < items.length - 1"
          :to="item.to"
          class="no-underline text-stone-600 hover:text-[#3b6e4c] transition-colors"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="text-stone-700 font-black">{{ item.label }}</span>
        <span v-if="index < items.length - 1" class="text-stone-400">/</span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>
