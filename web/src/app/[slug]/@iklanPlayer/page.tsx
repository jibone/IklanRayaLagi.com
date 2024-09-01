import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { IklanPlayerSlots } from "@/ui/slots";
import { CacheSelama } from "@/utils/cache";

export default async function IklanPlayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getIklanBySlug = (slug: string) => {
    console.log(`--> getIklanBySlug() slug: ${slug}`);
    return IklanModel.getIklanBySlug(slug);
  };
  const getDariCache = unstable_cache(
    async (slug: string) => getIklanBySlug(slug),
    [`iklan-${slug}`],
    { revalidate: CacheSelama._120jam() },
  );
  const iklanResult = await getDariCache(slug);

  if (iklanResult === undefined) {
    return;
  }

  return <IklanPlayerSlots iklanRaya={iklanResult} />;
}
