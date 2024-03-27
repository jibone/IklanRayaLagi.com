import type { Iklan } from "@/db/schema/iklan";
import Link from "next/link";
import { Player } from "@/ui/player";
import { KoleksiKadIklan } from "@/ui/koleksi";

type IklanPageProps = {
  iklanRaye: Iklan;
  koleksiIklan: Iklan[];
};

export default function IklanRayePage({
  iklanRaye,
  koleksiIklan,
}: IklanPageProps) {
  const iklanSrc = `https://www.youtube.com/watch?v=${iklanRaye.id}`;

  const flagEmoji = {
    malaysia: "🇲🇾 ",
    indonesia: "🇮🇩 ",
    singapura: "🇸🇬 ",
    brunei: "🇧🇳 ",
    others: "🌏 ",
  };

  return (
    <div
      data-testid="video-page-container"
      suppressHydrationWarning
      className="mx-auto max-w-screen-2xl"
    >
      <div className="py-4 px-4 md:py-8 md:px-3">
        <div className="md:flex md:flex-wrap bg-pattern">
          <div className="md:w-3/5">
            <Player videoSrc={iklanSrc} />
          </div>
          <div className="md:w-2/5 mt-4 md:mt-0 md:px-3 lg:pl-5">
            <div className="font-semibold bg-yellow-500 text-2xl md:text-4xl lg:text-6xl">
              {iklanRaye.title}
            </div>

            <div className="bg-yellow-500 py-4">
              <div className="flex gap-2 mb-2">
                <Link
                  href={`/${iklanRaye.year}`}
                  className="w-fit mb-2 text-base md:text-xl px-3 py-1 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  {iklanRaye.year}
                </Link>
                <Link
                  href={`/${iklanRaye.country.toLowerCase()}`}
                  className="w-fit mb-2 text-base md:text-xl px-3 py-1 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                >
                  {`${flagEmoji[iklanRaye.country]} ${iklanRaye.country.replace(/\b\w/g, (char) => char.toUpperCase())}`}
                </Link>
              </div>
              <Link
                href={`/${iklanRaye.organization.toLowerCase().replaceAll(" ", "_")}`}
                className="w-fit mb-2 text-base md:text-xl px-3 py-2 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
              >
                {iklanRaye.organization}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-14">
          <div className="font-bold text-4xl">
            <span className="underline decoration-4 decoration-lila-500">
              Iklan La
            </span>
            <span className="underline decoration-4 decoration-green-500">
              in Men
            </span>
            <span className="underline decoration-4 decoration-red-500">
              arik
            </span>
          </div>
        </div>

        <KoleksiKadIklan koleksiIklan={koleksiIklan} pill="year" />
      </div>
    </div>
  );
}
