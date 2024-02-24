<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'StatsSection',
// 	},
// })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <!-- <img
            src="https://images.unsplash.com/photo-1561438774-1790fe271b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDkyMnwwfDF8c2VhcmNofDEyfHxoYXBweSUyMGRvZ3xlbnwwfHx8fDE2ODMyOTgzOTc&ixlib=rb-4.0.3&q=80&w=1080"
            class="mb-6 rounded-3xl w-full"
            alt="Stats"
          /> -->
          <NuxtImg src="/about-page.webp" class="mb-6 rounded-3xl w-full" alt="Stats" />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6 class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase">
            Welcome to JNY Enterprises
          </h6>
          <h3 class="capitalize mb-6">Celebrating a Legacy of Excellence</h3>
          <p>Established with a vision to redefine convenience and sustainability in disposable solutions, JNY Enterprises
            has emerged as a beacon of innovation in the industry. With a rich history spanning [X years], our journey is
            marked by a steadfast commitment to quality, integrity, and customer satisfaction.</p>

          <p>At JNY Enterprises, we take pride in offering a diverse array of premium disposable products meticulously
            crafted to meet the evolving needs of our clients. From eco-conscious cups to biodegradable cutlery and
            packaging, each item in our collection reflects our unwavering dedication to quality craftsmanship and
            environmental responsibility.</p>

        </div>
      </div>
      <div class="text-justify">
        <p>But our story extends beyond just products. It's about fostering meaningful connections, nurturing
          partnerships, and creating lasting impressions. Whether catering to small businesses or large-scale events,
          our ethos remains rooted in providing tailored solutions that elevate experiences and leave a positive impact.
        </p>

        <p class="mt-5">Central to our mission is the belief that sustainability and convenience can coexist
          harmoniously. We
          continuously strive to minimize our environmental footprint by sourcing responsibly, innovating responsibly,
          and championing sustainable practices throughout our operations.</p>

        <p class="mt-5">Our success is not measured merely by profit margins, but by the trust and satisfaction of our
          customers. We
          are deeply grateful for the support and loyalty we've received over the years, and we remain steadfast in our
          commitment to exceeding expectations and driving positive change.</p>

        <p class="italic mt-5">Thank you for being a part of our journey. Together, let's continue shaping a brighter,
          more
          sustainable
          future—one disposable solution at a time.</p>
      </div>

    </div>
  </section>
</template>
<style scoped></style>
