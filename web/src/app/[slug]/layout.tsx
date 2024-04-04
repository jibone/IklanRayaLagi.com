import { IklanModel } from "@/models";
import { PageContainer } from "@/ui/layouts";
import { generateSiteMetadata } from "@/utils/siteMeta";
import { SlugChecker } from "@/utils/slugChecker";

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
      slug.replaceAll("_", " "),
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

export default async function EntryLoading({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const { slug } = params;

  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) {
    return <PageContainer page="iklan_tahunan">{children}</PageContainer>;
  }

  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) {
    return <PageContainer page="iklan_negara">{children}</PageContainer>;
  }

  const isSlugOrg = await SlugChecker.isSlugOrg(slug);
  if (isSlugOrg) {
    return <PageContainer page="iklan_org">{children}</PageContainer>;
  }

  return <PageContainer page="iklan">{children}</PageContainer>;
}
