import { IklanModel } from "@/models";
import {
  OGIklanRayePage,
  OGTahunPage,
  OGNegaraPage,
  OGOrgPage,
  OGDefaultImage,
} from "@/ui/ogimage";
import { SlugChecker } from "@/utils/slugChecker";

export const runtime = "edge";
export const alt = "Iklan Raya Lagi";
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // check year
  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) {
    return OGTahunPage({ tahun: slug });
  }

  // check country
  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) {
    return OGNegaraPage({ negara: slug });
  }

  const isOrg = await SlugChecker.isSlugOrg(slug);
  if (isOrg) {
    const orgIklan = await IklanModel.getSemuaIklanUntukOrganisasi(
      slug.replace("_", " "),
    );
    return OGOrgPage({
      orgName: orgIklan[0].organization,
      vidId: orgIklan[0].id,
    });
  }

  // check iklan
  const iklan = await IklanModel.getIklanBySlug(slug);
  if (iklan !== undefined) {
    return OGIklanRayePage({ id: iklan.id, tajuk: iklan.title });
  }

  return OGDefaultImage();
}
