import { ArrowDown, ArrowUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import type { SiteContent } from "@/content/types";

function Diagram({ t }: { t: SiteContent }) {
  const h = t.how;
  return (
    <svg
      width="1120"
      height="360"
      viewBox="0 0 1120 360"
      fill="none"
      role="img"
      aria-label={`${h.owners.title} → ${h.media.line1} / ${h.media.line2} → ${h.firms.title}`}
      className="h-auto w-full max-w-[1120px]"
    >
      <rect x="20" y="80" width="280" height="120" rx="6" className="stroke-diagram-line" strokeWidth="1" />
      <text x="160" y="128" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700">
        {h.owners.title}
      </text>
      <text x="160" y="160" textAnchor="middle" fill="#9aa3b5" fontSize="13">
        {h.owners.sub}
      </text>

      <rect x="400" y="60" width="310" height="160" rx="6" fill="#ffffff" />
      <text x="555" y="106" textAnchor="middle" fill="#7b8494" fontSize="11" letterSpacing="2" className="font-en">
        {h.media.tag}
      </text>
      <text x="555" y="138" textAnchor="middle" fill="#172033" fontSize="18" fontWeight="700">
        {h.media.line1}
      </text>
      <text x="555" y="170" textAnchor="middle" fill="#172033" fontSize="15" fontWeight="600" className="font-en">
        {h.media.line2}
      </text>
      <text x="555" y="198" textAnchor="middle" fill="#7b8494" fontSize="12">
        {h.media.sub}
      </text>

      <rect x="820" y="80" width="280" height="120" rx="6" className="stroke-diagram-line" strokeWidth="1" />
      <text x="960" y="128" textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="700">
        {h.firms.title}
      </text>
      <text x="960" y="160" textAnchor="middle" fill="#9aa3b5" fontSize="13">
        {h.firms.sub}
      </text>

      <path d="M300 140 H392" stroke="#ffffff" strokeWidth="1.5" markerEnd="url(#ah)" />
      <text x="346" y="126" textAnchor="middle" fill="#ffffff" fontSize="12">
        {h.consult}
      </text>
      <path d="M710 140 H812" stroke="#ffffff" strokeWidth="1.5" markerEnd="url(#ah)" />
      <text x="761" y="126" textAnchor="middle" fill="#ffffff" fontSize="12">
        {h.refer}
      </text>

      <path d="M960 200 V260 H555 V228" stroke="#9aa3b5" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#ag)" />
      <text x="770" y="252" textAnchor="middle" fill="#9aa3b5" fontSize="13">
        {h.interview}
      </text>

      <rect x="820" y="284" width="280" height="68" rx="6" className="fill-accent" />
      <text x="960" y="311" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="700">
        {h.supportShort}
      </text>
      <text x="960" y="334" textAnchor="middle" fill="#ffffff" fontSize="12">
        {h.supportMenu}
      </text>
      <path d="M960 284 V208" className="stroke-accent" strokeWidth="2" markerEnd="url(#ab)" />

      <defs>
        <marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#ffffff" />
        </marker>
        <marker id="ag" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#9aa3b5" />
        </marker>
        <marker id="ab" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" className="fill-accent" />
        </marker>
      </defs>
    </svg>
  );
}

function MobileDiagram({ t }: { t: SiteContent }) {
  const h = t.how;
  const Step = ({ children, up }: { children: string; up?: boolean }) => (
    <div className="flex items-center gap-2.5 pl-4 text-[13px]">
      {up ? <ArrowUp size={16} strokeWidth={2} /> : <ArrowDown size={16} strokeWidth={2} />}
      {children}
    </div>
  );
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 rounded-md border border-diagram-line p-4">
        <span className="font-bold">{h.owners.title}</span>
        <span className="text-[13px] text-dark-muted">{h.owners.sub}</span>
      </div>
      <Step>{h.consult}</Step>
      <div className="flex flex-col gap-1 rounded-md bg-white p-4 text-ink">
        <span className="font-bold">
          {h.media.line1} / {h.media.line2}
        </span>
        <span className="text-[13px] text-ink-3">{h.media.sub}</span>
      </div>
      <Step>{`${h.refer} / ${h.interview}`}</Step>
      <div className="flex flex-col gap-1 rounded-md border border-diagram-line p-4">
        <span className="font-bold">{h.firms.title}</span>
        <span className="text-[13px] text-dark-muted">{h.firms.sub}</span>
      </div>
      <Step up>{h.supportShort}</Step>
      <div className="rounded-md bg-accent px-4 py-3.5 text-sm font-bold">{h.supportMenu}</div>
    </div>
  );
}

export default function HowItWorks({ t }: { t: SiteContent }) {
  return (
    <section className="bg-ink py-[72px] text-white md:py-[110px]">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 px-5 md:gap-14 md:px-10">
        <Reveal>
          <SectionHead label={t.how.label} h2Lines={t.how.h2Lines} lead={t.how.lead} dark />
        </Reveal>
        <Reveal delay={120}>
          <div className="hidden justify-center md:flex">
            <Diagram t={t} />
          </div>
          <div className="md:hidden">
            <MobileDiagram t={t} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
