import { Pautan } from "@/ui/pautan";
import { IklanModel } from "@/models";

export const dynamic = "force-dynamic";

export default async function InformasiStatsPage() {
  const {
    totalIklan,
    totalIklanMalaysia,
    totalIklanIndonesia,
    totalIklanSingapura,
    tahunTerawal,
    tahunTerlatest,
  } = await IklanModel.getStats();

  return (
    <div className="bg-green-400 border-b-2 border-b-black">
      <div className="mx-auto max-w-screen-xl py-4 px-4">
        <div className="text-center text-4xl font-bold underline decoration-red-700 decoration-4">
          Statistik Terkini
        </div>
        <div className="mt-4">
          <p className="mb-4 text-lg lg:text-xl text-center">
            jumlah iklan yang telah direkodkan
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-bold">Jumlah Iklan</div>
              <div className="text-6xl">{totalIklan}</div>
            </div>
            <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-bold">Dari Malaysia</div>
              <div className="text-6xl">{totalIklanMalaysia}</div>
            </div>
            <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-bold">Dari Indonesia</div>
              <div className="text-6xl">{totalIklanIndonesia}</div>
            </div>
            <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="font-bold">Dari Singapura</div>
              <div className="text-6xl">{totalIklanSingapura}</div>
            </div>
          </div>
        </div>
        <div className="text-lg text-center">
          Iklan terawal dari tahun{" "}
          <Pautan href={`/${tahunTerawal}`}>{tahunTerawal}</Pautan> sehingga
          tahun terkini{" "}
          <Pautan href={`/${tahunTerlatest}`}>{tahunTerlatest}</Pautan>
        </div>
      </div>
    </div>
  );
}
