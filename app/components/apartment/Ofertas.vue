<template>
  <section class="w-full pt-28 px-4 md:px-8 lg:px-12 select-none section-fade-in">
    <div class="max-w-[96%] mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-200/60 pb-16 mb-16 overflow-hidden">
        <div v-scroll="'right'" class="lg:col-span-7 lg:col-start-6 space-y-6 lg:text-right">
          <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.2em] block">
            Planes & Escapadas
          </span>
          <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.9] m-0 font-normal pb-4">
             Nuestras Ofertas <br />
            <span class="text-[#3b6e4c] font-black block mt-2">disponibles.</span>
          </h2>
        </div>
      </div>

      <div v-scroll class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div class="lg:col-span-7 bg-[#3b6e4c] rounded-[2.5rem] p-8 sm:p-12 text-white flex flex-col justify-between shadow-[0_20px_50px_-25px_rgba(59,110,76,0.3)] min-h-[380px] transition-all duration-500">
          <div class="space-y-5">
            <div class="inline-flex items-center gap-2 bg-black/25 border border-white/10 px-4 py-2 rounded-full text-sm font-sans font-black tracking-widest uppercase">
              <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              {{ ofertaVisualizada.tag }}
            </div>
            <h3 class="font-manual text-4xl sm:text-6xl text-white m-0 font-normal leading-tight transition-all">
              {{ ofertaVisualizada.title }}
            </h3>
            <p class="text-stone-100/90 text-base sm:text-lg max-w-xl font-medium m-0 leading-relaxed">
              {{ ofertaVisualizada.description }}
            </p>
          </div>
          
          <div class="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mt-6">
            <div class="text-sm font-mono tracking-wider text-stone-200/90 font-bold uppercase">
              Código promocional: <span class="text-amber-400 font-sans font-black text-base ml-1">{{ ofertaVisualizada.code }}</span>
            </div>
            <a 
              :href="`https://wa.me/34679038079?text=Hola!%20Quiero%20información%20y%20aprovechar%20la%20oferta%20de:%20${ofertaVisualizada.title}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-white text-sm font-sans font-black uppercase tracking-wider py-4 px-7 rounded-full transition-transform hover:scale-[1.02] no-underline shadow-sm"
            >
              <i class="fa-brands fa-whatsapp text-lg"></i>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-5 bg-[#f6f3eb] rounded-[2.5rem] p-8 border border-stone-200/40 flex flex-col justify-between gap-6">
          <div class="space-y-4 w-full">
            <span class="text-sm font-mono text-stone-400 uppercase tracking-[0.2em] block font-bold">
              Planifica tu escapada
            </span>
            <h4 class="font-sans font-black text-xl text-stone-900 m-0 uppercase tracking-wide">
              Promociones Disponibles
            </h4>
            
            <div class="space-y-3 pt-2">
              <button 
                v-for="oferta in listaOfertas" 
                :key="oferta.id"
                @click="seleccionarOferta(oferta)"
                class="w-full flex items-center justify-between p-5 bg-[#fcfaf7]/60 rounded-2xl border text-left transition-all duration-300 cursor-pointer"
                :class="ofertaSeleccionadaId === oferta.id 
                  ? 'border-[#3b6e4c] bg-white shadow-[0_10px_25px_-10px_rgba(59,110,76,0.15)] font-medium' 
                  : 'border-stone-200/60 hover:border-stone-400 hover:bg-white'"
              >
                <div class="space-y-1">
                  <span class="text-sm font-mono font-bold uppercase tracking-wider block" :class="ofertaSeleccionadaId === oferta.id ? 'text-[#3b6e4c]' : 'text-stone-400'">
                    {{ oferta.meses }}
                  </span>
                  <span class="text-base font-sans font-black text-stone-800 block">
                    {{ oferta.title }}
                  </span>
                </div>
                <div class="text-right shrink-0 ml-4">
                  <span class="inline-block bg-stone-100 font-sans font-black text-xs px-3 py-2 rounded-xl uppercase tracking-wider text-stone-700">
                    {{ oferta.badge }}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <p class="text-stone-600 text-sm font-medium m-0 pt-6 border-t border-stone-200/60 leading-relaxed">
            * Haz clic en cualquier temporada para ver sus detalles. Bloquea tu tarifa web llamando directamente y evita el incremento de precio de agencias externas.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const listaOfertas = ref([
  {
    id: 'san-valentin',
    meses: 'Febrero',
    tag: 'Promoción del mes',
    title: 'San Valentín Alpujarreño',
    description: 'Rompe con la rutina en mitad del silencio. 15% de descuento directo en estancias de fin de semana completo + botella de vino local de cortesía y salida tardía garantizada.',
    code: 'LOBRASROMANTICO',
    badge: '-15% Web'
  },
  {
    id: 'primavera',
    meses: 'Marzo - Mayo',
    tag: 'Próxima temporada',
    title: 'Desconexión de Primavera',
    description: 'Descubre el florecer del valle alto de Lobras. Rutas de senderismo guiadas gratis con tu reserva directa de mínimo 3 noches, además de un kit de desayuno artesanal en tu porche.',
    code: 'PRIMAVERAVIVA',
    badge: 'Pack Regalo'
  },
  {
    id: 'verano',
    meses: 'Junio - Agosto',
    tag: 'Reserva anticipada',
    title: 'Verano en los Frutales',
    description: 'Asegura tu refugio fresco frente al calor estival. Reservando antes del 30 de abril obtienes un 10% fijo de descuento en estancias largas + acceso ilimitado a nuestra zona de descanso exterior.',
    code: 'VERANOANTICIPADO',
    badge: '-10% Directo'
  },
  {
    id: 'otono',
    meses: 'Septiembre - Nov',
    tag: 'Otoño rural',
    title: 'Escapada de la Vendimia',
    description: 'Vive la recogida mágica de la uva alpujarreña. Disfruta de un pase exclusivo para dos personas a catas de bodegas locales y una cesta de castañas y frutas del huerto de bienvenida.',
    code: 'OTOÑOVINO',
    badge: 'Cata Gratis'
  }
])

const ofertaSeleccionadaId = ref('san-valentin')

const ofertaVisualizada = computed(() => {
  return listaOfertas.value.find(o => o.id === ofertaSeleccionadaId.value) || listaOfertas.value[0]
})

const seleccionarOferta = (oferta) => {
  ofertaSeleccionadaId.value = oferta.id
}
</script>