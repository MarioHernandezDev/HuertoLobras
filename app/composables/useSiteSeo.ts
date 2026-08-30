export function useSiteSeo(options: {
  title: string
  description: string
  path?: string
  ogTitle?: string
  ogDescription?: string
  twitterTitle?: string
  twitterDescription?: string
  image?: string
}) {
  const canonicalUrl = `https://elhuertodelobras.com${options.path || '/'}`
  const image = options.image || 'https://elhuertodelobras.com/og/huerto-lobras-home.webp'

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.ogTitle || options.title,
    ogDescription: options.ogDescription || options.description,
    ogImage: image,
    ogUrl: canonicalUrl,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: options.twitterTitle || options.ogTitle || options.title,
    twitterDescription: options.twitterDescription || options.ogDescription || options.description,
    twitterImage: image,
    robots: 'index, follow'
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }]
  })
}
