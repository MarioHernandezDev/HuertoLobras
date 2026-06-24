<template>
  <div class="overflow-x-hidden bg-[#fcfbf9]">
    
    <TheMiniHero 
      title="Contacto" 
      subtitle="Estamos al otro lado del mapa. Permítenos ayudarte a planificar tu regreso al origen." 
    />

    <section class="py-24 max-w-[85rem] mx-auto px-6 lg:px-16 reveal-on-scroll">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">
        
        <div class="lg:col-span-7 space-y-12">
          
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-[1px] bg-[#53433c]"></div>
              <span class="text-[10px] uppercase tracking-[0.4em] text-[#53433c] font-black block">Atención Personalizada</span>
            </div>
            <h2 class="font-manual text-4xl md:text-5xl text-stone-900 m-0 font-normal leading-tight">
              Escríbenos o visítanos
            </h2>
            <p class="text-stone-600 text-sm font-medium leading-relaxed max-w-xl">
              Si tienes dudas sobre los accesos, deseas consultar la disponibilidad de un apartamento concreto o necesitas coordinar un **retiro o evento en grupo**, rellena el formulario y te responderemos personalmente en menos de 24 horas.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-b border-stone-200 py-8">
            <div class="space-y-1">
              <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Ubicación física</span>
              <p class="text-xs md:text-sm text-stone-800 font-bold m-0">El Huerto de Lobras</p>
              <p class="text-xs text-stone-500 m-0">18449 Lobras, La Alpujarra (Granada)</p>
            </div>
            <div class="space-y-1">
              <span class="text-[9px] uppercase tracking-widest text-stone-400 font-bold block">Canales directos</span>
              <p class="text-xs md:text-sm text-stone-800 font-bold m-0">Tel: +34 600 000 000</p>
              <p class="text-xs text-stone-500 m-0">Email: info@elhuertodelobras.com</p>
            </div>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6 pt-2">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-500">Nombre completo</label>
                <input 
                  type="text" 
                  required
                  placeholder="Ej. María García"
                  class="w-full bg-white border border-stone-300 text-stone-900 px-4 py-3 text-xs tracking-wide font-medium focus:outline-none focus:border-[#53433c] rounded-none appearance-none placeholder-stone-400/70"
                />
              </div>
              <div class="space-y-2">
                <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-500">Correo electrónico</label>
                <input 
                  type="email" 
                  required
                  placeholder="maria@ejemplo.com"
                  class="w-full bg-white border border-stone-300 text-stone-900 px-4 py-3 text-xs tracking-wide font-medium focus:outline-none focus:border-[#53433c] rounded-none appearance-none placeholder-stone-400/70"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-500">Teléfono (Opcional)</label>
                <input 
                  type="tel" 
                  placeholder="+34 600 00 00 00"
                  class="w-full bg-white border border-stone-300 text-stone-900 px-4 py-3 text-xs tracking-wide font-medium focus:outline-none focus:border-[#53433c] rounded-none appearance-none placeholder-stone-400/70"
                />
              </div>
              <div class="space-y-2">
                <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-500">Motivo de la consulta</label>
                <div class="relative">
                  <select class="w-full bg-white border border-stone-300 text-stone-900 px-4 py-3 text-xs tracking-wide font-medium focus:outline-none focus:border-[#53433c] rounded-none appearance-none cursor-pointer">
                    <option value="informacion">Información general</option>
                    <option value="reserva">Duda sobre una reserva</option>
                    <option value="grupos">Retiros y grupos a medida</option>
                    <option value="otros">Otros asuntos</option>
                  </select>
                  <i class="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none text-xs"></i>
                </div>
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-[9px] uppercase tracking-[0.3em] font-black text-stone-500">Tu Mensaje</label>
              <textarea 
                rows="5" 
                required
                placeholder="Cuéntanos detalladamente cómo podemos ayudarte..."
                class="w-full bg-white border border-stone-300 text-stone-900 px-4 py-3 text-xs tracking-wide font-medium focus:outline-none focus:border-[#53433c] rounded-none appearance-none placeholder-stone-400/70 resize-none"
              ></textarea>
            </div>

            <div class="flex items-start gap-3 pt-2">
              <input 
                type="checkbox" 
                id="privacidad" 
                required
                class="mt-1 accent-[#53433c] cursor-pointer"
              />
              <label id="privacidad" class="text-[11px] text-stone-500 leading-tight font-medium cursor-pointer">
                Acepto la política de privacidad y doy consentimiento para el tratamiento de mis datos con el fin de resolver esta consulta.
              </label>
            </div>

            <div class="pt-2">
              <button type="submit" class="btn-editorial min-w-[15rem] justify-center cursor-pointer">
                Enviar Mensaje <i class="fa-solid fa-paper-plane ml-2 text-[9px]"></i>
              </button>
            </div>

          </form>

        </div>

        <div class="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          
          <div class="bg-white border border-stone-200 p-4 shadow-xl space-y-4">
            
            <div class="w-full aspect-[4/5] bg-stone-100 border border-stone-200 overflow-hidden relative grayscale opacity-90 hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2s36.9294248!-3.209149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7190d635c0cfab%3A0x63351341c8872b7a!2s18449%20Lobras%2C%20Granada!5e0!3m2!1ses!2ses!4v1710000000000!5m2!1ses!2ses" 
                class="absolute inset-0 w-full h-full border-0"
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div class="p-2 space-y-2">
              <div class="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest">
                <i class="fa-solid fa-location-crosshairs text-[#53433c]"></i>
                <span>Coordenadas Geográficas</span>
              </div>
              <p class="text-stone-600 text-xs leading-relaxed font-medium m-0">
                Al llegar a **Lobras**, sigue las indicaciones hacia el casco histórico. El Huerto cuenta con accesos señalizados para la descarga de equipaje cómodamente.
              </p>
            </div>

          </div>

          <div class="bg-stone-100 border border-stone-200 p-6 text-center">
            <span class="text-[9px] uppercase tracking-[0.25em] text-stone-400 font-black block mb-1">Horario de Recepción</span>
            <p class="text-xs text-stone-700 font-bold m-0">Lunes a Domingo: 09:00h &bull; 21:00h</p>
            <p class="text-[10px] text-stone-500 m-0 mt-1">Para llegadas tardías (*Late Check-in*), por favor avísanos con antelación.</p>
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

// Función lógica simulada para el manejo del formulario
const handleSubmit = () => {
  alert('¡Gracias por contactar con El Huerto de Lobras! Tu mensaje ha sido enviado correctamente de forma simulada.')
}
</script>

<style scoped>
section {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>