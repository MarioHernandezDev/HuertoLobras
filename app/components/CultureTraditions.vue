<template>
  <section class="w-full bg-[#f6f3eb] pt-28 pb-0 select-none overflow-hidden antialiased">
    
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-300/60 pb-16">
        <div class="lg:col-span-5 space-y-4 lg:order-1">
          <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0 normal-case">
            Lobras y Tímar conservan intacto el encanto de los asentamientos moriscos. Te proponemos sumergirte en el corazón cultural, museístico y festivo de la Alpujarra Alta.
          </p>
        </div>
        <div class="lg:col-span-7 lg:text-right lg:order-2">
          <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] m-0 font-normal">
            Lugares & <br />
            <span class="text-emerald-800 font-black block mt-2">tradiciones.</span>
          </h2>
        </div>
      </div>
    </div>

    <div class="w-full bg-[#3b6e4c] grid grid-cols-1 md:grid-cols-12 h-auto lg:h-[700px] overflow-hidden relative mb-32">
      <div class="md:col-span-5 bg-[#3b6e4c] text-white p-8 md:p-12 lg:p-20 flex flex-col justify-center space-y-8 z-20">
        <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400">Actividad Estacional</span>
        <h3 class="font-manual text-5xl lg:text-7xl text-white m-0 font-normal leading-tight">Vendimia en <br /><span class="font-black text-amber-400">Familia.</span></h3>
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
          <img :src="defaultImage" alt="Vendimia tradicional en Lobras, actividad familiar de cosecha del viñedo en la Alpujarra" class="w-full h-full object-cover block transition-all duration-500 group-hover:scale-105 group-hover:opacity-80" loading="lazy" decoding="async" />
          <div class="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-32 mb-40">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-8">
          <h3 class="font-manual text-5xl text-stone-900 m-0">Museo Lombarda</h3>
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
        
        <div @click="openLightbox(1, 'Museo Lombarda')" class="rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-stone-900 relative group cursor-pointer shadow-md">
          <img :src="defaultImage" alt="Instrumentos del Museo Lombarda en la Alpujarra, patrimonio musical de la zona" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-102" loading="lazy" decoding="async" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="lg:order-2 space-y-8">
          <h3 class="font-manual text-5xl text-stone-900 m-0 leading-tight">Museo Etnológico <br/>"El Malacate"</h3>
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
        
        <div @click="openLightbox(2, 'Museo El Malacate')" class="lg:order-1 rounded-[3rem] overflow-hidden aspect-video lg:aspect-square bg-stone-900 relative group cursor-pointer shadow-md">
          <img :src="defaultImage" alt="Museo etnológico del Malacate en Tímar, historia y tradición de la Alpujarra" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-102" loading="lazy" decoding="async" />
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
          </div>
        </div>
      </div>

      <div class="space-y-16 pt-8">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-emerald-800">Enoturismo</span>
          <h3 class="font-manual text-5xl text-stone-900 m-0">Cultura del Vino</h3>
          <p class="text-stone-500 text-xl md:text-2xl font-medium leading-relaxed">La Sierra de la Contraviesa alberga fincas históricas donde el vino es tradición, costumbre e historia viva.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white rounded-[2.5rem] overflow-hidden border border-stone-200/30 p-4 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(59,110,76,0.08)] transition-all duration-500 flex flex-col justify-between">
            <div class="space-y-6">
              <div @click="openLightbox(3, 'Alpujárride')" class="rounded-[1.8rem] overflow-hidden aspect-video bg-stone-900 cursor-pointer group relative shadow-inner">
                <img :src="defaultImage" alt="Bodega y enoturismo en Alpujárride, paisaje vinícola de la Alpujarra" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-103" loading="lazy" decoding="async" />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
                </div>
              </div>
              <div class="px-4 space-y-3">
                <h4 class="font-sans font-black text-2xl text-stone-900 m-0">Alpujárride</h4>
                <p class="text-stone-600 text-lg leading-relaxed m-0">Centro temático en Torvizcón con más de 7 hectáreas de viñedo ecológico. Experiencias excepcionales de degustación, catas guiadas y pisado de uva en un entorno incomparable.</p>
              </div>
            </div>
            <div class="p-4 pt-8">
              <a href="tel:+34622959500" class="btn-contact-action w-full justify-center group">
                <i class="fa-solid fa-phone text-stone-900 group-hover:text-white transition-colors"></i>
                <span>Reservas: 622 959 500</span>
              </a>
            </div>
          </div>
          
          <div class="bg-white rounded-[2.5rem] overflow-hidden border border-stone-200/30 p-4 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(59,110,76,0.08)] transition-all duration-500 flex flex-col justify-between">
            <div class="space-y-6">
              <div @click="openLightbox(4, 'Cuatro Vientos')" class="rounded-[1.8rem] overflow-hidden aspect-video bg-stone-900 cursor-pointer group relative shadow-inner">
                <img :src="defaultImage" alt="Museo Cuatro Vientos, patrimonio etnológico de Murtas y la Alpujarra" class="w-full h-full object-cover group-hover:opacity-85 transition-all duration-500 group-hover:scale-103" loading="lazy" decoding="async" />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.604 10.604z" /></svg>
                </div>
              </div>
              <div class="px-4 space-y-3">
                <h4 class="font-sans font-black text-2xl text-stone-900 m-0">Cuatro Vientos</h4>
                <p class="text-stone-600 text-lg leading-relaxed m-0">Museo etnológico en Murtas situado en la parte más antigua de la bodega original. Conserva herramientas tradicionales y ofrece el espectáculo audiovisual "El alma de la bodega".</p>
              </div>
            </div>
            <div class="p-4 pt-8">
              <a href="tel:+34958956958" class="btn-contact-action w-full justify-center group">
                <i class="fa-solid fa-phone text-stone-900 group-hover:text-white transition-colors"></i>
                <span>Reservas: 958 956 958</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <div class="w-full bg-stone-900 pt-32 pb-0 mt-0">
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center space-y-6 pb-24">
        <span class="text-xs font-mono font-black uppercase tracking-[0.3em] text-amber-400">Identidad Popular</span>
        <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-white tracking-wide leading-[0.9] m-0 font-normal">
          Fiestas en <span class="font-black text-amber-400">Lobras.</span>
        </h2>
        <p class="text-stone-300 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mx-auto m-0">
          En Lobras las fiestas son sagradas. Una mezcla de cultura, repostería artesanal y diversión compartida entre vecinos de todas las edades. ¡Te sorprenderás!
        </p>
      </div>

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 p-0 m-0 bg-stone-950 border-t border-stone-800">
        <div 
          v-for="index in 9" 
          :key="index"
          @click="openLightbox(index, 'Fiestas de Lobras', 9)"
          class="relative aspect-square sm:aspect-video lg:aspect-square overflow-hidden bg-stone-900 cursor-pointer group"
        >
          <img :src="defaultImage" alt="Fiestas tradicionales de Lobras, celebración popular en la Alpujarra" class="w-full h-full object-cover block transition-opacity duration-500 group-hover:opacity-75" loading="lazy" decoding="async" />
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
          <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 cursor-pointer" @click="closeLightbox">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div class="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center" @click.stop>
            <img :src="defaultImage" alt="Vista ampliada de actividad cultural y tradicional en Lobras" class="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl block" loading="eager" decoding="async" />
            <p class="text-stone-400 font-mono text-sm uppercase tracking-widest text-center mt-6 font-bold">
              {{ galleryTitle }} <span v-if="totalCount > 1">{{ activeIndex }} de {{ totalCount }}</span>
            </p>
          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import defaultImage from '~/assets/img/default.webp'

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