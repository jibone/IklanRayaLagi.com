// temp pattern to put in spaces that feels empty.
export default function ColorBox() {
  return (
    <div data-testid="color-box" className="flex gap-2 mt-2">
      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-black bg-yellow-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" />
      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-black bg-green-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" />
      <div className="h-5 w-5 md:h-6 md:w-6 rounded-full border-2 border-black bg-red-500 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" />
    </div>
  );
}
