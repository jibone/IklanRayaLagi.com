import type { SenaraiNegara } from "@/db/schema/iklan";

export default function PilNegara({ negara }: { negara: SenaraiNegara }) {
  const benderaEmoji = {
    malaysia: "🇲🇾 ",
    indonesia: "🇮🇩 ",
    singapura: "🇸🇬 ",
    brunei: "🇧🇳 ",
    others: "🌏 ",
  };

  return (
    <div
      data-testid="pil-negara-container"
      className="text-xs group-hover:text-2xl transition-all duration-300 px-1 py-1 group-hover:px-2 bg-white border border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
    >
      <span className="">{benderaEmoji[negara]}</span>
    </div>
  );
}
