<template>
  <section class="py-32 px-4 md:px-6 max-w-4xl mx-auto text-center select-none space-y-6 overflow-hidden">
    <h3 v-scroll class="font-manual text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal m-0 pb-2">
      ¿Quieres un plan a medida?
    </h3>
    <p v-scroll class="text-stone-600 text-base sm:text-lg lg:text-xl max-w-xl mx-auto font-medium leading-relaxed m-0">
      Si buscas guías oficiales de montaña para la Alpujarra o rutas familiares adaptadas, dinos antes de llegar y lo organizamos.
    </p>
    <div v-scroll class="pt-4">
      <a href="tel:+34679038079" class="btn-premium-dark group">
        <i class="fa-solid fa-phone text-amber-400"></i>
        <span>Llamar y Consultar</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.btn-premium-dark {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: #1c1917;
  color: #ffffff;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 10px 25px -10px rgba(28, 25, 23, 0.3);
}

.btn-premium-dark:hover {
  background: #292524;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px -10px rgba(28, 25, 23, 0.4);
}
</style>