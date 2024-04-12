import type { Iklan } from "@/db/schema/iklan";
import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { MukaDepanPage } from "@/ui/pages";

export const dynamic = "force-dynamic";

async function getSemuaIklan(): Promise<Iklan[]> {
  const result = await IklanModel.getSemuaIklan();
  return result;
}

export default async function MukaDepanCarian() {
  const getDariCache = unstable_cache(
    async () => getSemuaIklan(),
    ["semua-iklan"],
    { revalidate: 600 },
  );
  const mukaDepanProps = {
    semuaIklan: await getDariCache(),
  };

  return <MukaDepanPage {...mukaDepanProps} />;
}
