import { ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import type { SiteContent } from "@/content/types";

export default function Hero({ t }: { t: SiteContent }) {
  return (
    <section className="pt-28 pb-16 md:pt-[140px] md:pb-[110px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12">
          <Reveal className="flex flex-col gap-8 md:col-span-8">
            <div className="flex items-center gap-3.5 font-en text-xs font-medium uppercase tracking-[0.18em] text-ink-3">
              <span className="inline-block h-px w-7 bg-accent" aria-hidden="true" />
              <span>{t.hero.label}</span>
            </div>
            <h1 className="text-[31px] font-bold leading-[1.32] tracking-wide md:text-[54px]">
              {t.hero.h1Lines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="max-w-[640px] text-[16px] leading-[1.9] text-ink-2 md:text-[17px]">{t.hero.lead}</p>
            <div className="flex flex-col gap-3.5 pt-2 md:flex-row md:items-center">
              <a
                href="#services"
                className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded bg-ink px-6 text-[15px] font-medium text-white transition-colors hover:bg-accent"
              >
                {t.hero.ctaPrimary}
                <ArrowDown size={16} strokeWidth={2} />
              </a>
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center rounded border border-ink px-6 text-[15px] font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="hidden border-t border-ink md:col-span-4 md:flex md:flex-col">
            {t.hero.index.map((item) => (
              <div key={item.num} className="flex items-center justify-between border-b border-line py-4">
                <div className="flex items-baseline gap-3.5">
                  <span className="font-en text-xs text-ink-3">{item.num}</span>
                  <span className="text-[15px] font-medium">{item.name}</span>
                </div>
                <span className="font-en text-xs text-ink-3">{item.tag}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
