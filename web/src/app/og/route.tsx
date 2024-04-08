/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og";
import {
  OGDefaultImage,
  OGTahunPage,
  OGNegaraPage,
  OGOrgPage,
  OGIklanRayePage,
} from "@/ui/ogimage";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasType = searchParams.has("type");
    const type = hasType ? searchParams.get("type") : "default";

    if (type === "default") {
      return OGDefaultImage();
    }

    if (type === "tahun") {
      const tahun = searchParams.get("tahun") || "";
      return OGTahunPage({ tahun });
    }

    if (type === "negara") {
      const negara = searchParams.get("negara") || "";
      return OGNegaraPage({ negara });
    }

    if (type === "org") {
      const orgName = searchParams.get("orgname") || "";
      const vidId = searchParams.get("vidid") || "";
      return OGOrgPage({ orgName, vidId });
    }

    if (type === "iklan") {
      const id = searchParams.get("vidid") || "";
      const tajuk = searchParams.get("tajuk") || "";
      return OGIklanRayePage({ id, tajuk });
    }

    return new ImageResponse(<div>thie is the type</div>);
  } catch (e: any) {
    console.log(`Error: ${e.message}`);
    return new Response("Failed to generate the image", { status: 500 });
  }
}
