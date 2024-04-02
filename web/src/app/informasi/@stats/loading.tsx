export default function InformasiStatsLoading() {
  return (
    <div className="bg-green-400 border-b-2 border-b-black">
      <div className="mx-auto max-w-screen-xl py-4 px-4">
        <div className="text-center text-4xl font-bold underline decoration-red-700 decoration-4">
          Statistik Terkini
        </div>
        <div className="mt-4">
          <p className="mb-4 text-lg lg:text-xl text-center">
            Data sedang dimuat-turunkan ...
          </p>
        </div>
      </div>
    </div>
  );
}
