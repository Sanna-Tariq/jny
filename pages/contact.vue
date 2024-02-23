<script setup lang="ts">
definePageMeta({
  // layout: 'default',
  // name: 'volunteer',
  // alias: 'volunteer',
  title: 'Contact us',
  description: `Don't Miss Out – Stay in the Know, Subscribe Today!`,
  navOrder: '6',
  type: 'secondary',
  icon: 'i-mdi-home',
  // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
})
</script>
<template>
  <TheHeader>
    <div class="flex items-center">
      <h2 class="text-5xl font-semibold">Contact us</h2>
    </div>
  </TheHeader>
  <div class="md:grid grid-cols-2 gap-4 mx-6">
    <div class="self-center text-center">
      <h3 class="mb-10">Get in touch</h3>
      <ul class="text-center lg:mt-2 ">
        <li class="mb-4">
          <NuxtLink to="tel:9419018801" class="hover:text-primary-600 dark:text-primary-200">
            Call us : 9419018801
          </NuxtLink>
        </li>
        <li class="mb-4">
          <NuxtLink to="mailto:info@jnyenterprises.com" class="hover:text-primary-600 dark:text-primary-200">
            Mail us :
            info@jnyenterprises.com
          </NuxtLink>
        </li>
        <li class="mb-4">
          <div to="mailto:info@jnyenterprises.com" class="hover:text-primary-600 dark:text-primary-200">
            Location :
            Rangreth, Srinagar
          </div>
        </li>
      </ul>
    </div>
    <!-- ... -->
    <div class="pb-12 text-center bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
      <div class="container mx-auto px-4">
        <div class="-mx-4 flex flex-wrap">
          <div class="mx-auto px-4 rounded-2xl w-full lg:w-8/12">
            <div class="px-6 py-12 rounded-lg tertiary-card">
              <h2 class="font-bold leading-tight mb-2 text-3xl">
                Get in touch with us at JNY Enterprise
              </h2>
              <p class="mt-8 mb-4">
                Reach out to us today, and let's start a conversation about how we can meet your needs and exceed your
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
