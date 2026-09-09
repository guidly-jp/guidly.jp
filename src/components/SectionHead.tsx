import type { ReactNode } from "react";

interface Props {
  label: string;
  h2Lines: string[];
  lead?: string;
  dark?: boolean;
  /** 見出しの右に置く要素（lead の代わり） */
  aside?: ReactNode;
  id?: string;
}

export default function SectionHead({ label, h2Lines, lead, dark, aside }: Props) {
  return (
    <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col gap-4">
        <span className={`font-en text-xs font-medium uppercase tracking-[0.18em] ${dark ? "text-dark-muted" : "text-ink-3"}`}>{label}</span>
        <h2 className={`text-2xl font-bold leading-[1.35] tracking-wide md:text-[34px] ${dark ? "text-white" : "text-ink"}`}>
          {h2Lines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h2>
      </div>
      {aside ?? (lead ? <p className={`text-base ${dark ? "text-dark-soft" : "text-ink-2"}`}>{lead}</p> : null)}
    </div>
  );
}
