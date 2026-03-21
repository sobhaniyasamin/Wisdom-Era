/* eslint-disable @next/next/no-img-element */
export function Logo({ size = 42 }: { size?: number }) {
  // The logo.svg is 840x840 but the icon sits in roughly the center 60%.
  // We scale the image up and clip to show only the icon portion.
  const scale = 2.2;
  return (
    <div
      style={{ width: size, height: size, overflow: "hidden", borderRadius: 8 }}
      className="flex-shrink-0"
    >
      <img
        src="/logo.svg"
        alt=""
        aria-hidden="true"
        style={{
          width: size * scale,
          height: size * scale,
          marginTop: -(size * scale * 0.22),
          marginLeft: -(size * scale * 0.2),
        }}
      />
    </div>
  );
}
