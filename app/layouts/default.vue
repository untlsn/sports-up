<script lang="ts" setup>
const year = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    <slot />
    <footer class="border-t bg-white dark:bg-gray-950 dark:border-gray-800 p-8 grid grid-cols-3 gap-4 items-center text-sm max-md:grid-cols-2">
      <AppLogoLabeled />
      <nav class="flex gap-4 text-gray-600 md:mx-auto">
        <NuxtLink
          to="#"
          class="hover:text-green-500"
        >
          Terms
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-green-500"
        >
          Privacy
        </NuxtLink>
        <NuxtLink
          to="#"
          class="hover:text-green-500"
        >
          Cookies
        </NuxtLink>
      </nav>
      <p class="text-gray-500 text-end text-balance">
        © {{ year }} Sports-Up. All rights reserved.
      </p>
    </footer>
  </div>
</template>

<style scoped>

</style>
