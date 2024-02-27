<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: `hero`,
    cover: true,
    ...optimizeImage(
      heroImageUrl,
      /* options */
      {
        /* If using local images instead of unsplash url, enable netlify provider */
        // provider:
        //     process.env.NODE_ENV === 'production'
        //       ? 'netlify'
        //       : null /* defaults to ipx or ipxStatic */,
        placeholder: false, // placeholder image before the actual image is fully loaded.
      },
      true /* return bgStyles */,
    ),
  }

  const heroImage = heroImageOptimized.src
  const bgStyles = heroImageOptimized.bgStyles
</script>
<template>
  <section class="container mx-auto pb-12 px-4">
    <div
      class="bg-center bg-banner bg-cover bg-no-repeat blur-none rounded-3xl z-0"
    >
      <!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0 bg-design-image lg:bg-design-image-large"
    > -->
      <div class>
        <div
          class="lg:px-12 md:py-10 pb-6 pt-10 px-6 relative rounded-3xl shadow-xl"
        >
          <div
            class="-mx-4 flex flex-wrap items-center mt-10 mb-10 md:mb-0 md:mt-24 space-y-6 lg:space-y-0"
          >
            <div class="px-4 w-8/12 md:w-8/12 xl:w-6/12">
              <h4
                class="font-bold font-serif mb-1 text-xs md:text-3xl text-white dark:text-primary-200 uppercase"
              >
                Embrace Convenience, Embrace Quality
              </h4>
              <h1
                class="capitalize leading-tight mb-2 text-xl md:text-6xl text-white"
              >
                Your Go-To for Disposable Solutions!
              </h1>
              <p class="font-thin mb-6 text-gray-300 hidden md:block">
                Welcome to JNY Enterprises, your premier destination for
                high-quality disposable items. From cups to cutlery, we offer a
                wide range of convenient solutions to meet your needs. With a
                commitment to quality and sustainability, we strive to make
                every disposable experience exceptional. Explore our collection
                and discover the convenience without compromise.
              </p>
              <BaseButton size="xl" label="Adopt Now" target="_blank" to="/">
                <div class="inline-block ml-1 p-1.5 text-xs md:text-lg">
                  Explore Now
                </div>
                <!-- <BaseIcon name="i-noto-dog-face" height="28px"></BaseIcon> -->
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .bg-banner {
    background-image: url('/banner.webp');
  }
</style>
