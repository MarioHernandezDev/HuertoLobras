<template>
  <main class="w-full bg-[#fcfaf7] min-h-screen antialiased">
    
    <MiniHero 
      title="Planes & Experiencias" 
      subtitle="Siente la Alpujarra Alta"
      :backgroundImage="heroImage" 
    />

    <ActivityRoutes />

    <CultureTraditions />

    <section class="py-24 px-4 md:px-6 max-w-4xl mx-auto text-center select-none space-y-6">
      <h3 class="font-manual text-4xl sm:text-5xl text-stone-900 font-normal m-0">¿Quieres un plan a medida?</h3>
      <p class="text-stone-600 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed m-0">
        Si buscas guías oficiales de montaña, alquiler de e-bikes o actividades infantiles, dínoslo antes de llegar y lo gestionamos por ti.
      </p>
      <div class="pt-2">
        <a href="tel:+34600000000" class="inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-transform hover:-translate-y-0.5 no-underline shadow-md">
          <i class="fa-solid fa-phone text-amber-400"></i>
          <span>Llamar y Consultar</span>
        </a>
      </div>
    </section>

  </main>
</template>

<script setup>
import heroImage from '~/assets/img/default.jpg'
</script>