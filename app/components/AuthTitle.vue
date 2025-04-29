<script lang="ts" setup>
defineSlots<{
  default: () => unknown;
}>();
</script>

<template>
  <div class="grid grid-cols-[1fr_40px] pl-10">
    <UiCardTitle class="text-2xl font-bold text-center">
      <slot />
    </UiCardTitle>
    <div class="justify-self-end">
      <AppOptionsMenu />
      <AppHeaderOptions>
        <UiDropdownMenuTrigger>
          <NuxtIcon
            name="ph:gear"
            class="text-5"
          />
        </UiDropdownMenuTrigger>
      </AppHeaderOptions>
    </div>
  </div>
</template>

<style scoped>

</style>
