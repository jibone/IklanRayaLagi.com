import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { NegaraPage } from "@/ui/pages";

export const dynamic = "force-dynamic";

export default async function IklanNegaraPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const semuaNegara = await IklanModel.getSemuaNegara();
  const semuaIklanNegara = await IklanModel.getSemuaIklanNegara(slug);

  return (
    <NegaraPage
      negara={slug as SenaraiNegara}
      senaraiNegara={semuaNegara as SenaraiNegara[]}
      koleksiIklan={semuaIklanNegara}
    />
  );
}
