import { cache } from "react";
import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { NegaraPage } from "@/ui/pages";

export const revalidate = 3600;

export default async function IklanNegaraPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getDariCache = cache(async (slug: string) => {
    return {
      semuaNegara: await IklanModel.getSemuaNegara(),
      semuaIklanNegara: await IklanModel.getSemuaIklanNegara(slug),
    };
  });
  const { semuaNegara, semuaIklanNegara } = await getDariCache(slug);

  return (
    <NegaraPage
      negara={slug as SenaraiNegara}
      senaraiNegara={semuaNegara as SenaraiNegara[]}
      koleksiIklan={semuaIklanNegara}
    />
  );
}
