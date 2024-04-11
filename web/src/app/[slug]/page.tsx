import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";
import { notFound } from "next/navigation";
import { SlugChecker } from "@/utils/slugChecker";

export default async function Entry({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const getDariCache = unstable_cache(
    async () => IklanModel.getSemuaTahunan(),
    ["senarai-semua-tahunan"],
    { revalidate: 3600 },
  );
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
