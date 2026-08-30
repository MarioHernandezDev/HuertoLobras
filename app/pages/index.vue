<template>
  <main class="w-full min-h-screen bg-[#fcfaf7] overflow-x-hidden relative antialiased">
    <!-- Componente Hero Principal -->
    <IndexTheHero @navigate="scrollToSection" />

    <div class="relative z-10 space-y-0">
      <!-- Sección Experiencias -->
      <section id="experiencias">
        <IndexFeaturesExperience />
      </section>

      <!-- Sección Alojamientos -->
      <section id="alojamientos">
        <IndexHousesGrid />
      </section>

      <!-- Sección Contacto y CTA Final -->
      <section id="contacto">
        <IndexCtaFinal />
      </section>
    </div>
  </main>
</template>

<script setup>
useSiteSeo({
  title: 'Alojamiento rural en Lobras | El Huerto de Lobras',
  description: 'Alojamiento rural en Lobras, La Alpujarra. Casas rurales con encanto, rutas, cultura y experiencias únicas en Granada, Sierra Nevada.',
  path: '/',
  ogTitle: 'El Huerto de Lobras | Alojamiento rural en la Alpujarra',
  ogDescription: 'Descubre casas rurales en Lobras, Alpujarra Granada: tranquilidad, cultura, senderismo y experiencias auténticas en Sierra Nevada.',
 twitterTitle: 'El Huerto de Lobras | Casas rurales en la Alpujarra',
  twitterDescription: 'Alojamiento rural en Lobras, Granada con encanto, rutas de senderismo, tradiciones y naturaleza en la Alpujarra.',
  image: 'https://elhuertodelobras.com/og/huerto-lobras-home.webp'
})

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>