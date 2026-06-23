<template>
  <div class="overflow-x-hidden bg-[var(--color-fondo)]">
    
    <section class="relative h-screen w-full flex items-center justify-center bg-stone-900">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Paisaje de la Alpujarra" 
          class="w-full h-full object-cover opacity-60 grayscale-[10%]"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-stone-950/40 via-transparent to-stone-950/20"></div>
      </div>

      <div class="relative z-10 text-center space-y-4 px-6 md:pl-72">
        <span class="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-200 font-bold block animate-fade-in">
          Alojamiento Boutique Rural
        </span>
        <h1 class="text-5xl md:text-8xl font-serif italic text-white leading-none drop-shadow-sm">
          El Huerto de Lobras
        </h1>
        <p class="text-sm md:text-base text-stone-200 font-sans font-light tracking-widest uppercase">
          La calma tiene un nuevo refugio.
        </p>
        <div class="pt-8">
          <div class="w-[1px] h-16 bg-white/40 mx-auto animate-bounce"></div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 max-w-7xl mx-auto px-6 md:pl-72 md:pr-12 lg:pr-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-8">
          <span class="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold block">
            Nuestra Esencia
          </span>
          <h2 class="text-4xl md:text-5xl font-serif italic text-stone-900 leading-tight">
            Un proyecto nacido del respeto a la tierra y al silencio.
          </h2>
          <p class="text-lg text-stone-600 font-light leading-relaxed">
            Situado en el corazón de la Alpujarra, El Huerto de Lobras no es solo un lugar donde dormir. Es una invitación a recuperar el ritmo natural de las cosas, rodeado de muros de piedra centenarios y el susurro de las acequias.
          </p>
        </div>
        <div class="lg:col-span-5">
          <div class="aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
             <img src="https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-stone-100/50">
      <div class="max-w-7xl mx-auto px-6 md:pl-72 md:pr-12 lg:pr-16 space-y-16">
        <div class="flex justify-between items-end border-b border-stone-200 pb-8">
          <h2 class="text-3xl font-serif italic text-stone-900">Casas con Historia</h2>
          <NuxtLink to="/apartamentos" class="text-[10px] uppercase font-bold tracking-widest text-stone-500 border-b border-stone-400 pb-1">Ver todos</NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="group cursor-pointer">
            <div class="aspect-[16/10] overflow-hidden rounded-lg bg-stone-200 mb-6">
              <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 class="font-serif text-2xl text-stone-900 mb-2 italic">Las Golondrinas</h3>
            <p class="text-sm text-stone-500 font-light leading-relaxed">Vistas panorámicas al valle y techos de castaño original. El refugio perfecto para familias.</p>
          </div>
          <div class="group cursor-pointer md:mt-24">
            <div class="aspect-[16/10] overflow-hidden rounded-lg bg-stone-200 mb-6">
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <h3 class="font-serif text-2xl text-stone-900 mb-2 italic">La Seda</h3>
            <p class="text-sm text-stone-500 font-light leading-relaxed">Un rincón íntimo para dos, donde la luz de la tarde lo inunda todo.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative w-full h-[70vh] flex items-center bg-stone-900">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1800&auto=format&fit=crop" 
          alt="Textura de piedra" 
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 md:pl-72 md:pr-12 lg:pr-16 text-center lg:text-left">
        <div class="max-w-2xl space-y-6">
          <h2 class="text-4xl md:text-6xl font-serif italic text-stone-100 leading-tight">
            Descubre el lujo de la sencillez.
          </h2>
          <p class="text-stone-400 font-light text-sm md:text-base">
            Nuestras estancias están equipadas con todo lo necesario para una desconexión total. Wi-Fi de alta velocidad (solo si lo necesitas), chimeneas de leña y bibliotecas curadas.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 max-w-7xl mx-auto px-6 md:pl-72 md:pr-12 lg:pr-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div class="space-y-4">
          <div class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-serif italic">1</div>
          <h4 class="font-bold uppercase tracking-widest text-xs text-stone-900">Slow Food</h4>
          <p class="text-xs text-stone-500 leading-relaxed font-light">Acceso a nuestro huerto ecológico y recomendaciones de la mejor gastronomía local de Lobras y Tímar.</p>
        </div>
        <div class="space-y-4">
          <div class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-serif italic">2</div>
          <h4 class="font-bold uppercase tracking-widest text-xs text-stone-900">Senderismo</h4>
          <p class="text-xs text-stone-500 leading-relaxed font-light">Rutas circulares que nacen en la misma puerta, cruzando acequias árabes y castañares centenarios.</p>
        </div>
        <div class="space-y-4">
          <div class="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 font-serif italic">3</div>
          <h4 class="font-bold uppercase tracking-widest text-xs text-stone-900">Astroturismo</h4>
          <p class="text-xs text-stone-500 leading-relaxed font-light">Uno de los cielos más limpios de Europa. Disponemos de equipo básico para observación de estrellas.</p>
        </div>
      </div>
    </section>

    <section class="pb-32 max-w-4xl mx-auto px-6 md:pl-72 text-center">
      <div class="space-y-8">
        <p class="text-3xl md:text-5xl font-serif italic text-stone-800 leading-snug">
          "Hay lugares donde el aire es más limpio y los pensamientos se ordenan solos."
        </p>
        <div class="flex flex-col items-center gap-2">
          <div class="w-12 h-[1px] bg-stone-300"></div>
          <span class="text-[10px] uppercase tracking-[0.3em] text-stone-400 font-bold">Cuaderno de bitácora</span>
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
.animate-fade-in {
  animation: fadeIn 1.5s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>