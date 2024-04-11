import { cache } from "react";
import { IklanModel } from "@/models";
import { TahunPage } from "@/ui/pages";

export const revalidate = 3600;

export default async function IklanTahunanPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getDariCache = cache(async (slug: string) => {
    return {
      senaraiSemuaTahun: await IklanModel.getSemuaTahunan(),
      senaraiSemuaIklan: await IklanModel.getSemuaIklanUntukTahun(slug),
    };
  });
  const { senaraiSemuaTahun, senaraiSemuaIklan } = await getDariCache(slug);

  return (
    <TahunPage
      tahun={slug}
      senaraiTahun={senaraiSemuaTahun}
      koleksiIklan={senaraiSemuaIklan}
    />
  );
}
