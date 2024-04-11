import { cache } from "react";
import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";
import { notFound } from "next/navigation";
import { SlugChecker } from "@/utils/slugChecker";

export const revalidate = 3600;

export default async function Entry({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const getDariCache = cache(async () => {
    return await IklanModel.getSemuaTahunan();
  });
  const senaraiSemuaTahun = await getDariCache();

  const isTahun = await SlugChecker.isSlugTahun(slug);
  if (isTahun) return <KoleksiHalaman semuaTahun={senaraiSemuaTahun} />;

  const isNegara = await SlugChecker.isSlugNegara(slug);
  if (isNegara) return <KoleksiHalaman semuaTahun={senaraiSemuaTahun} />;

  const isOrg = await SlugChecker.isSlugOrg(slug);
  if (isOrg) return <KoleksiHalaman semuaTahun={senaraiSemuaTahun} />;

  const iklanResult = await IklanModel.getIklanBySlug(slug);
  if (iklanResult !== undefined) {
    return <KoleksiHalaman semuaTahun={senaraiSemuaTahun || []} />;
  }

  return notFound();
}
