<script lang="ts" setup>
import type { ComponentFieldBindingObject } from 'vee-validate';
import type { InputHTMLAttributes } from 'vue';

const id = useId();

defineProps<{
  label:        string;
  type?:        InputHTMLAttributes['type'];
  placeholder?: string;
  name:         string;
  class?:       string;
}>();

defineSlots<{
  default: (props: { componentField: ComponentFieldBindingObject<any> }) => unknown;
}>();
</script>

<template>
  <UiFormField
    v-slot="{ componentField }"
    :name
    validate-on-blur
  >
    <UiFormItem :class="$props.class">
      <UiFormLabel :for="id">
        {{ label }}
      </UiFormLabel>
      <UiFormControl>
        <slot
          name="default"
          :component-field
        >
          <UiInput
            :id
            :type
            :placeholder
            required
            v-bind="componentField"
          />
        </slot>
      </UiFormControl>
      <UiFormMessage />
    </UiFormItem>
  </UiFormField>
</template>

<style scoped>

</style>
