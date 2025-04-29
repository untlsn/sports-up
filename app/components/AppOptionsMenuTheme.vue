<script lang="ts" setup>
const colorMode = useColorMode();

const setTheme = (value: string) => {
  colorMode.preference = value;
};
</script>

<template>
  <UiDropdownMenuSub class="flex justify-between items-center cursor-default">
    <UiDropdownMenu>
      <UiDropdownMenuSubTrigger class="flex items-center gap-2">
        <span class="text-sm font-medium">Theme:</span>
        <div class="relative size-4 overflow-hidden">
          <NuxtIcon
            name="ph:sun"
            class="text-4 absolute translate-y-0 transition-all dark:translate-y-6 top-0"
          />
          <NuxtIcon
            name="ph:moon"
            class="text-4 absolute -translate-y-6 transition-all dark:translate-y-0 top-0"
          />
        </div>
      </UiDropdownMenuSubTrigger>
      <UiDropdownMenuSubContent>
        <UiDropdownMenuItem @click="setTheme('light')">
          Light
        </UiDropdownMenuItem>
        <UiDropdownMenuItem @click="setTheme('dark')">
          Dark
        </UiDropdownMenuItem>
        <UiDropdownMenuItem @click="setTheme('system')">
          System
        </UiDropdownMenuItem>
      </UiDropdownMenuSubContent>
    </UiDropdownMenu>
  </UiDropdownMenuSub>
</template>

<style scoped>

</style>
