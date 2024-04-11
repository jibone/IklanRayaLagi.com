import { cache } from "react";
import { IklanModel } from "@/models";
import { IklanLainSlots } from "@/ui/slots";

export const revalidate = 3600;

export default async function IklanLainPage() {
  const getDariCache = cache(async () => {
    return await IklanModel.getRandom();
  });
  const koleksiIklan = await getDariCache();

  return <IklanLainSlots koleksiIklan={koleksiIklan} />;
}
