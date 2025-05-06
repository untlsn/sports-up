import { createORPCVueColadaUtils } from '@orpc/vue-colada';
import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import { createRouterClient } from '@orpc/server';
import type { router } from '@@/server/orpc/index';

function createClientSiteOrpc(): RouterClient<typeof router> {
  return createORPCClient(new RPCLink({
    url() {
      if (typeof window === 'undefined') {
        throw new Error('RPCLink is not allowed on the server side.');
      }

      return new URL('/rpc', window.location.href);
    },
  }));
}

async function createServerSiteOrpc(): Promise<RouterClient<typeof router>> {
  const { router } = await import('@@/server/orpc/index');
  return createRouterClient(router);
}

/**
 * Nuxt Plugin for oRPC integration, so it can be used using `useNuxtApp.$orpc`
 *
 * This plugin sets up an oRPC client specifically designed to handle
 * Server-Side Rendering (SSR) by using separate client instances for the
 * server and browser environments. This prevents unnecessary self-calls
 * during SSR.
 *
 * The oRPC client is not exposed directly. Instead, it's wrapped with
 * Pinia Colada utilities (`createORPCVueColadaUtils`). This is because the primary
 * intended use case is with Pinia Colada's `useQuery` and `useMutation` hooks.
 *
 * However, if you need to make direct oRPC calls without using Pinia Colada,
 * you can access the underlying client's methods via the `.call()` method
 * provided by the wrapped object.
 *
 * @returns {object} An object providing the `orpc` instance via the `provide` key.
 * @property {object} orpc - The wrapped oRPC client with Pinia Colada utilities.
 */
export default defineNuxtPlugin(async () => {
  const client = import.meta.server
    ? await createServerSiteOrpc()
    : createClientSiteOrpc();

  const orpc = createORPCVueColadaUtils(client);

  return { provide: { orpc } };
});
