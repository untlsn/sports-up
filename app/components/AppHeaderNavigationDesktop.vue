<script lang="ts" setup>
const links = [
  { label: 'Home', to: '/' },
  { label: 'Events', to: '' },
  { label: 'Objects', to: '' },
  { label: 'About', to: '' },
  { label: 'Contact', to: '' },
];
</script>

<template>
  <nav class="hidden md:flex items-center gap-6 mx-auto">
    <NuxtLink
      v-for="({ label, to }, i) in links"
      :key="i"
      :to
      class="text-sm font-medium text-green-700 hover:text-green-500 underline"
    >
      {{ label }}
    </NuxtLink>
  </nav>
</template>

<style scoped>

</style>
