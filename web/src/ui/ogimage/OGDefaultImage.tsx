/* eslint-disable @next/next/no-img-element */

import { OGFonts } from "@/ui/ogimage";
import { getBaseUrl } from "@/utils/siteMeta";
import { ImageResponse } from "@vercel/og";

export default async function OGDefaultImage() {
  const baseUrl = getBaseUrl();
  const { publicSansRegular, publicSansBlack, publicSansBlackItalic } =
    await OGFonts();
  const imgSrc = `${baseUrl}/imgs/budak-tengok-tv-small.png`;
  const bgImgSrc = `url('${baseUrl}/imgs/plus.svg')`;

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
            width: 1100,
            height: 550,
            display: "flex",
            overflow: "hidden",
            borderWidth: "4px",
            borderRadius: "20px",
            borderColor: "#14151d",
            backgroundColor: "#fce0c1",
            boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
          }}
        >
          <div // header title container
            style={{
              width: 1092,
              height: 100,
              display: "flex",
              padding: "5px 10px",
              borderBottom: "2px",
              position: "relative",
              borderColor: "#14151d",
              backgroundColor: "#f3f3f3",
            }}
          >
            <div // branding header container
              style={{
                fontSize: 50,
                display: "flex",
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
          </div>
          <div
            style={{
              width: 400,
              height: 400,
              top: "120px",
              left: "20px",
              display: "flex",
              overflow: "hidden",
              borderWidth: "2px",
              position: "absolute",
              borderRadius: "20px",
              borderColor: "#14151d",
              boxShadow: "6px 6px 0px 0px rgba(0, 0, 0, 1)",
            }}
          >
            <img src={imgSrc} alt="no effect here" width="400" height="400" />
          </div>
          <div
            style={{
              width: 600,
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
                width: 500,
                top: "75px",
                height: 150,
                fontSize: 60,
                display: "flex",
                backgroundColor: "#fce0c1",
              }}
            >
              Pengkalan Data Iklan Raya
            </div>
            <div
              style={{
                left: "0px",
                top: "215px",
                fontSize: 60,
                display: "flex",
                position: "absolute",
                backgroundColor: "#fce0c1",
              }}
            >
              Terbesar.
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
