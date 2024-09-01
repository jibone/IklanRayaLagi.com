import { unstable_cache } from "next/cache";
import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { NegaraPage } from "@/ui/pages";
import { CacheSelama } from "@/utils/cache";

export default async function IklanNegaraPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const getSemuaNegara = () => {
    console.log(`--> getSemuaNegara()`);
    return IklanModel.getSemuaNegara();
  };
  const getSemuaNegaraCache = unstable_cache(
    async () => getSemuaNegara(),
    ["senarai-semua-negara"],
    { revalidate: CacheSelama._120jam() },
  );
  const getSemuaIklanNegara = (slug: string) => {
    console.log(`--> getSemuaIklanNegara()`);
    return IklanModel.getSemuaIklanNegara(slug);
  };
  const getSemuaIklanNegaraCache = unstable_cache(
    async (slug: string) => getSemuaIklanNegara(slug),
    [`senarai-semua-iklan-untuk-negara-${slug}`],
    { revalidate: CacheSelama._120jam() },
  );

  const semuaNegara = await getSemuaNegaraCache();
  const semuaIklanNegara = await getSemuaIklanNegaraCache(slug);

  return (
    <NegaraPage
      negara={slug as SenaraiNegara}
      senaraiNegara={semuaNegara as SenaraiNegara[]}
      koleksiIklan={semuaIklanNegara}
    />
  );
}
