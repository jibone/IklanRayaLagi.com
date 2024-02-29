import Image from "next/image";

export default function AkanDatang() {
  const imgUrl = `/imgs/budak-tengok-tv.png`;

  return (
    <div className="py-4 px-5 md:py-8 md:px-10 md:flex">
      <div className="md:flex-1 md:mt-12">
        <div className="text-4xl md:text-6xl font-bold">Akan datang</div>
        <div className="text-4xl md:text-6xl font-bold text-lila-700 underline decoration-black">
          tak lama lagi.
        </div>
        <div className="text-4xl md:text-6xl font-semibold mt-4 md:mt-12">
          Koleksi{" "}
          <span className="text-green-600 underline decoration-black">
            iklan Raya
          </span>{" "}
        </div>
        <div className="text-4xl md:text-6xl font-semibold">dari serantau.</div>
      </div>
      <div className="md:flex-1 mt-4 w-full rounded-xl overflow-clip border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <Image
          className="object-cover h-full w-full"
          src={imgUrl}
          alt="Budak-budak tengok TV dekat kampung"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
