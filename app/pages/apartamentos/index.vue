<template>
  <div class="space-y-20 pb-20">
    
    <MiniHero 
      titulo="Apartamentos"
      sectionName="Apartamentos"
      subtitulo="Un escenario único para reencontrarse con la calma, el silencio y la lectura."
      imagenBg="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=1600&q=80"
    />

    <div class="max-w-4xl border-l-2 border-stone-900 pl-6 md:pl-8">
      <p class="text-stone-500 font-sans text-lg md:text-xl leading-relaxed italic">
        Rodeado de montañas, entre la naturaleza y la brisa impregnada por paz y tranquilidad, se encuentra un lugar especial en la Alpujarra granadina. Cada rincón ha sido rehabilitado respetando fielmente la arquitectura tradicional de piedra, pizarra y madera noble.
      </p>
    </div>

    <div class="space-y-28 pt-8">
      <div 
        v-for="(apto, index) in apartamentos" 
        :key="apto.id" 
        class="group grid grid-cols-1 lg:grid-cols-12 bg-white rounded-none border border-stone-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.01)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(45,74,34,0.06)]"
      >
        <div 
          class="relative w-full h-[320px] sm:h-[400px] lg:h-auto min-h-full overflow-hidden bg-stone-100 rounded-none lg:col-span-7 flex"
          :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
        >
          <img 
            :src="apto.imagenes[0]" 
            :alt="apto.nombre" 
            class="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
          />
          
          <div class="absolute top-6 left-6 flex gap-2 z-10">
            <span v-if="apto.adaptado" class="bg-[#2d4a22] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-none shadow-sm">
              Adaptado
            </span>
            <span class="bg-stone-950 text-white px-4 py-2 rounded-none shadow-sm text-[10px] font-bold uppercase tracking-widest">
              {{ apto.capacidad }}
            </span>
          </div>
        </div>

        <div 
          class="p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-10 lg:col-span-5 rounded-none bg-stone-50/20"
          :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
        >
          
          <div class="space-y-6">
            <div class="flex justify-between items-start gap-4 border-b border-stone-200/80 pb-5">
              <div>
                <h2 class="text-3xl lg:text-4xl font-serif text-stone-900 mb-1 tracking-tight font-light transition-colors duration-300">
                  {{ apto.nombre }}
                </h2>
                <p class="text-xs font-serif italic text-[var(--color-secundario)] font-semibold tracking-wider">
                  {{ apto.subtitulo }}
                </p>
              </div>
              
              <div class="text-right shrink-0">
                <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Desde</span>
                <span class="text-3xl font-serif text-stone-950 font-medium tracking-tighter">{{ apto.precioDesde }}€</span>
                <span class="text-[10px] uppercase tracking-wider text-stone-400 font-medium block">/ noche</span>
              </div>
            </div>
            
            <p class="text-stone-500 font-sans text-sm md:text-base leading-relaxed pt-2">
              {{ apto.extracto }}
            </p>
          </div>

          <div class="space-y-3">
            <span class="text-[9px] uppercase tracking-widest font-bold text-stone-400 block tracking-[0.15em]">Equipamiento destacado</span>
            <div class="flex flex-wrap gap-1.5">
              <span 
                v-for="servicio in apto.servicios" 
                :key="servicio"
                class="text-[11px] font-medium font-sans bg-white text-stone-600 px-3.5 py-1.5 rounded-none border border-stone-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
              >
                {{ servicio }}
              </span>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 pt-4 border-t border-stone-200/60">
            
            <BotonBoutique 
              variant="linea" 
              :to="`/apartamentos/${apto.id}`"
              :conFlecha="true"
              class="flex-1"
            >
              Detalles
            </BotonBoutique>
            
            <BotonBoutique 
              variant="solido"
              :href="apto.urlBooking"
              :conFlecha="false"
              class="flex-1 sm:flex-[1.2]"
            >
              Reservar
            </BotonBoutique>
            
          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
// En Nuxt 4, la importación del array 'apartamentos' (utils/) 
// y el componente <BotonBoutique /> es completamente automática e implícita.
</script>