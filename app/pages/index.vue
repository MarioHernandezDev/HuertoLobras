<template>
  <div class="w-full min-h-screen bg-[#fcfaf7] bg-texture overflow-x-hidden relative antialiased">
    
    <IndexTheHero @navigate="scrollToSection" />

    <div class="relative z-10 space-y-0 animate-fade-in">
      <IndexFeaturesExperience id="experiencias" />
      <IndexHousesGrid id="alojamientos" />
      <IndexCtaFinal id="contacto" />
    </div>

  </div>
</template>

<script setup>
// El comportamiento de scroll suave nativo se mantiene perfecto para la navegación interna
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
/* 1. TEXTURA DE RUIDO ORGÁNICO GLOBAL DE BIENVENIDA */
.bg-texture {
  position: relative;
}
.bg-texture::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.025; /* Un toque sutilmente más definido para la Home */
  pointer-events: none;
  z-index: 99;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
}

/* 2. ANIMACIÓN DE ENTRADA SUAVE DE LA HOME */
.animate-fade-in {
  animation: fadeInHome 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInHome {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>