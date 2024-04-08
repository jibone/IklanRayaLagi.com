import Image from "next/image";
import { Pautan } from "@/ui/pautan";
import { generateSiteMetadata } from "@/utils/siteMeta";

export async function generateMetadata() {
  return generateSiteMetadata({
    title: `Informasi Laman Iklan Raya Lagi (IRL)`,
    description:
      "Informasi dan statistik terkini pengkalan iklan Raya terbesar.",
  });
}

export default function InformasiPage() {
  return (
    <div
      data-testid="informasi-page-container"
      className="bg-yellow-500 border-b-2 border-b-black"
    >
      <div className="mx-auto max-w-screen-xl py-4 px-4">
        <div className="text-center text-4xl font-bold underline decoration-red-700 decoration-4">
          Informasi
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="mt-6 h-fit overflow-clip flex lg:aspect-video flex-col justify-end border-black border-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/imgs/informasi-banner.png"
              className="object-cover h-fit w-full aspect-square"
              alt="Jibone dan pengkalan data iklan Hari Raya terbesar di rantau ini."
              width={600}
              height={600}
            />
          </div>
          <div className="mt-2 md:mt-6">
            <p className="mb-4 text-lg lg:text-2xl">
              Di sini satu initiatif usaha sendirian bagi mewujudkan sebuah{" "}
              <strong>
                pengkalan data iklan Hari Raya / Salam Lebaran yang terbesar di
                rantau ini
              </strong>
              . Dari iklan-iklan yang memberi perasaan nostalgia, sehingga ke
              iklan Raya moden semuanya ada.
            </p>
            <p className="mb-4 text-lg lg:text-2xl">
              Iklan Raya semua bebas ditonton dengan sepuasnya hati tanpa
              memerlukan sebarang pendaftaran. Anda boleh meneroka{" "}
              <strong>pengkalan data iklan Raya terbesar</strong> ini bermula di
              halaman <Pautan href="/">Muka Depan</Pautan>, dimana anda boleh
              guna komponen carian berteknologi canggih.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
