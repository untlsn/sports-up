<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue';

const id = useId();

const props = defineProps<{
  label:        string;
  type?:        InputHTMLAttributes['type'];
  placeholder?: string;
  name:         string;
}>();

defineSlots<{
  label: (props: { label: string; id: string }) => unknown;
}>();

const placeholder = computed(() => {
  if (props.placeholder) return props.placeholder;
  if (props.type === 'password') return '••••••••';
  if (props.type === 'email') return 'your.email@example.com';
  return undefined;
});
</script>

<template>
  <UiFormField
    v-slot="{ componentField }"
    :name
    class="space-y-2"
    validate-on-blur
  >
    <UiFormItem>
      <slot
        :id
        name="label"
        :label
      >
        <UiFormLabel :for="id">
          {{ label }}
        </UiFormLabel>
      </slot>
      <UiFormControl>
        <UiInput
          :id
          :type
          :placeholder
          required
          v-bind="componentField"
        />
      </UiFormControl>
      <UiFormMessage />
    </UiFormItem>
  </UiFormField>
</template>

<style scoped>

</style>
