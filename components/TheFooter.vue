<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3"
        >
          <NuxtLink class="-ml-6" to="/">
            <div to="/" class="font-serif inline-flex items-center text-3xl">
              <NuxtImg
                sizes="100vw sm:50vw md:300px xs:200px"
                :src="isDark ? 'jny-white-logo.webp' : 'jny-logo.webp'"
              />
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-justify">
            Welcome to JNY Enterprises, your premier destination for
            high-quality disposable items.
            <!-- From cups to cutlery,
            we offer a wide range of convenient solutions to meet your needs. With a commitment to quality and
            sustainability, we strive to make every disposable experience exceptional. -->
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink
                class="md:hidden block"
                href="https://www.facebook.com/p/JNY-Enterprises-100078759584040/?paipv=0&eav=AfYsCePwUsxjGy58yDOxnoYK-NeuUf9FX7NEV09WoMcZI5-IsRMLVSyV5n05Fd2dw6M&_rdr"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink>
              <!-- <NuxtLink href="https://twitter.com/vuedesigner" aria-label="twitter" external target="_blank">
                <BaseIcon name="i-logos-twitter" class="text-2xl" width="28px"></BaseIcon>
              </NuxtLink>
              <NuxtLink href="https://discord.gg/BYp45Nnu5T" aria-label="discord" external target="_blank">
                <BaseIcon name="i-logos-discord-icon" class="text-2xl" width="28px"></BaseIcon>
              </NuxtLink>
              <NuxtLink href="https://www.youtube.com/@vuedesigner" aria-label="youtube" external target="_blank">
                <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="28px"></BaseIcon>
              </NuxtLink> -->
            </div>
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center text-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3"
        >
          <h2
            class="font-bold text-primary-600 dark:text-primary-200 text-center text-xl"
          >
            Contact
          </h2>

          <ul class="md:flex justify-between gap-10">
            <li class="mb-4">
              <NuxtLink
                to="tel:9419018801"
                class="hover:text-primary-600 dark:text-primary-200"
              >
                <BaseIcon
                  name="i-logos-whatsapp-icon "
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
                9419018801
              </NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink
                to="mailto:info@jnyenterprises.com"
                class="hover:text-primary-600 dark:text-primary-200"
              >
                <BaseIcon
                  name="i-material-symbols-mark-email-unread-outline "
                  class="text-2xl"
                  width="28px"
                >
                </BaseIcon>
                info@jnyenterprises.com
              </NuxtLink>
            </li>
            <li class="mb-4">
              <div class="hover:text-primary-600 dark:text-primary-200">
                <BaseIcon
                  name="i-material-symbols-add-location-alt-outline-rounded"
                  class="text-2xl"
                  width="28px"
                >
                </BaseIcon>
                Rangreth, Srinagar
              </div>
            </li>
            <li class="md:block hidden">
              <NuxtLink
                href="https://www.facebook.com/p/JNY-Enterprises-100078759584040/?paipv=0&eav=AfYsCePwUsxjGy58yDOxnoYK-NeuUf9FX7NEV09WoMcZI5-IsRMLVSyV5n05Fd2dw6M&_rdr"
                aria-label="facebook"
                external
                target="_blank"
              >
                <BaseIcon
                  name="i-logos-facebook"
                  class="text-2xl"
                  width="28px"
                ></BaseIcon>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Gallery
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDF8fHBldHxlbnwwfHx8fDE2MzA0NjI1MjM&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDE1fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDIzfHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI3fHxjYXR8ZW58MHx8fHwxNjMwNDY3NzE4&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDI4fHxwZXR8ZW58MHx8fHwxNjMwNDYyNTIz&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg
                  src="https://images.unsplash.com/photo-1591561582301-7ce6588cc286?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDMwfHxyYWJiaXR8ZW58MHx8fHwxNjMwNDY3NjUw&amp;ixlib=rb-1.2.1q=85&amp;fm=jpg&amp;crop=faces&amp;cs=srgb&amp;w=300&amp;h=250&amp;fit=crop"
                  class="w-full" />
              </div>
            </div>
          </div>
        </div> -->
        <div class="flex flex-col sm:w-full md:items-between text-center">
          <hr class="mb-4 opacity-25" />
          <div
            class="flex flex-col md:flex-row justify-center md:justify-between"
          >
            <p class="py-1 text-xs md:text-sm text-center">
              &copy; {{ currentYear }}. All Rights Reserved - JNY ENTERPRISES
            </p>
            <p class="py-1 text-xs md:text-sm text-center">
              Designed & Developed by -
              <Nuxt-Link
                to="https://rationaltabs.com/"
                target="_blank"
                class="font-bold"
              >
                Rational<span class="text-red-500">Tabs</span>
                Technologies</Nuxt-Link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      }
    },
  }
</script>
<style scoped></style>
