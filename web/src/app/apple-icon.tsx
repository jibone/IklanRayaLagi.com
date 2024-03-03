/* eslint-disable @next/next/no-img-element */

import { ImageResponse } from "@vercel/og";

export const runtime = "edge";
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#fce0c1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            borderWidth: "2px",
            borderColor: "#000000",
            borderRadius: "10px",
            boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 1)",
            backgroundColor: "#b0cdd4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: 60,
              backgroundColor: "transparent",
            }}
          >
            &#9654;
          </div>
        </div>
      </div>
    ),
    {
      width: 180,
      height: 180,
    },
  );
}
