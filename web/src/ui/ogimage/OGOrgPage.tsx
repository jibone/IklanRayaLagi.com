/* eslint-disable @next/next/no-img-element */

import { OGFonts } from ".";
import { ImageResponse } from "@vercel/og";
import OGContainer from "./OGContainer";
import OGSideImg from "./OGSideImg";

export default async function OGOrgPage({
  orgName,
  vidId,
}: {
  orgName: string;
  vidId: string;
}) {
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const imgSrc = `https://img.youtube.com/vi/${vidId}/0.jpg`;

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
            backgroundColor: "#fce0c1",
            backgroundImage: "url('http://localhost:3000/imgs/plus.svg')",
          }}
        >
          <div
            style={{
              width: 520,
              fontSize: 46,
              display: "flex",
              fontWeight: 900,
              position: "absolute",
              paddingBottom: "10px",
              backgroundColor: "#fce0c1",
            }}
          >
            <div
              style={{
                top: "0px",
                padding: "10px",
                display: "flex",
                position: "absolute",
                backgroundColor: "#fce0c1",
              }}
            >
              Saksikan
            </div>
            <div
              style={{
                top: "60px",
                fontSize: 60,
                padding: "10px",
                display: "flex",
                position: "absolute",
                backgroundColor: "#fce0c1",
              }}
            >
              iklan Raya
            </div>
            <div
              style={{
                top: "140px",
                padding: "10px",
                display: "flex",
                position: "absolute",
                backgroundColor: "#fce0c1",
              }}
            >
              daripada
            </div>
            <div
              style={{
                width: 500,
                top: "200px",
                fontSize: 60,
                padding: "10px",
                display: "flex",
                position: "absolute",
                backgroundColor: "#fce0c1",
              }}
            >
              {orgName}
            </div>
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
