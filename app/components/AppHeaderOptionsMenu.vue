<script setup lang="ts">
const colorMode = useColorMode();

const setTheme = (value: string) => {
  colorMode.preference = value;
};
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton
        variant="ghost"
        size="icon"
        class="size-9 text-gray-600 hover:text-green-600"
        aria-label="Options"
      >
        <NuxtIcon
          name="ph:gear"
          class="text-5"
        />
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent
      class="w-56"
    >
      <UiDropdownMenuLabel>Options</UiDropdownMenuLabel>
      <UiDropdownMenuSeparator />
      <UiDropdownMenuGroup>
        <UiDropdownMenuSub class="flex justify-between items-center cursor-default">
          <UiDropdownMenu>
            <UiDropdownMenuSubTrigger class="flex">
              <span class="text-sm font-medium">Theme:</span>
              <NuxtIcon
                name="ph:sun"
                class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              />
              <!-- <NuxtIcon
                name="ph:moon"
                class="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              /> -->
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
        <UiDropdownMenuSeparator />
        <UiDropdownMenuItem>Language</UiDropdownMenuItem>
        <UiDropdownMenuItem>Accessibility</UiDropdownMenuItem>
        <UiDropdownMenuItem>Notifications</UiDropdownMenuItem>
      </UiDropdownMenuGroup>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<style scoped>
/* Any component-specific styles can go here */
</style>
