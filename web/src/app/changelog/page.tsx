import type { ChangelogFrontmatter } from "@/ui/pages/ChangelogPage";
import fs from "fs";
import { PageContainer } from "@/ui/layouts";
import { ChangelogPage } from "@/ui/pages";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

const filesPath = `${process.cwd()}/changelogs`;

function getChangelogList() {
  const list = fs.readdirSync(filesPath);
  let filenames: string[] = [];

  if (list.length > 0) {
    filenames = list
      .sort()
      .reverse()
      .map((item: string) => {
        return item.slice(0, -4);
      });
  }

  return filenames;
}

async function getChangelogProcessed(
  filename: string,
): Promise<CompileMDXResult<ChangelogFrontmatter>> {
  const filepath = `${filesPath}/${filename}.mdx`;
  const fileContents = fs.readFileSync(filepath, "utf8");

  const compiledContents = await compileMDX<ChangelogFrontmatter>({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  return compiledContents;
}

export default async function Changelog() {
  const changelogList = getChangelogList();

  if (changelogList.length === 0) notFound();

  const processedContent: CompileMDXResult<ChangelogFrontmatter>[] = [];
  for (let i = 0; i < changelogList.length; i++) {
    const processed = await getChangelogProcessed(changelogList[i]);
    processedContent.push(processed);
  }

  return (
    <PageContainer page="changelog">
      <ChangelogPage contents={processedContent} />
    </PageContainer>
  );
}
