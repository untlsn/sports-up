import * as pg from 'drizzle-orm/pg-core';

export const object = pg.pgTable('object', {
  id:          pg.text().primaryKey(),
  name:        pg.text().notNull(),
  address:     pg.text().notNull(),
  description: pg.text().notNull(),
  lat:         pg.integer().notNull(),
  lng:         pg.integer().notNull(),
  timeStart:   pg.text().notNull(),
  timeEnd:     pg.text().notNull(),
  days:        pg.integer().notNull(),
  createdAt:   pg.timestamp().notNull(),
  updatedAt:   pg.timestamp().notNull(),
});
