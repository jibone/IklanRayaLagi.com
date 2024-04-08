/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "@vercel/og";
import OGContainer from "./OGContainer";
import OGSideImg from "./OGSideImg";

export default async function OGIklanRayePage({
  id,
  tajuk,
}: {
  id: string;
  tajuk: string;
}) {
  const baseUrl = getBaseUrl();
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const imgSrc = `https://img.youtube.com/vi/${id}/0.jpg`;
  const bgImgSrc = `url('${baseUrl}/imgs/plus.svg')`;

  return new ImageResponse(
    (
      <OGContainer>
        <OGSideImg imgSrc={imgSrc} height={400} width={500} />
        <div
          style={{
            width: 520,
            top: "120px",
            left: "540px",
            height: "100%",
            display: "flex",
            color: "#14151d",
            position: "absolute",
            overflowWrap: "normal",
            backgroundImage: bgImgSrc,
            backgroundColor: "#fce0c1",
          }}
        >
          <div
            style={{
              width: 520,
              fontSize: 50,
              display: "flex",
              fontWeight: 900,
              position: "absolute",
              paddingBottom: "10px",
              backgroundColor: "#fce0c1",
            }}
          >
            {tajuk}
          </div>
        </div>
      </OGContainer>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          weight: 900,
          name: "Public_Sans",
          style: "normal",
          data: publicSansBlack,
        },
        {
          weight: 900,
          name: "Public_Sans",
          style: "italic",
          data: publicSansBlackItalic,
        },
        {
          weight: 400,
          name: "Public_Sans",
          style: "normal",
          data: publicSansRegular,
        },
      ],
    },
  );
}
