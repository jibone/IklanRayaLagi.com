import { IklanModel } from "@/models";

export class SlugChecker {
  static async isSlugTahun(slug: string): Promise<boolean> {
    // TODO: refactor, no need to call database for this can hard code all the yaers?
    const allYear = await IklanModel.getSemuaTahunan();
    if (allYear.includes(slug)) {
      return true;
    }
    return false;
  }

  static async isSlugNegara(slug: string): Promise<boolean> {
    // TODO: refactor, no need to call database for this, can hard code all the countries?
    const semuaNegara = await IklanModel.getSemuaNegara();
    if (semuaNegara.includes(slug)) {
      return true;
    }
    return false;
  }

  static async isSlugOrg(slug: string): Promise<boolean> {
    const semuaOrganisasi = await IklanModel.getSemuaOrganisasi();
    if (semuaOrganisasi.includes(slug)) {
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
