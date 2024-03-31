import type { Iklan } from "@/db/schema/iklan";
import Link from "next/link";
import { YTThumbnail } from "@/ui/thumbnail";
import { PilNegara } from "@/ui/branding";

type KadIklanProps = {
  iklan: Iklan;
};

export default function KadIklan({ iklan }: KadIklanProps) {
  return (
    <Link
      href={`/${iklan.slug}`}
      className="group flex flex-col relative p-2 rounded-xl overflow-ellipsis bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="w-full h-fit aspect-auto rounded-xl border-2 border-black overflow-clip">
        <YTThumbnail vidId={iklan.id} altText={iklan.title} />
      </div>
      <div className="w-full px-2 py-2 flex flex-col justify-between">
        <div className="font-semibold text-lg lg:text-xl">{iklan.title}</div>
        <div className="h-full flex justify-between">
          <div className="w-fit">{iklan.organization}</div>
          <div className="w-fit absolute -bottom-3 -right-3">
            <PilNegara negara={iklan.country} />
          </div>
        </div>
      </div>
    </Link>
  );
}
