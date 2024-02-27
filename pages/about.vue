<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'volunteer',
    // alias: 'volunteer',
    title: 'About Us',
    description: `About JNY Enterprises`,
    navOrder: '2',
    type: 'secondary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <TheHeader>
    <div class="flex items-center">
      <h2 class="text-5xl font-semibold">About Us</h2>
    </div>
  </TheHeader>
  <AboutSection />
</template>
<style scoped></style>
