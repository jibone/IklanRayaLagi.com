import { cleanup } from "@testing-library/react";
import { IklanModel } from ".";

const mockedOrderBy = jest.fn();
const mockedExcute = jest.fn();
const mockedSelect = jest.fn();
const mockedReturnedIklan = {
  id: "xxx",
  title: "test title",
  year: "2024",
  organization: "Jiboneus",
  slug: "this_slug",
};
jest.mock("drizzle-orm/vercel-postgres", () => ({
  drizzle: () => ({
    selectDistinctOn: () => ({
      from: () => ({
        orderBy: mockedOrderBy,
      }),
    }),
    execute: () => mockedExcute(),
    select: () => ({
      from: () => ({
        where: mockedSelect,
      }),
    }),
  }),
}));

describe("IklanModel", () => {
  afterEach(cleanup);

  describe(".getAllYears", () => {
    it("returns a list of all the years", async () => {
      mockedOrderBy.mockReturnValue([
        { id: "xxx", year: "2024" },
        { id: "xxx", year: "2023" },
      ]);
      const result = await IklanModel.getAllYears();

      expect(result).toEqual(["2024", "2023"]);
    });
  });

  describe(".getAllForYear", () => {
    it("returns all iklan for the year", async () => {
      mockedExcute.mockReturnValue({
        rows: [mockedReturnedIklan],
      });
      const result = await IklanModel.getAllForYear("2024");

      expect(result).toEqual([mockedReturnedIklan]);
    });
  });

  describe(".getAllCountries", () => {
    it("returns all the countries in lower case", async () => {
      mockedOrderBy.mockReturnValue([
        { id: "xxx", country: "malaysia" },
        { id: "xxx", country: "indonesia" },
      ]);
      const result = await IklanModel.getAllCountries();

      expect(result).toEqual(["malaysia", "indonesia"]);
    });
  });

  describe(".getAllForCountries", () => {
    it("returns all iklan for country", async () => {
      mockedExcute.mockReturnValue({
        rows: [mockedReturnedIklan],
      });
      const result = await IklanModel.getAllForCountries("malaysia");

      expect(result).toEqual([mockedReturnedIklan]);
    });
  });

  describe(".getAllOrg", () => {
    describe("when lowercase is true and slug is false", () => {
      it("returns list of org lowercase but no underscore", async () => {
        mockedOrderBy.mockReturnValue([
          { id: "xxx", organization: "Jiboneus" },
          { id: "xxx", organization: "Iklan Raya Lagi" },
        ]);
        const result = await IklanModel.getAllOrg(true, false);

        expect(result).toEqual(["jiboneus", "iklan raya lagi"]);
      });
    });

    describe("when lowercase is true and slug is true", () => {
      it("returns list of org in lowercase with underscore", async () => {
        mockedOrderBy.mockReturnValue([
          { id: "xxx", organization: "Jiboneus" },
          { id: "xxx", organization: "Iklan Raya Lagi" },
        ]);
        const result = await IklanModel.getAllOrg(true, true);

        expect(result).toEqual(["jiboneus", "iklan_raya_lagi"]);
      });
    });

    describe("when lowercase is false and slug is false", () => {
      it("returns list of org in original case", async () => {
        mockedOrderBy.mockReturnValue([
          { id: "xxx", organization: "Jiboneus" },
          { id: "xxx", organization: "Iklan Raya Lagi" },
        ]);
        const result = await IklanModel.getAllOrg(false, false);

        expect(result).toEqual(["Jiboneus", "Iklan Raya Lagi"]);
      });
    });
  });

  describe(".getAllForOrg", () => {
    it("returns all iklan for org", async () => {
      mockedExcute.mockReturnValue({ rows: [mockedReturnedIklan] });
      const result = await IklanModel.getAllForOrg("Jiboneus");

      expect(result).toEqual([mockedReturnedIklan]);
    });
  });

  describe(".getRandom", () => {
    it("returns random iklan", async () => {
      mockedExcute.mockReturnValue({ rows: [mockedReturnedIklan] });
      const result = await IklanModel.getRandom();

      expect(result).toEqual([mockedReturnedIklan]);
    });
  });

  describe(".getIklanBySlug", () => {
    describe("when there is result in db", () => {
      it("returns a iklan based on slug", async () => {
        mockedSelect.mockReturnValue([mockedReturnedIklan]);
        const result = await IklanModel.getIklanBySlug("iklan_raya_lagi");

        expect(result).toEqual(mockedReturnedIklan);
      });

      describe("when there no result in DB", () => {
        it("returns an empty array", async () => {
          mockedSelect.mockReturnValue([]);
          const result = await IklanModel.getIklanBySlug("iklan_raya_lagi");

          expect(result).toEqual(undefined);
        });
      });
    });
  });
});
