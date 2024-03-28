import type { Iklan } from "@/db/schema/iklan";
import Link from "next/link";
import { YTThumbnail } from "@/ui/thumbnail";
import { CountryPill } from "@/ui/branding";

type KadIklanProps = {
  iklan: Iklan;
  pill: "year" | "country";
};

export default function KadIklan({ iklan, pill }: KadIklanProps) {
  return (
    <Link
      href={`/${iklan.slug}`}
      className="group flex flex-wrap p-2 rounded-xl overflow-ellipsis bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="w-2/5 h-fit aspect-auto rounded-xl border-2 border-black overflow-clip">
        <YTThumbnail vidId={iklan.id} altText={iklan.title} />
      </div>
      <div className="w-3/5 px-2 flex flex-col justify-between">
        <div className="font-semibold text-base lg:text-lg">{iklan.title}</div>
        <div className="relative">
          <div className="absolute z-50 -bottom-5 -right-7">
            <CountryPill country={iklan.country} />
          </div>
        </div>
      </div>
    </Link>
  );
}
