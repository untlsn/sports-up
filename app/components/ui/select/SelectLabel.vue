<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import { SelectLabel, type SelectLabelProps } from 'reka-ui';

interface Props extends SelectLabelProps { class?: HTMLAttributes['class'] }

const props = defineProps<Props>();
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="cn('px-2 py-1.5 text-sm font-medium', props.class)"
  >
    <slot />
  </SelectLabel>
</template>
