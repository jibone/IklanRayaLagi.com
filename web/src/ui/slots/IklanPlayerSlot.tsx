import Image from "next/image";
import { Iklan } from "@/db/schema/iklan";
import { Player } from "@/ui/player";
import { PautanPill } from "@/ui/pautan";
import { KongsiModal } from "@/ui/kongsi";

export default function IklanPlayerSlots({ iklanRaya }: { iklanRaya: Iklan }) {
  const iklanSrc = `https://www.youtube.com/watch?v=${iklanRaya.id}`;

  const flagEmoji = {
    malaysia: "🇲🇾 ",
    indonesia: "🇮🇩 ",
    singapura: "🇸🇬 ",
    brunei: "🇧🇳 ",
    others: "🌏 ",
  };

  return (
    <div className="mx-auto max-w-screen-2xl pt-8 px-4">
      <div className="md:flex md:flex-wrap bg-pattern">
        <div className="md:w-3/5">
          <Player videoSrc={iklanSrc} />
        </div>
        <div className="md:w-2/5 mt-4 md:mt-0 md:px-3 lg:pl-5">
          <div className="font-semibold bg-yellow-500 text-2xl md:text-4xl lg:text-6xl">
            {iklanRaya.title}
          </div>

          <div className="bg-yellow-500 py-4">
            <div className="flex flex-wrap gap-3 mb-2">
              <PautanPill href={`/${iklanRaya.year}`}>
                {iklanRaya.year}
              </PautanPill>
              <PautanPill href={`/${iklanRaya.country.toLowerCase()}`}>
                {`${flagEmoji[iklanRaya.country]} ${iklanRaya.country.replace(/\b\w/g, (char) => char.toUpperCase())}`}
              </PautanPill>
              <PautanPill
                href={`/${iklanRaya.organization.toLowerCase().replaceAll(" ", "_")}`}
              >
                {iklanRaya.organization}
              </PautanPill>
            </div>
            <div className="flex flex-wrap gap-3 mb-2 mt-4">
              <PautanPill href={`${iklanSrc}`} targetBlank>
                <Image
                  src="/imgs/youtube-color.svg"
                  alt="Youtube logo"
                  width={24}
                  height={24}
                />
              </PautanPill>
              <KongsiModal iklan={iklanRaya} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
