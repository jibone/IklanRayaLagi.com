import type { Iklan } from "@/db/schema/iklan";
import { KadIklan } from ".";

type KoleksiKadIklanProps = {
  koleksiIklan: Iklan[];
  pill: "year" | "country";
};

export default function KoleksiKadIklan({
  koleksiIklan,
  pill,
}: KoleksiKadIklanProps) {
  return (
    <div
      data-testid="video-collection-container"
      className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {koleksiIklan.map((iklan: Iklan) => {
        return <KadIklan key={iklan.id} pill={pill} iklan={iklan} />;
      })}
    </div>
  );
}
