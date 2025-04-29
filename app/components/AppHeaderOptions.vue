<script lang="ts" setup>
import { buttonVariants } from './ui/button';

const session = await useSession();

const userName = computed(() => session.data.value?.user.name);

const { $auth } = useNuxtApp();

defineSlots<{
  default: () => unknown;
}>();
</script>

<template>
  <UiDropdownMenu>
    <slot>
      <UiDropdownMenuTrigger
        :class="buttonVariants({ variant: 'outline' })"
        class="text-secondary text-xs group"
      >
        <NuxtIcon
          name="ph:user"
          class="text-5"
        />
        {{ userName || 'Options' }}
        <NuxtIcon
          name="ph:caret-down"
          class="text-3 group-data-[state=open]:-rotate-180 transition-transform"
        />
      </UiDropdownMenuTrigger>
    </slot>
    <UiDropdownMenuContent
      class="w-40"
    >
      <AppOptionsMenuTheme />
      <UiDropdownMenuSeparator />
      <UiDropdownMenuItem
        v-if="userName"
        class="text-destructive-foreground"
        @click="$auth.signOut()"
      >
        <NuxtIcon name="ph:sign-out" />
        Sign out
      </UiDropdownMenuItem>
      <template v-else>
        <UiDropdownMenuItem class="hover:opacity-50 transition-opacity">
          <NuxtIcon name="ph:sign-in" />
          <NuxtLink to="/sign/in">Sign In</NuxtLink>
        </UiDropdownMenuItem>
        <UiDropdownMenuItem class="text-secondary hover:opacity-50 transition-opacity">
          <NuxtIcon name="ph:user-plus" />
          <NuxtLink to="/sign/up">Get Started</NuxtLink>
        </UiDropdownMenuItem>
      </template>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>

<style scoped>
</style>
