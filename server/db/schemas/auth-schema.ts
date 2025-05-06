import * as pg from 'drizzle-orm/pg-core';

export const user = pg.pgTable('user', {
  id:            pg.text().primaryKey(),
  name:          pg.text().notNull(),
  email:         pg.text().notNull().unique(),
  emailVerified: pg.boolean().notNull(),
  image:         pg.text(),
  createdAt:     pg.timestamp().notNull(),
  updatedAt:     pg.timestamp().notNull(),
});

export const session = pg.pgTable('session', {
  id:        pg.text().primaryKey(),
  expiresAt: pg.timestamp().notNull(),
  token:     pg.text().notNull().unique(),
  createdAt: pg.timestamp().notNull(),
  updatedAt: pg.timestamp().notNull(),
  ipAddress: pg.text(),
  userAgent: pg.text(),
  userId:    pg.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = pg.pgTable('account', {
  id:                    pg.text().primaryKey(),
  accountId:             pg.text().notNull(),
  providerId:            pg.text().notNull(),
  userId:                pg.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken:           pg.text(),
  refreshToken:          pg.text(),
  idToken:               pg.text(),
  accessTokenExpiresAt:  pg.timestamp(),
  refreshTokenExpiresAt: pg.timestamp(),
  scope:                 pg.text(),
  password:              pg.text(),
  createdAt:             pg.timestamp().notNull(),
  updatedAt:             pg.timestamp().notNull(),
});

export const verification = pg.pgTable('verification', {
  id:         pg.text().primaryKey(),
  identifier: pg.text().notNull(),
  value:      pg.text().notNull(),
  expiresAt:  pg.timestamp().notNull(),
  createdAt:  pg.timestamp(),
  updatedAt:  pg.timestamp(),
});
