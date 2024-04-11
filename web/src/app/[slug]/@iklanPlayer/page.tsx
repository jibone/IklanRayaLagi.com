import { cache } from "react";
import { IklanModel } from "@/models";
import { IklanPlayerSlots } from "@/ui/slots";

export default async function IklanPlayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getDariCcahe = cache(async (slug: string) => {
    return await IklanModel.getIklanBySlug(slug);
  });
  const iklanResult = await getDariCcahe(slug);

  if (iklanResult === undefined) {
    return;
  }

  return <IklanPlayerSlots iklanRaya={iklanResult} />;
}
