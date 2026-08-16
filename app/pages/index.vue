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
// Metadatos SEO Profesionales de Nuxt 3 / Nuxt 4
useHead({
  title: 'El Huerto de Lobras | Casas Rurales y Turismo en la Alpujarra Granadina',
  meta: [
    { 
      name: 'description', 
      content: 'Descubre El Huerto de Lobras en la Alpujarra Granadina. Casas rurales con encanto, patrimonio cultural, senderismo y la tranquilidad única de Lobras y Tímar. ¡Reserva tu escapada!' 
    },
    { 
      name: 'keywords', 
      content: 'El Huerto de Lobras, casas rurales Lobras, alojamiento Alpujarra Granadina, turismo rural Granada, qué ver en Tímar, senderismo Alpujarra, casas rurales con encanto' 
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'El Huerto de Lobras | Casas Rurales en la Alpujarra' },
    { property: 'og:description', content: 'Desconecta en un entorno natural único en la Alpujarra Granadina. Alojamientos rurales con alma, historia y tradición.' },
    { property: 'og:image', content: 'https://elhuertodelobras.com/images/og-home-huerto-lobras.webp' },
    { property: 'og:site_name', content: 'El Huerto de Lobras' },
    { property: 'og:locale', content: 'es_ES' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'El Huerto de Lobras | Turismo Rural en la Alpujarra' },
    { name: 'twitter:description', content: 'Descubre la magia de Lobras y Tímar. Casas rurales, naturaleza y patrimonio en la Alpujarra Granadina.' },
    { name: 'twitter:image', content: 'https://elhuertodelobras.com/images/og-home-huerto-lobras.webp' }
  ],
  link: [
    { rel: 'canonical', href: 'https://elhuertodelobras.com/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        'name': 'El Huerto de Lobras',
        'description': 'Casas rurales y experiencia de turismo tradicional en la Alpujarra Granadina.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lobras',
          'addressRegion': 'Granada',
          'postalCode': '18449',
          'addressCountry': 'ES'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '36.9272',
          'longitude': '-3.2125'
        },
        'url': 'https://elhuertodelobras.com',
        'priceRange': '€€'
      })
    }
  ]
})

// Navegación con desplazamiento directo
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView();
  }
};
</script>