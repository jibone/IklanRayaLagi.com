/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "@vercel/og";
import OGSideImg from "./OGSideImg";
import OGContainer from "./OGContainer";

export default async function OGTahunPage({ tahun }: { tahun: string }) {
  const baseUrl = getBaseUrl();
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const imgSrc = `${baseUrl}/imgs/budak-tengok-tv-small.png`;
  const bgImgSrc = `url('${baseUrl}/imgs/plus.svg')`;

  return new ImageResponse(
    (
      <OGContainer>
        <OGSideImg imgSrc={imgSrc} />
        <div
          style={{
            width: 1000,
            height: 500,
            top: "120px",
            left: "450px",
            display: "flex",
            fontWeight: 900,
            color: "#14151d",
            position: "absolute",
            backgroundImage: bgImgSrc,
          }}
        >
          <div
            style={{
              top: "0px",
              fontSize: 60,
              display: "flex",
              position: "absolute",
              backgroundColor: "#fce0c1",
            }}
          >
            Koleksi
          </div>

          <div
            style={{
              top: "90px",
              fontSize: 80,
              display: "flex",
              color: "#aa9cf7",
              position: "absolute",
              backgroundColor: "#fce0c1",
            }}
          >
            Iklan Raya
          </div>

          <div
            style={{
              top: "190px",
              height: 100,
              fontSize: 60,
              display: "flex",
              position: "relative",
              backgroundColor: "#fce0c1",
            }}
          >
            tahun{" "}
            <span
              style={{
                fontSize: 90,
                color: "#4c8592",
                marginLeft: "10px",
                backgroundColor: "#fce0c1",
              }}
            >
              {tahun}
            </span>
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
          style: "normal",
          name: "Public_Sans",
          data: publicSansBlack,
        },
        {
          weight: 900,
          style: "italic",
          name: "Public_Sans",
          data: publicSansBlackItalic,
        },
        {
          weight: 400,
          style: "normal",
          name: "Public_Sans",
          data: publicSansRegular,
        },
      ],
    },
  );
}
