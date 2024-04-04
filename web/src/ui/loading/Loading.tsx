export default function Loading() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex items-center justify-center h-screen">
        <div className="h-fit w-4/5 md:w-1/3">
          <div className="text-xl">Sedang men-loading data</div>
          <div className="">
            <div className="w-full bg-white border-2 border-black rounded-xl p-1 shadow-[2px_2xp_0px_0px_rgba(0,0,0,1)]">
              <div className="h-12 w-3/4 bg-lila-600 animate-pulse rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
