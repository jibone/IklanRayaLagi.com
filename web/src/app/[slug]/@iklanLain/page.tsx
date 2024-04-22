import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { IklanLainSlots } from "@/ui/slots";
import { CacheSelama } from "@/utils/cache";

export default async function IklanLainPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const getRandom = () => {
    console.log(`--> getRandom()`);
    return IklanModel.getRandom();
  };
  const getRandomCache = unstable_cache(
    async () => getRandom(),
    [`random-${slug}`],
    { revalidate: CacheSelama._6jam() },
  );

  const koleksiIklan = await getRandomCache();

  return <IklanLainSlots koleksiIklan={koleksiIklan} />;
}
