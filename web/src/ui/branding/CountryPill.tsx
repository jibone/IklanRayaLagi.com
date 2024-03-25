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
    <div data-testid="country-pill-container" className="text-xs">
      <span className="text-base">{flagEmoji[country]}</span>
      <span className="hidden md:inline-block">
        {country.replace(/\b\w/g, (char) => char.toUpperCase())}
      </span>
    </div>
  );
}
