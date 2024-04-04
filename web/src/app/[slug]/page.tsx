import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { TahunPage, NegaraPage, OrganisasiPage } from "@/ui/pages";
import { KoleksiHalaman } from "@/ui/koleksi";
import { notFound } from "next/navigation";

export default async function Entry({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // list year ?
  const senaraiSemuaTahun = await IklanModel.getSemuaTahunan();
  if (senaraiSemuaTahun.includes(slug)) {
    const senaraiSemuaIklan = await IklanModel.getSemuaIklanUntukTahun(slug);

    return (
      <TahunPage
        tahun={slug}
        senaraiTahun={senaraiSemuaTahun}
        koleksiIklan={senaraiSemuaIklan}
      />
    );
  }

  // list country ?
  const semuaNegara = await IklanModel.getSemuaNegara();
  if (semuaNegara.includes(slug)) {
    const semuaIklanNegara = await IklanModel.getSemuaIklanNegara(slug);

    return (
      <NegaraPage
        negara={slug as SenaraiNegara}
        senaraiNegara={semuaNegara as SenaraiNegara[]}
        koleksiIklan={semuaIklanNegara}
      />
    );
  }

  // list org ?
  const semuaOrganisasi = await IklanModel.getSemuaOrganisasi();
  if (semuaOrganisasi.includes(slug)) {
    const organisasi = slug.replaceAll("_", " ");
    const semuaNamaOrganisasi = await IklanModel.getSemuaOrganisasi(
      false,
      false,
    );

    const semuaOrganisasiBersamaSlug = semuaNamaOrganisasi.map((o) => {
      return {
        slug: `${o.toLowerCase().replaceAll(" ", "_")}`,
        name: `${o}`,
      };
    });

    const semuaIklanOrganisasi =
      await IklanModel.getSemuaIklanUntukOrganisasi(organisasi);
    const namaOrganisasi = semuaIklanOrganisasi[0].organization;
    const selectedOrg = {
      slug: namaOrganisasi.toLowerCase().replaceAll(" ", "_"),
      name: namaOrganisasi,
    };
    return (
      <OrganisasiPage
        organisasi={selectedOrg}
        senaraiOrg={semuaOrganisasiBersamaSlug}
        koleksiIklan={semuaIklanOrganisasi}
      />
    );
  }

  // show the iklan from slug
  const iklanResult = await IklanModel.getIklanBySlug(slug);
  if (iklanResult !== undefined) {
    return <KoleksiHalaman semuaTahun={senaraiSemuaTahun || []} />;
  }

  return notFound();
}
