<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheMiniHero 
      title="Actividades" 
      subtitle="Talleres de autor, tradiciones vivas y reconexión con el territorio" 
    />

    <section class="py-20 md:py-28 max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
      <div class="space-y-6">
        <div class="flex justify-center items-center gap-3">
          <div class="w-8 h-[1px] bg-[#53433c]"></div>
          <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black">Experiencias de Inmersión</span>
          <div class="w-8 h-[1px] bg-[#53433c]"></div>
        </div>
        <p class="text-stone-600 text-base md:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
          Organizamos actividades, cursos y talleres minuciosamente curados para aprovechar el <strong>entorno tan especial como es Lobras</strong> y toda la legendaria comarca de La Alpujarra. Propuestas de relajación, meditación y aprendizaje para conectar con <strong>nuestras costumbres, la gastronomía ancestral y nuestra gente</strong>. En definitiva, vivencias para exprimir el paso del tiempo en El Huerto.
        </p>
      </div>
    </section>

    <section class="pb-32 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
        
        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop" alt="Cursos y talleres" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Conocimiento
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-2 text-[#53433c]">
                <i class="fa-solid fa-mortar-pestle text-sm"></i>
                <span class="text-[9px] uppercase tracking-widest font-black">Artesanía y Sabiduría</span>
              </div>
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Cursos y Talleres</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Monográficos estacionales dedicados a la <strong>etnobotánica de Sierra Nevada</strong>, talleres de cocina morisca y sesiones guiadas de <strong>meditación y yoga al aire libre</strong> rodeados del murmullo del agua.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Solicitar Plaza <i class="fa-solid fa-calendar-plus ml-2 text-[9px]"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-8">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop" alt="Senderismo por la Alpujarra" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Naturaleza
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-2 text-[#53433c]">
                <i class="fa-solid fa-route text-sm"></i>
                <span class="text-[9px] uppercase tracking-widest font-black">Rutas de Autor</span>
              </div>
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Senderismo Guiado</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Excursiones y paseos interpretativos diseñados para descubrir los secretos de la comarca. Caminamos entre <strong>acequias medievales</strong>, barrancos sobrecogedores y senderos que conectan con la <strong>esencia de Granada</strong>.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <NuxtLink to="/contacto" class="btn-editorial w-full text-center">
              Ver Itinerarios <i class="fa-solid fa-compass ml-2 text-[9px]"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1566121318599-281df6f15714?q=80&w=1200&auto=format&fit=crop" alt="Museos tradicionales" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Patrimonio
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-2 text-[#53433c]">
                <i class="fa-solid fa-landmark text-sm"></i>
                <span class="text-[9px] uppercase tracking-widest font-black">Cultura Local</span>
              </div>
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Los Museos</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Visitas guiadas exclusivas a los pequeños y fascinantes centros de interpretación de la zona. Un viaje en el tiempo para entender la <strong>arquitectura vernácula</strong>, los antiguos telares y la <strong>vida histórica alpujarreña</strong>.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <NuxtLink to="/contacto" class="btn-editorial w-full text-center">
              Consultar Agenda <i class="fa-solid fa-arrow-right ml-2 text-[9px]"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1572655939117-49c9f40de8fa?q=80&w=1200&auto=format&fit=crop" alt="Experiencia de vendimia" />
              <div class="absolute top-4 left-4 bg-[#53433c] text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Experiencia Viva
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-2 text-[#53433c]">
                <i class="fa-solid fa-wine-glass text-sm"></i>
                <span class="text-[9px] uppercase tracking-widest font-black">Rituales de la Tierra</span>
              </div>
              <h3 class="font-serif italic text-xl text-stone-900 m-0">La Vendimia Tradicional</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Durante los meses de otoño, abrimos las puertas a la recolección del vino en los viñedos más altos de Europa. Participa activamente en la <strong>pisa de uva tradicional</strong> y disfruta de una <strong>cata de caldos locales</strong>.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Experiencia <i class="fa-solid fa-wine-bottle ml-2 text-[9px]"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-8">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop" alt="Fiestas de Lobras" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Comunidad
              </div>
            </div>
            <div class="p-8 space-y-4">
              <div class="flex items-center gap-2 text-[#53433c]">
                <i class="fa-solid fa-masks-theater text-sm"></i>
                <span class="text-[9px] uppercase tracking-widest font-black">Raíces Singulares</span>
              </div>
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Fiestas de Lobras</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Forma parte activa de nuestras celebraciones populares. Música en plazas encaladas, gastronomía compartida y el calor de un pueblo que recibe al visitante con los <strong>brazos abiertos y orgullo por su legado</strong>.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <NuxtLink to="/contacto" class="btn-editorial w-full text-center">
              Saber Más <i class="fa-solid fa-circle-info ml-2 text-[9px]"></i>
            </NuxtLink>
          </div>
        </div>

        <div class="bg-[#53433c] text-white p-8 md:p-12 flex flex-col justify-between lg:mt-16 border border-white/10 shadow-xl">
          <div class="space-y-4">
            <span class="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-black block">&bull; A Medida</span>
            <h3 class="font-manual text-4xl text-stone-100 font-normal m-0 leading-tight">
              ¿Buscas un retiro privado?
            </h3>
            <p class="text-stone-200 text-xs md:text-sm leading-relaxed font-medium pt-2">
              Si vienes en grupo, organizamos **itinerarios, talleres gastronómicos o jornadas de meditación en exclusiva** adaptadas a las necesidades e intereses de tus acompañantes.
            </p>
          </div>
          <div class="pt-8">
            <NuxtLink to="/contacto" class="btn-editorial-accent w-full text-center">
              Diseñar mi Experiencia
            </NuxtLink>
          </div>
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