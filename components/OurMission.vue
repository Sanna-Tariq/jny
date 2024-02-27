<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg
          src="/about-sec.webp"
          class="rounded-3xl w-full"
          alt="About-image"
        />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Discover Our Story
        </h6>
        <h3 class="capitalize mb-2">
          Pioneering Excellence in Disposable Solutions
        </h3>
        <p class="mb-6 text-justify">
          At JNY Enterprises, we pride ourselves on being pioneers in the
          disposable solutions industry. With a passion for innovation and a
          dedication to quality, we have been serving our customers with
          excellence since our inception. Our journey began with a vision to
          provide practical, convenient, and eco-friendly alternatives to
          traditional products. Today, we continue to uphold these values as we
          strive to meet the evolving needs of our clients.
        </p>
        <!-- <p>

          Our commitment to sustainability is at the core of everything we do. We prioritize environmentally-friendly
          materials and production methods to minimize our ecological footprint while ensuring the highest standards of
          performance and safety.</p>
        <p>

          Driven by a customer-centric approach, we aim to exceed expectations with every interaction. Whether you're a
          small cafe, a bustling restaurant, or an event planner, we are here to provide tailored solutions to suit your
          requirements.</p>
        <p>
          Join us in our mission to make everyday convenience sustainable. Together, let's shape a greener future, one
          disposable item at a time.
        </p> -->
        <BaseButton size="xl" to="/about"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
