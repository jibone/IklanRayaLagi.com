import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { IklanLainSlots } from "@/ui/slots";

export default async function IklanLainPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const getRandomCache = unstable_cache(
    async () => IklanModel.getRandom(),
    [`random-${slug}`],
    { revalidate: 7200 },
  );

  const koleksiIklan = await getRandomCache();

  return <IklanLainSlots koleksiIklan={koleksiIklan} />;
}
