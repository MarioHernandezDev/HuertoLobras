<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheMiniHero 
      title="Ofertas & Escapadas" 
      subtitle="Momentos señalados y tarifas especiales para vivir El Huerto" 
    />

    <section class="py-24 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-stone-200 pb-6 mb-16 gap-4">
        <div class="space-y-1">
          <span class="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-black block">Calendario de Autor</span>
          <h2 class="font-manual text-4xl md:text-5xl text-stone-900 m-0 font-normal">Tarifas Especiales</h2>
        </div>
        <p class="text-stone-500 text-xs md:text-sm font-medium max-w-md m-0 leading-relaxed">
          Diseñamos ventajas exclusivas alineadas con los <strong>ciclos de la naturaleza</strong> y las festividades más arraigadas de Granada.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-16">
        
        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop" alt="Corpus Christi en Granada" />
              <div class="absolute top-4 left-4 bg-[#53433c] text-white text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Festividad Local
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Escapada Corpus Christi</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Disfruta de la semana grande de Granada desde el refugio y el silencio de La Alpujarra. Una combinación perfecta entre <strong>tradición cultural</strong> y desconexión absoluta en la montaña.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Escapada <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-8">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" alt="Solsticio de verano" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Noche de San Juan
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Solsticio de Verano</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Celebra la entrada del verano bajo uno de los <strong>cielos nocturnos más limpios</strong> de Europa. Incluye un pequeño set de bienvenida con productos de nuestro huerto y vino local.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar Solsticio <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop" alt="Escapada Romántica San Valentin" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Especial Parejas
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">San Valentín Intimo</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Muros de piedra, el calor de una <strong>chimenea de leña privada</strong> y la tranquilidad del valle. Un fin de semana diseñado para reconectar y disfrutar del placer de la lentitud en pareja.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Reservar San Valentín <i class="fa-solid fa-bolt ml-2 text-[9px] text-amber-400"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1547989453-11e67ffb3885?q=80&w=1200&auto=format&fit=crop" alt="Invierno rural" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Diciembre - Febrero
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Calor de Invierno</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Refúgiate del frío de las cumbres con nuestro sistema integrado de <strong>calefacción central</strong> y abundantes cargas de leña para tu chimenea. Precios especiales para estancias de mitad de semana.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Ver Tarifas Invierno <i class="fa-solid fa-snowflake ml-2 text-[9px]"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-8">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="Otoño castañares" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Septiembre - Noviembre
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Paisajes de Otoño</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                La época en la que los <strong>castañares protegidos</strong> se tiñen de dorado y ocre. Perfecta para amantes del senderismo fotográfico y la recolección tradicional de la comarca.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Ver Tarifas Otoño <i class="fa-solid fa-leaf ml-2 text-[9px]"></i>
            </a>
          </div>
        </div>

        <div class="card-boutique group flex flex-col justify-between lg:mt-16">
          <div>
            <div class="img-zoom-container aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1200&auto=format&fit=crop" alt="Primavera en el huerto" />
              <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-stone-900 text-[9px] font-black uppercase tracking-[0.3em] px-4 py-2">
                Marzo - Mayo
              </div>
            </div>
            <div class="p-8 space-y-3">
              <h3 class="font-serif italic text-xl text-stone-900 m-0">Despertar de Primavera</h3>
              <p class="text-stone-500 text-xs md:text-sm leading-relaxed m-0 font-medium">
                Contempla el fluir del agua de las <strong>acequias árabes</strong> tras el deshielo de Sierra Nevada y el florecer de nuestros frutales ecológicos. Descuentos especiales por venta anticipada.
              </p>
            </div>
          </div>
          <div class="px-8 pb-8">
            <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial w-full text-center">
              Ver Tarifas Primavera <i class="fa-solid fa-seedling ml-2 text-[9px]"></i>
            </a>
          </div>
        </div>

      </div>

      <div class="mt-20 bg-[#53433c] text-white grid grid-cols-1 lg:grid-cols-12 border border-white/10 shadow-2xl items-center">
        <div class="lg:col-span-7 p-8 md:p-14 space-y-4">
          <span class="text-[9px] uppercase tracking-[0.4em] text-stone-300 font-black block">&bull; Estancia Prolongada</span>
          <h3 class="font-manual text-5xl text-stone-100 font-normal m-0 leading-none">
            Promoción Especial 4x3
          </h3>
          <p class="text-stone-200 text-xs md:text-sm leading-relaxed font-medium pt-2 max-w-xl">
            La calma requiere tiempo. Disfruta de <strong>cuatro noches memorables abonando únicamente tres</strong>. Válido para estancias seleccionadas de domingo a jueves en cualquiera de nuestros apartamentos boutique.
          </p>
        </div>
        <div class="lg:col-span-5 p-8 lg:p-14 lg:text-right flex items-center justify-center lg:justify-end">
          <a href="https://www.booking.com" target="_blank" rel="noopener noreferrer" class="btn-editorial-accent px-10 py-5 w-full sm:w-auto text-center">
            Aplicar Promoción 4x3 <i class="fa-solid fa-arrow-right ml-2 text-[9px]"></i>
          </a>
        </div>
      </div>
    </section>

    <section class="py-24 bg-stone-100 border-t border-stone-200/60">
      <div class="max-w-[85rem] mx-auto px-6 lg:px-16 space-y-16">
        
        <div class="text-center max-w-2xl mx-auto space-y-2">
          <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black block">Experiencias Cerradas</span>
          <h2 class="font-manual text-4xl md:text-6xl text-stone-900 m-0 font-normal leading-tight">Packs Turísticos</h2>
          <div class="w-12 h-[1px] bg-[#53433c] mx-auto my-3"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          
          <div class="bg-white border border-stone-200/80 p-8 md:p-10 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
            <div class="space-y-4">
              <div class="w-10 h-10 bg-[#fcfbf9] border border-stone-200 rounded-none flex items-center justify-center text-[#53433c]">
                <i class="fa-solid fa-heart text-sm"></i>
              </div>
              <h4 class="font-serif italic text-xl text-stone-900 m-0">Fin de Semana Romántico</h4>
              <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
                Diseñado exclusivamente para parejas en busca de intimidad. Incluye botella de cava de bienvenida, lencería de cama premium de <strong>algodón orgánico</strong>, cesta de leña de cortesía y salida tardía (*late checkout*).
              </p>
            </div>
            <div class="pt-4 border-t border-stone-100">
              <NuxtLink to="/contacto" class="btn-editorial-outline w-full text-center py-3 text-[9px]">
                Solicitar Pack Romántico
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white border border-stone-200/80 p-8 md:p-10 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
            <div class="space-y-4">
              <div class="w-10 h-10 bg-[#fcfbf9] border border-stone-200 rounded-none flex items-center justify-center text-[#53433c]">
                <i class="fa-solid fa-people-roof text-sm"></i>
              </div>
              <h4 class="font-serif italic text-xl text-stone-900 m-0">Escapada en Familia</h4>
              <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
                Pensado para disfrutar con los tuyos en apartamentos de gran capacidad como Las Golondrinas. Incluye una <strong>visita didáctica guiada al huerto ecológico</strong> para los niños y mapas de rutas familiares sencillas.
              </p>
            </div>
            <div class="pt-4 border-t border-stone-100">
              <NuxtLink to="/contacto" class="btn-editorial-outline w-full text-center py-3 text-[9px]">
                Solicitar Pack Familiar
              </NuxtLink>
            </div>
          </div>

          <div class="bg-white border border-stone-200/80 p-8 md:p-10 space-y-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
            <div class="space-y-4">
              <div class="w-10 h-10 bg-[#fcfbf9] border border-stone-200 rounded-none flex items-center justify-center text-[#53433c]">
                <i class="fa-solid fa-users text-sm"></i>
              </div>
              <h4 class="font-serif italic text-xl text-stone-900 m-0">Retiros en Grupo</h4>
              <p class="text-xs md:text-sm text-stone-500 leading-relaxed font-medium m-0">
                Ideal para reuniones familiares, colectivos de yoga o amigos. Ofrecemos la **reserva conjunta de varias casas históricas** combinada con asesoramiento para comidas en los pueblos tradicionales de Lobras y Tímar.
              </p>
            </div>
            <div class="pt-4 border-t border-stone-100">
              <NuxtLink to="/contacto" class="btn-editorial-outline w-full text-center py-3 text-[9px]">
                Solicitar Info Grupos
              </NuxtLink>
            </div>
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

<script>
// El script de soporte para optimización SEO y renderizado
export default {
  name: 'OfertasIndex'
}
</script>

<style scoped>
section {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>