import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schemas';

export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
  casing: 'snake_case',
});
