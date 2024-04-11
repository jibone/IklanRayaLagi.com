import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { TahunPage } from "@/ui/pages";

export default async function IklanTahunanPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getSemuaTahunanCache = unstable_cache(
    async () => IklanModel.getSemuaTahunan(),
    ["senarai-semua-tahunan"],
    { revalidate: 3600 },
  );
  const getSemuaIklanUntukTahunCache = unstable_cache(
    async (slug: string) => IklanModel.getSemuaIklanUntukTahun(slug),
    [`senarai-semua-iklan-untuk-tahun-${slug}`],
    { revalidate: 3600 },
  );
  const senaraiSemuaTahun = await getSemuaTahunanCache();
  const senaraiSemuaIklan = await getSemuaIklanUntukTahunCache(slug);

  return (
    <TahunPage
      tahun={slug}
      senaraiTahun={senaraiSemuaTahun}
      koleksiIklan={senaraiSemuaIklan}
    />
  );
}
