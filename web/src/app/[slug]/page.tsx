import type { CountryList } from "@/db/schema/iklan";
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
    const org = await IklanModel.getAllForOrg(slug.replace("_", " "));
    const orgName = org[0].organization;
    return generateSiteMetadata({
      title: `Senarai iklan Raya daripada ${orgName}`,
      description: `Tonton iklan-iklan Raya yang menarik daripada ${orgName} di IklanRayaLago, laman web yang punyai koleksi iklan Raya terbesar.`,
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
  const allYear = await IklanModel.getAllYears();
  if (allYear.includes(slug)) {
    const allYearIklans = await IklanModel.getAllForYear(slug);

    return (
      <PageContainer>
        <TahunPage
          tahun={slug}
          senaraiTahun={allYear}
          koleksiIklan={allYearIklans}
        />
      </PageContainer>
    );
  }

  // list country ?
  const allCountries = await IklanModel.getAllCountries();
  if (allCountries.includes(slug)) {
    const allCountriesIklan = await IklanModel.getAllForCountries(slug);

    return (
      <PageContainer>
        <NegaraPage
          negara={slug as CountryList}
          senaraiNegara={allCountries as CountryList[]}
          koleksiIklan={allCountriesIklan}
        />
      </PageContainer>
    );
  }

  // list org ?
  const allOrgs = await IklanModel.getAllOrg();
  if (allOrgs.includes(slug)) {
    const org = slug.replaceAll("_", " ");
    const allOrgsName = await IklanModel.getAllOrg(false, false);

    const allOrgsWithSlug = allOrgsName.map((o) => {
      return {
        slug: `${o.toLowerCase().replaceAll(" ", "_")}`,
        name: `${o}`,
      };
    });

    const allOrgIklan = await IklanModel.getAllForOrg(org);
    const orgName = allOrgIklan[0].organization;
    const selectedOrg = {
      slug: orgName.toLowerCase().replaceAll(" ", "_"),
      name: orgName,
    };
    return (
      <PageContainer>
        <OrganisasiPage
          organisasi={selectedOrg}
          senaraiOrg={allOrgsWithSlug}
          koleksiIklan={allOrgIklan}
        />
      </PageContainer>
    );
  }

  // show the iklan from slug
  const iklanResult = await IklanModel.getIklanBySlug(slug);
  if (iklanResult !== undefined) {
    const videoCollection = await IklanModel.getRandom();
    return (
      <PageContainer>
        <IklanRayePage iklanRaye={iklanResult} koleksiIklan={videoCollection} />
      </PageContainer>
    );
  }

  return notFound();
}
