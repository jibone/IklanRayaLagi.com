import fs from "fs";
import { PageContainer } from "@/ui/layouts";
import { BilikMediaPage } from "@/ui/pages";
import { CompileMDXResult, compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { generateSiteMetadata } from "@/utils/siteMeta";

const baseFilePath = `${process.cwd()}/pressreleases`;

function getPressReleaseList() {
  const list = fs.readdirSync(baseFilePath);
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

async function getPressReleaseProcessed(
  filename: string,
): Promise<CompileMDXResult<{ date: string }>> {
  const filePath = `${baseFilePath}/${filename}.mdx`;
  const fileContents = fs.readFileSync(filePath, "utf8");

  const compiledContents = await compileMDX<{ date: string }>({
    source: fileContents,
    options: { parseFrontmatter: true },
  });

  return compiledContents;
}

export async function generateMetadata() {
  return generateSiteMetadata({
    title: "Bilik Media Iklan Raya Lagi",
    description:
      "Senarai press release IklanRayaLagi.com, pengkalan data iklan Raya terbesar.",
  });
}

export default async function BilikMedia() {
  const pressReleaseList = getPressReleaseList();

  if (pressReleaseList.length === 0) notFound();

  const processedContent = await getPressReleaseProcessed(pressReleaseList[0]);

  return (
    <PageContainer page="media">
      <BilikMediaPage content={processedContent} />
    </PageContainer>
  );
}
