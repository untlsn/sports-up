<script lang="ts" setup>

</script>

<template>
  <header class="sticky top-0 z-40 border-b bg-white dark:bg-gray-950 dark:border-gray-800 flex h-16 items-center p-4 md:px-12">
    <LazyAppHeaderNavigationMobile />
    <AppLogoLabeled />
    <LazyAppHeaderNavigationDesktop hydrate-on-media-query="width >= 48rem" />
    <AppHeaderOptions />
  </header>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
</style>
