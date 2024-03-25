/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "@vercel/og";
import OGContainer from "./OGContainer";
import OGSideImg from "./OGSideImg";

export default async function OGNegaraPage({ negara }: { negara: string }) {
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
              fontSize: 70,
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
            dari{" "}
            <span
              style={{
                color: "#4c8592",
                marginLeft: "10px",
                fontSize: 90,
                backgroundColor: "#fce0c1",
              }}
            >
              {negara.replace(/\b\w/g, (char) => char.toUpperCase())}
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
