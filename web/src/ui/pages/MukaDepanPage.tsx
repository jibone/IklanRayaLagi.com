"use client";

import type { Iklan } from "@/db/schema/iklan";
import { useState } from "react";
import Fuse from "fuse.js";
import { KoleksiKadIklan } from "@/ui/koleksi";

export default function MukaDepanPage({ semuaIklan }: { semuaIklan: Iklan[] }) {
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
      </div>
    </div>
  );
}
