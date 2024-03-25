import Image from "next/image";

export type YTThumbnailProps = {
  vidId: string;
  altText: string;
};

export default function YTThumbnail({ vidId, altText }: YTThumbnailProps) {
  const imgSrc = `https://img.youtube.com/vi/${vidId}/0.jpg`;

  return <Image src={imgSrc} width={480} height={360} alt={altText} />;
}
