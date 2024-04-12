import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { PageContainer } from "@/ui/layouts";
import { generateSiteMetadata, getBaseUrl } from "@/utils/siteMeta";
import { SlugChecker } from "@/utils/slugChecker";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const baseUrl = getBaseUrl();

  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) {
    return generateSiteMetadata({
      title: `Senarai iklan Raya tahun ${slug}`,
      description: `Tonton iklan-iklan Raya yang menarik pada tahun ${slug} di IklanRayaLagi, laman web yang punyai koleksi iklan Raya terbesar.`,
      image: `${baseUrl}/og?type=tahun&tahun=${slug}`,
    });
  }

  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) {
    const negara = slug.replace(/\b\w/g, (char) => char.toUpperCase());
    return generateSiteMetadata({
      title: `Senarai iklan Raya dari ${negara}`,
      description: `Tonton iklan-iklan Raya yang menarik dari ${negara} di IklanRayaLagi, laman web yang punyai koleksi iklan Raya terbesar.`,
      image: `${baseUrl}/og?type=negara&negara=${slug}`,
    });
  }

  const isSlugOrg = await SlugChecker.isSlugOrg(slug);
  if (isSlugOrg) {
    const getDariCache = unstable_cache(
      async () =>
        IklanModel.getSemuaIklanUntukOrganisasi(slug.replaceAll("_", " ")),
      [`semua-iklan-dari-org-${slug}`],
      { revalidate: 3600 },
    );
    const organisasi = await getDariCache();
    const namaOrganisasi = organisasi[0].organization;
    const vidId = organisasi[0].id;

    return generateSiteMetadata({
      title: `Senarai iklan Raya daripada ${namaOrganisasi}`,
      description: `Tonton iklan-iklan Raya yang menarik daripada ${namaOrganisasi} di IklanRayaLago, laman web yang punyai koleksi iklan Raya terbesar.`,
      image: `${baseUrl}/og?type=org&orgname=${encodeURIComponent(namaOrganisasi)}&vidid=${vidId}`,
    });
  }

  const iklan = await IklanModel.getIklanBySlug(slug);
  return generateSiteMetadata({
    title: iklan?.title || "",
    description: `${iklan?.title} di IklanRayaLagi, pengkalan data iklan raya terbesar.`,
    image: `${baseUrl}/og?type=iklan&vidid=${iklan?.id}&tajuk=${encodeURIComponent(iklan?.title || "")}`,
  });
}

export default async function EntryLayout({
  children,
  iklanPlayer,
  iklanLain,
  iklanTahunan,
  iklanNegara,
  iklanOrg,
  params,
}: {
  children: React.ReactNode;
  iklanPlayer: React.ReactNode;
  iklanLain: React.ReactNode;
  iklanTahunan: React.ReactNode;
  iklanNegara: React.ReactNode;
  iklanOrg: React.ReactNode;
  params: { slug: string };
}) {
  const { slug } = params;

  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) {
    return (
      <PageContainer page="iklan_tahunan">
        {iklanTahunan}
        {children}
      </PageContainer>
    );
  }

  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) {
    return (
      <PageContainer page="iklan_negara">
        {iklanNegara}
        {children}
      </PageContainer>
    );
  }

  const isSlugOrg = await SlugChecker.isSlugOrg(slug);
  if (isSlugOrg) {
    return (
      <PageContainer page="iklan_org">
        {iklanOrg}
        {children}
      </PageContainer>
    );
  }

  return (
    <PageContainer page="iklan">
      {iklanPlayer}
      {iklanLain}
      {children}
    </PageContainer>
  );
}
