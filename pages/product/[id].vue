<template>
  <TheHeader>
    <div class="flex items-center">
      <h6 class="capitalize text-3xl font-semibold">{{ name }}</h6>
      <!-- <h6 class="uppercase ml-20">Product ID: {{ id }}</h6> -->
    </div>

    <!-- <slot /> -->
  </TheHeader>
  <!-- <div class="py-12"> -->
  <div class="container mx-auto px-4 relative">
    <div class="container mx-auto pl-12 pr-8 pt-4 relative">
      <div class="px-8">
        <div class="flex flex-wrap lg:justify-between">
          <div class="py-4 text-center w-full lg:w-fit">
            <NuxtLink to="/product">
              <BaseButton><span>&lt;- Go Back</span> </BaseButton>
            </NuxtLink>
          </div>

          <div
            class="flex items-center justify-center py-4 space-x-4 text-center w-full lg:w-fit"
          >
            <BaseIcon
              name="i-material-symbols-mark-email-unread-outline"
              height="28px"
            ></BaseIcon>
            <BaseIcon name="i-logos-whatsapp-icon" height="28px"></BaseIcon>
            <!-- <BaseIcon name="i-logos-facebook" height="28px"></BaseIcon>
              <BaseIcon name="i-logos-twitter" height="28px"></BaseIcon> -->
          </div>
        </div>
        <div class="flex flex-wrap py-8 w-full lg:flex-nowrap">
          <div
            class="flex flex-wrap justify-center text-center w-full lg:flex-nowrap lg:text-left"
          >
            <div class="w-full rounded shadow-md shadow-indigo-500/50">
              <NuxtImg :src="image" class="rounded-xl w-full" :alt="name" />
            </div>
            <div class="py-8 w-full sm:px-16 self-center">
              <ul>
                <li class="mb-4">
                  <span class="font-semibold">Name:</span>
                  <span class="ml-2">{{ name }}</span>
                </li>
                <li class="mb-4">
                  <span class="font-semibold">Material:</span>
                  <span class="ml-2">{{ material }}</span>
                </li>
                <li class="mb-4">
                  <span class="font-semibold">Color:</span>
                  <span class="ml-2">{{ color }}</span>
                </li>
                <li class="mb-4">
                  <span class="font-semibold">Feature:</span>
                  <span class="ml-2">{{ feature }}</span>
                </li>
                <li class="mb-4">
                  <span class="font-semibold">Price:</span>
                  <span class="ml-2">₹ {{ price }}</span>
                </li>
                <!-- <li class="flex items-center justify-center mb-4 lg:justify-start">
                  <BaseIcon name="i-material-symbols-add-location-alt-outline-rounded" height="28px"
                    class="-ml-1 font-semibold"></BaseIcon>
                  <span class="ml-2">{{ }}</span>
                </li> -->
                <li class="mb-4">
                  <span class="font-semibold">Country:</span>
                  <span class="ml-2">Made in {{ country }}</span>
                </li>
              </ul>
            </div>
            <div
              class="max-w-xs py-8 rounded-xl w-full sm:px-8 bg-primary-600 dark:bg-primary-200 text-white dark:text-primary-800"
            >
              <ul class="inline-block align-middle">
                <li class="flex items-center justify-center lg:justify-start">
                  <BaseIcon
                    name="i-material-symbols-check-box-outline"
                    height="28px"
                  ></BaseIcon
                  ><span class="inline-block ml-2">Contact us </span>
                </li>
                <li
                  class="flex items-center justify-center mt-4 lg:justify-start"
                >
                  <BaseIcon
                    name="i-twemoji-sparkling-heart"
                    height="24px"
                  ></BaseIcon>
                  <span class="ml-2">We would like to assist you</span>
                </li>
                <li
                  class="flex items-center justify-center mt-4 lg:justify-start"
                >
                  <BaseIcon
                    name="i-bx-bxs-microchip"
                    height="24px"
                    class="text-tertiary-600 dark:text-tertiary-200"
                  >
                  </BaseIcon>
                  <span class="ml-2"
                    ><Nuxt-Link to="tel:9419018801">9419018801</Nuxt-Link></span
                  >
                </li>
                <li
                  class="flex items-center justify-center mt-4 lg:justify-start"
                >
                  <BaseIcon
                    name="i-material-symbols-mark-email-unread-outline"
                    height="24px"
                  ></BaseIcon>
                  <span class="ml-2"
                    ><Nuxt-link to="mailto:info@jnyenterprises.com"
                      >info@jnyenterprises.com</Nuxt-link
                    ></span
                  >
                </li>
                <li
                  class="flex items-center justify-center mt-4 lg:justify-start"
                >
                  <BaseIcon
                    name="i-material-symbols-add-location-alt-outline-rounded"
                    height="24px"
                    class="text-indigo-600"
                  >
                  </BaseIcon>
                  <span class="ml-2">Rangreth, Srinagar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'blog',
    // alias: 'blog',
    title: 'More Details',
    description: 'More details about the product',
    hidden: true,
    navOrder: 2,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  const route = useRoute()
  const { id: productId } = route.params

  const { fetchProduct } = await useProduct(+productId)

  const { id, name, material, color, price, image, feature, country } =
    fetchProduct()

  useServerSeoMeta({
    description: () => name || '',
  })

  useHead({
    title: () => name || '',
  })
</script>
<!-- Brand	Wrapper India
Color	White & Black
Material	Plastic
Features	Disposable
Price Range	Rs. 9.50 - Rs. 18
Country of Origin	Made in India -->
