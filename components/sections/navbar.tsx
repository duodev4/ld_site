"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import coverImage from "../../logo.png";
import { navItems } from "@/lib/site-content";
import { SoundToggle } from "@/components/ui/sound-toggle";

type NavbarProps = {
  soundEnabled: boolean;
  onToggleSound: () => void;
};

export function Navbar({ soundEnabled, onToggleSound }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-40 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-full border border-white/12 bg-slate-950/55 px-4 py-3 shadow-[0_24px_80px_rgba(2,6,23,0.45)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image src={coverImage} alt="LinkersDev Logo" fill className="object-contain" priority />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">LinkersDev</span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/20 hover:text-white lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="mt-2 overflow-hidden rounded-3xl border border-white/12 bg-slate-950/90 px-4 py-5 shadow-[0_24px_80px_rgba(2,6,23,0.55)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 border-t border-white/[0.06] pt-4">
              <SoundToggle enabled={soundEnabled} onToggle={onToggleSound} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
