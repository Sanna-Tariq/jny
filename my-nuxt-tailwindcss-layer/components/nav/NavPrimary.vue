<script setup lang="ts">
  defineProps({
    navlinks: {
      type: Object,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>
<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(navlink, index) in navlinks"
        :key="index"
        :to="navlink.link"
        :label="navlink.text"
        size="lg"
        :variant="isCurrentRoute(navlink, currentPath) ? 'solid' : 'ghost'"
      >
      </BaseButton>
    </div>
    <!-- <BaseButton class="ml-3" to="/" size="xl" color="secondary"><span class="pl-2">About</span>
      <template #trailing>
        <BaseIcon name="i-mdi-pine-tree" height="24px"></BaseIcon>
      </template>
    </BaseButton> -->
  </div>
</template>
<style scoped></style>
