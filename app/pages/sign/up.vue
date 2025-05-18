<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/valibot';
import * as v from 'valibot';
import { useForm } from 'vee-validate';

const { $auth } = useNuxtApp();

const { isLoading, error, mutate } = useMutation({
  key: ['auth', 'sign', 'up'],
  async mutation(payload: { email: string; password: string; name: string }) {
    const { data, error } = await $auth.signUp.email(payload);
    if (error) throw error;
    return data;
  },
  onSuccess() {
    navigateTo('/');
  },
});

const formSchema = toTypedSchema(v.object({
  email:    v.pipe(v.string('Field required'), v.email()),
  password: v.pipe(v.string('Field required'), v.minLength(8), v.maxLength(256)),
  name:     v.pipe(v.string('Field required'), v.maxLength(256)),
}));

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit(mutate);
</script>

<template>
  <UiCard
    as="form"
    class="w-full max-w-md"

    @submit="onSubmit"
  >
    <UiCardHeader class="space-y-1">
      <AuthTitle>
        Create an account
      </AuthTitle>
      <UiCardDescription class="text-center">
        Enter your details to create your Sports-Up account
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="space-y-4">
      <AuthFormInput
        name="name"
        label="Name"
        placeholder="John Doe"
        required
      />
      <AuthFormInput
        name="email"
        label="Email"
        type="email"
        placeholder="your.email@example.com"
      />
      <AuthFormInput
        name="password"
        label="Password"
        type="password"
      />
      <AuthFormInput
        name="repeat-password"
        label="Repeat Password"
        type="password"
      />
      <AuthFormMutationErrorDisplay :error />
    </UiCardContent>
    <UiCardFooter class="flex flex-col space-y-4">
      <UiButton
        class="w-full"
        type="submit"
        :disabled="isLoading"
      >
        Create Account
      </UiButton>
      <div class="text-center text-sm">
        Already have an account?
        <NuxtLink
          to="/sign/in"
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          Sign in
        </NuxtLink>
      </div>
    </UiCardFooter>
  </UiCard>
</template>
