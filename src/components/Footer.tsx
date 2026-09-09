import Link from "next/link";
import type { SiteContent } from "@/content/types";

export default function Footer({ t }: { t: SiteContent }) {
  const f = t.footer;
  const year = new Date().getFullYear();
  const isExternal = (href: string) => href.startsWith("http");
  return (
    <footer className="bg-ink pb-10 pt-14 text-white">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 md:px-10">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-2.5">
            <span className="font-en text-lg font-semibold">Guidly, Inc.</span>
            <span className="text-[13px] text-dark-muted">{f.tagline}</span>
          </div>
          <div className="flex gap-10 text-[13px] md:justify-end">
            <div className="flex flex-col gap-2.5">
              <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-dark-muted">{f.servicesLabel}</span>
              {f.services.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener" className="text-white transition-colors hover:text-dark-soft">
                  {s.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-dark-muted">{f.companyLabel}</span>
              {f.companyLinks.map((l) =>
                isExternal(l.href) || l.href.startsWith("#") ? (
                  <a key={l.href} href={l.href} className="text-white transition-colors hover:text-dark-soft">
                    {l.label}
                  </a>
                ) : (
                  <Link key={l.href} href={l.href} className="text-white transition-colors hover:text-dark-soft">
                    {l.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-dark-line pt-6 text-xs text-dark-muted">
          <span className="font-en">
            © {year} {f.copyright}
          </span>
          <div className="flex gap-2.5 font-en">
            <span className="text-white">{t.switchTo.current}</span>
            <span>/</span>
            <Link href={t.switchTo.href} className="transition-colors hover:text-white">
              {t.switchTo.label}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
