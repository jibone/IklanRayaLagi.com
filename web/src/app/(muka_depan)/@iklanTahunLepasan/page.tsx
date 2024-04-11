import type { Iklan } from "@/db/schema/iklan";
import { cache } from "react";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";

export const revalidate = 3600;

async function getSenaraiTahunLepas(): Promise<Iklan[]> {
  const dbResult = await IklanModel.getRandomDariTahun({
    kecualiTahun: ["2024"],
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunLepasanSlot() {
  const getFromCache = cache(async () => {
    return await getSenaraiTahunLepas();
  });
  const senaraiIklan = await getFromCache();

  return (
    <KoleksiKadIklanTahunan
      label="Iklan tahun-tahun lepas..."
      labelPautan="Cari iklan ..."
      pautan="/"
      koleksiIklan={senaraiIklan}
    />
  );
}
