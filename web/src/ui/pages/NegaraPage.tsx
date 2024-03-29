import type { Iklan, SenaraiNegara } from "@/db/schema/iklan";
import { KoleksiKadIklan } from "@/ui/koleksi";
import CountryListBox from "../listbox/CountryListBox";

type NegaraPageProps = {
  negara: SenaraiNegara;
  senaraiNegara: SenaraiNegara[];
  koleksiIklan: Iklan[];
};

export default function NegaraPage({
  negara,
  senaraiNegara,
  koleksiIklan,
}: NegaraPageProps) {
  return (
    <div
      data-testid="negara-page-container"
      className="mx-auto max-w-screen-2xl"
    >
      <div className="p-4 md:py-8 md:px-3">
        <div className="flex font-semibold text-lg md:text-2xl">
          <span className="mr-2">Iklan Raya negara</span>
          <span>
            <CountryListBox
              countryList={senaraiNegara}
              countryCurrent={negara}
            />
          </span>
        </div>
        <div className="mt-4 mb-6">
          <KoleksiKadIklan koleksiIklan={koleksiIklan} />
        </div>
      </div>
    </div>
  );
}
