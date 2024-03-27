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

function LinkWrapButton({ label, url }: { label: string; url: string }) {
  return (
    <Link
      href={url}
      className="bg-white py-1 px-3 border-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] action:shadow-none"
    >
      {label}
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
    <div
      data-testid="informasi-page-container"
      className="mx-auto max-w-screen-2xl"
    >
      <div className="py-4 px-4 md:py-8 md:px-9 lg:px-0 md:flex">
        <div className="md:flex-1 mb-4 w-fit h-fit lg:h-fit aspect-square bg-lila-400 rounded-3xl overflow-clip border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <Image
            src="/imgs/informasi-banner.png"
            className="object-cover h-fit w-full aspect-square"
            alt="Jibone dan pengkalan data iklan Hari Raya terbesar di rantau ini."
            width={600}
            height={600}
          />
        </div>
        <div className="md:flex-1 md:mt-0 md:ml-4">
          <h1 className="font-semibold text-2xl lg:text-4xl mb-4">
            Informasi.
          </h1>
          <p className="mb-4 lg:text-xl">
            Di sini satu initiatif usaha sendirian bagi mewujudkan sebuah{" "}
            <strong>
              pengkalan data iklan Hari Raya / Salam Lebaran yang terbesar di
              rantau ini
            </strong>
            . Dari yang nostalgik sampai ke moden semuanya ada.
          </p>
          <p className="mb-4 lg:text-xl">
            Sehingga kini, sebanyak <strong>{totalIklan}</strong> iklan telah
            pun direkodkan. <strong>{totalIklanMalaysia}</strong> daripadanya
            adalah iklan yang berasal dari{" "}
            <LinkWrap name="Malaysia" url="/malaysia" /> ,{" "}
            <strong>{totalIklanIndonesia}</strong> iklan berasal dari{" "}
            <LinkWrap name="Indonesia" url="/indonesia" />, dan{" "}
            <strong>{totalIklanSingapura}</strong> iklan berasal dari{" "}
            <LinkWrap name="Singapura" url="/singapura" />. Terdapat iklan
            seawal tahun{" "}
            <LinkWrap name={tahunTerawal.toString()} url={`/${tahunTerawal}`} />{" "}
            sehinggalah tahun{" "}
            <LinkWrap
              name={tahunTerlatest.toString()}
              url={`/${tahunTerlatest}`}
            />
            .
          </p>
          <p className="mb-4 lg:text-xl">
            Iklan Raya semua bebas ditonton dengan sepuasnya hati tanpa
            memerlukan sebarang pendaftaran. Anda boleh mula menerokaan di
            halaman <LinkWrap name="muka depan" url="/" />, dimana anda boleh
            pilih untuk menapis mengikut tahun, negara, atau cari iklan dari
            organisasi tertentu.
          </p>
          <p className="mb-6 lg:text-xl">
            Jika anda tahu akan iklan yang tiada dalam rekod pengkalan data
            iklan Hari Raya terbesar di rantau ini, boleh hubungi terus penyelia
            dan kurator laman IklanRayaLagi.com, iaitu{" "}
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
            Klik sini untuk{" "}
            <LinkWrapButton url="/press-kit" label="Kit Media / Press Kit" />{" "}
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
  );
}
