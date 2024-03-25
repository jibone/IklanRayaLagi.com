import type { Iklan } from "@/db/schema/iklan";
import { sql as vercelSql } from "@vercel/postgres";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { iklan } from "@/db/schema/iklan";

const DB = drizzle(vercelSql);

export class IklanModel {
  static async getAllYears(): Promise<string[]> {
    const result = await DB.selectDistinctOn([iklan.year], { year: iklan.year })
      .from(iklan)
      .orderBy(iklan.year);

    return result.map((i) => {
      return i.year;
    });
  }

  static async getAllForYear(year: string): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan WHERE year = ${year} ORDER BY random()`,
    );

    return result.rows as Iklan[];
  }

  static async getAllCountries(): Promise<string[]> {
    const result = await DB.selectDistinctOn([iklan.country], {
      country: iklan.country,
    })
      .from(iklan)
      .orderBy(iklan.country);

    return result.map((c) => {
      return c.country;
    });
  }

  static async getAllForCountries(country: string): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan WHERE country = ${country} ORDER BY year DESC`,
    );

    return result.rows as Iklan[];
  }

  static async getAllOrg(lowcase = true, slug = true): Promise<string[]> {
    const result = await DB.selectDistinctOn([iklan.organization], {
      organization: iklan.organization,
    })
      .from(iklan)
      .orderBy(iklan.organization);

    return result.map((o) => {
      if (lowcase && !slug) {
        return o.organization.toLocaleLowerCase();
      }
      if (lowcase && slug) {
        return o.organization.toLowerCase().replaceAll(" ", "_");
      }
      return o.organization;
    });
  }

  static async getAllForOrg(org: string): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan WHERE organization ILIKE ${org} ORDER BY year DESC`,
    );

    return result.rows as Iklan[];
  }

  static async getRandom(limit = 12): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan ORDER BY random() LIMIT ${limit}`,
    );
    return result.rows as Iklan[];
  }

  static async getIklanBySlug(slug: string): Promise<Iklan | undefined> {
    const result = await DB.select().from(iklan).where(eq(iklan.slug, slug));
    if (result.length === 0) return undefined;

    return result[0];
  }
}
