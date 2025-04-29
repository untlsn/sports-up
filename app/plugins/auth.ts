import { createAuthClient } from 'better-auth/vue';

export default defineNuxtPlugin(() => {
  const auth = createAuthClient();

  return { provide: { auth } };
});
