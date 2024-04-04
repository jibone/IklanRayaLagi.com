import { PautanPill } from "@/ui/pautan";

export default async function KoleksiHalaman({
  semuaTahun,
}: {
  semuaTahun: string[];
}) {
  return (
    <div className="mt-14">
      <div className="text-center">
        <div className="text-2xl font-semibold mb-2">Senarai Iklan Dari</div>
        <ul className="flex justify-center items-center">
          <li className="mx-2">
            <PautanPill href="/malaysia">Malaysia</PautanPill>
          </li>
          <li className="mx-2">
            <PautanPill href="/indonesia">Indonesia</PautanPill>
          </li>
          <li className="mx-2">
            <PautanPill href="/singapura">Singapura</PautanPill>
          </li>
        </ul>
      </div>
      <div className="text-center mt-8 over">
        <div className="text-2xl font-semibold mb-2">
          Senarai Iklan Dari Tahun
        </div>
        <ul className="flex flex-wrap justify-center items-center">
          {semuaTahun
            .sort()
            .reverse()
            .map((tahun) => (
              <li key={tahun} className="mx-2 mb-6">
                <PautanPill href={`/${tahun}`}>{tahun}</PautanPill>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
