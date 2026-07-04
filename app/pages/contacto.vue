<template>
  <main class="w-full bg-[#fcfaf7] bg-texture min-h-screen antialiased relative">
    
    <MiniHero 
      title="Contacto & Reservas" 
      subtitle="Tu refugio en la Alpujarra"
      :backgroundImage="heroImage" 
      :backgroundVideo="heroVideo"
    />

    <section class="w-full bg-[#fcfaf7] pt-28 pb-24 px-4 md:px-8 lg:px-12 select-none">
      <div class="max-w-7xl mx-auto">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div class="lg:col-span-5 space-y-12 animate-slide-left">
            <div class="space-y-6">
              <span class="font-sans font-black text-xs text-[#3b6e4c] uppercase tracking-[0.2em] block">
                ¿Hablamos?
              </span>
              
              <h2 class="text-5xl sm:text-6xl font-manual text-stone-900 tracking-wide leading-[0.9] m-0 font-normal pb-2">
                Encuentra tu <br />
                <span class="text-[#3b6e4c] font-black block mt-2">momento de paz.</span>
              </h2>
              
              <p class="text-stone-500 text-base md:text-lg font-medium leading-relaxed max-w-md m-0 normal-case pt-2">
                Ya sea para reservar uno de nuestros alojamientos, inscribirte en un taller o consultarnos cualquier duda sobre el entorno, estamos aquí para escucharte.
              </p>
            </div>

            <div class="space-y-8 pt-8 border-t border-stone-200/60">
              <div class="flex items-start gap-4 group/item">
                <div class="w-10 h-10 rounded-full bg-[#f6f3eb] flex items-center justify-center text-[#3b6e4c] shrink-0 group-hover/item:bg-[#3b6e4c] group-hover/item:text-white transition-all duration-300">
                  <i class="fa-solid fa-phone text-base"></i>
                </div>
                <div>
                  <h4 class="text-xs font-sans font-black text-stone-400 uppercase tracking-wider m-0">Teléfono y WhatsApp</h4>
                  <a href="tel:+34679038079" class="text-stone-800 text-lg font-sans font-black no-underline block mt-1 hover:text-[#3b6e4c] transition-colors">
                    +34 679 03 80 79
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 group/item">
                <div class="w-10 h-10 rounded-full bg-[#f6f3eb] flex items-center justify-center text-[#3b6e4c] shrink-0 group-hover/item:bg-[#3b6e4c] group-hover/item:text-white transition-all duration-300">
                  <i class="fa-regular fa-envelope text-base"></i>
                </div>
                <div>
                  <h4 class="text-xs font-sans font-black text-stone-400 uppercase tracking-wider m-0">Correo Electrónico</h4>
                  <a href="mailto:info@elhuertodelobras.com" class="text-stone-800 text-lg font-sans font-black no-underline block mt-1 hover:text-[#3b6e4c] transition-colors">
                    info@elhuertodelobras.com
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4 group/item">
                <div class="w-10 h-10 rounded-full bg-[#f6f3eb] flex items-center justify-center text-[#3b6e4c] shrink-0 group-hover/item:bg-[#3b6e4c] group-hover/item:text-white transition-all duration-300">
                  <i class="fa-solid fa-location-dot text-base"></i>
                </div>
                <div>
                  <h4 class="text-xs font-sans font-black text-stone-400 uppercase tracking-wider m-0">Ubicación</h4>
                  <p class="text-stone-700 font-medium m-0 mt-1 leading-relaxed">
                    Lobras, Granada • Alpujarra Alta<br />
                    Andalucía, España
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-[#f6f3eb] rounded-[2rem] p-8 sm:p-12 border border-stone-200/40 shadow-[0_25px_50px_-20px_rgba(42,53,44,0.06)] w-full animate-fade-up">
            <form @submit.prevent="handleSubmit" class="space-y-8 select-text">
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="space-y-2">
                  <label for="name" class="block text-xs font-sans font-black text-stone-400 uppercase tracking-wider">Nombre completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required
                    placeholder="Tu nombre..."
                    class="w-full bg-[#fcfaf7] border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 font-medium focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] transition-all"
                  />
                </div>
                <div class="space-y-2">
                  <label for="email" class="block text-xs font-sans font-black text-stone-400 uppercase tracking-wider">Correo electrónico</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required
                    placeholder="ejemplo@correo.com"
                    class="w-full bg-[#fcfaf7] border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 font-medium focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label for="subject" class="block text-xs font-sans font-black text-stone-400 uppercase tracking-wider">¿En qué estás interesado?</label>
                <div class="relative">
                  <select 
                    id="subject" 
                    v-model="form.subject"
                    class="w-full bg-[#fcfaf7] border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 font-medium focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] transition-all appearance-none cursor-pointer"
                  >
                    <option value="alojamiento">Reservar un Alojamiento Rural</option>
                    <option value="talleres">Inscripción en Cursos o Talleres</option>
                    <option value="grupo">Planes a medida para Grupos</option>
                    <option value="otras">Otras consultas generales</option>
                  </select>
                </div>
              </div>

              <div class="space-y-2">
                <label for="message" class="block text-xs font-sans font-black text-stone-400 uppercase tracking-wider">Tu mensaje</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  rows="5"
                  required
                  placeholder="Cuéntanos con calma lo que necesitas..."
                  class="w-full bg-[#fcfaf7] border border-stone-200/60 rounded-xl px-4 py-3.5 text-stone-800 placeholder-stone-400 font-medium focus:outline-none focus:border-[#3b6e4c] focus:ring-1 focus:ring-[#3b6e4c] transition-all resize-none"
                ></textarea>
              </div>

              <div class="pt-2">
                <button 
                  type="submit"
                  class="btn-premium-dark w-full justify-center py-4"
                >
                  <i class="fa-regular fa-paper-plane text-amber-400"></i>
                  <span>Enviar Mensaje</span>
                </button>
              </div>

            </form>
          </div>

        </div>
        
      </div>
    </section>

    <section class="w-full h-[600px] md:h-[850px] relative border-y border-stone-200/60 bg-stone-200 overflow-hidden mb-24 md:mb-40 select-none animate-fade-up">
      <iframe 
        src="https://maps.google.com/maps?q=Lobras,%20Granada&t=&z=14&ie=UTF8&iwloc=&output=embed" 
        class="w-full h-full border-0 absolute inset-0 block map-editorial-filter"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="Ubicación de Lobras en Google Maps"
      ></iframe>
      
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
        <div class="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-stone-200 shadow-sm">
          <p class="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500 m-0 text-center">
            Explora el entorno de Lobras
          </p>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import heroImage from '~/assets/img/default.jpg'
import heroVideo from '~/assets/video/lobras.mp4' // Importación de tu recurso de video local

const form = ref({
  name: '',
  email: '',
  subject: 'alojamiento',
  message: ''
})

const handleSubmit = () => {
  alert(`¡Gracias ${form.value.name}! Hemos recibido tu consulta correctamente.`)
  form.value = {
    name: '',
    email: '',
    subject: 'alojamiento',
    message: ''
  }
}
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%2378716c' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1.25rem;
}

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
.animate-slide-left {
  animation: slideFromLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-up {
  opacity: 0;
  animation: fadeUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
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
  .animate-slide-left, .animate-fade-up {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* 3. BOTÓN PREMIUM OSCURO */
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

/* Filtro de autoría para suavizar el mapa y fundirlo con los tonos crema de la web */
.map-editorial-filter {
  filter: grayscale(0.4) contrast(0.95) sepia(0.12) hue-rotate(-5deg);
  transition: filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.map-editorial-filter:hover {
  filter: grayscale(0) contrast(1) sepia(0) hue-rotate(0deg);
}
</style>