import type { Iklan } from "@/db/schema/iklan";
import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";

async function getSenaraiTahunLepas(): Promise<Iklan[]> {
  const dbResult = await IklanModel.getRandomDariTahun({
    kecualiTahun: ["2024"],
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunLepasanSlot() {
  const getFromCache = unstable_cache(
    async () => getSenaraiTahunLepas(),
    ["senarai-iklan-tahun-lepas"],
    { revalidate: 3600 },
  );
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
