import type { Iklan } from "@/db/schema/iklan";
import Link from "next/link";
import { YTThumbnail } from "@/ui/thumbnail";
import { YearColorPill } from "@/ui/branding";
import { CountryPill } from "@/ui/branding";

type VideoItemProps = {
  vid: Iklan;
  pill: "year" | "country";
};

export default function VideoItem({ vid, pill }: VideoItemProps) {
  return (
    <Link
      href={`/${vid.slug}`}
      className="flex flex-wrap p-2 rounded-xl overflow-clip bg-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
    >
      <div className="w-2/5 h-fit aspect-auto rounded-xl border-2 border-black overflow-clip">
        <YTThumbnail vidId={vid.id} altText={vid.title} />
      </div>
      <div className="w-3/5 px-2 flex flex-col justify-between">
        <div className="font-semibold text-base lg:text-lg">{vid.title}</div>
        <div className="relative">
          <div className="w-3/5 absolute bottom-0 left-0">
            {vid.organization}
          </div>
          <div className="absolute bottom-0 right-0">
            {pill === "year" ? (
              <YearColorPill yearStr={vid.year} />
            ) : (
              <CountryPill country={vid.country} />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
