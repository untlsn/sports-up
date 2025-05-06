import { createAuthClient } from 'better-auth/vue';

/**
 * Nuxt plugin that provide auth client from better-auth, so it can be used using `useNuxtApp.$auth`
 * Most of better-auth code is placed in
 * - {@link /auth.ts} - code better auth config mainly for better-auth cli
 * - {@link /server/api/auth/[...auth].ts} - code better auth api endpoint
 */
export default defineNuxtPlugin(() => {
  const auth = createAuthClient();

  return { provide: { auth } };
});
