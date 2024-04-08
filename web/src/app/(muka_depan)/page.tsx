import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";
import { generateSiteMetadata } from "@/utils/siteMeta";

export async function generateMetadata() {
  return generateSiteMetadata({
    title: "Pengkalan Data Iklan Raya Terbesar",
    description:
      "Iklan Raya Lagi atau dengan nama pendeknya (IRL) sebuah Pengkalan Data Iklan Raya Terbesar yang menempatkan koleksi iklan Hari Raya pelbagai jenis.",
  });
}

export default async function MukaDepan() {
  const semuaTahun = await IklanModel.getSemuaTahunan();

  return <KoleksiHalaman semuaTahun={semuaTahun} />;
}
