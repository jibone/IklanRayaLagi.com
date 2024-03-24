import type { Iklan } from "@/db/schema/iklan";
import type { OrgOptions } from "@/ui/combobox/OrgComboBox";
import { VideoCollection } from "@/ui/collection";
import { OrgComboBox } from "@/ui/combobox";

type OrganisasiPageProps = {
  organisasi: OrgOptions;
  senaraiOrg: OrgOptions[];
  koleksiIklanRaye: Iklan[];
};

export default function OrganisasiPage({
  organisasi,
  senaraiOrg,
  koleksiIklanRaye,
}: OrganisasiPageProps) {
  return (
    <div
      data-testid="organisasi-page-container"
      className="mx-auto max-w-screen-2xl"
    >
      <div className="p-4 md:py-8 md:px-3">
        <div className="flex flex-col md:flex-row font-semibold text-2xl">
          <span className="mr-2 md:mt-2">Iklan Raya dari</span>
          <OrgComboBox org={organisasi} orgs={senaraiOrg} />
        </div>

        <div className="mt-4 mb-6">
          <VideoCollection videoCollection={koleksiIklanRaye} pill="year" />
        </div>
      </div>
    </div>
  );
}
