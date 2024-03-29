/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og";
import { OGFonts } from ".";
import OGContainer from "./OGContainer";

export default async function OGBilikMedia() {
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();

  return new ImageResponse(
    (
      <OGContainer>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: 1100,
            height: 442,
            backgroundSize: "1100px 600px",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              "url('http://localhost:3000/imgs/bilik-media.png')",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 900,
              color: "white",
              position: "absolute",
              right: 45,
              bottom: 130,
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            Bilik Media
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              color: "white",
              fontSize: 70,
              fontWeight: 900,
              right: 40,
              bottom: 50,
              textShadow:
                "-2px 0 black, 0 2px black, 2px 0 black, 0 -2px black",
            }}
          >
            Iklan Raya Lagi
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
