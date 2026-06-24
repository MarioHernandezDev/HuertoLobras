<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheMiniHero 
      title="Apartamentos" 
      subtitle="Casas de piedra independientes y mimadas al detalle" 
    />

    <section class="py-24 md:py-32 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
        
        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop" alt="Las Golondrinas" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Ideal 2 Personas
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">Las Golondrinas</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                Un espacio amplio de <strong>1 dormitorio</strong> que destaca por su acogedor salón equipado con <strong>chimenea tradicional</strong> y un sofá cama adicional. Perfecto para quienes buscan el calor del hogar original.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2"><i class="fa-solid fa-bed text-stone-400 w-4"></i> 1 Dormitorio + Sofá Cama</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-fire text-stone-400 w-4"></i> Chimenea Privada</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-temperature-arrow-up text-stone-400 w-4"></i> Calefacción Central</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-bath text-stone-400 w-4"></i> 1 Baño Completo</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Las Golondrinas <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop" alt="La Seda" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Capacidad: 4 Personas
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">La Seda</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                Una de nuestras casas más amplias y luminosas. Cuenta con <strong>2 dormitorios</strong> y espectaculares <strong>2 terrazas privadas</strong> orientadas al paisaje alpujarreño para disfrutar de veladas memorables.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2"><i class="fa-solid fa-bed text-stone-400 w-4"></i> 2 Dormitorios</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-cloud-sun text-stone-400 w-4"></i> 2 Terrazas</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-fire text-stone-400 w-4"></i> Salón con Chimenea</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-kitchen-set text-stone-400 w-4"></i> Cocina Equipada</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar La Seda <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop" alt="Los Trovos" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Parejas &bull; Vistas
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">Los Trovos</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                Diseñado para una escapada romántica de dos personas, ofrece un refugio íntimo con <strong>1 dormitorio</strong>, salón con chimenea de obra y una acogedora <strong>terraza mirador</strong> orientada al amanecer.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2"><i class="fa-solid fa-bed text-stone-400 w-4"></i> 1 Dormitorio</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-map text-stone-400 w-4"></i> 1 Terraza Privada</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-fire text-stone-400 w-4"></i> Calefacción + Leña</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-utensils text-stone-400 w-4"></i> Cocina Completa</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Los Trovos <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop" alt="Los Cerezos" />
              <div class="absolute top-4 left-4 bg-[#53433c] text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                <i class="fa-solid fa-wheelchair mr-1"></i> Accesible
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">Los Cerezos</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                Nuestra estancia totalmente <strong>adaptada para personas con movilidad reducida</strong>. Cuenta con espacios holgados, salón con sofá cama, chimenea integrada y un baño libre de barreras.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2 font-bold text-[#53433c]"><i class="fa-solid fa-universal-access w-4"></i> 100% Adaptado</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-bed text-stone-400 w-4"></i> 1 Dormitorio (2 Pax)</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-fire text-stone-400 w-4"></i> Salón y Chimenea</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-snowflake text-stone-400 w-4"></i> Climatización Central</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Los Cerezos <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=1200&auto=format&fit=crop" alt="La Contraviesa" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Confort &bull; Exterior
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">La Contraviesa</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                Un alojamiento sumamente completo que dispone de <strong>1 dormitorio</strong>, salón independiente, un agradable sofá cama, <strong>chimenea de leña</strong> y una fantástica terraza orientada a la mítica sierra homónima.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2"><i class="fa-solid fa-sun text-stone-400 w-4"></i> Terraza Panorámica</div>
                <div class="flex items-center gap-2"><i class="fa-solid =fa-bed text-stone-400 w-4"></i> 1 Dormitorio + Sofá Cama</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-couch text-stone-400 w-4"></i> Salón Confortable</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-sink text-stone-400 w-4"></i> Cocina de Autor</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar La Contraviesa <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[16/10]">
              <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1200&auto=format&fit=crop" alt="El Estudio" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Esencia Minimalista
              </div>
            </div>
            <div class="p-8 md:p-10 space-y-5">
              <h3 class="font-serif italic text-2xl text-stone-900 m-0">El Estudio</h3>
              <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                La opción idónea para estancias individuales o parejas en busca de sencillez. Un concepto loft compacto de <strong>1 dormitorio</strong>, dotado de calefacción central, cocina funcional y una estupenda <strong>terraza privada</strong>.
              </p>
              <div class="grid grid-cols-2 gap-3 text-xs text-stone-500 font-medium pt-2 border-t border-stone-200/60">
                <div class="flex items-center gap-2"><i class="fa-solid fa-user-friends text-stone-400 w-4"></i> 1 Dormitorio (2 Pax)</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-door-open text-stone-400 w-4"></i> Terraza Independiente</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-temperature-arrow-up text-stone-400 w-4"></i> Calefacción Central</div>
                <div class="flex items-center gap-2"><i class="fa-solid fa-shower text-stone-400 w-4"></i> Baño Privado</div>
              </div>
            </div>
          </div>
          <div class="px-8 md:px-10 pb-8 md:pb-10">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar El Estudio <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

      </div>
    </section>

    <section class="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" />
      </div>
      
      <div class="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <span class="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-black block">El Escenario Perfecto</span>
        
        <h2 class="font-manual text-5xl md:text-7xl text-stone-200 font-normal leading-tight m-0">
          Un rincón para dar gusto al placer de la lectura
        </h2>
        
        <div class="w-16 h-[1px] bg-white/20 mx-auto"></div>
        
        <p class="text-stone-300 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Rodeado de imponentes montañas, suspendido entre la naturaleza más pura y una <strong>brisa impregnada por la paz y la tranquilidad</strong>, se encuentra El Huerto de Lobras. Un escenario fantástico minuciosamente ideado para apartar el ruido cotidiano, concentrarse y <strong>reencontrarse definitivamente con la calma</strong>.
        </p>

        <div class="pt-4">
          <NuxtLink to="/contacto" class="btn-editorial-accent px-10">
            Contactar con Recepción
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
section {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>