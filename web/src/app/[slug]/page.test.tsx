import "@testing-library/jest-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { IklanModel } from "@/models";
import Entry, { generateMetadata } from "./page";

jest.mock("react-player", () => "react-player");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Entry Page", () => {
  afterEach(cleanup);

  describe("when slug is year", () => {
    jest
      .spyOn(IklanModel, "getAllYears")
      .mockImplementation(async () => ["2024", "2023", "2022"]);
    jest.spyOn(IklanModel, "getAllForYear").mockImplementation(async () => []);

    const testParams = { params: { slug: "2023" } };

    it("renders the tahun page", async () => {
      render(await Entry(testParams));

      const tahunPageComponent = screen.getByTestId("tahun-page-container");

      expect(tahunPageComponent).toBeInTheDocument();
    });

    it("renders the correct page metadata", async () => {
      const result = await generateMetadata(testParams);

      expect(result.title).toBe("Senarai iklan Raya tahun 2023");
    });
  });

  describe("when slug is country", () => {
    jest
      .spyOn(IklanModel, "getAllCountries")
      .mockImplementation(async () => ["malaysia", "indonesia", "singapore"]);
    jest
      .spyOn(IklanModel, "getAllForCountries")
      .mockImplementation(async () => []);

    const testParams = { params: { slug: "malaysia" } };

    it("renders the negara page", async () => {
      render(await Entry(testParams));

      const negaraPageComponent = screen.getByTestId("negara-page-container");

      expect(negaraPageComponent).toBeInTheDocument();
    });

    it("renders the correct page metadata", async () => {
      const result = await generateMetadata(testParams);

      expect(result.title).toBe("Senarai iklan Raya dari Malaysia");
    });
  });

  describe("when slug is organization", () => {
    jest
      .spyOn(IklanModel, "getAllOrg")
      .mockImplementation(async () => ["jiboneus"]);
    jest.spyOn(IklanModel, "getAllForOrg").mockImplementation(async () => [
      {
        id: "xxx",
        title: "The Jiboneus Labs",
        year: "2024",
        country: "malaysia",
        organization: "jiboneus",
        slug: "the_jiboneus_labs",
      },
    ]);

    const testParams = { params: { slug: "jiboneus" } };

    it("renders the organization page", async () => {
      render(await Entry(testParams));

      const organisasiPageComponent = screen.getByTestId(
        "organisasi-page-container",
      );

      expect(organisasiPageComponent).toBeInTheDocument();
    });

    it("renders the organization page", async () => {
      const result = await generateMetadata(testParams);

      expect(result.title).toBe("Senarai iklan Raya daripada jiboneus");
    });
  });

  describe("when slug is an iklan", () => {
    jest
      .spyOn(IklanModel, "getIklanBySlug")
      .mockImplementation(async (slug) => {
        if (slug === "iklan_raya_jiboneus") {
          return {
            id: "xxx",
            title: "Iklan Raya Jiboneus",
            year: "2024",
            country: "malaysia",
            organization: "Jibonues",
            slug: "this_is_slug",
          };
        }
        return undefined;
      });
    jest.spyOn(IklanModel, "getRandom").mockImplementation(async () => [
      {
        id: "xxx",
        title: "Iklan Raya Jiboneus",
        year: "2024",
        country: "malaysia",
        organization: "Jibonues",
        slug: "this_is_slug",
      },
    ]);

    const testParams = { params: { slug: "iklan_raya_jiboneus" } };

    it("renders the iklan page", async () => {
      render(await Entry(testParams));

      const videoPageComponent = screen.getByTestId("video-page-container");

      expect(videoPageComponent).toBeInTheDocument();
    });

    it("renders the correct metadata", async () => {
      const result = await generateMetadata(testParams);

      expect(result.title).toBe("Iklan Raya Jiboneus");
    });
  });
});
