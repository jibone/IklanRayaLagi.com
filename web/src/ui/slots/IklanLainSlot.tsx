import type { Iklan } from "@/db/schema/iklan";
import { KoleksiKadIklan } from "../koleksi";

export default function IklanLainSlots({
  koleksiIklan,
}: {
  koleksiIklan: Iklan[];
}) {
  return (
    <div className="mx-auto max-w-screen-2xl pt-2 px-4">
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

      <KoleksiKadIklan koleksiIklan={koleksiIklan} />
    </div>
  );
}
