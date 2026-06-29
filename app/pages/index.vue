<template>
  <div class="w-full min-h-screen bg-[#fcfaf7] overflow-hidden">
    
    <TheHero @navigate="scrollToSection" />

    <FeaturesExperience />
    <HousesGrid />
    <CtaFinal />

  </div>
</template>

<script setup>
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>