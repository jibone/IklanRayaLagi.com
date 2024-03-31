"use client";

import type { Iklan } from "@/db/schema/iklan";
import { useState } from "react";
import Fuse from "fuse.js";
import { KoleksiKadIklanTahunan, KoleksiKadIklan } from "@/ui/koleksi";

export default function MukaDepanPage({
  senaraiTahunan,
  senaraiTahunLepas,
  semuaIklan,
}: {
  senaraiTahunan: Iklan[][];
  senaraiTahunLepas: Iklan[];
  semuaIklan: Iklan[];
}) {
  const [showResult, setShowResult] = useState(false);
  const [resultCarian, setResultCarian] = useState<Iklan[]>([]);

  const fuse = new Fuse(semuaIklan, {
    keys: ["year", "country", "organization", "title"],
  });

  const handleCarianOnChange = (e: any) => {
    const query = e.target.value;
    if (query.length > 1) {
      setShowResult(true);
      const resultCarianFuse = fuse.search(query);
      const processResult = resultCarianFuse.map((r) => {
        return r.item;
      });
      setResultCarian(processResult);
    } else {
      setShowResult(false);
      setResultCarian([]);
    }
  };

  return (
    <div
      data-testid="muka-depan-page-container"
      className="mx-auto max-w-screen-2xl"
    >
      <div className="py-4 px-4">
        <div className="mt-4 py-6 items-center bg-[url('/imgs/plus.svg')]">
          <div className="text-center items-center mt-8">
            <div className="mx-auto p-4 text-4xl lg:text-6xl font-bold bg-yellow-500 w-fit">
              Pengkalan Data Iklan Hari Raya{" "}
              <span className="underline decoration-4 font-extrabold">
                Terbesar
              </span>
            </div>
            <div className="text-2xl font-semibold p-4 mx-auto bg-yellow-500 w-fit">
              Menempatkan Koleksi Iklan Hari Raya Sepanjang Zaman
            </div>
          </div>

          <div className="p-4 bg-yellow-500 md:w-1/2 mx-auto">
            <div className="mt-4 mb-4 mx-auto bg-green-300 p-4 border-2 border-black rounded-xl">
              <div className="text-xl md:text-2xl lg:text-4xl font-bold">
                Carian Iklan Raya
              </div>
              <div className="mt-2">
                <input
                  data-testid="carian-input-container"
                  type="text"
                  name="carian"
                  onChange={handleCarianOnChange}
                  placeholder="Cari iklan Raya sini..."
                  className="py-2 px-4 text-lg border-2 border-black rounded-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          data-testid="result-carian-container"
          className={`mt-14 ${showResult ? "visible" : "hidden"}`}
        >
          {resultCarian.length > 0 ? (
            <>
              <div className="text-xl font-semibold md:text-2xl lg:text-4xl">
                Temuan hasil pencarian iklan 👇
              </div>
              <KoleksiKadIklan koleksiIklan={resultCarian} />
            </>
          ) : (
            <div className="text-center">
              <div className="text-8xl">😔</div>
              <div className="text-xl">
                Tak jumpa pulak iklan yang dicari...
              </div>
            </div>
          )}
        </div>

        <div className={`${showResult ? "hidden" : "visible"}`}>
          <KoleksiKadIklanTahunan
            label="Iklan tahun ini (2024)"
            labelPautan="Senarai iklan tahun ni"
            pautan="2024"
            koleksiIklan={senaraiTahunan[0]}
          />

          <KoleksiKadIklanTahunan
            label="Iklan tahun lepas (2023)"
            labelPautan="Senarai iklan tahun lepas"
            pautan="2023"
            koleksiIklan={senaraiTahunan[1]}
          />

          <KoleksiKadIklanTahunan
            label="Iklan tahun (2022)"
            labelPautan="Senarai iklan tahun 2022"
            pautan="2022"
            koleksiIklan={senaraiTahunan[2]}
          />

          <KoleksiKadIklanTahunan
            label="Iklan tahun (2021)"
            labelPautan="tengok iklan tahun 2021"
            pautan="2021"
            koleksiIklan={senaraiTahunan[3]}
          />

          <KoleksiKadIklanTahunan
            label="Iklan tahun (2020)"
            labelPautan="Lagi iklan tahun 2020"
            pautan="2020"
            koleksiIklan={senaraiTahunan[4]}
          />

          <KoleksiKadIklanTahunan
            label="Iklan dari tahun 2019 dan sebelumnya"
            labelPautan="Cari iklan lain"
            pautan="/"
            koleksiIklan={senaraiTahunLepas}
          />
        </div>
      </div>
    </div>
  );
}
