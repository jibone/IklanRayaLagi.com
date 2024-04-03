import type { Iklan } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { KoleksiKadIklanTahunan } from "@/ui/koleksi";

export const dynamic = "force-dynamic";

async function getSenaraiTahunLepas(): Promise<Iklan[]> {
  const dbResult = await IklanModel.getRandomDariTahun({
    kecualiTahun: ["2024"],
    limit: 6,
  });

  return dbResult;
}

export default async function IklanTahunLepasanSlot() {
  const senaraiIklan = await getSenaraiTahunLepas();

  return (
    <KoleksiKadIklanTahunan
      label="Iklan tahun-tahun lepas..."
      labelPautan="Cari iklan ..."
      pautan="/"
      koleksiIklan={senaraiIklan}
    />
  );
}
