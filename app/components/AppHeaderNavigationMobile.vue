<script lang="ts" setup>
const links = [
  { label: 'Home', to: '' },
  { label: 'Events', to: '' },
  { label: 'Objects', to: '' },
  { label: 'About', to: '' },
  { label: 'Contact', to: '' },
];
</script>

<template>
  <nav
    class="md:hidden"
    aria-hidden
  >
    <UiDropdownMenu>
      <UiDropdownMenuTrigger as-child>
        <UiButton
          variant="ghost"
          aria-label="navigation"
          class="data-[state=open]:-rotate-90"
        >
          <NuxtIcon
            name="ph:list"
            class="text-6 text-green-600"
          />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent
        class="w-56"
        align="start"
      >
        <UiDropdownMenuItem
          v-for="({ label, to }, i) in links"
          :key="i"
          as-child
        >
          <NuxtLink
            :to
            class="text-sm font-medium text-green-700 hover:text-green-500 underline"
          >
            {{ label }}
          </NuxtLink>
        </UiDropdownMenuItem>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  </nav>
</template>

<style scoped>

</style>
