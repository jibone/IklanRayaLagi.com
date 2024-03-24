import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production.local" });
} else {
  dotenv.config({ path: ".env.development.local" });
}

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    user: process.env.POSTGRES_USER as string,
    password: process.env.POSTGRES_PASSWORD as string,
    host: process.env.POSTGRES_HOST as string,
    port: 5432,
    database: process.env.POSTGRES_DATABASE as string,
    ssl: true,
  },
} satisfies Config;
