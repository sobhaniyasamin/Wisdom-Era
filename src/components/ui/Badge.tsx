type BadgeVariant = "light" | "dark";

const variants: Record<BadgeVariant, string> = {
  // Both variants now live on the dark canvas; kept as aliases for call sites.
  light:
    "inline-flex items-center font-mono text-[0.68rem] tracking-[0.06em] uppercase text-paper-muted border border-ink-line rounded-full px-2.5 py-1",
  dark:
    "inline-flex items-center font-mono text-[0.68rem] tracking-[0.06em] uppercase text-accent border border-accent/25 bg-accent/[0.06] rounded-full px-2.5 py-1",
};

export function Badge({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  return <span className={variants[variant]}>{children}</span>;
}
