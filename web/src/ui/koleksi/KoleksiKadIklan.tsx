import type { Iklan } from "@/db/schema/iklan";
import { KadIklan } from ".";

type KoleksiKadIklanProps = {
  koleksiIklan: Iklan[];
};

export default function KoleksiKadIklan({
  koleksiIklan,
}: KoleksiKadIklanProps) {
  return (
    <div
      data-testid="video-collection-container"
      className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {koleksiIklan.map((iklan: Iklan) => {
        return <KadIklan key={iklan.id} iklan={iklan} />;
      })}
    </div>
  );
}
