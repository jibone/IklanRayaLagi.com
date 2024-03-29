import type { Iklan } from "@/db/schema/iklan";
import { KoleksiKadIklan } from "@/ui/koleksi";
import { YearListBox } from "@/ui/listbox";

type TahunPageProps = {
  tahun: string;
  senaraiTahun: string[];
  koleksiIklan: Iklan[];
};

export default function TahunPage({
  tahun,
  senaraiTahun,
  koleksiIklan,
}: TahunPageProps) {
  return (
    <div
      data-testid="tahun-page-container"
      className="mx-auto max-w-screen-2xl"
    >
      <div className="p-4 md:py-8 md:px-3">
        <div className="flex font-semibold text-2xl">
          <span className="mr-2">Iklan Raya tahun </span>
          <span>
            <YearListBox yearList={senaraiTahun} yearCurrent={tahun} />
          </span>
        </div>

        <div className="mt-4 mb-6">
          <KoleksiKadIklan koleksiIklan={koleksiIklan} />
        </div>
      </div>
    </div>
  );
}
