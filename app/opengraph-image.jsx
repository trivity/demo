import { ImageResponse } from "next/og";

export const alt =
  "Premier Demolition — Asbestos Removal & Demolition in the South West of Western Australia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FBFCFB",
          display: "flex",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent stripe */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            backgroundColor: "#54B938",
          }}
        />

        {/* Left text panel */}
        <div
          style={{
            width: "720px",
            height: "100%",
            padding: "80px 70px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#FBFCFB",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#383835",
              letterSpacing: 5,
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                width: 50,
                height: 2,
                backgroundColor: "#54B938",
                display: "block",
                marginRight: 16,
              }}
            />
            South West WA · Lic WR 2489
          </div>
          <div
            style={{
              fontSize: 110,
              color: "#0A0A09",
              fontWeight: 900,
              lineHeight: 0.92,
              marginTop: 30,
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "column",
              letterSpacing: -2,
            }}
          >
            <span>Premier</span>
            <span style={{ color: "#3F8E29" }}>Demolition</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#383835",
              marginTop: 40,
              display: "flex",
            }}
          >
            Licensed asbestos removal &amp; demolition · 25+ years on the tools
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#0A0A09",
              fontWeight: 700,
              marginTop: 28,
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                backgroundColor: "#54B938",
                color: "#0A0A09",
                padding: "10px 20px",
                marginRight: 16,
                fontWeight: 700,
                letterSpacing: 3,
                display: "flex",
              }}
            >
              FREE QUOTE →
            </span>
            <span style={{ display: "flex" }}>(439) 510-783</span>
          </div>
        </div>

        {/* Right brand panel */}
        <div
          style={{
            width: "480px",
            height: "100%",
            backgroundColor: "#3F8E29",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 40,
          }}
        >
          <div
            style={{
              backgroundColor: "#0A0A09",
              padding: 30,
              border: "4px solid #FBFCFB",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#54B938",
                letterSpacing: 4,
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              EST. Practice
            </div>
            <div
              style={{
                fontSize: 110,
                color: "#FBFCFB",
                fontWeight: 900,
                lineHeight: 0.85,
                marginTop: 6,
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              25<span style={{ color: "#54B938" }}>+</span>
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#FBFCFB",
                textTransform: "uppercase",
                marginTop: 8,
                display: "flex",
              }}
            >
              Years on the tools
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
