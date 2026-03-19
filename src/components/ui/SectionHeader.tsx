interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeader({ label, title, subtitle, dark = false }: SectionHeaderProps) {
  return (
    <div className="text-align text-center mb-16 relative z-[1]">
      <div
        className={`inline-flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[3px] uppercase mb-5 before:content-[''] before:w-[30px] before:h-[2px] ${
          dark
            ? "text-teal before:bg-teal"
            : "text-teal-dark before:bg-teal"
        }`}
      >
        {label}
      </div>
      <h2
        className={`text-[clamp(2.2rem,3.5vw,3rem)] leading-[1.15] mb-4 ${
          dark ? "text-white" : "text-navy"
        }`}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={`max-w-[550px] mx-auto leading-[1.7] ${
            dark ? "text-white/55" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
