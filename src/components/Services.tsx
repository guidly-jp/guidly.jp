import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import type { ServiceItem, SiteContent } from "@/content/types";

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex h-[26px] items-center rounded-full border border-line bg-white px-2.5 text-xs text-ink-2">{children}</span>
  );
}

function ServiceName({ item }: { item: ServiceItem }) {
  if (item.kind === "yoi") {
    return <Image src="/images/e-zeirishi-logo.png" alt="良い税理士" width={190} height={54} className="h-auto w-[190px]" />;
  }
  if (item.kind === "taxmatch") {
    return (
      <div className="flex items-center gap-3">
        <Image src="/images/taxmatch-icon.png" alt="" width={40} height={40} className="h-10 w-10 rounded-lg" />
        <span className="font-en text-[22px] font-semibold tracking-tight">TaxMatch Japan</span>
      </div>
    );
  }
  return (
    <span className="text-[22px] font-bold leading-[1.4]">
      {item.nameLines?.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </span>
  );
}

export default function Services({ t }: { t: SiteContent }) {
  return (
    <section id="services" className="scroll-mt-[72px] border-t border-line bg-white py-[72px] md:py-[110px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 md:gap-14 md:px-10">
        <Reveal>
          <SectionHead label={t.services.label} h2Lines={t.services.h2Lines} lead={t.services.lead} />
        </Reveal>

        <div className="flex flex-col">
          {t.services.items.map((item, i) => (
            <Reveal key={item.num} delay={i * 80}>
              <div
                className={`grid grid-cols-1 items-start gap-3.5 border-t border-line py-8 md:grid-cols-12 md:gap-8 md:py-11 ${
                  i === t.services.items.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-en text-[13px] text-ink-3 md:col-span-1 md:pt-1.5">{item.num}</div>
                <div className="flex flex-col gap-4 md:col-span-4">
                  <ServiceName item={item} />
                  <div className="flex flex-wrap gap-2">
                    {item.audience.map((a) => (
                      <Tag key={a}>{a}</Tag>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:col-span-5">
                  <h3 className="text-xl font-bold leading-[1.5]">{item.title}</h3>
                  <p className="text-[15px] text-ink-2">{item.body}</p>
                  {item.menu && (
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {item.menu.map((m) => (
                        <Tag key={m}>{m}</Tag>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex md:col-span-2 md:justify-end">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.linkLabel}
                    <ArrowUpRight size={14} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
