import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect:       'sqlite',
  schema:        './server/db/schemas/*',
  out:           './drizzle',
  casing:        'snake_case',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
