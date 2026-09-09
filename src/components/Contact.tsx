import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import ContactForm from "./ContactForm";
import type { SiteContent } from "@/content/types";

export default function Contact({ t }: { t: SiteContent }) {
  const c = t.contact;
  return (
    <section id="contact" className="scroll-mt-[72px] border-t border-line bg-paper py-[72px] md:py-[110px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 md:gap-14 md:px-10">
        <Reveal>
          <SectionHead label={c.label} h2Lines={c.h2Lines} lead={c.lead} />
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {c.routes.map((r, i) => (
            <Reveal key={r.href} delay={i * 80} className="flex">
              <a
                href={r.href}
                target="_blank"
                rel="noopener"
                className="flex min-h-[200px] w-full flex-col gap-3.5 rounded-md border border-line bg-white p-6 transition-colors hover:border-accent"
              >
                <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-accent">{r.label}</span>
                <span className="text-lg font-bold leading-[1.5]">{r.title}</span>
                <span className="flex-grow text-sm text-ink-2">{r.body}</span>
                <span className={`inline-flex items-center gap-2 self-start border-b border-ink pb-0.5 text-sm font-medium ${r.en ? "font-en" : ""}`}>
                  {r.cta}
                  <ArrowUpRight size={14} strokeWidth={2} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid grid-cols-1 items-start gap-8 border-t border-line pt-6 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col gap-3 md:pt-6">
              <span className="text-xl font-bold">{c.form.title}</span>
              <p className="text-sm text-ink-2">{c.form.body}</p>
            </div>
            <div className="md:pt-6">
              <ContactForm t={c.form} lang={t.lang} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
