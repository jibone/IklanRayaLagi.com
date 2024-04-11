import type { Iklan } from "@/db/schema/iklan";
import { cache } from "react";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";

export const revalidate = 3600;

async function getSenaraiTahunan(): Promise<Iklan[]> {
  const dbResult = await IklanModel.getRandomDariTahun({
    tahun: "2024",
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunIniPage() {
  const getFromCache = cache(async () => {
    return await getSenaraiTahunan();
  });
  const senaraiIklan = await getFromCache();

  return (
    <KoleksiKadIklanTahunan
      label="Iklan tahun ini (2024)"
      labelPautan="Senarai iklan tahun ini"
      pautan="2024"
      koleksiIklan={senaraiIklan}
    />
  );
}
