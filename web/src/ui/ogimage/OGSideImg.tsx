/* eslint-disable @next/next/no-img-element */

export default function OGSideImg({
  imgSrc,
  width = 400,
  height = 400,
}: {
  imgSrc: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      style={{
        width: width,
        height: height,
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
      <img src={imgSrc} alt="no effect here" width={width} height={height} />
    </div>
  );
}
