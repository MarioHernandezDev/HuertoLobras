<template>
  <main class="w-full bg-[#f6f3eb] bg-texture min-h-screen antialiased relative">
    
    <MiniHero 
      title="Cultura & Tradición" 
      subtitle="El latido vivo de la Alpujarra Alta"
      :backgroundImage="heroImage" 
      :backgroundVideo="heroVideo"
    />

    <section class="w-full bg-[#f6f3eb] pt-24 px-4 md:px-8 lg:px-12 select-none section-fade-in">
      <div class="max-w-7xl mx-auto border-b border-stone-300/60 pb-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end overflow-hidden">
          <div class="lg:col-span-5 space-y-4 lg:order-1 animate-fade-up">
            <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0 normal-case">
              Lobras y Tímar conservan intacto el encanto de los asentamientos moriscos. Te proponemos sumergirte en el corazón cultural, museístico y festivo de la Alpujarra Alta.
            </p>
          </div>
          <div class="lg:col-span-7 lg:text-right lg:order-2 animate-slide-right">
            <span class="text-xs font-mono font-black uppercase tracking-[0.2em] text-[#3b6e4c] block mb-3">
              Identidad local
            </span>
            <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.9] m-0 font-normal pb-4">
              Lugares & <br />
              <span class="text-[#3b6e4c] font-black block mt-2">tradiciones.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>

    <section class="w-full bg-[#3b6e4c] grid grid-cols-1 md:grid-cols-12 h-auto lg:h-[700px] overflow-hidden relative my-24 md:my-32 shadow-[0_20px_50px_-25px_rgba(59,110,76,0.25)] animate-fade-up">
      <div class="md:col-span-5 bg-[#3b6e4c] text-white p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-8 z-20">
        <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400">Actividad Estacional</span>
        <h3 class="font-manual text-5xl lg:text-7xl text-white m-0 font-normal leading-tight">
          Vendimia en <br /><span class="font-black text-amber-400">Familia.</span>
        </h3>
        <p class="text-stone-100 text-lg lg:text-xl font-medium leading-relaxed m-0 opacity-95">
          En el Huerto de Lobras te ofrecemos la oportunidad de realizar una actividad única: la vendimia tradicional. Conoce todo el proceso desde la recogida hasta la pisada de la uva, transmitiendo a los niños el valor de la naturaleza.
        </p>
        <div class="pt-4">
          <NuxtLink to="/blog/beneficios-vendimia-familia" class="btn-minimal-premium-white">
            <span>Ver beneficios en el blog</span>
          </NuxtLink>
        </div>
      </div>

      <div class="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 h-96 md:h-full gap-0 bg-stone-950">
        <div 
          v-for="n in 2" :key="n"
          @click="openLightbox(n, 'Vendimia en el Huerto', 2)"
          class="relative bg-stone-900 group overflow-hidden h-full cursor-pointer"
        >
          <img :src="defaultImage" alt="Vendimia tradicional" class="w-full h-full object-cover block transition-all duration-500 group-hover:scale-105 group-hover:opacity-80" />
          <div class="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-32">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
        <div class="space-y-8 animate-slide-left">
          <h3 class="font-manual text-6xl text-stone-900 m-0 leading-none">Museo Lombarda</h3>
          <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
            Un espacio reservado a la diversidad musical en el espacio y en el tiempo. Realiza un viaje por los sonidos del mundo a través de sus instrumentos tradicionales en nuestras instalaciones integradas en Lobras.
          </p>
          
          <div class="pt-6 border-t border-stone-300/60 flex flex-wrap gap-4">
            <a href="tel:+34958768107" class="btn-contact-action group">
              <i class="fa-solid fa-phone text-stone-900 group-hover:text-white transition-colors"></i>
              <span>Llamar al museo</span>
            </a>
            <a href="mailto:info@museolombarda.com" class="btn-contact-action group">
              <i class="fa-solid fa-envelope text-stone-900 group-hover:text-white transition-colors"></i>
              <span>Enviar email</span>
            </a>
          </div>
        </div>
        
        <div @click="openLightbox(1, 'Museo Lombarda')" class="-mx-4 sm:mx-0 rounded-none lg:rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-stone-900 relative group cursor-pointer shadow-md animate-fade-up">
          <img :src="defaultImage" alt="Instrumentos Museo" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-102" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
        <div class="lg:order-2 space-y-8 animate-slide-right">
          <h3 class="font-manual text-6xl text-stone-900 m-0 leading-tight">Museo Etnológico <br/>"El Malacate"</h3>
          <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0">
            Ubicado en Tímar, este centro revive la minería tradicional de mercurio, telares artesanales y la cría de gusanos de seda. No pierdas el documento real del reparto de tierras de los Reyes Católicos.
          </p>
          
          <div class="bg-white p-8 rounded-[2rem] border border-stone-200/40 shadow-sm space-y-6">
            <div class="space-y-1">
              <p class="text-emerald-800 font-black font-mono text-xs uppercase tracking-widest m-0">Información de Visita</p>
              <p class="text-stone-500 text-base m-0">Entrada: 2€ (Mayores 65 gratis) | Grupos: 1,50€</p>
            </div>
            
            <div class="pt-2">
              <a href="tel:+34679038079" class="btn-contact-action-accent group">
                <i class="fa-solid fa-calendar-check text-amber-400 group-hover:text-stone-900 transition-colors"></i>
                <span>Reservar Cita: 679 038 079</span>
              </a>
            </div>
          </div>
        </div>
        
        <div @click="openLightbox(2, 'Museo El Malacate')" class="lg:order-1 -mx-4 sm:mx-0 rounded-none lg:rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-stone-900 relative group cursor-pointer shadow-md animate-fade-up">
          <img :src="defaultImage" alt="Etnología Tímar" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-102" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>

    </section>

    <section class="w-full bg-[#f6f3eb] pt-32 select-none">
      
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-20">
        <div class="border-b border-stone-300/60 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 overflow-hidden">
          <div class="max-w-2xl space-y-3 animate-slide-left">
            <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-[#3b6e4c] block">
              Enoturismo de altura
            </span>
            <h3 class="font-manual text-5xl sm:text-7xl text-stone-900 m-0 font-normal leading-none">
              Cultura del Vino
            </h3>
          </div>
          <p class="text-stone-500 text-lg md:text-xl font-medium leading-relaxed m-0 max-w-md md:text-right animate-fade-up">
            La Sierra de la Contraviesa alberga fincas históricas donde el vino es tradición, costumbre e historia viva.
          </p>
        </div>
      </div>

      <div class="w-full flex flex-col gap-16 md:gap-24 mb-40 animate-fade-up">
        
        <div class="w-full grid grid-cols-1 md:grid-cols-2 min-h-[450px] lg:min-h-[550px] border-y border-stone-200/60 bg-[#f6f3eb] group">
          <div @click="openLightbox(3, 'Alpujárride')" class="relative w-full h-80 md:h-full bg-stone-900 overflow-hidden cursor-pointer md:order-1">
            <img :src="defaultImage" alt="Alpujárride" class="w-full h-full object-cover block opacity-90 transition-transform duration-700 group-hover:scale-102" />
            <div class="absolute inset-0 bg-stone-950/10 group-hover:bg-amber-950/10 transition-colors duration-500"></div>
            <div class="absolute bottom-6 left-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
            </div>
          </div>
          
          <div class="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 space-y-6 md:order-2 bg-[#fcfaf7] group-hover:bg-[#f6f3eb]/50 transition-colors duration-500">
            <span class="font-mono text-xs font-bold text-stone-400 tracking-[0.2em] block">BODEGA 01</span>
            <h4 class="font-sans font-black text-3xl sm:text-4xl text-stone-900 m-0 group-hover:text-[#3b6e4c] transition-colors duration-300">
              Alpujárride
            </h4>
            <p class="text-stone-600 text-base lg:text-lg font-medium leading-relaxed m-0 max-w-xl">
              Centro temático en Torvizcón con más de 7 hectáreas de viñedo ecológico. Experiencias excepcionales de degustación, catas guiadas y pisado de uva en un entorno incomparable.
            </p>
            <div class="pt-4">
              <a href="tel:+34622959500" class="btn-contact-action group inline-flex">
                <span>Reservas: 622 959 500</span>
              </a>
            </div>
          </div>
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 min-h-[450px] lg:min-h-[550px] border-y border-stone-200/60 bg-[#f6f3eb] group">
          <div @click="openLightbox(4, 'Cuatro Vientos')" class="relative w-full h-80 md:h-full bg-stone-900 overflow-hidden cursor-pointer md:order-2">
            <img :src="defaultImage" alt="Cuatro Vientos" class="w-full h-full object-cover block opacity-90 transition-transform duration-700 group-hover:scale-102" />
            <div class="absolute inset-0 bg-stone-950/10 group-hover:bg-amber-950/10 transition-colors duration-500"></div>
            <div class="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
            </div>
          </div>
          
          <div class="flex flex-col justify-center p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 space-y-6 md:order-1 md:text-right md:items-end bg-[#fcfaf7] group-hover:bg-[#f6f3eb]/50 transition-colors duration-500">
            <span class="font-mono text-xs font-bold text-stone-400 tracking-[0.2em] block">BODEGA 02</span>
            <h4 class="font-sans font-black text-3xl sm:text-4xl text-stone-900 m-0 group-hover:text-[#3b6e4c] transition-colors duration-300">
              Cuatro Vientos
            </h4>
            <p class="text-stone-600 text-base lg:text-lg font-medium leading-relaxed m-0 max-w-xl">
              Museo etnológico en Murtas situado en la parte más antigua de la bodega original. Conserva herramientas tradicionales y ofrece el espectáculo audiovisual galardonado "El alma de la bodega".
            </p>
            <div class="pt-4">
              <a href="tel:+34958956958" class="btn-contact-action group inline-flex">
                <span>Reservas: 958 956 958</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <div class="w-full bg-stone-900 pt-32 pb-0 mt-0">
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center space-y-6 pb-24 overflow-hidden">
        <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400 block animate-fade-up">Identidad Popular</span>
        <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-white tracking-wide leading-[0.9] m-0 font-normal pb-4 animate-fade-up">
          Fiestas en <span class="font-black text-amber-400">Lobras.</span>
        </h2>
        <p class="text-stone-300 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto m-0 animate-fade-up">
          En Lobras las fiestas son sagradas. Una mezcla de cultura, repostería artesanal y diversión compartida entre vecinos de todas las edades. ¡Te sugerimos venir a vivirlas!
        </p>
      </div>

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0 bg-stone-950 border-t border-stone-800 animate-fade-up">
        <div 
          v-for="index in 9" 
          :key="index"
          @click="openLightbox(index, 'Fiestas de Lobras', 9)"
          class="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden bg-stone-900 cursor-pointer group"
        >
          <img :src="defaultImage" class="w-full h-full object-cover block transition-all duration-700 group-hover:scale-105 group-hover:opacity-75" />
          <div class="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="fixed inset-0 z-[9999] bg-stone-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          @click="closeLightbox"
        >
          <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer border-none bg-transparent" @click="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div class="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center" @click.stop>
            <img :src="defaultImage" alt="Vista ampliada" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl block" />
            <p class="text-stone-400 font-mono text-sm uppercase tracking-widest text-center mt-6 font-bold">
              {{ galleryTitle }} <span v-if="totalCount > 1">{{ activeIndex }} de {{ totalCount }}</span>
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import defaultImage from '~/assets/img/default.jpg'
import heroImage from '~/assets/img/default.jpg' 
import heroVideo from '~/assets/video/lobras.mp4' // Importación de tu recurso de video local

const isOpen = ref(false)
const activeIndex = ref(null)
const galleryTitle = ref('')
const totalCount = ref(1)

const openLightbox = (index, title, total = 1) => {
  activeIndex.value = index
  galleryTitle.value = title
  totalCount.value = total
  isOpen.value = true
  if (typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeLightbox = () => {
  isOpen.value = false
  if (typeof window !== 'undefined') {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
/* 1. TEXTURA DE RUIDO ORGÁNICO SEAMLESS */
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
  opacity: 0.023;
  pointer-events: none;
  z-index: 99;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3e%3cfilter id='noiseFilter'%3e%3cfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3e%3c/filter%3e%3crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3e%3c/svg%3e");
}

/* 2. COREOGRAFÍA DE ANIMACIONES */
.animate-slide-right {
  animation: slideFromRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-left {
  animation: slideFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

@keyframes slideFromRight {
  0% { opacity: 0; transform: translateX(60px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes slideFromLeft {
  0% { opacity: 0; transform: translateX(-60px); }
  100% { opacity: 1; transform: translateX(0); }
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-slide-right, .animate-slide-left, .animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* 3. COMPONENTES DE BOTONES PREMIUM */
.btn-minimal-premium-white {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 36px;
  background: white;
  color: #1c1917;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 13px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;
}

.btn-minimal-premium-white:hover {
  background: #f4f4f5;
  transform: translateY(-2px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.btn-contact-action {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background: transparent;
  color: #1c1917;
  border: 1.5px solid #1c1917;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.btn-contact-action:hover {
  background: #1c1917;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px -10px rgba(28, 25, 23, 0.3);
}

.btn-contact-action-accent {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: #1c1917;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 8px 25px -8px rgba(28, 25, 23, 0.25);
}

.btn-contact-action-accent:hover {
  background: #3b6e4c;
  transform: translateY(-2px);
  box-shadow: 0 12px 30px -8px rgba(59, 110, 76, 0.35);
}
</style>