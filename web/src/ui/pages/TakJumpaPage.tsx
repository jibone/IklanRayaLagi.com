import Link from "next/link";

export default function TakJumpaPage() {
  return (
    <div data-testid="tak-jumpa-container" className="mx-auto max-w-screen-2xl">
      <div className="py-4 px-4 md:py-8 md:px-3 md:flex">
        <div className="md:flex-1 md:mt-12">
          <div className="text-8xl">😵‍💫</div>
          <div className="text-4xl md:text-6xl mt-2 mb-10 font-semibold">
            Alamak, tak jumpa page.
          </div>
          <Link
            href="/"
            className="bg-white py-2 px-4 overflow-clip rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]"
          >
            &larr; balik muka depan
          </Link>
        </div>
      </div>
    </div>
  );
}
