<script setup lang="ts">
import { SelectSeparator, type SelectSeparatorProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

interface Props extends SelectSeparatorProps { class?: HTMLAttributes['class'] }

const props = defineProps<Props>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    v-bind="delegatedProps"
    :class="cn('bg-border pointer-events-none -mx-1 my-1 h-px', props.class)"
  />
</template>
