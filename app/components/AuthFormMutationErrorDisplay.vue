<script lang="ts" setup>
defineProps<{ error?: Error | null }>();
</script>

<template>
  <p class="text-center py-2 text-sm text-destructive-foreground">
    {{ error?.message || 'Something went wrong' }}
  </p>
</template>

<style scoped>

</style>
