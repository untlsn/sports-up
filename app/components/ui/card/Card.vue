<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

interface Props extends PrimitiveProps {
  class?: HTMLAttributes['class'];
}

const props = defineProps<Props>();
</script>

<template>
  <Primitive
    data-slot="card"
    :as="as"
    :as-child="asChild"
    :class="
      cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </Primitive>
</template>
