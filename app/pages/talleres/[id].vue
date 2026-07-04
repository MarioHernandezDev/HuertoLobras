<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased pt-32 pb-24" v-if="taller">
    
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      <NuxtLink to="/talleres" class="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-stone-400 hover:text-[#3b6e4c] transition-colors mb-12 group">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
        Volver a talleres
      </NuxtLink>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div class="lg:col-span-7 space-y-8">
          <span class="text-xs font-mono font-black uppercase tracking-[0.2em] text-[#3b6e4c] block">
            {{ taller.categoria }}
          </span>
          <h1 class="text-4xl sm:text-6xl font-manual text-stone-900 m-0 leading-tight font-normal">
            {{ taller.titulo }}
          </h1>
          
          <div class="rounded-[2rem] overflow-hidden aspect-video bg-stone-900 shadow-md">
            <img :src="taller.imagen" :alt="taller.titulo" class="w-full h-full object-cover" />
          </div>

          <p class="text-stone-600 text-xl font-medium leading-relaxed pt-4">
            {{ taller.descripcionLarga }}
          </p>
        </div>

        <div class="lg:col-span-5 lg:sticky lg:top-32">
          <div class="bg-[#f6f3eb] p-8 rounded-[2rem] border border-stone-200/60 shadow-sm space-y-6">
            <h3 class="font-sans font-black text-xl text-stone-900 m-0">Información del Taller</h3>
            
            <div class="space-y-4 border-y border-stone-300/40 py-6 text-sm font-medium text-stone-600">
              <div class="flex justify-between">
                <span class="text-stone-400 uppercase tracking-wider font-mono text-xs">Duración:</span>
                <span>{{ taller.info.duracion }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-stone-400 uppercase tracking-wider font-mono text-xs">Precio de plaza:</span>
                <span class="text-stone-900 font-bold">{{ taller.info.precio }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-stone-400 uppercase tracking-wider font-mono text-xs">Disponibilidad:</span>
                <span>{{ taller.info.disponibilidad }}</span>
              </div>
            </div>

            <div class="pt-2">
              <a href="tel:+34679038079" class="btn-booking-action w-full text-center group justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-amber-400 group-hover:text-stone-900 transition-colors"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
                <span>Reservar plaza por Teléfono</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<script setup>
import { useRoute, queryContent } from '#app'
import { computed } from 'vue'
import placeholderImg from '~/assets/img/default.jpg'

const route = useRoute()

// Diccionario de simulación de base de datos para los talleres
const baseTalleres = {
  'bajo-las-estrellas': {
    titulo: 'Taller Bajo las Estrellas',
    categoria: 'Astronomía & Naturaleza',
    descripcionLarga: 'Lobras goza de cielos nocturnos de una pureza excepcional. En esta velada guiada, aprenderás a reconocer las constelaciones principales, interpretarás mapas astronómicos básicos y redescubrirás las leyendas clásicas escritas en el firmamento mediante telescopios.',
    imagen: placeholderImg,
    info: { duracion: '3 Horas (Nocturno)', precio: '15€ / persona', disponibilidad: 'Bajo reserva estacional' }
  },
  'jabon-de-seda': {
    titulo: 'Taller Jabón de Seda',
    categoria: 'Artesanía Tradicional',
    descripcionLarga: 'Sumérgete en la alquimia tradicional. En este taller práctico recolectaremos plantas aromáticas locales y aceites de primera presión para estructurar y fabricar tu propia barra de jabón natural mediante el proceso en frío tradicional.',
    imagen: placeholderImg,
    info: { duracion: '2.5 Horas', precio: '20€ (Material inc.)', disponibilidad: 'Fines de semana' }
  },
  'meditacion': {
    titulo: 'Taller de Meditación',
    categoria: 'Bienestar & Equilibrio',
    descripcionLarga: 'Una inmersión al silencio absoluto. Aprende metodologías de respiración consciente (Pranayama) y técnicas de atención plena diseñadas para vaciar la mente y reconectar con el entorno rural de paz de la Alpujarra Alta.',
    imagen: placeholderImg,
    info: { duracion: '1.5 Horas', precio: '10€ / sesión', disponibilidad: 'Plazas limitadas' }
  },
  'yoga-en-la-naturaleza': {
    titulo: 'Curso de Yoga en la Naturaleza',
    categoria: 'Cuerpo & Mente',
    descripcionLarga: 'Práctica diseñada para todos los niveles técnicos en un entorno único. Desplegamos esterillas en bancales naturales de nuestra finca para sincronizar el asana con el sonido del viento de la sierra y el despertar del día.',
    imagen: placeholderImg,
    info: { duracion: '2 Horas', precio: '12€ / sesión', disponibilidad: 'Mañanas de Verano/Primavera' }
  }
}

const taller = computed(() => baseTalleres[route.params.id] || null)
</script>

<style scoped>
.btn-booking-action {
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
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 25px -8px rgba(28, 25, 23, 0.25);
}

.btn-booking-action:hover {
  background: #3b6e4c;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -8px rgba(59, 110, 76, 0.35);
}
</style>