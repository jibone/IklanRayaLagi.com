import { SlugChecker } from "./slugChecker";
import { IklanModel } from "@/models";

// prompt
// Write a jest test for the imported SlugChecker. It test all the static
// methods from SlugChecker. It mocked the calls to IklanModel's static
// methods
describe("SlugChecker", () => {
  describe("isSlugTahun", () => {
    jest
      .spyOn(IklanModel, "getSemuaTahunan")
      .mockImplementation(async () => ["2023", "2022", "2021"]);

    describe("when slug is tahun", () => {
      it("returns true", async () => {
        const result = await SlugChecker.isSlugTahun("2023");
        expect(result).toBe(true);
      });
    });

    describe("when slug is not tahun", () => {
      it("returns false", async () => {
        const result = await SlugChecker.isSlugTahun("malaysia");
        expect(result).toBe(false);
      });
    });
  });

  // prompt
  // do the same text as above for the static method `isSlugNegara`,
  // `isSlugOrg`, and `isSlugIklan`

  describe("isSlugNegara", () => {
    jest
      .spyOn(IklanModel, "getSemuaNegara")
      .mockImplementation(async () => ["malaysia", "singapore", "indonesia"]);

    describe("when slug is negara", () => {
      it("returns true", async () => {
        const result = await SlugChecker.isSlugNegara("malaysia");
        expect(result).toBe(true);
      });
    });

    describe("when slug is not negara", () => {
      it("returns false", async () => {
        const result = await SlugChecker.isSlugNegara("2023");
        expect(result).toBe(false);
      });
    });
  });

  describe("isSlugOrg", () => {
    jest
      .spyOn(IklanModel, "getSemuaOrganisasi")
      .mockImplementation(async () => ["org1", "org2", "org3"]);

    describe("when slug is org", () => {
      it("returns true", async () => {
        const result = await SlugChecker.isSlugOrg("org1");
        expect(result).toBe(true);
      });
    });

    describe("when slug is not org", () => {
      it("returns false", async () => {
        const result = await SlugChecker.isSlugOrg("2023");
        expect(result).toBe(false);
      });
    });
  });

  describe("isSlugIklan", () => {
    jest
      .spyOn(IklanModel, "getIklanBySlug")
      .mockImplementation(async (slug) => {
        if (slug === "slug1") {
          return {
            id: "XXXXXX",
            title: "This is iklan Jiboneus",
            year: "2023",
            country: "malaysia",
            organization: "Jiboneus",
            slug: "2024_jiboneus_iklan_raya",
          };
        }
        return undefined;
      });

    describe("when slug is iklan", () => {
      it("returns true", async () => {
        const result = await SlugChecker.isSlugIklan("slug1");
        expect(result).toBe(true);
      });
    });

    describe("when slug is not iklan", () => {
      it("returns false", async () => {
        const result = await SlugChecker.isSlugIklan("2023");
        expect(result).toBe(false);
      });
    });
  });
});
