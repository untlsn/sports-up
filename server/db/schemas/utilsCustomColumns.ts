import * as sqlite from 'drizzle-orm/sqlite-core';
import * as s from 'drizzle-orm';

const uuid = () => crypto.randomUUID();
const currentTimeSQL = s.sql`(strftime('%Y-%m-%dT%H:%M:%S', 'now'))`;

/**
 * Create timestamp column with default value of current unix timestamp
 */
export function dbTimestamp(name: string) {
  return sqlite.text(name).notNull().default(currentTimeSQL);
}

/**
 * Create primary key column with default value of uuid
 */
export function dbPrimaryKey(name: string) {
  return sqlite.text(name).primaryKey().$default(uuid);
}

/**
 * All tables should have these columns, so instead of writing them every time just spread this
 */
export const dbGenericColumns = {
  id:        dbPrimaryKey(),
  createdAt: dbTimestamp(),
  updatedAt: dbTimestamp(),
};

/**
 * Sqlite doesn't have boolean type, so use it instead
 * Under the hood it uses integer type of 0 for false and 1 for true
 */
export const dbBoolean = sqlite.customType<{ data: boolean; driverData: number }>({
  dataType:   () => 'integer',
  toDriver:   (x) => x ? 1 : 0,
  fromDriver: (x) => x === 1,
});
