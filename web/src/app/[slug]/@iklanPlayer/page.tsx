import { IklanModel } from "@/models";
import { IklanPlayerSlots } from "@/ui/slots";

export default async function IklanPlayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const iklanResult = await IklanModel.getIklanBySlug(slug);

  if (iklanResult === undefined) {
    return;
  }

  return <IklanPlayerSlots iklanRaya={iklanResult} />;
}
