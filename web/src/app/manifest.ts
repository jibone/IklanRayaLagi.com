import { defaultSiteMeta } from "@/utils/siteMeta";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultSiteMeta.title,
    short_name: defaultSiteMeta.shortName,
    description: defaultSiteMeta.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fce0c1",
    theme_color: "#b0cdd4",
    icons: [
      {
        src: "favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
