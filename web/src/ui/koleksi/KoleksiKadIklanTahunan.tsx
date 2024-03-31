import type { Iklan } from "@/db/schema/iklan";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { KadIklan } from ".";

export default function KoleksiKadIklanTahunan({
  label,
  labelPautan,
  pautan,
  koleksiIklan,
}: {
  label: string;
  labelPautan: string;
  pautan: string;
  koleksiIklan: Iklan[];
}) {
  return (
    <div data-testid="koleksi-kad-iklan-tahunan-container" className="mt-14">
      <div className="font-bold text-xl md:text-2xl lg:text-4xl">{label}</div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {koleksiIklan.map((iklan) => (
          <KadIklan key={iklan.id} iklan={iklan} />
        ))}
      </div>
      <div className="mt-4">
        <Link
          href={`/${pautan}`}
          className="py-1 px-3 bg-white border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {labelPautan} <ArrowLongRightIcon className="h-3 w-3 inline" />
        </Link>
      </div>
    </div>
  );
}
