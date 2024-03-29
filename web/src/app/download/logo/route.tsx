/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  const baseUrl = getBaseUrl();
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const logoImgSrc = `${baseUrl}/imgs/logolebar.png`;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          width: "100%",
          color: "black",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          padding: "50px 200px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 1000,
            height: 500,
            display: "flex",
            fontWeight: 900,
            borderWidth: "4px",
            textAlign: "center",
            borderRadius: "20px",
            alignItems: "center",
            borderColor: "#14151d",
            justifyContent: "center",
            backgroundColor: "#f3f3f3",
            boxShadow: "6px 5px 0px 0px rgba(0,0,0,1)",
          }}
        >
          <div
            style={{
              top: 12,
              right: 15,
              height: "70px",
              display: "flex",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#fce0c1",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#b0cdd4",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#efbec6",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
          </div>
          <div
            style={{
              width: 900,
              display: "flex",
            }}
          >
            <img src={logoImgSrc} alt="Loge je" />
          </div>
          <div
            style={{
              left: -5,
              bottom: -15,
              height: "70px",
              display: "flex",
              position: "absolute",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#efbec6",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#b0cdd4",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
            <div
              style={{
                width: "40px",
                height: "40px",
                display: "flex",
                marginLeft: "20px",
                borderWidth: "2px",
                borderRadius: "100px",
                borderColor: "#14151d",
                backgroundColor: "#fce0c1",
                boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
              }}
            />
          </div>
        </div>
      </div>
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
          name: "Public_sans",
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
