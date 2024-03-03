import { Metadata } from "next";

export const defaultSiteMeta = {
  title: "Iklan Raya Lagi (IRL)",
  shortName: "Iklan Raya Lagi",
  description: "Koleksi iklan raya sepanjang zaman",
  siteUrl: "https://IklanRayaLagi.com",
};

// pilih baseURL yang betul.
export function getBaseUrl(): string {
  let baseURL = defaultSiteMeta.siteUrl;

  // TODO: macam tak kena buat macam ni, refactor this!
  if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3000";
  }

  return baseURL;
}

type SiteMetadataProps = {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
};

// generate site metadata.
export function generateSiteMetadata({
  title,
  description,
  image,
  ...rest
}: SiteMetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: `${defaultSiteMeta.title} > ${title}`,
      description: description || defaultSiteMeta.description,
      url: "./",
      siteName: defaultSiteMeta.title,
      type: "website",
    },
    twitter: {
      title: `${defaultSiteMeta.title} > ${title}`,
      description: description || defaultSiteMeta.description,
      card: "summary_large_image",
    },
    ...rest,
  };
}
