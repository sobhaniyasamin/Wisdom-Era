interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "text-center mx-auto" : ""} max-w-[640px] mb-14 md:mb-20 ${className}`}
    >
      <div className={`eyebrow ${centered ? "justify-center" : ""}`}>{label}</div>
      <h2
        className="mt-5 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-paper text-balance [&_em]:text-accent [&_em]:not-italic [&_em]:font-medium"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="mt-5 text-paper-muted text-[1.02rem] leading-[1.7] max-w-[52ch] text-pretty">
          {subtitle}
        </p>
      )}
    </div>
  );
}
