ALTER TABLE "iklan" ADD COLUMN "slug" varchar(256) NOT NULL;--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "slug_idx" ON "iklan" ("slug");--> statement-breakpoint
ALTER TABLE "iklan" ADD CONSTRAINT "iklan_slug_unique" UNIQUE("slug");