"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] flex items-center justify-between transition-all duration-400 ease-out-expo ${
          scrolled
            ? "bg-navy/95 backdrop-blur-[20px] py-3 px-6 md:px-12 shadow-[0_4px_30px_rgba(0,0,0,0.15)]"
            : "py-5 px-6 md:px-12"
        }`}
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Logo size={50} />
          <span className="font-serif text-[1.35rem] font-bold text-white tracking-[1.5px] uppercase">
            Wisdom Era
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white/80 no-underline text-[0.88rem] font-medium tracking-[0.8px] uppercase relative transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-teal after:transition-[width] after:duration-300 after:ease-out-expo hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:rounded-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="bg-teal text-navy-deep px-6 py-2.5 rounded-md font-semibold text-[0.88rem] tracking-[0.5px] uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(104,197,178,0.4)] no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-md p-1"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={28} />
        </button>
      </nav>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
