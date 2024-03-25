import type { Iklan, CountryList } from "@/db/schema/iklan";
import { VideoCollection } from "@/ui/collection";
import CountryListBox from "../listbox/CountryListBox";

type NegaraPageProps = {
  negara: CountryList;
  senaraiNegara: CountryList[];
  koleksiIklanRaye: Iklan[];
};

export default function NegaraPage({
  negara,
  senaraiNegara,
  koleksiIklanRaye,
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
          <VideoCollection videoCollection={koleksiIklanRaye} pill="year" />
        </div>
      </div>
    </div>
  );
}
