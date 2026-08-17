<template>
  <main class="w-full bg-[#f6f3eb] min-h-screen antialiased relative overflow-x-hidden">
    
    <!-- Hero Principal -->
    <MiniHero 
      title="Cultura & Tradición" 
      subtitle="El latido vivo de la Alpujarra Alta"
      :backgroundImage="heroImage" 
    />

    <!-- Componentes de Secciones Culturales -->
    <CultureHeader />

    <!-- Sección Vendimia con 2 imágenes reales -->
    <CultureVendimia 
      :images="vendimiaImages" 
      @open-lightbox="openLightbox" 
    />

    <CultureMuseums 
      :image="defaultImage" 
      @open-lightbox="openLightbox" 
    />

    <!-- Sección Cementerio (CultureWine) con 3 imágenes reales -->
    <CultureWine 
      :images="cementerioImages" 
      @open-lightbox="openLightbox" 
    />

    <CultureParties 
      :image="defaultImage" 
      @open-lightbox="openLightbox" 
    />

    <!-- Lightbox Galería -->
    <CultureLightbox 
      :is-open="isOpen"
      :image="defaultImage"
      :gallery-title="galleryTitle"
      :active-index="activeIndex"
      :total-count="totalCount"
      @close="closeLightbox"
    />

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Assets base
import defaultImage from '~/assets/img/default.webp'
import heroImage from '~/assets/img/cultura.webp' 

// Imágenes reales de Vendimia
import vendimia1 from '~/assets/img/vendimia1.webp'
import vendimia2 from '~/assets/img/vendimia2.webp'

// Imágenes reales del Cementerio
import cementerio1 from '~/assets/img/cementerio1.webp'
import cementerio2 from '~/assets/img/cementerio2.webp'
import cementerio3 from '~/assets/img/cementerio3.webp'

// Arrays de imágenes
const vendimiaImages = [vendimia1, vendimia2]
const cementerioImages = [cementerio1, cementerio2, cementerio3]

import CultureHeader from '~/components/culture/CultureHeader.vue'
import CultureVendimia from '~/components/culture/CultureVendimia.vue'
import CultureMuseums from '~/components/culture/CultureMuseums.vue'
import CultureWine from '~/components/culture/CultureWine.vue'
import CultureParties from '~/components/culture/CultureParties.vue'
import CultureLightbox from '~/components/culture/CultureLightbox.vue'

// SEO On-Page
useHead({
  title: 'Cultura y Tradiciones en Lobras | El Huerto de Lobras',
  meta: [
    { 
      name: 'description', 
      content: 'Conoce la historia, museos, fiestas tradicionales y la cultura vitivinícola de Lobras y la Alpujarra Granadina.' 
    },
    { property: 'og:title', content: 'Cultura y Tradición en Lobras | El Huerto de Lobras' },
    { property: 'og:description', content: 'Descubre las tradiciones vivas, la vendimia y el patrimonio histórico de Lobras.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://elhuertodelobras.com/cultura' }
  ]
})

// Control del Lightbox
const isOpen = ref(false)
const activeIndex = ref(null)
const galleryTitle = ref('')
const totalCount = ref(1)

onMounted(() => {
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
})

const openLightbox = (index, title, total = 1) => {
  activeIndex.value = index
  galleryTitle.value = title
  totalCount.value = total
  isOpen.value = true
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isOpen.value = false
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
:deep(.btn-minimal-premium-white) {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: #ffffff;
  color: #1c1917;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
}

:deep(.btn-minimal-premium-white:hover) {
  background: #f4f4f5;
}

:deep(.btn-contact-action) {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: transparent;
  color: #1c1917;
  border: 1.5px solid #1c1917;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  text-decoration: none;
}

:deep(.btn-contact-action:hover) {
  background: #1c1917;
  color: #ffffff;
}

:deep(.btn-contact-action-accent) {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: #1c1917;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  text-decoration: none;
}

:deep(.btn-contact-action-accent:hover) {
  background: #3b6e4c;
}
</style>