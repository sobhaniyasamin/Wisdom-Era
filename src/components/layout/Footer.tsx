import Link from "next/link";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { portfolioCompanies } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8 px-[5%] md:px-[8%]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-12 border-b border-white/[0.08]">
          <div className="max-w-[320px]">
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <Logo size={52} />
              <span className="font-serif text-[1.1rem] font-bold text-white tracking-[1.5px] uppercase">
                Wisdom Era
              </span>
            </Link>
            <p className="text-white/40 text-[0.9rem] leading-relaxed">
              AI-focused tech holding company investing in and co-building the future of e-commerce
              and agriculture across emerging markets.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h5 className="text-teal font-sans text-[0.78rem] font-semibold tracking-[2px] uppercase mb-5">
                Portfolio
              </h5>
              {portfolioCompanies.map((c) => (
                <Link
                  key={c.slug}
                  href={`/portfolio/${c.slug}`}
                  className="block text-white/50 no-underline text-[0.9rem] mb-3 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:rounded-sm"
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div>
              <h5 className="text-teal font-sans text-[0.78rem] font-semibold tracking-[2px] uppercase mb-5">
                Company
              </h5>
              <Link
                href="/#about"
                className="block text-white/50 no-underline text-[0.9rem] mb-3 transition-colors duration-300 hover:text-white"
              >
                About
              </Link>
              <Link
                href="/#sectors"
                className="block text-white/50 no-underline text-[0.9rem] mb-3 transition-colors duration-300 hover:text-white"
              >
                Sectors
              </Link>
              <Link
                href="/#approach"
                className="block text-white/50 no-underline text-[0.9rem] mb-3 transition-colors duration-300 hover:text-white"
              >
                Approach
              </Link>
              <Link
                href="/contact"
                className="block text-white/50 no-underline text-[0.9rem] mb-3 transition-colors duration-300 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-[0.82rem]">
            &copy; 2026 Wisdom Era. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-teal transition-colors"
              aria-label="X (Twitter)"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:info@wisdomera.com"
              className="text-white/30 hover:text-teal transition-colors"
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
