"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import type { SiteContent } from "@/content/types";

export default function Header({ t }: { t: SiteContent }) {
  const [open, setOpen] = useState(false);
  const links = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.company, href: "#company" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 md:px-10">
        <Link href={t.path} className="font-en text-[17px] font-semibold tracking-wide text-ink">
          Guidly, Inc.
        </Link>

        <nav className="hidden items-center gap-9 font-en text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink-2 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5 font-en text-[13px] font-medium">
            <span className="text-ink">{t.switchTo.current}</span>
            <span className="h-3 w-px bg-[#cfd0cb]" aria-hidden="true" />
            <Link href={t.switchTo.href} className="text-ink-3 transition-colors hover:text-accent" hrefLang={t.lang === "ja" ? "en" : "ja"}>
              {t.switchTo.label}
            </Link>
          </div>
          <a
            href="#contact"
            className="hidden h-[42px] items-center rounded px-5 text-sm font-medium text-white transition-colors md:inline-flex bg-ink hover:bg-accent"
          >
            {t.nav.contact}
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            {open ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <nav className="mx-auto flex w-full max-w-[1200px] flex-col px-5 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 font-en text-base font-medium">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="py-4 text-base font-medium">
              {t.nav.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
