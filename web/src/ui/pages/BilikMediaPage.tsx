import { CompileMDXResult } from "next-mdx-remote/rsc";
import Image from "next/image";

export default function BilikMediaPage({
  content,
}: {
  content: CompileMDXResult<{ date: string }>;
}) {
  const imgSrc = "/imgs/bilik-media.png";

  return (
    <div
      data-testid="bilik-media-container"
      className="mx-auto max-w-screen-lg"
    >
      <div className="py-4 px-4">
        <div className="w-full bg-lila-400 rounded-2xl overflow-clip border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Image
            className="object-cover"
            src={imgSrc}
            alt="pemberitahuan media"
            width="1456"
            height="816"
          />
        </div>

        <div className="w-full p-2 md:p-3 lg:p-4 mt-4 bg-white rounded-2xl overflow-clip border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <div className="prose md:prose-lg lg:prose-2xl">
            {content.content}
          </div>
        </div>
      </div>
    </div>
  );
}
