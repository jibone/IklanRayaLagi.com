import { IklanModel } from "@/models";

export class SlugChecker {
  static async isSlugTahun(slug: string): Promise<boolean> {
    // TODO: refactor, no need to call database for this can hard code all the yaers?
    const allYear = await IklanModel.getAllYears();
    if (allYear.includes(slug)) {
      return true;
    }
    return false;
  }

  static async isSlugNegara(slug: string): Promise<boolean> {
    // TODO: refactor, no need to call database for this, can hard code all the countries?
    const allCountries = await IklanModel.getAllCountries();
    if (allCountries.includes(slug)) {
      return true;
    }
    return false;
  }

  static async isSlugOrg(slug: string): Promise<boolean> {
    const allOrgs = await IklanModel.getAllOrg();
    if (allOrgs.includes(slug)) {
      return true;
    }
    return false;
  }

  static async isSlugIklan(slug: string): Promise<boolean> {
    const iklan = await IklanModel.getIklanBySlug(slug);
    if (iklan !== undefined) {
      return true;
    }
    return false;
  }
}
