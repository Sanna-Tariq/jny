<template>
  <div>
    <div class="container mx-auto px-4 relative">
      <div class="flex flex-wrap -mx-4 ">
        <ProductCard v-for="(item, index) in allProducts" v-bind="item" :key="index" class>
        </ProductCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { allProducts } = await useProducts()
</script>