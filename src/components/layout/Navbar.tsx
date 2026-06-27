"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between px-6 md:px-12 transition-all duration-500 ease-out-quint ${
          scrolled
            ? "py-3 bg-ink/80 backdrop-blur-xl border-b border-ink-line"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5 no-underline group">
          <Logo size={34} />
          <span className="font-display text-[1.05rem] font-bold text-paper tracking-[0.14em] uppercase">
            Wisdom Era
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-paper-muted no-underline text-[0.86rem] font-medium tracking-[0.01em] transition-colors duration-300 hover:text-paper relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 after:ease-out-quint hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-accent text-accent-ink px-5 py-2 font-semibold text-[0.84rem] transition-all duration-300 hover:bg-accent-bright hover:shadow-[0_0_24px_-6px_rgba(92,200,189,0.5)] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        <div className="md:hidden flex items-center gap-1.5">
          <ThemeToggle />
          <button
            className="text-paper-muted hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
