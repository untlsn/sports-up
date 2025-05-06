<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/valibot';
import { useForm } from 'vee-validate';
import * as v from 'valibot';

const formSchema = toTypedSchema(v.object({
  name:        v.string('Field required'),
  address:     v.string('Field required'),
  description: v.string('Field required'),
  cords:       v.tuple([v.number(), v.number()]),
  timeStart:   v.number('Field required'),
  timeEnd:     v.number('Field required'),
  days:        v.array(v.number()),
}));

const { handleSubmit, defineField, values } = useForm({
  validationSchema: formSchema,
});

const [cords] = defineField('cords');

const onSubmit = handleSubmit((values) => {

}, () => {
  const el = document.querySelector<HTMLInputElement>('[aria-invalid="true"]');
  if (!el) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) el.focus();
  });
  observer.observe(el);
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

const convertDaysArrayToBits = (days: number[] | undefined) => {
  if (!days) return 0;
  return days.reduce((acc, cur) => acc + (1 << 6 - cur), 0);
};

const { $orpc } = useNuxtApp();

const { data } = useQuery($orpc.test.queryOptions());
</script>

<template>
  <form
    class="p-4"
    novalidate
    @submit="onSubmit"
  >
    <ObjectCreateCard
      title="Object basic information"
      icon="ph:note"
    >
      {{ data?.hello }}
      <UiCardContent class="grid grid-cols-2 gap-4">
        <ObjectCreateFormInput
          name="name"
          label="Name"
        />
        <ObjectCreateFormInput
          name="address"
          label="Address"
        />
        <ObjectCreateFormInput
          v-slot="{ componentField }"
          name="description"
          label="Description"
          class="col-span-full"
        >
          <UiTextarea v-bind="componentField" />
        </ObjectCreateFormInput>
      </UiCardContent>
    </ObjectCreateCard>
    <ObjectCreateCard
      title="Location"
      icon="ph:map-pin"
    >
      <UiCardContent class="h-150 isolate">
        <CreateObjectMap v-model:cords="cords" />
      </UiCardContent>
    </ObjectCreateCard>
    <ObjectCreateCard
      title="Availability"
      icon="ph:clock"
    >
      <UiCardContent>
        <div class="flex justify-end gap-4 flex-wrap">
          <p class="mr-auto self-center">
            Available Hours:
          </p>
          <CreateObjectTimeSelect
            name="timeStart"
            :max-time="values.timeEnd"
          />
          <CreateObjectTimeSelect
            name="timeEnd"
            :min-time="values.timeStart"
          />
        </div>
        <CreateObjectDaysCheckboxes />
      </UiCardContent>
    </ObjectCreateCard>
    <div class="max-w-240 mx-auto my-12 p-8 flex flex-row justify-end gap-8">
      <UiButton
        variant="outline"
        class="w-24"
        as-child
      >
        <NuxtLink to="/">
          Cancel
        </NuxtLink>
      </UiButton>
      <UiButton
        class="w-24"
        type="submit"
      >
        Submit
      </UiButton>
    </div>
  </form>
</template>

<style scoped>

</style>
