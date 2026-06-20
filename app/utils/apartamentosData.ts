export interface Apartamento {
  id: string
  nombre: string
  subtitulo: string
  capacidad: string
  extracto: string
  descripcion: string
  imagenes: string[]
  servicios: string[]
  precioDesde: number
  urlBooking: string
  adaptado?: boolean
}

export const apartamentos: Apartamento[] = [
  {
    id: 'las-golondrinas',
    nombre: 'Las Golondrinas',
    subtitulo: 'Esencia tradicional y ventanas al cielo',
    capacidad: '2 - 4 Huéspedes',
    extracto: 'Llamado así porque mientras se rehabilitaba la casa antigua, una pareja de golondrinas vivió un verano entero en su interior.',
    descripcion: 'Dispone de un dormitorio matrimonial luminoso, un acogedor salón con dos sofás camas, chimenea tradicional y dos tragaluces en el techo que llenan de magia rústica el espacio. Mantiene intactos sus pilares y fachada originales.',
    imagenes: ['https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['1 Dormitorio', 'Chimenea', 'Calefacción Central', '2 Sofás Cama', 'Cocina Completa', 'Wifi'],
    precioDesde: 85,
    urlBooking: 'https://www.booking.com'
  },
  {
    id: 'la-seda',
    nombre: 'La Seda',
    subtitulo: 'Amplitud, confort y doble mirador',
    capacidad: '4 Huéspedes',
    extracto: 'El espacio ideal para familias o escapadas grupales, definido por su luminosidad y sus impresionantes zonas exteriores.',
    descripcion: 'Un apartamento señorial de dos dormitorios independientes perfectamente acondicionados, baño rústico completo, cocina totalmente equipada y un amplio salón con chimenea que conecta con dos espectaculares terrazas privadas.',
    imagenes: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['2 Dormitorios', '2 Terrazas', 'Salón con Chimenea', 'Calefacción Central', 'Cocina', '1 Baño'],
    precioDesde: 120,
    urlBooking: 'https://www.booking.com'
  },
  {
    id: 'los-trovos',
    nombre: 'Los Trovos',
    subtitulo: 'Poesía alpujarreña y descanso al sol',
    capacidad: '2 Huéspedes',
    extracto: 'Un rincón íntimo y poético idóneo para parejas que buscan una desconexión total con terraza privada.',
    descripcion: 'Cuenta con un hermoso dormitorio de matrimonio, baño artesanal, cocina rústica abierta y una preciosa zona de estar con chimenea tradicional que da acceso directo a su terraza orientada al sol del mediodía.',
    imagenes: ['https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['1 Dormitorio', 'Terraza Privada', 'Salón con Chimenea', 'Calefacción Central', 'Cocina', 'Wifi'],
    precioDesde: 75,
    urlBooking: 'https://www.booking.com'
  },
  {
    id: 'los-cerezos',
    nombre: 'Los Cerezos',
    subtitulo: 'Accesibilidad total en un entorno cálido',
    capacidad: '2 - 4 Huéspedes',
    extracto: 'Pensado para ofrecer el máximo confort y comodidad absoluta sin barreras arquitectónicas.',
    descripcion: 'Apartamento completamente adaptado para minusválidos. Cuenta con un espacioso dormitorio, baño accesible diseñado al detalle, cocina equipada de fácil acceso y salón con sofá cama y chimenea de leña tradicional.',
    imagenes: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['Adaptado Minusválidos', '1 Dormitorio', 'Chimenea', 'Sofá Cama', 'Calefacción Central', 'Cocina'],
    precioDesde: 80,
    urlBooking: 'https://www.booking.com',
    adaptado: true
  },
  {
    id: 'la-contraviesa',
    nombre: 'La Contraviesa',
    subtitulo: 'El mirador de la sierra',
    capacidad: '2 - 4 Huéspedes',
    extracto: 'Un refugio sumamente completo donde el confort del sofá cama y la calidez de su terraza se funden con el paisaje.',
    descripcion: 'Dispone de un dormitorio matrimonial, salón comedor rústico con sofá cama integrado y chimenea, cocina equipada, un baño artesanal y una fantástica terraza desde la que contemplar las cadenas montañosas.',
    imagenes: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['1 Dormitorio', 'Terraza', 'Chimenea', 'Sofá Cama', 'Calefacción Central', 'Cocina'],
    precioDesde: 85,
    urlBooking: 'https://www.booking.com'
  },
  {
    id: 'el-estudio',
    nombre: 'El Estudio',
    subtitulo: 'Minimalismo rústico y refugio de lectura',
    capacidad: '2 Huéspedes',
    extracto: 'Un espacio compacto, idílico y directo diseñado para el recogimiento, el silencio y el placer de leer.',
    descripcion: 'La opción perfecta para estancias individuales o parejas. Cuenta con calefacción centralizada, un espacio diáfano con cocina integrada, baño privado completo y una coqueta terraza para disfrutar de la brisa alpujarreña.',
    imagenes: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'],
    servicios: ['1 Dormitorio', 'Terraza', 'Calefacción Central', 'Cocina Privada', '1 Baño', 'Zona Lectura'],
    precioDesde: 65,
    urlBooking: 'https://www.booking.com'
  }
]