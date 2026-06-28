type BadgeVariant = "light" | "dark";

const variants: Record<BadgeVariant, string> = {
  light: "bg-cream text-navy px-3 py-1 rounded-md text-xs font-medium",
  dark: "bg-teal/10 text-teal px-3.5 py-1.5 rounded-full text-[0.78rem] font-medium",
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
