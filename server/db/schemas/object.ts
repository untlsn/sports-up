import * as sqlite from 'drizzle-orm/sqlite-core';
import { dbGenericColumns } from './utilsCustomColumns';

export const object = sqlite.sqliteTable('object', {
  ...dbGenericColumns,
  name:        sqlite.text().notNull(),
  address:     sqlite.text().notNull(),
  description: sqlite.text().notNull(),
  lat:         sqlite.integer().notNull(),
  lng:         sqlite.integer().notNull(),
  timeStart:   sqlite.text().notNull(),
  timeEnd:     sqlite.text().notNull(),
  days:        sqlite.integer().notNull(),
});
