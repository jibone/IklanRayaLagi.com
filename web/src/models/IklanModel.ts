import type { Iklan } from "@/db/schema/iklan";
import { sql as vercelSql } from "@vercel/postgres";
import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { iklan } from "@/db/schema/iklan";

const DB = drizzle(vercelSql);

export type Stats = {
  totalIklan: string;
  totalIklanMalaysia: string;
  totalIklanIndonesia: string;
  totalIklanSingapura: string;
  tahunTerawal: string;
  tahunTerlatest: string;
};

export class IklanModel {
  static async getSemuaIklan(): Promise<Iklan[]> {
    const result = await DB.execute(sql`SELECT * FROM iklan`);

    return result.rows as Iklan[];
  }

  static async getSemuaTahunan(): Promise<string[]> {
    const result = await DB.selectDistinctOn([iklan.year], { year: iklan.year })
      .from(iklan)
      .orderBy(iklan.year);

    return result.map((i) => {
      return i.year;
    });
  }

  static async getSemuaIklanUntukTahun(year: string): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan WHERE year = ${year} ORDER BY random()`,
    );

    return result.rows as Iklan[];
  }

  static async getRandomDariTahun({
    tahun,
    kecualiTahun,
    limit,
  }: {
    tahun?: string;
    kecualiTahun?: string[];
    limit: number;
  }): Promise<Iklan[]> {
    let result: Iklan[] = [];

    if (tahun !== undefined) {
      const dbResult = await DB.execute(
        sql`SELECT * FROM iklan WHERE year = ${tahun} ORDER BY random() LIMIT ${limit}`,
      );

      if (dbResult.rowCount > 0) {
        result = dbResult.rows as Iklan[];
      }
    }

    if (kecualiTahun !== undefined && kecualiTahun.length > 0) {
      const dbResult = await DB.execute(
        sql`SELECT * FROM iklan WHERE year NOT IN ${kecualiTahun} ORDER BY random() LIMIT ${limit}`,
      );

      if (dbResult.rowCount > 0) {
        result = dbResult.rows as Iklan[];
      }
    }

    return result;
  }

  static async getSemuaNegara(): Promise<string[]> {
    const result = await DB.selectDistinctOn([iklan.country], {
      country: iklan.country,
    })
      .from(iklan)
      .orderBy(iklan.country);

    return result.map((c) => {
      return c.country;
    });
  }

  static async getSemuaIklanNegara(negara: string): Promise<Iklan[]> {
    const result = await DB.execute(
      sql`SELECT * FROM iklan WHERE country = ${negara} ORDER BY year DESC`,
    );

    return result.rows as Iklan[];
  }

  static async getSemuaOrganisasi(
    lowcase = true,
    slug = true,
  ): Promise<string[]> {
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

  static async getSemuaIklanUntukOrganisasi(org: string): Promise<Iklan[]> {
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

  static async getStats(): Promise<Stats> {
    // get total iklan
    let totalIklan = "";
    const resultTotalIklan = await DB.execute(sql`SELECT COUNT(id) FROM iklan`);
    if (resultTotalIklan.rowCount !== 0) {
      totalIklan = resultTotalIklan.rows[0].count as string;
    }

    const getCountryStats = async (country: string) => {
      let totalIklanNegara = "";
      const resultTotalIklanNegara = await DB.execute(
        sql`SELECT COUNT(id) FROM iklan WHERE country = ${country}`,
      );
      if (resultTotalIklanNegara.rowCount !== 0) {
        totalIklanNegara = resultTotalIklanNegara.rows[0].count as string;
      }
      return totalIklanNegara;
    };

    const totalIklanMalaysia = await getCountryStats("malaysia");
    const totalIklanIndonesia = await getCountryStats("indonesia");
    const totalIklanSingapura = await getCountryStats("singapura");

    const resultYear = await DB.execute(
      sql`SELECT DISTINCT year FROM iklan ORDER BY year asc`,
    );

    const yearList = resultYear.rows.map((y) => {
      return y.year;
    });
    const tahunTerawal = yearList[0] as string;
    const tahunTerlatest = yearList[yearList.length - 1] as string;

    return {
      totalIklan,
      totalIklanMalaysia,
      totalIklanIndonesia,
      totalIklanSingapura,
      tahunTerawal,
      tahunTerlatest,
    };
  }
}
