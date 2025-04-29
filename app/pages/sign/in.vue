<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/valibot';
import * as v from 'valibot';
import { useForm } from 'vee-validate';

const { $auth } = useNuxtApp();

const { isLoading, error, mutate } = useMutation({
  key: ['auth', 'sign', 'in'],
  async mutation(payload: Parameters<typeof $auth.signIn.email>[0]) {
    const { data, error } = await $auth.signIn.email(payload);
    if (error) throw error;
    return data;
  },
  onSuccess() {
    navigateTo('/');
  },
});

const formSchema = toTypedSchema(v.object({
  email:    v.pipe(v.string('Field required'), v.email('Invalid email')),
  password: v.pipe(v.string('Field required'), v.minLength(8, 'Password must be at least 8 characters'), v.maxLength(255, 'Password is too long. Max 255')),
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
        Sports-Up
      </AuthTitle>
      <UiCardDescription class="text-center">
        Enter your credentials to sign in to your account
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="space-y-4">
      <AuthFormInput
        name="email"
        label="Email"
        type="email"
      />
      <AuthFormInput
        name="password"
        label="Password"
        type="password"
      >
        <template #label="{ id, label }">
          <div class="flex justify-between items-center">
            <UiLabel :for="id">
              {{ label }}
            </UiLabel>
            <NuxtLink
              to="/forgot-password"
              class="text-xs text-blue-600 hover:text-blue-800 underline dark:text-blue-400"
            >
              Forgot password?
            </NuxtLink>
          </div>
        </template>
      </AuthFormInput>
      <p class="text-center py-2 text-sm text-destructive-foreground">
        {{ error?.message }}
      </p>
    </UiCardContent>
    <UiCardFooter class="flex flex-col space-y-4">
      <UiButton
        type="submit"
        :disabled="isLoading"
        class="w-full"
      >
        Sign In
      </UiButton>
      <div class="text-center text-sm">
        Don't have an account?
        <NuxtLink
          to="/sign/up"
          class="text-blue-600 hover:text-blue-800 font-medium underline dark:text-blue-400"
        >
          Sign up
        </NuxtLink>
      </div>
    </UiCardFooter>
  </UiCard>
</template>
