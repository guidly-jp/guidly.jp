import Reveal from "./Reveal";
import type { SiteContent } from "@/content/types";

export default function Company({ t }: { t: SiteContent }) {
  const c = t.company;
  return (
    <section id="company" className="scroll-mt-[72px] border-t border-line bg-white py-[72px] md:py-[110px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col gap-4">
            <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-ink-3">{c.label}</span>
            <h2 className="text-2xl font-bold leading-[1.35] tracking-wide md:text-[34px]">{c.h2}</h2>
          </Reveal>
          <Reveal delay={120}>
            <dl className="flex flex-col">
              {c.rows.map((row) => (
                <div key={row.dt} className="grid grid-cols-1 gap-1 border-t border-line py-4 text-[15px] md:grid-cols-[200px_minmax(0,1fr)] md:gap-6">
                  <dt className="font-medium text-ink-3">{row.dt}</dt>
                  <dd className="text-ink">
                    {row.dd.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-1 gap-1 border-y border-line py-4 text-[15px] md:grid-cols-[200px_minmax(0,1fr)] md:gap-6">
                <dt className="font-medium text-ink-3">{c.sitesLabel}</dt>
                <dd className="flex flex-col gap-1">
                  {c.sites.map((s) => (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener" className="font-en transition-colors hover:text-accent">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
