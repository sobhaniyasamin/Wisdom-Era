import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Wisdom Era — Keep Up with the Future";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b0f19",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "1px solid #1e2636",
              backgroundColor: "#111726",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 700,
              color: "#5cc8bd",
            }}
          >
            WE
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#eaedf4",
              letterSpacing: "4px",
            }}
          >
            WISDOM ERA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 800,
              color: "#eaedf4",
              letterSpacing: "-3px",
              lineHeight: 1.0,
            }}
          >
            Keep up with{" "}
            <span style={{ color: "#5cc8bd" }}>the future.</span>
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "rgba(234,237,244,0.6)",
              maxWidth: "760px",
              lineHeight: 1.55,
              marginTop: "28px",
            }}
          >
            AI-focused tech holding company investing in and co-building the future
            of e-commerce and agriculture across emerging markets.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
