import type { Iklan } from "@/db/schema/iklan";
import { PageContainer } from "@/ui/layouts";
import { MukaDepanPage } from "@/ui/pages";
import { IklanModel } from "@/models";

async function getSenaraiTahunan(): Promise<Iklan[][]> {
  const tahunan = ["2024", "2023", "2022", "2021", "2020"];

  const senaraiTahunan: Iklan[][] = [];
  for (let i = 0; i < tahunan.length; i++) {
    const dbResult = await IklanModel.getRandomDariTahun({
      tahun: tahunan[i],
      limit: 6,
    });

    senaraiTahunan.push(dbResult);
  }

  return senaraiTahunan;
}

async function getSenaraiTahunLepas(): Promise<Iklan[]> {
  const tahunan = ["2024", "2023", "2022", "2021", "2020"];
  const result = await IklanModel.getRandomDariTahun({
    kecualiTahun: tahunan,
    limit: 6,
  });

  return result;
}

async function getSemuaIklan(): Promise<Iklan[]> {
  const result = await IklanModel.getSemuaIklan();
  return result;
}

export default async function Home() {
  const senaraiTahunan = await getSenaraiTahunan();
  const senaraiTahunLepas = await getSenaraiTahunLepas();
  const semuaIklan = await getSemuaIklan();

  return (
    <PageContainer page="muka_depan">
      <MukaDepanPage
        senaraiTahunan={senaraiTahunan}
        senaraiTahunLepas={senaraiTahunLepas}
        semuaIklan={semuaIklan}
      />
    </PageContainer>
  );
}
