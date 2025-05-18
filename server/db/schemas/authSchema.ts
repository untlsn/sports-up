import * as sqlite from 'drizzle-orm/sqlite-core';
import { dbBoolean, dbGenericColumns } from './utilsCustomColumns';

export const user = sqlite.sqliteTable('user', {
  ...dbGenericColumns,
  name:          sqlite.text().notNull(),
  email:         sqlite.text().notNull().unique(),
  emailVerified: dbBoolean().notNull(),
  image:         sqlite.text(),
});

export const session = sqlite.sqliteTable('session', {
  ...dbGenericColumns,
  expiresAt: sqlite.text().notNull(),
  token:     sqlite.text().notNull().unique(),
  ipAddress: sqlite.text(),
  userAgent: sqlite.text(),
  userId:    sqlite.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
});

export const account = sqlite.sqliteTable('account', {
  ...dbGenericColumns,
  accountId:             sqlite.text().notNull(),
  providerId:            sqlite.text().notNull(),
  userId:                sqlite.text().notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken:           sqlite.text(),
  refreshToken:          sqlite.text(),
  idToken:               sqlite.text(),
  accessTokenExpiresAt:  sqlite.text(),
  refreshTokenExpiresAt: sqlite.text(),
  scope:                 sqlite.text(),
  password:              sqlite.text(),
});

export const verification = sqlite.sqliteTable('verification', {
  ...dbGenericColumns,
  identifier: sqlite.text().notNull(),
  value:      sqlite.text().notNull(),
  expiresAt:  sqlite.text().notNull(),
});
