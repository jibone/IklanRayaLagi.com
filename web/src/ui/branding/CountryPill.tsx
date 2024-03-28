import type { CountryList } from "@/db/schema/iklan";

export default function CountryPill({ country }: { country: CountryList }) {
  const flagEmoji = {
    malaysia: "🇲🇾 ",
    indonesia: "🇮🇩 ",
    singapura: "🇸🇬 ",
    brunei: "🇧🇳 ",
    others: "🌏 ",
  };

  return (
    <div
      data-testid="country-pill-container"
      className="text-xs group-hover:text-2xl transition-all duration-300 px-1 py-1 group-hover:px-2 bg-white border border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
    >
      <span className="">{flagEmoji[country]}</span>
    </div>
  );
}
