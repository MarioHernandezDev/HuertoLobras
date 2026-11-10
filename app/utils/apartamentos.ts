// Fuente única de datos de los alojamientos.
// Las fotos NO se listan aquí: se descubren solas leyendo assets/img/<folder>/*.webp
// (ver getApartmentPhotos). Añadir o quitar fotos de una carpeta es suficiente.

export const AVAIBOOK_URL = 'https://bookonline.pro/es/properties/11361?unidades=1'
export const BOOKING_URL = 'https://www.booking.com/hotel/es/el-huerto-de-lobras.es.html'

export interface Apartment {
  id: string
  folder: string
  code: string
  name: string
  capacity: string
  maxGuests: number
  hasFireplace: boolean
  tag: string
  description: string
  cardFeatures: string[]
  features: string[]
  avaibookUrl: string
  bookingUrl: string
}

const base = { avaibookUrl: AVAIBOOK_URL, bookingUrl: BOOKING_URL }

export const apartments: Apartment[] = [
  {
    ...base,
    id: 'apartamento-las-golondrinas',
    folder: 'golondrinas',
    code: 'Las Golondrinas',
    name: 'Apartamento Las Golondrinas',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Tragaluces • Vista a la iglesia',
    description: 'Este apartamento se llama Las Golondrinas porque mientras se rehabilitaba la casa antigua, dos parejas de golondrinas vivieron un verano entero dentro. Cuenta con pilares y fachada originales de la antigua casa. Por la noche en verano, desde el salón se contempla la iglesia iluminada reflejada en sus dos tragaluces.',
    cardFeatures: ['1 Dormitorio + Sofá cama', 'Dos tragaluces en el techo', 'Se admite 1 perro'],
    features: [
      '1 Dormitorio principal',
      'Salón con dos sofás cama',
      'Chimenea tradicional',
      'Dos tragaluces en el techo',
      'Calefacción central en todas las habitaciones',
      '1 Baño completo y cocina',
      'Máximo 1 perro por apartamento'
    ]
  },
  {
    ...base,
    id: 'apartamento-la-seda',
    folder: 'seda',
    code: 'La Seda',
    name: 'Apartamento La Seda',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '2 dormitorios • Terrazas privadas',
    description: 'Su nombre rinde homenaje a 1757, cuando Lobras destacó por el cultivo de moreras para la seda y sus mujeres bordaban tejidos en telares. Es el único apartamento con dos dormitorios y terrazas privadas independientes en cada uno de ellos.',
    cardFeatures: ['2 Dormitorios (2 terrazas)', 'Rincón histórico y acogedor', 'Se admite 1 perro'],
    features: [
      '2 Dormitorios (matrimonio + 2 camas)',
      '2 Terrazas privadas (una por dormitorio)',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Salón confort y cocina equipada',
      '1 Baño completo',
      'Máximo 1 perro por apartamento'
    ]
  },
  {
    ...base,
    id: 'apartamento-los-cerezos',
    folder: 'cerezos',
    code: 'Los Cerezos',
    name: 'Apartamento Los Cerezos',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Planta baja • Adaptado minusválidos',
    description: 'Ubicado en la planta baja y completamente adaptado para personas con movilidad reducida o minusvalía. Cuenta con un amplio dormitorio, terraza directa al jardín y ambiente muy accesible.',
    cardFeatures: ['Adaptado a minusválidos', 'Terraza directa al jardín', 'Chimenea tradicional'],
    features: [
      '1 Dormitorio muy amplio',
      'Totalmente adaptado a minusválidos',
      'Terraza privada con salida al jardín',
      'Salón con sofá cama',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño adaptado'
    ]
  },
  {
    ...base,
    id: 'apartamento-los-trovos',
    folder: 'trovos',
    code: 'Los Trovos',
    name: 'Apartamento Los Trovos',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: '1 dormitorio • Terraza alpujarreña',
    description: 'Inspirado en la tradición del trovo o trovador alpujarreño, arte de cantar improvisando versos al son de la bandurria. Disfruta de un ambiente tradicional con terraza propia y un entorno tranquilo.',
    cardFeatures: ['1 Dormitorio principal', 'Terraza privada', 'Chimenea tradicional'],
    features: [
      '1 Dormitorio principal',
      'Terraza privada',
      'Chimenea tradicional',
      'Salón confortable',
      'Calefacción central en todas las habitaciones',
      'Cocina y 1 baño completo'
    ]
  },
  {
    ...base,
    id: 'apartamento-la-contraviesa',
    folder: 'contraviesa',
    code: 'La Contraviesa',
    name: 'Apartamento La Contraviesa',
    capacity: 'Hasta 4 plazas',
    maxGuests: 4,
    hasFireplace: true,
    tag: 'Ático • Gran terraza panorámica',
    description: 'Bautizado por la sierra de La Contraviesa que separa Sierra Nevada de la costa. Situado en la tercera planta, es el ático con la terraza más grande de toda la casa, bordeando casi todo el alojamiento con vistas inmejorables.',
    cardFeatures: ['Ático con gran terraza', 'Vistas panorámicas 360°', 'Chimenea + Sofá cama'],
    features: [
      '1 Dormitorio principal',
      'Gran terraza panorámica envolvente',
      'Salón amplio con sofá cama',
      'Chimenea tradicional',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño completo'
    ]
  },
  {
    ...base,
    id: 'estudio',
    folder: 'estudio',
    code: 'El Estudio',
    name: 'El Estudio',
    capacity: '2 plazas',
    maxGuests: 2,
    hasFireplace: false,
    tag: 'Ideal parejas • Vistas a la plaza',
    description: 'Alojamiento diáfano y acogedor para dos personas, con terraza orientada a la plaza del pueblo y la del ayuntamiento. Desde su terraza se aprecian espectaculares puestas de sol sobre Lobras (esta estancia no dispone de chimenea).',
    cardFeatures: ['Cama de matrimonio', 'Terraza hacia la plaza', 'Espectaculares atardeceres'],
    features: [
      '1 Dormitorio con cama de matrimonio',
      'Terraza con vistas a la plaza del pueblo',
      'Vistas a la puesta de sol y ayuntamiento',
      'Salón amplio y diáfano',
      'Calefacción central en todas las habitaciones',
      'Cocina equipada y 1 baño completo'
    ]
  },
  {
    ...base,
    id: 'la-biblioteca',
    folder: 'biblioteca',
    code: 'La Biblioteca',
    name: 'La Biblioteca',
    capacity: '2 a 3 plazas',
    maxGuests: 3,
    hasFireplace: false,
    tag: 'Rincón de lectura • 2/3 plazas',
    description: 'Un rincón lleno de encanto y calma, diseñado especialmente para la lectura, el descanso o una estancia pausada con carácter tradicional.',
    cardFeatures: ['Atmósfera pacífica', 'Detalles de piedra y madera', 'Ideal para el descanso'],
    features: [
      'Atmósfera de descanso y lectura',
      'Capacidad para 2 a 3 personas',
      'Calefacción central',
      'Cocina equipada y baño completo'
    ]
  }
]

export const getApartment = (id: string) => apartments.find(a => a.id === id)

// ---- Fotos -----------------------------------------------------------------
// Vite resuelve solo las URLs (no descarga nada). Se agrupan por carpeta.
const photoModules = import.meta.glob('~/assets/img/*/*.webp', { eager: true, import: 'default' }) as Record<string, string>

const photosByFolder: Record<string, { name: string, url: string }[]> = {}
for (const [path, url] of Object.entries(photoModules)) {
  const [, folder, file] = path.match(/\/img\/([^/]+)\/([^/]+)\.webp$/) || []
  if (!folder) continue
  ;(photosByFolder[folder] ||= []).push({ name: file, url })
}
for (const list of Object.values(photosByFolder)) {
  // "portada" siempre primera; el resto por orden alfabético del nombre de archivo
  list.sort((a, b) => (a.name === 'portada' ? -1 : b.name === 'portada' ? 1 : a.name.localeCompare(b.name, 'es', { numeric: true })))
}

/** Todas las fotos de un alojamiento (la portada primero). Vacío si no hay carpeta. */
export const getApartmentPhotos = (folder: string): string[] =>
  (photosByFolder[folder] || []).map(p => p.url)
