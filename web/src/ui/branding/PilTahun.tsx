export default function PilTahun({ tahunStr }: { tahunStr: string }) {
  const tahunKalerRange = [
    "bg-lila-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-red-300",
  ];
  const tahunInt = parseInt(tahunStr);
  const idx = tahunInt % 4;
  const tahunKaler = tahunKalerRange[idx];

  return (
    <div
      data-testid="pil-tahun-container"
      className={`${tahunKaler} text-xs border border-black text-right w-fit py-1 px-2 rounded-full self-end shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}
    >
      {tahunStr}
    </div>
  );
}
