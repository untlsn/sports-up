<script lang="ts" setup>
defineSlots<{
  default: () => unknown;
}>();

defineProps<{
  title: string;
  icon:  string;
  color: string;
}>();
</script>

<template>
  <div
    class="flex flex-col items-center space-y-4 text-center"
    :style="`--color: var(${color})`"
  >
    <div
      class="flex h-16 w-16 items-center justify-center rounded-full bg-(--color)/10"
    >
      <NuxtIcon
        :name="icon"
        class="text-8 text-(--color)"
      />
    </div>
    <h3 class="text-xl font-bold text-(--color)/70">
      {{ title }}
    </h3>
    <p class="text-gray-600">
      <slot name="default" />
    </p>
  </div>
</template>

<style scoped>
.icon-wrapper {
  background-color: var(--color-v-bind(color)-100);
  --icon-color: var(--color-v-bind(color)-600);
}
</style>
