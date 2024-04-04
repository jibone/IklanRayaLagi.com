import { IklanModel } from "@/models";
import { IklanLainSlots } from "@/ui/slots";

export const dynamic = "force-dynamic";

export default async function IklanLainPage() {
  const koleksiIklan = await IklanModel.getRandom();

  return <IklanLainSlots koleksiIklan={koleksiIklan} />;
}
