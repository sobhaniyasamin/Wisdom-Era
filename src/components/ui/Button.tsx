import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-2 rounded-full font-medium text-[0.92rem] tracking-[-0.01em] transition-all duration-300 ease-out-quint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-ink px-7 py-3 font-semibold hover:bg-accent-bright hover:shadow-[0_0_30px_-6px_rgba(92,200,189,0.5)]",
  outline:
    "px-7 py-3 text-paper border border-ink-line hover:border-accent/60 hover:text-accent bg-ink-raised/40",
  ghost:
    "px-2 py-1 text-paper-muted hover:text-accent",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
