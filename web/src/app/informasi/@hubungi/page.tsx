import Link from "next/link";
import { Pautan } from "@/ui/pautan";

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

export default function HubungiPage() {
  return (
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
            <Pautan
              href={
                "https://twitter.com/intent/follow?region=follow_link&screen_name=jibone"
              }
            >
              @jibone
            </Pautan>{" "}
            di laman X (yang dulunya Twitter).
          </p>
          <p className="mb-6 lg:text-xl">
            Boleh juga guna butang X in: <XPostButton />
          </p>
          <p className="mb-6 lg:text-xl">
            Jika mahu tahu lebih lanjut status development boleh cek{" "}
            <Pautan href="/changelog">changelog</Pautan>
          </p>
          <p className="mb-4 lg:text-xl">
            Pada dev sis, tech bros, dan mereka yang suka mengoding; boleh cek
            repo di{" "}
            <Pautan href="https://github.com/jibone/IklanRayaLagi.com">
              Github
            </Pautan>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
