<script lang="ts" setup>
defineProps<{
  title: string;
  icon:  string;
}>();
</script>

<template>
  <UiCard class="max-w-240 mx-auto my-12">
    <UiCardTitle class="px-6 flex items-center gap-4">
      <NuxtIcon
        :name="icon"
        class="text-6 text-secondary"
      />
      {{ title }}
    </UiCardTitle>
    <slot />
  </UiCard>
</template>

<style scoped>

</style>
