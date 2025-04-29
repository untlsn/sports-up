<script lang="ts" setup>
defineProps<{
  image?: string;
  title:  string;
}>();

defineSlots<{
  default: () => unknown;
}>();
</script>

<template>
  <UiCarouselItem
    class="border-1 rounded max-w-120"
  >
    <img
      :src="image || '/placeholder.png'"
      :alt="title"
      class="object-cover w-full h-48"
    >
    <div class="p-4">
      <h3 class="font-bold text-lg text-green-700 dark:text-green-500">
        {{ title }}
      </h3>
      <div class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <slot />
      </div>
    </div>
  </UiCarouselItem>
</template>

<style scoped>

</style>
