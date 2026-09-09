import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "プライバシーポリシー | ガイドリー株式会社",
  description: "ガイドリー株式会社の個人情報の取り扱いについて。",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

const sections: { h: string; p?: string; list?: string[] }[] = [
  { h: "1. 個人情報の定義", p: "個人情報とは、氏名、住所、電話番号、メールアドレス等、特定の個人を識別できる情報をいいます。" },
  { h: "2. 個人情報の取得", p: "当社は、お問い合わせ、資料請求、サービス提供等に際し、適法かつ公正な手段で個人情報を取得します。" },
  {
    h: "3. 個人情報の利用目的",
    p: "取得した個人情報は、以下の目的で利用します。",
    list: ["サービスの提供および運営", "お問い合わせやご依頼への対応", "サービス向上のためのアンケート・マーケティング調査", "法令等に基づく対応"],
  },
  { h: "4. 個人情報の第三者提供", p: "当社は、法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供しません。" },
  { h: "5. 個人情報の管理", p: "当社は、個人情報の漏えい、紛失、改ざん等を防止するため、適切な安全管理措置を講じます。" },
  { h: "6. 個人情報の開示・訂正・削除", p: "ご本人から自己の個人情報の開示、訂正、削除等の請求があった場合は、適切かつ速やかに対応します。" },
  { h: "7. プライバシーポリシーの変更", p: "当社は、必要に応じて本ポリシーを変更することがあります。変更後の内容は当社Webサイトに掲載し、公表します。" },
];

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-5 md:px-10">
          <Link href="/" className="font-en text-[17px] font-semibold tracking-wide text-ink">
            Guidly, Inc.
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-accent">
            <ArrowLeft size={16} strokeWidth={2} />
            トップへ戻る
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[760px] px-5 py-16 md:px-10 md:py-24">
        <span className="font-en text-xs font-medium uppercase tracking-[0.18em] text-ink-3">Privacy Policy</span>
        <h1 className="mt-4 text-3xl font-bold leading-[1.35] md:text-[34px]">プライバシーポリシー</h1>
        <p className="mt-8 text-[15px] text-ink-2">
          ガイドリー株式会社（以下「当社」といいます）は、お客様のプライバシーを尊重し、個人情報の保護に努めます。当社は、以下の方針に基づき個人情報を適切に取り扱います。
        </p>
        <div className="mt-10 flex flex-col gap-8">
          {sections.map((s) => (
            <section key={s.h} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold">{s.h}</h2>
              {s.p && <p className="text-[15px] text-ink-2">{s.p}</p>}
              {s.list && (
                <ul className="list-disc space-y-1 pl-6 text-[15px] text-ink-2">
                  {s.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-bold">8. お問い合わせ窓口</h2>
            <p className="text-[15px] text-ink-2">
              ガイドリー株式会社
              <br />
              〒060-0061 札幌市中央区南1条西2丁目1-2 木NINARU BLDG. TREEBASE
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t border-line py-8 text-center font-en text-xs text-ink-3">© {new Date().getFullYear()} Guidly, Inc.</footer>
    </>
  );
}
