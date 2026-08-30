<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <script type="application/ld+json" v-html="organizationSchema" />
    <script type="application/ld+json" v-html="breadcrumbSchema" />
  </div>
</template>

<script setup>
const route = useRoute()

const siteUrl = 'https://elhuertodelobras.com'

const organizationSchema = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'El Huerto de Lobras',
  url: siteUrl,
  image: `${siteUrl}/og/huerto-lobras-home.webp`,
  description: 'Alojamiento rural en Lobras, Alpujarra Granadina. Casas rurales con encanto, rutas de senderismo, cultura, vendimia y experiencias locales.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lobras',
    addressLocality: 'Lobras',
    addressRegion: 'Granada',
    postalCode: '18449',
    addressCountry: 'ES'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '36.9272',
    longitude: '-3.2125'
  },
  priceRange: '€€',
  telephone: '+34679038079',
  email: 'info@elhuertodelobras.com',
  sameAs: [
    'https://www.facebook.com/',
    'https://www.instagram.com/'
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi' },
    { '@type': 'LocationFeatureSpecification', name: 'Chimenea' },
    { '@type': 'LocationFeatureSpecification', name: 'Terrazas' },
    { '@type': 'LocationFeatureSpecification', name: 'Alojamiento rural' }
  ]
})

const breadcrumbSchema = computed(() => {
  const path = route.path || '/'
  const segments = path.split('/').filter(Boolean)
  const items = [{ '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` }]

  let cumulative = ''
  segments.forEach((segment, index) => {
    cumulative += `/${segment}`
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment === 'apartamentos' ? 'Alojamientos' : segment === 'rutas' ? 'Rutas' : segment === 'cultura' ? 'Cultura' : segment === 'contacto' ? 'Contacto' : segment,
      item: `${siteUrl}${cumulative}`
    })
  })

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  })
})
</script>
