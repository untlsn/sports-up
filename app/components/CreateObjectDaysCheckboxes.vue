<script lang="ts" setup>
const items = [
  { value: 0, label: 'Monday' },
  { value: 1, label: 'Tuesday' },
  { value: 2, label: 'Wednesday' },
  { value: 3, label: 'Thursday' },
  { value: 4, label: 'Friday' },
  { value: 5, label: 'Saturday' },
  { value: 6, label: 'Sunday' },
] as const;
</script>

<template>
  <div class="flex justify-between mt-4 gap-4">
    <p>
      Available Days:
    </p>
    <div class="grid checkbox-fit justify-end gap-4 flex-1">
      <UiFormField
        v-for="item in items"
        v-slot="{ value, handleChange }"
        :key="item.value"
        type="checkbox"
        :value="item.value"
        :unchecked-value="false"
        name="days"
      >
        <UiFormItem class="flex gap-2 items-center">
          <UiFormControl>
            <UiCheckbox
              :model-value="value?.includes(item.value)"
              @update:model-value="handleChange"
            />
          </UiFormControl>
          <UiFormLabel class="font-normal cursor-pointer">
            {{ item.label }}
          </UiFormLabel>
        </UiFormItem>
      </UiFormField>
    </div>
  </div>
</template>

<style scoped>
.checkbox-fit {
	grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
}
</style>
