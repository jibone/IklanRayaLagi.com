/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "@vercel/og";

export default async function OGDefaultImage() {
  const baseUrl = getBaseUrl();
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const imgSrc = `${baseUrl}/imgs/budak-tengok-tv-small.png`;

  // TODO: See if it is possible to break this down so we can reuse this...
  return new ImageResponse(
    (
      <div // background container
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#c0b6f9",
        }}
      >
        <div // box container
          style={{
            display: "flex",
            width: 1100,
            height: 550,
            backgroundColor: "#fce0c1",
            borderWidth: "4px",
            borderColor: "#14151d",
            borderRadius: "20px",
            boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
            overflow: "hidden",
          }}
        >
          <div // header title container
            style={{
              display: "flex",
              position: "relative",
              width: 1092,
              height: 100,
              padding: "5px 10px",
              borderBottom: "2px",
              borderColor: "#14151d",
              backgroundColor: "#f3f3f3",
            }}
          >
            <div // branding header container
              style={{
                display: "flex",
                fontSize: 50,
                fontWeight: 900,
                marginTop: "10px",
                marginLeft: "10px",
              }}
            >
              <span style={{ color: "#f79d49", marginLeft: "5px" }}>I</span>klan
              <span style={{ color: "#4c8592", marginLeft: "5px" }}>R</span>aya
              <span style={{ color: "#e08593", marginLeft: "5px" }}>L</span>agi.
            </div>

            <div // 3 button
              style={{
                display: "flex",
                marginTop: "22px",
                marginLeft: "480px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  borderColor: "#14151d",
                  backgroundColor: "#fce0c1",
                  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  borderColor: "#14151d",
                  backgroundColor: "#b0cdd4",
                  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  width: "40px",
                  height: "40px",
                  borderRadius: "100px",
                  borderWidth: "2px",
                  borderColor: "#14151d",
                  backgroundColor: "#efbec6",
                  boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
                  marginLeft: "20px",
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "120px",
              left: "20px",
              width: 400,
              height: 400,
              borderWidth: "2px",
              borderColor: "#14151d",
              borderRadius: "20px",
              boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
              overflow: "hidden",
            }}
          >
            <img src={imgSrc} alt="no effect here" width="400" height="400" />
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: "120px",
              left: "500px",
              fontWeight: 900,
              width: "500px",
              color: "#14151d",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 70,
                position: "absolute",
                top: "0px",
              }}
            >
              Koleksi
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 95,
                top: "70px",
                color: "#aa9cf7",
              }}
            >
              Iklan Raya
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 60,
                position: "absolute",
                top: "175px",
                left: "0px",
              }}
            >
              Sepanjang Zaman!
            </div>
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
