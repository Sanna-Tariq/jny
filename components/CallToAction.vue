<script setup lang="ts">
  const callToActions = [
    {
      img: '/deal/tissue.webp',
      action: 'JNY Tissues',
      to: '/tissue',
    },
    {
      img: '/deal/coke.webp',
      action: 'Disposable Glasses',
      to: '/glasses',
    },
    {
      img: '/deal/plate.webp',
      action: 'Plastic Plate Cutlery',
      to: '/plate',
    },
  ]
</script>
<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        We Deal With
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Small gesture for a big impact
      </h3>
      <p class="mt-4 text-justify md:text-center">
        At JNY Enterprises, we specialize in providing an extensive range of
        high-quality disposable solutions tailored to meet diverse needs. From
        eco-friendly cups to sustainable cutlery and packaging, we offer
        convenient and reliable products for businesses and individuals alike.
        Our commitment to excellence and customer satisfaction drives us to
        deliver innovative solutions that enhance everyday experiences while
        minimizing environmental impact
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard
        v-for="(callToAction, index) in callToActions"
        :key="index"
        :action="callToAction.action"
        :img="callToAction.img"
        :to="callToAction.to"
      />
    </div>
  </section>
</template>
<style scoped></style>
