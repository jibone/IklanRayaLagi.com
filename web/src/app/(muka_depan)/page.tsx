import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";
import { generateSiteMetadata } from "@/utils/siteMeta";
import { CacheSelama } from "@/utils/cache";

export async function generateMetadata() {
  return generateSiteMetadata({
    title: "Pengkalan Data Iklan Raya Terbesar",
    description:
      "Iklan Raya Lagi atau dengan nama pendeknya (IRL) sebuah Pengkalan Data Iklan Raya Terbesar yang menempatkan koleksi iklan Hari Raya pelbagai jenis.",
  });
}

export default async function MukaDepan() {
  const getSemuaTahunan = () => {
    console.log(`--> getSemuaTahunan()`);
    return IklanModel.getSemuaTahunan();
  };

  const getDariCache = unstable_cache(
    async () => getSemuaTahunan(),
    ["semua-tahunan"],
    { revalidate: CacheSelama._120jam() },
  );
  const semuaTahun = await getDariCache();

  return <KoleksiHalaman semuaTahun={semuaTahun} />;
}
