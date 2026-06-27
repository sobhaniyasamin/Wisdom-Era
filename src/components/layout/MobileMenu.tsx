"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink-deep/70 backdrop-blur-sm z-[998]"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            className="fixed top-0 right-0 w-[290px] h-full bg-ink-raised border-l border-ink-line z-[999] flex flex-col p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <button
              ref={closeRef}
              onClick={onClose}
              className="self-end mb-10 text-paper-muted hover:text-paper transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            <ul className="space-y-1">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="flex items-baseline gap-3 text-paper hover:text-accent text-xl font-display font-semibold tracking-tight transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-2"
                  >
                    <span className="font-mono text-[0.7rem] text-paper-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full text-center bg-accent text-accent-ink py-3 rounded-full font-semibold transition-all duration-300 hover:bg-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink-raised"
              >
                Get in Touch
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
