"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const onHome = pathname === "/";

  // Always use dark background + light text, regardless of scroll
  const bg = "bg-[#0D0608]/95 backdrop-blur border-b border-white/10";
  const fg = "text-[#FAF8F5]";

  const isActive = (page: string) => {
    if (page === "home") return pathname === "/";
    return pathname === `/${page}`;
  };

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link href="/"
          className={`font-serif text-lg tracking-wide ${fg} hover:text-accent transition-colors duration-300`}>
          Kayeon Onyeka
        </Link>
        <div className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map(n => (
            <Link key={n.page} href={`/${n.page}`}
              className={`font-sans text-[10px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                isActive(n.page) ? "text-accent" : `${fg} hover:text-accent`
              }`}>
              {n.label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className={`lg:hidden ${fg}`} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0608] border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-7 flex flex-col gap-5">
              {NAV_ITEMS.map(n => (
                <Link key={n.page} href={`/${n.page}`}
                  onClick={() => setOpen(false)}
                  className={`text-left font-sans text-[10px] tracking-[0.22em] uppercase ${
                    isActive(n.page) ? "text-accent" : "text-[#FAF8F5] hover:text-accent"
                  } transition-colors`}>
                  {n.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}