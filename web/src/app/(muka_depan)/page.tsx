import { cache } from "react";
import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";
import { generateSiteMetadata } from "@/utils/siteMeta";

export const revalidate = 3600;

export async function generateMetadata() {
  return generateSiteMetadata({
    title: "Pengkalan Data Iklan Raya Terbesar",
    description:
      "Iklan Raya Lagi atau dengan nama pendeknya (IRL) sebuah Pengkalan Data Iklan Raya Terbesar yang menempatkan koleksi iklan Hari Raya pelbagai jenis.",
  });
}

export default async function MukaDepan() {
  const getDariCache = cache(async () => {
    return await IklanModel.getSemuaTahunan();
  });
  const semuaTahun = await getDariCache();

  return <KoleksiHalaman semuaTahun={semuaTahun} />;
}
