export default function OGContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
              fontWeight: 900,
              display: "flex",
              marginTop: "10px",
              marginLeft: "10px",
            }}
          >
            <span style={{ color: "#f79d49", marginLeft: "5px" }}>I</span>klan
            <span style={{ color: "#4c8592", marginLeft: "5px" }}>R</span>aya
            <span style={{ color: "#e08593", marginLeft: "5px" }}>L</span>agi.
          </div>

          <div // 3 button container
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

        {children}
      </div>
    </div>
  );
}
