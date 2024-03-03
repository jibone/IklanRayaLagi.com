export default async function OGFonts() {
  const publicSansBlack = await fetch(
    new URL(
      `../../../public/fonts/static/PublicSans-Black.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const publicSansBlackItalic = await fetch(
    new URL(
      `../../../public/fonts/static/PublicSans-BlackItalic.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  const publicSansRegular = await fetch(
    new URL(
      `../../../public/fonts/static/PublicSans-Regular.ttf`,
      import.meta.url,
    ),
  ).then((res) => res.arrayBuffer());

  return { publicSansRegular, publicSansBlack, publicSansBlackItalic };
}
