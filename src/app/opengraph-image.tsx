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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a2332",
          background:
            "linear-gradient(135deg, #1a2332 0%, #0f1720 50%, #1a2332 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              backgroundColor: "#68c5b2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
              color: "#1a2332",
            }}
          >
            WE
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "2px",
            }}
          >
            WISDOM ERA
          </div>
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#68c5b2",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Keep Up with the Future
        </div>
        <div
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.6)",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          AI-focused tech holding company investing in and co-building the future
          of e-commerce and agriculture across emerging markets.
        </div>
      </div>
    ),
    { ...size }
  );
}
