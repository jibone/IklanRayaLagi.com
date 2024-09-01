import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { TahunPage } from "@/ui/pages";
import { CacheSelama } from "@/utils/cache";

export default async function IklanTahunanPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getSemuaTahunan = () => {
    console.log(`--> getSemuaTahunan`);
    return IklanModel.getSemuaTahunan();
  };
  const getSemuaTahunanCache = unstable_cache(
    async () => getSemuaTahunan(),
    ["senarai-semua-tahunan"],
    { revalidate: CacheSelama._120jam() },
  );
  const getSemuaIklanUntukTahun = (slug: any) => {
    console.log(`--> getSemuaIklanUntukTahun() slug: ${slug}`);
    return IklanModel.getSemuaIklanUntukTahun(slug);
  };
  const getSemuaIklanUntukTahunCache = unstable_cache(
    async (slug: string) => getSemuaIklanUntukTahun(slug),
    [`senarai-semua-iklan-untuk-tahun-${slug}`],
    { revalidate: CacheSelama._120jam() },
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
