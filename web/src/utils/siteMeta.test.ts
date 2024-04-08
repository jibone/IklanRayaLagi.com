import type { Metadata } from "next";
import { generateSiteMetadata, defaultSiteMeta, getBaseUrl } from "./siteMeta";

describe("Utils", () => {
  describe("getBaseURL()", () => {
    describe("env is 'development'", () => {
      const originalEnv = process.env;

      beforeEach(() => {
        jest.resetModules();
        process.env = {
          ...originalEnv,
          NODE_ENV: "development",
        };
      });

      afterEach(() => {
        process.env = originalEnv;
      });

      it("returns the correce base url", () => {
        const baseURL = getBaseUrl();
        expect(baseURL).toBe("http://localhost:3000");
      });
    });

    describe("env is not 'development'", () => {
      it("returns the correct base url", () => {
        const baseURL = getBaseUrl();
        expect(baseURL).toBe(defaultSiteMeta.siteUrl);
      });
    });
  });

  describe("generateSiteMetadata()", () => {
    it("returns the formated site metadata with description", () => {
      const mockSiteMeta = {
        title: "Tajuk iklan raya",
        description: "Ini diskripsi iklan raya.",
      };
      const generatedSiteMetadata = generateSiteMetadata(mockSiteMeta);

      const titleTemplate = `${defaultSiteMeta.title} > ${mockSiteMeta.title}`;
      const expectedResult: Metadata = {
        title: mockSiteMeta.title,
        description: mockSiteMeta.description,
        openGraph: {
          title: titleTemplate,
          description: mockSiteMeta.description,
          url: "./",
          siteName: defaultSiteMeta.title,
          type: "website",
          images: ["https://IklanRayaLagi.com/og?type=default"],
        },
        twitter: {
          title: titleTemplate,
          description: mockSiteMeta.description,
          card: "summary_large_image",
          images: ["https://IklanRayaLagi.com/og?type=default"],
        },
      };

      expect(generatedSiteMetadata).toEqual(expectedResult);
    });

    it("returns the formated site metadata without description", () => {
      const mockSiteMeta = {
        title: "Tajuk iklan raya",
      };
      const generatedSiteMetadata = generateSiteMetadata(mockSiteMeta);

      const titleTemplate = `${defaultSiteMeta.title} > ${mockSiteMeta.title}`;
      const expectedResult: Metadata = {
        title: mockSiteMeta.title,
        description: defaultSiteMeta.description,
        openGraph: {
          title: titleTemplate,
          description: defaultSiteMeta.description,
          url: "./",
          siteName: defaultSiteMeta.title,
          type: "website",
          images: ["https://IklanRayaLagi.com/og?type=default"],
        },
        twitter: {
          title: titleTemplate,
          description: defaultSiteMeta.description,
          card: "summary_large_image",
          images: ["https://IklanRayaLagi.com/og?type=default"],
        },
      };

      expect(generatedSiteMetadata).toEqual(expectedResult);
    });
  });
});
