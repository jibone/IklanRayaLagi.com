import { IklanModel } from "@/models";
import { SlugChecker } from "@/utils/slugChecker";
import { OrganisasiPage } from "@/ui/pages";

export const dynamic = "force-dynamic";

export default async function IklanOrgPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const isOrg = await SlugChecker.isSlugOrg(slug);
  if (!isOrg) return;

  const organisasi = slug.replaceAll("_", " ");
  const semuaNamaOrganisasi = await IklanModel.getSemuaOrganisasi(false, false);
  const semuaOrganisasiBersamaSlug = semuaNamaOrganisasi.map((o) => {
    return {
      slug: `${o.toLowerCase().replaceAll(" ", "_")}`,
      name: `${o}`,
    };
  });
  const semuaIklanOrganisasi =
    await IklanModel.getSemuaIklanUntukOrganisasi(organisasi);
  const namaOrganisasi = semuaIklanOrganisasi[0].organization;
  const selectedOrg = {
    slug: namaOrganisasi.toLowerCase().replaceAll(" ", "_"),
    name: namaOrganisasi,
  };
  return (
    <OrganisasiPage
      organisasi={selectedOrg}
      senaraiOrg={semuaOrganisasiBersamaSlug}
      koleksiIklan={semuaIklanOrganisasi}
    />
  );
}
