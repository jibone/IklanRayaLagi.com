import { unstable_cache } from "next/cache";
import { IklanModel } from "@/models";
import { IklanPlayerSlots } from "@/ui/slots";

export default async function IklanPlayerPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const getDariCache = unstable_cache(
    async (slug: string) => IklanModel.getIklanBySlug(slug),
    [`iklan-${slug}`],
    { revalidate: 3600 },
  );
  const iklanResult = await getDariCache(slug);

  if (iklanResult === undefined) {
    return;
  }

  return <IklanPlayerSlots iklanRaya={iklanResult} />;
}
