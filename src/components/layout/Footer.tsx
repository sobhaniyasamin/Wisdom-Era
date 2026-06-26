import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { portfolioCompanies } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-ink-deep border-t border-ink-line pt-20 pb-10 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-14 border-b border-ink-line">
          <div className="max-w-[340px]">
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-5">
              <Logo size={32} />
              <span className="font-display text-[1rem] font-bold text-paper tracking-[0.14em] uppercase">
                Wisdom Era
              </span>
            </Link>
            <p className="text-paper-muted text-[0.92rem] leading-[1.7]">
              AI-focused tech holding company investing in and co-building the future of e-commerce
              and agriculture across emerging markets.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-paper-faint mb-5">
              Portfolio
            </h5>
            {portfolioCompanies.map((c) => (
              <Link
                key={c.slug}
                href={`/portfolio/${c.slug}`}
                className="block text-paper-muted no-underline text-[0.92rem] mb-3 transition-colors duration-300 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>

          <div>
            <h5 className="font-mono text-[0.7rem] font-medium tracking-[0.16em] uppercase text-paper-faint mb-5">
              Company
            </h5>
            {[
              { label: "About", href: "/#about" },
              { label: "Sectors", href: "/#sectors" },
              { label: "Approach", href: "/#approach" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-paper-muted no-underline text-[0.92rem] mb-3 transition-colors duration-300 hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-paper-faint text-[0.82rem] font-mono tracking-tight">
            &copy; 2026 Wisdom Era. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/wisdom-era/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-faint hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-faint hover:text-accent transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:info@wisdomera.net"
              className="text-paper-faint hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
