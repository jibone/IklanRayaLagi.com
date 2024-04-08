import { MetadataRoute } from "next";
import { IklanModel } from "@/models";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://iklanrayalagi.com";

  const semuaTahunan = await IklanModel.getSemuaTahunan();
  const senaraiTahunan = semuaTahunan.map((t) => {
    return {
      url: `${baseUrl}/${t}`,
      lastModified: new Date(),
      priority: 0.8,
    };
  });

  const semuaIklan = await IklanModel.getSemuaIklan();
  const senaraiIklan = semuaIklan.map((ik) => {
    return {
      url: `${baseUrl}/${ik.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    };
  });

  const staticNav: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/malaysia`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/indonesia`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/singapura`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...senaraiTahunan,
    ...senaraiIklan,
  ];

  return staticNav;
}
