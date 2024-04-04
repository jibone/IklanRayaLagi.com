import { IklanModel } from "@/models";
import { TahunPage } from "@/ui/pages";

export const dynamic = "force-dynamic";

export default async function IklanTahunanPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const senaraiSemuaTahun = await IklanModel.getSemuaTahunan();
  const senaraiSemuaIklan = await IklanModel.getSemuaIklanUntukTahun(slug);

  return (
    <TahunPage
      tahun={slug}
      senaraiTahun={senaraiSemuaTahun}
      koleksiIklan={senaraiSemuaIklan}
    />
  );
}
