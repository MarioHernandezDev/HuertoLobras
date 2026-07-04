<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased">
    
    <MiniHero 
      title="Cursos & Experiencias" 
      subtitle="Siente la Alpujarra Alta"
      :backgroundImage="heroImage" 
    />

    <section class="w-full bg-[#fcfaf7] pt-28 px-4 md:px-8 lg:px-12 select-none">
      <div class="max-w-7xl mx-auto">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-200/60 pb-16">
          
          <div class="lg:col-span-7 space-y-6">
            <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.2em] block">
              Desconexión & Sabiduría
            </span>
            
            <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] m-0 font-normal">
              Tradición & <br />
              <span class="text-[#3b6e4c] font-black block mt-2">bienestar.</span>
            </h2>
            
            <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl m-0 normal-case pt-2">
              Aprende antiguos oficios artesanos, reconecta con la limpieza del cielo alpujarreño o encuentra la calma interior a través de experiencias guiadas estacionales.
            </p>
          </div>

          <div class="lg:col-span-5 bg-[#f6f3eb] rounded-[2rem] p-8 border border-stone-200/40 shadow-[0_15px_40px_-20px_rgba(42,53,44,0.04)] space-y-6 w-full lg:max-w-md lg:justify-self-end">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full bg-stone-300 overflow-hidden shrink-0 shadow-inner flex items-center justify-center text-[#3b6e4c] bg-stone-200">
                <i class="fa-solid fa-calendar-check text-xl"></i>
              </div>
              <div>
                <h4 class="text-sm font-sans font-black text-stone-800 uppercase tracking-wider m-0">
                  ¿Vienes en grupo?
                </h4>
                <p class="text-stone-500 text-xs font-medium m-0 mt-0.5">
                  Organizamos talleres a medida
                </p>
              </div>
            </div>
            
            <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed m-0">
              Si quieres reservar una sesión privada de yoga o un taller exclusivo para tu familia, puedes consultarnos fechas libres.
            </p>

            <a 
              href="tel:+34679038079"
              class="flex items-center justify-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-black text-xs uppercase tracking-widest py-3.5 px-6 rounded-full transition-all duration-300 hover:scale-[1.02] no-underline shadow-sm text-center w-full"
            >
              <i class="fa-solid fa-phone text-amber-400"></i>
              <span>Consultar Disponibilidad</span>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section class="w-full bg-[#fcfaf7] py-12 select-none overflow-hidden flex flex-col gap-12 md:gap-20">
      
      <NuxtLink 
        v-for="(taller, idx) in talleres" 
        :key="taller.id"
        :to="`/talleres/${taller.id}`"
        class="w-full grid grid-cols-1 md:grid-cols-2 min-h-[500px] lg:min-h-[650px] border-y border-stone-200/40 group no-underline block bg-[#fcfaf7]"
      >
        
        <div 
          :class="[
            'relative w-full h-80 md:h-full bg-stone-900 overflow-hidden',
            idx % 2 === 1 ? 'md:order-2' : 'md:order-1'
          ]"
        >
          <div 
            class="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-105"
            :style="{ backgroundImage: `url(${taller.image || defaultImage})` }"
          ></div>
          <div class="absolute inset-0 bg-stone-950/10 group-hover:bg-stone-950/0 transition-colors duration-500"></div>
          
          <span :class="['absolute top-6 z-20 text-[10px] font-sans font-black uppercase tracking-widest text-white px-4 py-2 rounded-full shadow-md backdrop-blur-sm bg-opacity-95', 
            idx % 2 === 1 ? 'right-6' : 'left-6',
            getCategoriaClass(taller.categoria)
          ]">
            {{ taller.categoria }}
          </span>
        </div>

        <div 
          :class="[
            'flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-24 xl:p-32 space-y-8 bg-[#fcfaf7] transition-colors duration-500 group-hover:bg-[#f6f3eb]/40',
            idx % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : 'md:order-2 md:text-left md:items-start'
          ]"
        >
          <div class="space-y-4 w-full">
            <span class="font-mono text-xs font-bold text-stone-400 tracking-widest block">
              TALLER 0{{ idx + 1 }}
            </span>
            <h3 class="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-stone-900 leading-tight m-0 group-hover:text-[#3b6e4c] transition-colors duration-300">
              {{ taller.name }}
            </h3>
            <p class="text-stone-500 text-base lg:text-lg font-medium leading-relaxed m-0 max-w-xl">
              {{ taller.description }}
            </p>
          </div>

          <div 
            :class="[
              'pt-6 border-t border-stone-200/60 flex items-center gap-8 text-stone-700 w-full max-w-xl',
              idx % 2 === 1 ? 'md:justify-end' : 'md:justify-start'
            ]"
          >
            <div class="flex items-center gap-2.5 text-base font-sans font-black">
              <i class="fa-regular fa-clock text-[#3b6e4c] text-lg"></i>
              <span>{{ taller.duration }}</span>
            </div>
            <div class="flex items-center gap-2.5 text-base font-sans font-black">
              <i class="fa-solid fa-tag text-[#3b6e4c] text-lg"></i>
              <span>{{ taller.price }}</span>
            </div>
          </div>

          <div class="pt-4">
            <div class="inline-flex items-center gap-3 text-xs font-sans font-black uppercase tracking-[0.2em] text-stone-800 group-hover:text-[#3b6e4c] transition-colors duration-300">
              <span>Ver detalles del taller</span>
              <i :class="['fa-solid text-sm transition-transform duration-300 group-hover:translate-x-1.5', idx % 2 === 1 ? 'fa-arrow-left rotate-180 md:rotate-0 md:group-hover:-translate-x-1.5' : 'fa-arrow-right']"></i>
            </div>
          </div>

        </div>

      </NuxtLink>

    </section>

    <section class="py-32 px-4 md:px-6 max-w-4xl mx-auto text-center select-none space-y-6">
      <h3 class="font-manual text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal m-0">¿Buscas algo diferente?</h3>
      <p class="text-stone-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto font-medium leading-relaxed m-0">
        Durante el año cambiamos las actividades según los frutos del huerto y la temporada de recolecta. Escríbenos para conocer la agenda mensual.
      </p>
      <div class="pt-4">
        <a href="mailto:info@elhuertodelobras.com" class="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 no-underline shadow-md">
          <i class="fa-regular fa-envelope text-amber-400"></i>
          <span>Escribir por Correo</span>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import heroImage from '~/assets/img/default.jpg'
import defaultImage from '~/assets/img/default.jpg'

const talleres = [
  {
    id: 'bajo-las-estrellas',
    name: 'Taller Bajo las Estrellas',
    categoria: 'Astronomía',
    duration: '3h 00m',
    price: '15€ / pers',
    description: 'Explora y aprende a leer la limpieza impecable del cielo nocturno alpujarreño. Un viaje guiado a través de constelaciones y mitología libre de contaminación lumínica.',
    image: null
  },
  {
    id: 'jabon-de-seda',
    name: 'Taller Jabón de Seda',
    categoria: 'Artesanía',
    duration: '2h 30m',
    price: '20€ / pers',
    description: 'Recupera procesos tradicionales elaborando jabones artesanos con ingredientes naturales y aceites esenciales de la Alpujarra Alta.',
    image: null
  },
  {
    id: 'meditacion',
    name: 'Taller de Meditación',
    categoria: 'Bienestar',
    duration: '1h 30m',
    price: '10€ / pers',
    description: 'Encuentra tu centro rodeado del silencio absoluto de Lobras. Sesiones guiadas diseñadas para calmar la mente y resetear el estrés cotidiano.',
    image: null
  },
  {
    id: 'yoga-en-la-naturaleza',
    name: 'Curso de Yoga en el Huerto',
    categoria: 'Bienestar',
    duration: '2h 00m',
    price: '12€ / pers',
    description: 'Sincroniza tus movimientos y respiración con los ritmos orgánicos del campo. Prácticas al aire libre sintiendo la paz del entorno rural.',
    image: null
  }
]

// Colores personalizados por tag de categoría para dar dinamismo editorial
const getCategoriaClass = (categoria) => {
  switch (categoria) {
    case 'Astronomía': return 'bg-indigo-900'
    case 'Artesanía': return 'bg-amber-700'
    case 'Bienestar': return 'bg-emerald-700'
    default: return 'bg-stone-600'
  }
}
</script>