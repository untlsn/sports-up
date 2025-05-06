<script setup lang="ts">
import { SelectScrollDownButton, type SelectScrollDownButtonProps, useForwardProps } from 'reka-ui';
import { computed, type HTMLAttributes } from 'vue';

interface Props extends SelectScrollDownButtonProps { class?: HTMLAttributes['class'] }

const props = defineProps<Props>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down-button"
    v-bind="forwardedProps"
    :class="cn('flex cursor-default items-center justify-center py-1', props.class)"
  >
    <slot>
      <NuxtIcon
        name="ph:caret-down"
        class="text-4"
      />
    </slot>
  </SelectScrollDownButton>
</template>
