import Image from "next/image";
import Reveal from "./Reveal";
import type { SiteContent } from "@/content/types";

export default function About({ t }: { t: SiteContent }) {
  const a = t.about;
  return (
    <section id="about" className="scroll-mt-[72px] bg-paper py-[72px] md:py-[110px]">
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
          <Reveal className="flex flex-col gap-7">
            <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-ink-3">{a.label}</span>
            <Image
              src="/images/miyata-portrait.jpg"
              alt={a.name}
              width={360}
              height={450}
              className="h-[250px] w-[200px] rounded object-cover object-[center_20%] md:h-[450px] md:w-[360px]"
              priority={false}
            />
            <div className="flex flex-col gap-1.5">
              <div className="flex items-baseline gap-3.5">
                <span className="text-[26px] font-bold">{a.name}</span>
                <span className="font-en text-sm text-ink-3">{a.nameSub}</span>
              </div>
              <span className="text-sm text-ink-2">{a.role}</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col md:pt-11">
            {a.timeline.map((item, i) => (
              <div
                key={item.date}
                className={`grid grid-cols-1 gap-2 border-t border-line py-6 md:grid-cols-[120px_minmax(0,1fr)] md:gap-6 ${
                  i === a.timeline.length - 1 ? "border-b" : ""
                }`}
              >
                <span className={`font-en text-[13px] md:pt-1 ${i === a.timeline.length - 1 ? "font-semibold text-ink" : "text-ink-3"}`}>
                  {item.date}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="text-[17px] font-bold leading-[1.5]">{item.title}</span>
                  <p className="text-sm text-ink-2">{item.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
