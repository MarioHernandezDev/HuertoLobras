<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheMiniHero 
      title="El Entorno" 
      subtitle="Un viaje desde el secreto mejor guardado de Lobras hasta la magia de Granada" 
    />

    <section class="py-24 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-6 space-y-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-[1px] bg-[#53433c]"></div>
            <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black block">
              Kilómetro Cero
            </span>
          </div>
          <h2 class="font-manual text-5xl md:text-6xl text-[#53433c] leading-[1.2] m-0 font-normal">
            Lobras, refugio de piedra y agua
          </h2>
          <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed pt-2">
            Lobras no se encuentra de paso; a Lobras se decide venir. Es uno de los municipios más auténticos y protegidos de la comarca, donde el tiempo parece haberse detenido entre <strong>fachadas encaladas y tinaos tradicionales</strong>. El murmullo constante de sus acequias de origen árabe y la hospitalidad de su gente convierten a este pequeño rincón en el epicentro perfecto para **recuperar el silencio**.
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <span class="tag-servicio">Arquitectura Vernácula</span>
            <span class="tag-servicio">Acequias Árabes</span>
            <span class="tag-servicio">Tímar Tradicional</span>
          </div>
        </div>

        <div class="lg:col-span-6 relative">
          <div class="img-zoom-container aspect-[4/3] shadow-2xl z-10 relative">
             <img src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=1200&auto=format&fit=crop" alt="Pueblo de Lobras Alpujarra" />
          </div>
          <div class="hidden sm:block absolute -bottom-6 -left-6 w-1/2 aspect-video bg-[#53433c] p-4 text-white z-20 shadow-xl">
            <p class="text-[9px] uppercase tracking-[0.3em] font-black text-stone-300 mb-1">&bull; Altura e Historia</p>
            <p class="font-serif italic text-sm m-0 text-stone-100">Preservado de la masificación turística bajo leyes de protección de patrimonio.</p>
          </div>
        </div>

      </div>
    </section>

    <section class="py-24 bg-stone-100 border-t border-b border-stone-200/80">
      <div class="max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div class="lg:col-span-6 lg:order-2 space-y-6">
            <div class="flex items-center gap-3">
              <div class="w-8 h-[1px] bg-[#53433c]"></div>
              <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black block">
                La Comarca Legendaria
              </span>
            </div>
            <h2 class="font-manual text-5xl md:text-6xl text-stone-900 leading-[1.2] m-0 font-normal">
              La Alpujarra indómita
            </h2>
            <p class="text-stone-600 text-sm md:text-base font-medium leading-relaxed pt-2">
              Flanqueada por las cumbres indomables de Sierra Nevada, La Alpujarra es una sinfonía de barrancos profundos, <strong>densos castañares protegidos</strong> y pueblos escalonados que miran hacia el Mediterráneo. Desde El Huerto de Lobras podrás trazar rutas circulares hacia los cercanos pueblos del Poqueira (Pampaneira, Bubión y Capileira) o sumergirte en el misticismo del <strong>Barranco de Trevélez</strong> y sus reconocidos secaderos artesanales.
            </p>
            <div class="pt-2">
              <NuxtLink to="/actividades" class="btn-editorial">
                Ver Rutas de Senderismo <i class="fa-solid fa-arrow-right ml-2 text-[9px]"></i>
              </NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-6 lg:order-1">
            <div class="img-zoom-container aspect-[4/3] shadow-2xl">
               <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop" alt="Paisaje de la Alpujarra Granadina" />
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-28 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="max-w-3xl mx-auto text-center space-y-6">
        <span class="text-[10px] uppercase tracking-[0.5em] font-black text-stone-400 block">Escapada de Contraste</span>
        <h2 class="font-manual text-5xl md:text-7xl text-[#53433c] leading-tight m-0 font-normal">
          Granada a un suspiro
        </h2>
        <div class="w-16 h-[1px] bg-[#53433c] mx-auto"></div>
        <p class="text-stone-600 font-medium text-sm md:text-base leading-relaxed max-w-2xl mx-auto pt-2">
          La ventaja diferencial de El Huerto es su equilibrio geográfico. A poco más de una hora de trayecto, puedes pasar de la quietud absoluta de la montaña al latido cultural de **Granada capital**. Un recorrido obligatorio para maravillarse con el complejo palaciego de **La Alhambra**, perderse por las callejuelas empedradas del Albaicín o rendirse al placer del tapeo histórico granadino antes de regresar al calor de tu chimenea en Lobras.
        </p>
        <div class="pt-4">
          <a href="https://www.alhambradegranada.org" target="_blank" rel="noopener noreferrer" class="btn-editorial-outline px-8">
            Información de la Alhambra <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-[9px]"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0 opacity-10">
        <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover" />
      </div>
      
      <div class="relative z-10 max-w-[85rem] mx-auto px-6 lg:px-16 space-y-16">
        
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/10 pb-6 gap-4">
          <div class="space-y-1">
            <span class="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-black block">Cuaderno de Ruta</span>
            <h3 class="font-manual text-4xl text-stone-100 font-normal m-0">Logística & Accesos</h3>
          </div>
          <p class="text-stone-400 text-xs font-medium max-w-xs m-0">
            Indicaciones útiles para planificar tu viaje por carretera hacia las entrañas de la Alpujarra Alta.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div class="space-y-4">
            <div class="text-[11px] font-black uppercase tracking-[0.25em] text-stone-300 flex items-center gap-3">
              <i class="fa-solid fa-car text-base text-[#53433c]"></i>
              <span>Cómo llegar</span>
            </div>
            <h4 class="font-serif italic text-lg text-white m-0">Acceso Principal</h4>
            <p class="text-xs text-stone-400 leading-relaxed font-medium m-0">
              Desde Granada, toma la autovía **A-44 dirección Motril**, desviándote en la salida de Lanjarón (**A-348**). Sigue la carretera cruzando Órgiva y Cádiar hasta tomar el desvío directo a Lobras. Una ruta panorámica bellísima entre valles.
            </p>
          </div>

          <div class="space-y-4">
            <div class="text-[11px] font-black uppercase tracking-[0.25em] text-stone-300 flex items-center gap-3">
              <i class="fa-solid fa-map-location-dot text-base text-[#53433c]"></i>
              <span>Distancias Clave</span>
            </div>
            <h4 class="font-serif italic text-lg text-white m-0">Tiempos Estimados</h4>
            <ul class="text-xs text-stone-400 space-y-2 font-medium list-none p-0 m-0">
              <li class="flex justify-between border-b border-white/5 pb-1"><span>Granada Capital:</span> <span class="text-white">1h 15min</span></li>
              <li class="flex justify-between border-b border-white/5 pb-1"><span>Cádiar (Servicios):</span> <span class="text-white">10 min</span></li>
              <li class="flex justify-between border-b border-white/5 pb-1"><span>Costa Tropical (Playa):</span> <span class="text-white">1h</span></li>
              <li class="flex justify-between"><span>Estación de Esquí:</span> <span class="text-white">1h 45min</span></li>
            </ul>
          </div>

          <div class="space-y-4">
            <div class="text-[11px] font-black uppercase tracking-[0.25em] text-stone-300 flex items-center gap-3">
              <i class="fa-solid fa-circle-exclamation text-base text-[#53433c]"></i>
              <span>Consejo Local</span>
            </div>
            <h4 class="font-serif italic text-lg text-white m-0">Nota de Conducción</h4>
            <p class="text-xs text-stone-400 leading-relaxed font-medium m-0">
              Las carreteras de la Alpujarra son de montaña: seguras y bien asfaltadas, pero reviradas. Te aconsejamos **viajar de día** para disfrutar sin prisas de las imponentes vistas del Barranco del Guadalfeo y el Valle del Guadalfeo.
            </p>
          </div>

        </div>

        <div class="flex justify-center pt-4">
          <NuxtLink to="/contacto" class="btn-editorial-accent px-12">
            ¿Necesitas indicaciones personalizadas? Consúltanos <i class="fa-solid fa-envelope ml-3 text-[10px]"></i>
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