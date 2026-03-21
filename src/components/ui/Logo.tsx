/* eslint-disable @next/next/no-img-element */
export function Logo({ size = 42 }: { size?: number }) {
  return (
    <img
      src="/logo.svg"
      alt=""
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="flex-shrink-0"
    />
  );
}
