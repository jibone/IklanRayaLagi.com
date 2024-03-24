export default function YearColorPill({ yearStr }: { yearStr: string }) {
  const yearColorRange = [
    "bg-lila-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-red-300",
  ];
  const yearInt = parseInt(yearStr);
  const idx = yearInt % 4;
  const yearColor = yearColorRange[idx];

  return (
    <div
      data-testid="year-color-pill"
      className={`${yearColor} text-xs border border-black text-right w-fit py-1 px-2 rounded-full self-end shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}
    >
      {yearStr}
    </div>
  );
}
