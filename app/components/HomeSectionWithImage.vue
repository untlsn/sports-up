<script setup lang="ts">
defineProps<{
  title:       string;
  description: string;
}>();

defineSlots<{
  default: () => unknown;
}>();
</script>

<template>
  <section class="px-8 py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-950 grid xl:grid-cols-2 items-center justify-items-center gap-6 max-xl:text-center">
    <div class="space-y-4 max-w-150">
      <h1 class="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-500 sm:text-5xl xl:text-6xl text-balance">
        {{ title }}
      </h1>
      <p class="text-gray-600 dark:text-gray-300 md:text-xl">
        {{ description }}
      </p>
      <slot />
    </div>
    <img
      src="/placeholder.png"
      width="600"
      height="600"
      alt="Sports activities"
      class="rounded-xl object-cover mx-auto"
      priority
    >
  </section>
</template>

<style>
.image-fit {
	grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
}
</style>
