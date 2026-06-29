<template>
  <section class="w-full bg-[#f6f3eb] pt-28 pb-0 select-none overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 space-y-24">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-stone-300/40 pb-16">
        <div class="lg:col-span-5 space-y-4 lg:order-1">
          <span class="font-sans font-black text-xs text-emerald-800 uppercase tracking-[0.2em] block">
            Patrimonio vivo y costumbres
          </span>
          <p class="text-stone-600 text-xl md:text-2xl font-medium leading-relaxed m-0 normal-case">
            Lobras conserva intacto el encanto de los pueblos moriscos. Te proponemos sumergirte en el latido cultural, artesanal y festivo a través de los museos locales y tradiciones de la Alpujarra Alta.
          </p>
        </div>

        <div class="lg:col-span-7 lg:text-right lg:order-2">
          <h2 class="text-5xl sm:text-7xl lg:text-[6.5rem] font-manual text-stone-900 tracking-wide leading-[0.85] m-0 font-normal">
            Lugares & <br />
            <span class="text-emerald-800 font-black block mt-2">tradiciones.</span>
          </h2>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        <div class="lg:col-span-6 space-y-12">
          <div class="space-y-6">
            <div class="flex items-center gap-4 text-stone-400 font-mono text-xs uppercase tracking-wider font-bold">
              <span>01 / MUSEOS ETNOLÓGICOS</span>
              <span class="text-[#3b6e4c] font-black">&bull; Lobras & Tímar</span>
            </div>
            <h3 class="font-sans font-black text-3xl sm:text-4xl text-stone-900 m-0 leading-tight">
              Saber ancestral esculpido en piedra.
            </h3>
            <p class="text-stone-600 text-base sm:text-lg font-medium leading-relaxed m-0">
              Descubre el patrimonio musical del <strong class="text-stone-800 font-bold">Museo Lombarda</strong> en Lobras o adéntrate en el <strong class="text-stone-800 font-bold">Centro Malacate</strong> en Tímar para revivir la minería tradicional de mercurio, telares artesanales y el legendario libro digitalizado del reparto de tierras de los Reyes Católicos.
            </p>
          </div>
          
          <div class="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-stone-900 shadow-md relative group">
            <div class="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-103" :style="{ backgroundImage: `url(${imgMuseo})` }"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent z-10"></div>
            <span class="absolute bottom-6 left-8 z-20 text-white font-mono text-xs uppercase tracking-widest font-bold">Centro de Interpretación "El Malacate"</span>
          </div>
        </div>

        <div class="lg:col-span-6 space-y-12 lg:pt-24">
          <div class="rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-stone-900 shadow-md relative group">
            <div class="absolute inset-0 bg-cover bg-center opacity-90 transition-transform duration-1000 group-hover:scale-103" :style="{ backgroundImage: `url(${imgVino})` }"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent z-10"></div>
            <span class="absolute bottom-6 left-8 z-20 text-white font-mono text-xs uppercase tracking-widest font-bold">Viñedos de la Contraviesa</span>
          </div>

          <div class="space-y-6">
            <div class="flex items-center gap-4 text-stone-400 font-mono text-xs uppercase tracking-wider font-bold">
              <span>02 / VITICULTURA HEROICA</span>
              <span class="text-amber-700 font-black">&bull; D.O. Vinos de Granada</span>
            </div>
            <h3 class="font-sans font-black text-3xl sm:text-4xl text-stone-900 m-0 leading-tight">
              Cultura del vino cultivada a las nubes.
            </h3>
            <p class="text-stone-600 text-base sm:text-lg font-medium leading-relaxed m-0">
              Visita fincas ecológicas situadas a más de 1.000 metros de altura como <strong class="text-stone-800 font-bold">Alpujárride</strong> o la recién remodelada bodega museo de <strong class="text-stone-800 font-bold">Cuatro Vientos</strong>. Espacios milenarios que te permitirán adentrarte en la tradición mediante catas dirigidas y su espectáculo audiovisual.
            </p>
          </div>
        </div>
      </div>

      <div class="bg-[#3b6e4c] text-white rounded-[3rem] p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
        <div class="lg:col-span-7 space-y-4">
          <span class="text-xs font-mono font-black uppercase tracking-[0.2em] text-amber-400 block">&bull; Identidad alpujarreña</span>
          <h3 class="font-manual text-4xl sm:text-5xl text-white m-0 font-normal leading-tight">Fiestas Típicas de Lobras</h3>
          <p class="text-stone-100 text-base sm:text-lg font-medium leading-relaxed m-0 opacity-95">
            Celebradas con enorme ilusión por vecinos de todas las edades. Las fiestas patronales de San Agustín en agosto y las tradicionales hogueras de invierno son la excusa perfecta para compartir dulces artesanales, repostería popular morisca y bailes típicos. ¡Te sorprenderás!
          </p>
        </div>
        <div class="lg:col-span-5 h-64 lg:h-full min-h-[250px] rounded-[2rem] overflow-hidden relative group shadow-inner">
          <div class="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103" :style="{ backgroundImage: `url(${imgFiestas})` }"></div>
        </div>
      </div>
    </div>

    <div class="w-full mt-28 relative h-[650px] bg-stone-900 flex items-center group overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center opacity-85 transition-transform duration-[2s] group-hover:scale-102" :style="{ backgroundImage: `url(${imgVendimia})` }"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent z-10"></div>
      
      <div class="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full text-white space-y-6">
        <span class="font-sans font-black text-xs text-amber-400 uppercase tracking-[0.2em] block">
          Actividad Estacional Exclusiva
        </span>
        <h2 class="text-4xl sm:text-6xl lg:text-[5.5rem] font-manual text-white tracking-wide leading-[0.9] m-0 max-w-4xl font-normal">
          El arte de la <br />
          <span class="text-amber-400 font-black">vendimia en familia.</span>
        </h2>
        <p class="text-stone-200 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl m-0">
          En el Huerto te ofrecemos la oportunidad de recolectar y pisar la uva de forma tradicional. Una vivencia etnológica única para conectar con la naturaleza y transmitir a los niños los procesos de la tierra.
        </p>
        <div class="pt-4">
          <NuxtLink to="/blog/beneficios-vendimia-familia" class="inline-flex items-center gap-3 bg-white hover:bg-[#3b6e4c] text-stone-900 hover:text-white font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md no-underline">
            <span>Leer artículo en el blog</span>
          </NuxtLink>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import defaultImage from '~/assets/img/default.jpg'

// Define aquí las variables que enlazarán a las fotos reales de tu proyecto
const imgMuseo = defaultImage
const imgVino = defaultImage
const imgFiestas = defaultImage
const imgVendimia = defaultImage
</script>