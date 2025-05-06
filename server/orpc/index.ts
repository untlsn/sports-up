import { os } from '@orpc/server';

export const router = {
  test: os.handler(async (ctx) => {
    return { hello: 'world' };
  }),
};
