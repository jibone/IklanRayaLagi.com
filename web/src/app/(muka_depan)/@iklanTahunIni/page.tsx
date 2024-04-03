import type { Iklan } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";

export const dynamic = "force-dynamic";

async function getSenaraiTahunan(): Promise<Iklan[]> {
  const dbResult = await IklanModel.getRandomDariTahun({
    tahun: "2024",
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunIniPage() {
  const senaraiIklan = await getSenaraiTahunan();

  return (
    <KoleksiKadIklanTahunan
      label="Iklan tahun ini (2024)"
      labelPautan="Senarai iklan tahun ini"
      pautan="2024"
      koleksiIklan={senaraiIklan}
    />
  );
}
