<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[9999] bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
        @click="$emit('close')"
      >
        <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer border-none bg-transparent" @click="$emit('close')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        
        <div class="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center" @click.stop>
          <img :src="image" alt="Vista ampliada" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl block" />
          <p class="text-stone-400 font-mono text-sm uppercase tracking-widest text-center mt-6 font-bold">
            {{ galleryTitle }} <span v-if="totalCount > 1">{{ activeIndex }} de {{ totalCount }}</span>
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  isOpen: Boolean,
  image: String,
  galleryTitle: String,
  activeIndex: Number,
  totalCount: Number
})

defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>