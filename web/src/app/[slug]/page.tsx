import type { SenaraiNegara } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { PageContainer } from "@/ui/layouts";
import {
  IklanRayePage,
  TahunPage,
  NegaraPage,
  OrganisasiPage,
} from "@/ui/pages";
import { generateSiteMetadata } from "@/utils/siteMeta";
import { SlugChecker } from "@/utils/slugChecker";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) {
    return generateSiteMetadata({
      title: `Senarai iklan Raya tahun ${slug}`,
      description: `Tonton iklan-iklan Raya yang menarik pada tahun ${slug} di IklanRayaLagi, laman web yang punyai koleksi iklan Raya terbesar.`,
    });
  }

  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) {
    const negara = slug.replace(/\b\w/g, (char) => char.toUpperCase());
    return generateSiteMetadata({
      title: `Senarai iklan Raya dari ${negara}`,
      description: `Tonton iklan-iklan Raya yang menarik dari ${negara} di IklanRayaLagi, laman web yang punyai koleksi iklan Raya terbesar.`,
    });
  }

  const isSlugOrg = await SlugChecker.isSlugOrg(slug);
  if (isSlugOrg) {
    const organisasi = await IklanModel.getSemuaIklanUntukOrganisasi(
      slug.replace("_", " "),
    );
    const namaOrganisasi = organisasi[0].organization;
    return generateSiteMetadata({
      title: `Senarai iklan Raya daripada ${namaOrganisasi}`,
      description: `Tonton iklan-iklan Raya yang menarik daripada ${namaOrganisasi} di IklanRayaLago, laman web yang punyai koleksi iklan Raya terbesar.`,
    });
  }

  const iklan = await IklanModel.getIklanBySlug(slug);
  return generateSiteMetadata({
    title: iklan?.title || "",
    description: `${iklan?.title} di IklanRayaLagi, pengkalan data iklan raya terbesar.`,
  });
}

export default async function Entry({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // list year ?
  const senaraiSemuaTahun = await IklanModel.getSemuaTahunan();
  if (senaraiSemuaTahun.includes(slug)) {
    const senaraiSemuaIklan = await IklanModel.getSemuaIklanUntukTahun(slug);

    return (
      <PageContainer page="iklan">
        <TahunPage
          tahun={slug}
          senaraiTahun={senaraiSemuaTahun}
          koleksiIklan={senaraiSemuaIklan}
        />
      </PageContainer>
    );
  }

  // list country ?
  const semuaNegara = await IklanModel.getSemuaNegara();
  if (semuaNegara.includes(slug)) {
    const semuaIklanNegara = await IklanModel.getSemuaIklanNegara(slug);

    return (
      <PageContainer page="iklan">
        <NegaraPage
          negara={slug as SenaraiNegara}
          senaraiNegara={semuaNegara as SenaraiNegara[]}
          koleksiIklan={semuaIklanNegara}
        />
      </PageContainer>
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
      <PageContainer page="iklan">
        <OrganisasiPage
          organisasi={selectedOrg}
          senaraiOrg={semuaOrganisasiBersamaSlug}
          koleksiIklan={semuaIklanOrganisasi}
        />
      </PageContainer>
    );
  }

  // show the iklan from slug
  const iklanResult = await IklanModel.getIklanBySlug(slug);
  if (iklanResult !== undefined) {
    const videoCollection = await IklanModel.getRandom();
    return (
      <PageContainer page="iklan">
        <IklanRayePage iklanRaye={iklanResult} koleksiIklan={videoCollection} />
      </PageContainer>
    );
  }

  return notFound();
}
