import { CompileMDXResult } from "next-mdx-remote/rsc";
import { format } from "date-fns";

export type ChangelogFrontmatter = {
  date: string;
  version: string;
};

export default function ChangelogPage({
  contents,
}: {
  contents: CompileMDXResult<ChangelogFrontmatter>[];
}) {
  return (
    <div
      data-testid="changelog-page"
      className="mx-auto max-w-2xl py-14 px-3 text-left"
    >
      <h1 className="text-4xl tracking-normal font-black text-black md:text-6xl">
        Changelog.
      </h1>

      <div className="mt-5 md:w-4/5">
        <ul role="list" className="space-y-6">
          {contents.map((item, idx) => {
            return (
              <li key={idx} className="relative flex gap-x-2">
                <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                  <div className="w-px bg-lila-700" />
                </div>
                <div className="relative flex h-7 w-6 flex-none items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 ring-1 ring-black" />
                </div>
                <div className="flex-auto mr-2 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <div className="justify-between gap-x-4">
                    <div className="py-0.5 px-2 flex justify-between text-sm leading-5 text-gray-600">
                      <span className="font-bold text-gray-900">
                        {item.frontmatter.version}
                      </span>
                      <span className="">
                        {format(
                          new Date(`${item.frontmatter.date}`),
                          "LLL dd, yyy",
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="prose-lg prose-li:list-disc md:prose-xl py-0.5 px-2">
                    {item.content}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
