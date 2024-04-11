import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { SlugChecker } from "@/utils/slugChecker";
import { OrganisasiPage } from "@/ui/pages";

export default async function IklanOrgPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const isOrg = await SlugChecker.isSlugOrg(slug);
  if (!isOrg) return;

  const organisasi = slug.replaceAll("_", " ");
  const getSemuaOrganisasiCache = unstable_cache(
    async () => IklanModel.getSemuaOrganisasi(false, false),
    ["senarai-semua-org"],
    { revalidate: 3600 },
  );
  const getSemuaIklanUntukOrganisasiCache = unstable_cache(
    async (organisasi: string) =>
      IklanModel.getSemuaIklanUntukOrganisasi(organisasi),
    [`senarai-semua-iklan-untuk-${organisasi}`],
    { revalidate: 3600 },
  );
  const semuaNamaOrganisasi = await getSemuaOrganisasiCache();
  const semuaIklanOrganisasi =
    await getSemuaIklanUntukOrganisasiCache(organisasi);

  const semuaOrganisasiBersamaSlug = semuaNamaOrganisasi.map((o) => {
    return {
      slug: `${o.toLowerCase().replaceAll(" ", "_")}`,
      name: `${o}`,
    };
  });

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
