import Image from "next/image";
import Link from "next/link";

function LinkWrap({ name, url }: { name: string; url: string }) {
  return (
    <Link
      href={url}
      className="font-semibold underline text-lila-800 decoration-black"
    >
      {name}
    </Link>
  );
}

function XPostButton() {
  const msgText = [
    "Hi awak @jibone saya nak cadangkan iklan raya [_link youtube_]",
    "Kehadapan saudara @jibone saya nak cadangkan iklan raya ini [_link youtube_]",
    "Hey @jibone saya ada iklan untuk pengkalan data iklan Raya terbesar [_youtube link_]",
    "Wahai si penyelia pengkalan data iklan Raya terbesar @jibone sila lihat iklan [_youtube link_]",
  ];
  const randomIdx = Math.floor(Math.random() * msgText.length);

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://twitter.com/intent/tweet?hashtags=iklanrayalagi&text=${encodeURIComponent(msgText[randomIdx])}`}
      className="bg-white py-1 px-3 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
    >
      X Post
    </Link>
  );
}

export default function InformasiPage({
  totalIklan,
  totalIklanMalaysia,
  totalIklanIndonesia,
  totalIklanSingapura,
  tahunTerawal,
  tahunTerlatest,
}: {
  totalIklan: string;
  totalIklanMalaysia: string;
  totalIklanIndonesia: string;
  totalIklanSingapura: string;
  tahunTerawal: string;
  tahunTerlatest: string;
}) {
  return (
    <div data-testid="informasi-page-container">
      <div className="bg-yellow-500 border-b-2 border-b-black">
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
                  pengkalan data iklan Hari Raya / Salam Lebaran yang terbesar
                  di rantau ini
                </strong>
                . Dari iklan-iklan yang memberi perasaan nostalgia, sehingga ke
                iklan Raya moden semuanya ada.
              </p>
              <p className="mb-4 text-lg lg:text-2xl">
                Iklan Raya semua bebas ditonton dengan sepuasnya hati tanpa
                memerlukan sebarang pendaftaran. Anda boleh menerokaan{" "}
                <strong>pengkalan data iklan Raya terbesar</strong> ini bermula
                di halaman <LinkWrap name="muka depan" url="/" />, dimana anda
                boleh guna komponen carian berteknologi canggih.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-400 border-b-2 border-b-black">
        <div className="mx-auto max-w-screen-xl py-4 px-4">
          <div className="text-center text-4xl font-bold underline decoration-red-700 decoration-4">
            Statistik Terkini
          </div>
          <div className="mt-4">
            <p className="mb-4 text-lg lg:text-xl text-center">
              jumlah iklan yand telah direkodkan
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold">Jumlah Iklan</div>
                <div className="text-6xl">{totalIklan}</div>
              </div>
              <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold">Dari Malaysia</div>
                <div className="text-6xl">{totalIklanMalaysia}</div>
              </div>
              <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold">Dari Indonesia</div>
                <div className="text-6xl">{totalIklanIndonesia}</div>
              </div>
              <div className="p-2 bg-white border-2 border-black text-center rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="font-bold">Dari Singapura</div>
                <div className="text-6xl">{totalIklanSingapura}</div>
              </div>
            </div>
          </div>
          <div className="text-lg text-center">
            Iklan terawal dari tahun{" "}
            <LinkWrap name={tahunTerawal} url={`/${tahunTerawal}`} /> sehingga
            tahun terkini{" "}
            <LinkWrap name={tahunTerlatest} url={`/${tahunTerlatest}`} />
          </div>
        </div>
      </div>
      <div className="bg-yello-500 -mb-10">
        <div className="mx-auto max-w-screen-xl py-4 px-4">
          <div className="text-center text-4xl font-bold underline decoration-red-700 decoration-4">
            Hubungi
          </div>
          <div className="mt-4">
            <p className="mb-6 text-lg lg:text-xl">
              Jika anda tahu akan iklan yang tiada dalam rekod{" "}
              <strong>pengkalan data iklan Raya terbesar</strong> di rantau ini,
              boleh hubungi terus penyelia dan kurator laman IklanRayaLagi.com,
              iaitu{" "}
              <LinkWrap
                name="@jibone"
                url={
                  "https://twitter.com/intent/follow?region=follow_link&screen_name=jibone"
                }
              />{" "}
              di laman X (yang dulunya Twitter).
            </p>
            <p className="mb-6 lg:text-xl">
              Boleh juga guna butang X in: <XPostButton />
            </p>
            <p className="mb-6 lg:text-xl">
              Jika mahu tahu lebih lanjut status development boleh cek{" "}
              <LinkWrap url={`/changelog`} name="changelog" />
            </p>
            <p className="mb-4 lg:text-xl">
              Pada dev sis, tech bros, dan mereka yang suka mengoding; boleh cek
              repo di{" "}
              <LinkWrap
                url={"https://github.com/jibone/IklanRayaLagi.com"}
                name="Github"
              />
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
