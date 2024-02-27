<script setup>
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'Products',
    description: 'Adopt Your Fur Mate!',
    navOrder: 3,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>
<template>
  <div
    class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100"
  >
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h6 class="uppercase">Our Products</h6>
        <h3 class="capitalize">Explore Our Premium Products</h3>
        <p class="mb-4">
          Elevate your experience with our premium products, meticulously
          crafted for quality and sustainability. Explore convenience redefined,
          one detail at a time.
        </p>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 items-center justify-center mb-4">
        <ProductList />
      </div>
    </div>
  </div>
</template>
