import { IklanModel } from "@/models";
import { KoleksiHalaman } from "@/ui/koleksi";

export default async function MukaDepan() {
  const semuaTahun = await IklanModel.getSemuaTahunan();

  return <KoleksiHalaman semuaTahun={semuaTahun} />;
}
