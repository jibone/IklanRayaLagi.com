import type { Iklan } from "@/db/schema/iklan";
import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";
import { CacheSelama } from "@/utils/cache";

async function getSenaraiTahunan(): Promise<Iklan[]> {
  console.log(`--> getSenaraiTahunan()`);

  const dbResult = await IklanModel.getRandomDariTahun({
    tahun: "2024",
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunIniPage() {
  const getDariCache = unstable_cache(
    async () => getSenaraiTahunan(),
    ["senarai-iklan-tahunan"],
    { revalidate: CacheSelama._120jam() },
  );
  const senaraiIklan = await getDariCache();

  return (
    <KoleksiKadIklanTahunan
      label="Iklan tahun ini (2024)"
      labelPautan="Senarai iklan tahun ini"
      pautan="2024"
      koleksiIklan={senaraiIklan}
    />
  );
}
