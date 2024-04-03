import type { Iklan } from "@/db/schema/iklan";
import { IklanModel } from "@/models";
import { MukaDepanPage } from "@/ui/pages";

export const dynamic = "force-dynamic";

async function getSemuaIklan(): Promise<Iklan[]> {
  const result = await IklanModel.getSemuaIklan();
  return result;
}

export default async function MukaDepanCarian() {
  const mukaDepanProps = {
    semuaIklan: await getSemuaIklan(),
  };

  return <MukaDepanPage {...mukaDepanProps} />;
}
