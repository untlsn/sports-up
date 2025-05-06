<script lang="ts" setup>
const props = defineProps<{
  name:     string;
  maxTime?: number;
  minTime?: number;
}>();

const timeArray = computed(() => {
  const res: number[] = [];
  const { maxTime = Infinity, minTime = -Infinity } = props;

  for (let i = 0; i < 25; i++) {
    if (i < maxTime && i > minTime) res.push(i);
  }

  return res;
});
</script>

<template>
  <UiFormField
    v-slot="{ componentField, errors }"
    :name
    validate-on-blur
  >
    <UiFormItem>
      <UiFormControl>
        <UiSelect v-bind="componentField">
          <UiSelectTrigger
            :aria-invalid="!!errors.length"
            class="w-40"
          >
            <NuxtIcon name="ph:clock" />
            <UiSelectValue placeholder="Select time" />
          </UiSelectTrigger>
          <UiSelectContent class="max-h-60">
            <UiSelectItem
              v-for="time in timeArray"
              :key="time"
              :value="time"
            >
              {{ time.toString().padStart(2, '0') }}:00
            </UiSelectItem>
          </UiSelectContent>
        </UiSelect>
      </UiFormControl>
      <UiFormMessage />
    </UiFormItem>
  </UiFormField>
</template>

<style scoped>

</style>
