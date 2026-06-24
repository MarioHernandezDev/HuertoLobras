<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheHero />

    <section class="relative z-30 max-w-[85rem] mx-auto px-6 lg:px-16 -mt-12 md:-mt-16 reveal-on-scroll">
      <div class="bg-[#53433c] text-white p-6 md:p-8 shadow-2xl border border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
        
        <div class="space-y-2">
          <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-300">Llegada</label>
          <div class="relative">
            <input type="date" class="w-full bg-stone-900/40 border border-stone-700/60 text-white px-4 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-stone-400 rounded-none appearance-none" />
            <i class="fa-solid fa-calendar absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs"></i>
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-300">Salida</label>
          <div class="relative">
            <input type="date" class="w-full bg-stone-900/40 border border-stone-700/60 text-white px-4 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-stone-400 rounded-none appearance-none" />
            <i class="fa-solid fa-calendar absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs"></i>
          </div>
        </div>

        <div class="space-y-2">
          <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-300">Huéspedes</label>
          <div class="relative">
            <select class="w-full bg-stone-900/40 border border-stone-700/60 text-white px-4 py-3 text-xs uppercase tracking-widest font-bold focus:outline-none focus:border-stone-400 rounded-none appearance-none cursor-pointer">
              <option value="1" class="bg-stone-900">1 Persona</option>
              <option value="2" class="bg-stone-900" selected>2 Personas</option>
              <option value="3" class="bg-stone-900">3 Personas</option>
              <option value="4" class="bg-stone-900">4+ Personas</option>
            </select>
            <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs"></i>
          </div>
        </div>

        <div>
          <a 
            href="https://www.booking.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full btn-editorial-accent"
          >
            <i class="fa-solid fa-bolt mr-2 text-amber-500 animate-pulse"></i> Reservar Estancia
          </a>
        </div>

      </div>
      <div class="flex justify-center lg:justify-end mt-3 px-2">
        <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold">
          <i class="fa-solid fa-shield-checkmark text-emerald-600 mr-1"></i> Garantía de mejor precio online
        </span>
      </div>
    </section>

    <section class="py-24 md:py-36 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-[1px] bg-[#53433c]"></div>
            <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black block">
              Manifiesto de Autor
            </span>
          </div>
          <h2 class="font-manual text-5xl md:text-6xl lg:text-7xl text-[#53433c] leading-[1.2] m-0 font-normal">
            Nacido del respeto a la tierra y al silencio
          </h2>
          <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed pt-2">
            Situado en el corazón <strong>indómito de la Alpujarra Granadina</strong>, El Huerto de Lobras no es un alojamiento convencional. Es una propuesta de <strong>regreso al origen</strong>, una invitación explícita a recuperar el ritmo natural de las estaciones, arropados por muros de piedra centenarios y el murmullo constante de las <strong>acequias árabes</strong>.
          </p>
          <div class="pt-4">
            <NuxtLink to="/entorno" class="btn-editorial-outline">
              Explorar el Territorio
            </NuxtLink>
          </div>
        </div>

        <div class="lg:col-span-6 relative">
          <div class="img-zoom-container aspect-[4/5] shadow-2xl z-10 relative">
             <img src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=1200&auto=format&fit=crop" alt="Entorno rural de Lobras" />
          </div>
          <div class="hidden sm:block absolute -bottom-8 -left-8 w-2/3 aspect-video bg-[#53433c] p-6 text-white z-20 shadow-xl">
            <p class="text-[10px] uppercase tracking-[0.3em] font-black text-stone-300 mb-2">&bull; Altitud Pura</p>
            <p class="font-serif italic text-lg m-0 leading-snug text-stone-100">Aire limpio que desciende directamente de las cumbres de Sierra Nevada.</p>
          </div>
        </div>

      </div>
    </section>

    <section class="py-28 bg-stone-100/60 border-t border-b border-stone-200/80">
      <div class="max-w-[85rem] mx-auto px-6 lg:px-16 space-y-16">
        
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-stone-300/60 pb-6 gap-4">
          <div class="space-y-1">
            <span class="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-black block">Nuestras Estancias</span>
            <h2 class="font-manual text-5xl md:text-6xl text-stone-900 m-0 font-normal leading-tight">
              Casas con Historia
            </h2>
          </div>
          <NuxtLink to="/apartamentos" class="text-[11px] uppercase font-black tracking-[0.25em] text-[#53433c] hover:text-stone-900 border-b-2 border-[#53433c] pb-1 transition-colors">
            Ver disponibilidad completa
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div class="card-boutique group flex flex-col justify-between">
            <div>
              <div class="img-zoom-container aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop" alt="Casa Las Golondrinas" />
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                  Capacidad: 2-4 Pax
                </div>
              </div>
              <div class="p-8 md:p-10 space-y-4">
                <h3 class="font-light text-2xl text-stone-900 m-0">Las Golondrinas</h3>
                <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                  Vistas panorámicas de vértigo al valle, techos artesanales de <strong>madera de castaño original</strong> y una imponente <strong>chimenea de piedra</strong> para los meses de invierno. El auténtico refugio familiar de la Alpujarra.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="tag-servicio">Chimenea</span>
                  <span class="tag-servicio">Terraza Privada</span>
                  <span class="tag-servicio">Cocina Completa</span>
                </div>
              </div>
            </div>
            <div class="px-8 md:px-10 pb-8 md:pb-10">
              <NuxtLink to="/apartamentos/las-golondrinas" class="btn-editorial w-full sm:w-auto text-center">
                Explorar Las Golondrinas <i class="fa-solid fa-arrow-right ml-2 text-[9px]"></i>
              </NuxtLink>
            </div>
          </div>

          <div class="card-boutique group lg:mt-16 flex flex-col justify-between">
            <div>
              <div class="img-zoom-container aspect-[16/10]">
                <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop" alt="Casa La Seda" />
                <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                  Exclusivo Parejas
                </div>
              </div>
              <div class="p-8 md:p-10 space-y-4">
                <h3 class="font-light text-2xl text-stone-900 m-0">La Seda</h3>
                <p class="text-stone-600 text-sm font-medium leading-relaxed m-0">
                  Un rincón de escala íntima diseñado en <strong>exclusiva para dos personas</strong>. Una atmósfera orgánica donde la <strong>luz dorada de la tarde</strong> lo inunda todo a través de sus ventanales de castaño.
                </p>
                <div class="flex flex-wrap gap-2 pt-1">
                  <span class="tag-servicio">Vistas Especiales</span>
                  <span class="tag-servicio">Baño de Autor</span>
                  <span class="tag-servicio">WIFI Alta Velocidad</span>
                </div>
              </div>
            </div>
            <div class="px-8 md:px-10 pb-8 md:pb-10">
              <NuxtLink to="/apartamentos/la-seda" class="btn-editorial w-full sm:w-auto text-center">
                Descubrir La Seda <i class="fa-solid fa-arrow-right ml-2 text-[9px]"></i>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-stone-950">
      <div class="absolute inset-0 z-0 scale-105 opacity-40 hover:scale-100 transition-transform duration-[2000ms] ease-out">
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop" 
          alt="Paisaje agreste y texturas de piedra de Lobras" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 z-10"></div>
      
      <div class="relative z-20 w-full max-w-[85rem] mx-auto px-6 lg:px-16 text-center">
        <div class="max-w-3xl mx-auto space-y-6">
          <span class="text-[10px] uppercase tracking-[0.5em] font-black text-stone-300 block">Arquitectura Vernácula</span>
          <h2 class="font-manual text-6xl md:text-8xl text-white leading-tight m-0 font-normal">
            El lujo genuino de la sencillez
          </h2>
          <div class="w-16 h-[1px] bg-white/40 mx-auto"></div>
          <p class="text-stone-300 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto pt-2">
            Nuestras estancias están equipadas con todo lo necesario para una <strong>inmersión y desconexión absoluta</strong> del ruido metropolitano. Chimeneas de leña tradicional, lencería de cama de <strong>algón orgánico</strong> y bibliotecas privadas curadas con mimo.
          </p>
          <div class="pt-6">
            <a 
              href="https://www.booking.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-editorial-accent px-10 py-5"
            >
              <i class="fa-solid fa-calendar-days mr-2"></i> Reservar esta experiencia
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-36 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll space-y-20">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        
        <div class="space-y-4 group">
          <div class="text-[11px] font-black font-sans uppercase tracking-[0.3em] text-[#53433c] flex items-center gap-3">
            <i class="fa-solid fa-wheat-awn text-base text-stone-400 group-hover:text-[#53433c] transition-colors"></i>
            <span>01 &bull; Slow Food</span>
          </div>
          <h4 class="font-serif italic text-xl text-stone-900 m-0">El Huerto de Cal</h4>
          <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
            Acceso libre y regulado a nuestro <strong>huerto ecológico privado</strong> para nuestros huéspedes. Además, ofrecemos recomendaciones personalizadas de la <strong>gastronomía ancestral</strong> de los pueblos de Lobras y Tímar.
          </p>
        </div>

        <div class="space-y-4 group">
          <div class="text-[11px] font-black font-sans uppercase tracking-[0.3em] text-[#53433c] flex items-center gap-3">
            <i class="fa-solid fa-route text-base text-stone-400 group-hover:text-[#53433c] transition-colors"></i>
            <span>02 &bull; Senderismo</span>
          </div>
          <h4 class="font-serif italic text-xl text-stone-900 m-0">Rutas del Agua</h4>
          <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
            Senderos e itinerarios circulares históricos que nacen desde la misma linde de la finca, cruzando antiguos barrancos, <strong>acequias de origen árabe</strong> y densos <strong>castañares protegidos</strong>.
          </p>
        </div>

        <div class="space-y-4 group">
          <div class="text-[11px] font-black font-sans uppercase tracking-[0.3em] text-[#53433c] flex items-center gap-3">
            <i class="fa-solid fa-star-and-crescent text-base text-stone-400 group-hover:text-[#53433c] transition-colors"></i>
            <span>03 &bull; Astroturismo</span>
          </div>
          <h4 class="font-serif italic text-xl text-stone-900 m-0">Cielos Protegidos</h4>
          <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
            Disfruta de uno de los cielos nocturnos más limpios, oscuros y <strong>libres de contaminación lumínica</strong> de todo el continente europeo. Disponemos de <strong>equipamiento óptico básico</strong> de observación astronómica.
          </p>
        </div>

      </div>

      <div class="flex justify-center pt-4">
        <NuxtLink to="/actividades" class="btn-editorial-outline px-12">
          Ver agenda de actividades <i class="fa-solid fa-arrow-right-long ml-3"></i>
        </NuxtLink>
      </div>
    </section>

    <section class="pb-32 max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
      <div class="space-y-8">
        <p class="text-2xl md:text-4xl font-light text-stone-800 leading-normal font-serif italic">
          "Hay rincones ocultos en la geografía donde el aire es infinitamente más limpio y los pensamientos se ordenan de manera natural."
        </p>
        <div class="flex flex-col items-center gap-3">
          <div class="w-16 h-[1px] bg-stone-300"></div>
          <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black">Cuaderno de bitácora &bull; El Huerto</span>
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
input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}
</style>