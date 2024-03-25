CREATE TABLE IF NOT EXISTS "iklan" (
	"id" varchar(180) PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"year" varchar(5) NOT NULL,
	"country" varchar NOT NULL,
	"organization" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "year_idx" ON "iklan" ("year");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "country_idx" ON "iklan" ("country");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "organization_idx" ON "iklan" ("organization");