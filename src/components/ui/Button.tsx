import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "cta";

const variants: Record<Variant, string> = {
  primary:
    "inline-flex items-center gap-2 bg-teal text-navy-deep px-8 py-3.5 rounded-lg font-semibold text-[0.95rem] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(104,197,178,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
  outline:
    "inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-lg font-medium text-[0.95rem] border-[1.5px] border-white/25 transition-all duration-300 hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2",
  cta: "inline-flex items-center gap-2.5 bg-navy text-white px-9 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:bg-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,62,111,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2",
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
  const classes = `${variants[variant]} ${className}`;

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
