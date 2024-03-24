import { pgTable, varchar, index } from "drizzle-orm/pg-core";

export const iklan = pgTable(
  "iklan",
  {
    id: varchar("id", { length: 180 }).primaryKey(),
    title: varchar("title", { length: 256 }).notNull(),
    year: varchar("year", { length: 5 }).notNull(),
    country: varchar("country", {
      enum: ["malaysia", "singapura", "indonesia", "brunei", "others"],
    }).notNull(),
    organization: varchar("organization", { length: 256 }).notNull(),
    slug: varchar("slug", { length: 256 }).notNull().unique(),
  },
  (table) => {
    return {
      yearIdx: index("year_idx").on(table.year),
      countryIdx: index("country_idx").on(table.country),
      organizationIdx: index("organization_idx").on(table.organization),
      slugIdx: index("slug_idx").on(table.slug),
    };
  },
);

export type Iklan = typeof iklan.$inferSelect;
export type NewIklan = typeof iklan.$inferInsert;
export type CountryList =
  | "malaysia"
  | "indonesia"
  | "singapura"
  | "brunei"
  | "others";
