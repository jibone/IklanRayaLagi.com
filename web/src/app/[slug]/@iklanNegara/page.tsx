import { unstable_cache } from "next/cache";
import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { NegaraPage } from "@/ui/pages";

export default async function IklanNegaraPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const getSemuaNegaraCache = unstable_cache(
    async () => IklanModel.getSemuaNegara(),
    ["senarai-semua-negara"],
    { revalidate: 3600 },
  );
  const getSemuaIklanNegaraCache = unstable_cache(
    async (slug: string) => IklanModel.getSemuaIklanNegara(slug),
    [`senarai-semua-iklan-untuk-negara-${slug}`],
    { revalidate: 3600 },
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
