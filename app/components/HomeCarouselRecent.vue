<script lang="ts" setup>
defineSlots<{
  default:  () => unknown;
  title:    () => unknown;
  subtitle: () => unknown;
}>();
defineProps<{
  title:    string;
  subtitle: string;
}>();
</script>

<template>
  <section class="w-full py-12 px-8 md:px-12">
    <div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <div class="space-y-2">
        <h2 class="text-3xl font-bold tracking-tighter text-green-700 dark:text-green-500 sm:text-4xl">
          {{ title }}
        </h2>
        <p class="max-w-[900px] text-gray-600 dark:text-gray-300 md:text-xl/relaxed">
          {{ subtitle }}
        </p>
      </div>
    </div>
    <UiCarousel :opts="{ loop: true }">
      <UiCarouselContent>
        <slot />
      </UiCarouselContent>
      <UiCarouselPrevious class="left-2" />
      <UiCarouselNext class="right-2" />
    </UiCarousel>
  </section>
</template>

<style scoped>

</style>
