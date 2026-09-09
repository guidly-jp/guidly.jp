import { LINKS } from "@/lib/site";
import type { SiteContent } from "./types";

export const ja: SiteContent = {
  lang: "ja",
  path: "/",
  switchTo: { label: "EN", href: "/en/", current: "JA" },
  meta: {
    title: "ガイドリー株式会社 | Guidly, Inc.",
    ogTitle: "ガイドリー株式会社 | 良い経営者と良い税理士の出会いは、良い経営を作る",
    description:
      "ガイドリー株式会社は、税理士紹介メディア「良い税理士」と英語対応税理士マッチング「TaxMatch Japan」を運営し、税理士事務所の集客とWebをハンズオンで支援する札幌の会社です。",
  },
  nav: { services: "Services", about: "About", company: "Company", contact: "お問い合わせ" },
  hero: {
    label: "Guidly, Inc. — Sapporo, Japan",
    h1Lines: ["良い経営者と", "良い税理士の出会いは、", "良い経営を作る。"],
    lead:
      "ガイドリーは、税理士紹介メディア「良い税理士」と、英語で税理士を探せる「TaxMatch Japan」を運営し、税理士事務所の集客とWebをハンズオンで支援する会社です。",
    ctaPrimary: "事業を見る",
    ctaSecondary: "お問い合わせ",
    index: [
      { num: "01", name: "良い税理士", tag: "Media" },
      { num: "02", name: "TaxMatch Japan", tag: "English" },
      { num: "03", name: "税理士事務所へのハンズオン支援", tag: "Support" },
    ],
  },
  services: {
    label: "Services",
    h2Lines: ["経営者、外国人、税理士事務所。", "三者をつなぐ3つの事業。"],
    lead:
      "税理士を探す人にはメディアを、税理士事務所には集客とWebの実務を。取材で得た事務所の理解が、紹介の精度と支援の質を同時に上げます。",
    items: [
      {
        num: "01",
        kind: "yoi",
        audience: ["経営者", "個人事業主", "相続"],
        title: "税理士紹介メディア「良い税理士」",
        body:
          "全国の税理士を検索・比較し、専任担当が無料で紹介するマッチングメディア。税理士本人へのインタビュー記事で、数字に出ない事務所の考え方を伝えます。",
        linkLabel: "e-zeirishi.com",
        href: LINKS.yoiZeirishi,
      },
      {
        num: "02",
        kind: "taxmatch",
        audience: ["在日外国人", "海外在住者", "English"],
        title: "英語で税理士を探せる無料マッチング",
        body:
          "日本で暮らす外国人や海外在住者と、英語対応できる税理士をつなぎます。確定申告、暗号資産、相続、出国税など、英語では相談先が見つかりにくい領域を専門にしています。",
        linkLabel: "e-zeirishi.com/en",
        href: LINKS.taxmatch,
      },
      {
        num: "03",
        kind: "support",
        nameLines: ["税理士事務所への", "ハンズオン支援"],
        audience: ["税理士事務所", "税理士法人"],
        title: "集客とWebを、実務ごと引き受ける",
        body:
          "「良い税理士」での優先紹介と専門領域コラムの制作、先生監修の記事づくり、HP制作、SEO顧問。企画から公開・運用まで、事務所の中に入って一緒に動きます。",
        menu: ["掲載プラン", "監修記事", "HP制作", "SEO顧問", "HP診断"],
        linkLabel: "パートナー募集",
        href: LINKS.partner,
      },
    ],
  },
  how: {
    label: "How it works",
    h2Lines: ["ひとつの循環で、", "3つの事業が動く。"],
    lead:
      "相談者はメディアから税理士へ。税理士事務所は取材を通じてメディアに参加し、その理解を土台に集客とWebの支援が始まります。紹介の精度と支援の質を、同じ循環が育てます。",
    owners: { title: "経営者・個人事業主", sub: "在日外国人・海外在住者" },
    media: { tag: "MEDIA", line1: "良い税理士", line2: "TaxMatch Japan", sub: "検索・比較・無料紹介・インタビュー" },
    firms: { title: "税理士事務所", sub: "全国の税理士・税理士法人" },
    consult: "相談",
    refer: "無料紹介",
    interview: "取材・インタビュー記事として参加",
    support: "ハンズオン支援（掲載・監修記事・HP・SEO）",
    supportShort: "ハンズオン支援",
    supportMenu: "掲載・監修記事・HP・SEO",
  },
  about: {
    label: "About",
    name: "宮田 巧",
    nameSub: "Takumi Miyata",
    role: "代表取締役 ／ 慶應義塾大学商学部卒業",
    timeline: [
      {
        date: "2017.03",
        title: "株式会社HERP（HR Techスタートアップ）に新卒入社",
        body: "主にビジネス側を掌握し、マーケティング・セールスからカスタマーサクセスまで一気通貫して対応。創業一期目からの組織の急成長期を牽引。",
      },
      {
        date: "2024.02",
        title: "個人事業主としての活動を開始",
        body: "中小企業のデジタル化支援や新規サービス開発に従事。現場に即した実用的なDX支援を行う。",
      },
      {
        date: "2025.05",
        title: "ガイドリー株式会社を創業",
        body: "税理士業界と中小企業の架け橋となるべく法人化。スタートアップ業界で最先端の技術に触れてきた経験を存分に発揮します。",
      },
    ],
  },
  company: {
    label: "Company",
    h2: "会社概要",
    rows: [
      { dt: "社名", dd: ["ガイドリー株式会社（Guidly, Inc.）"] },
      { dt: "所在地", dd: ["〒060-0061 札幌市中央区南1条西2丁目1-2", "木NINARU BLDG. TREEBASE"] },
      { dt: "設立", dd: ["2025年5月"] },
      { dt: "代表取締役", dd: ["宮田 巧"] },
      {
        dt: "事業内容",
        dd: [
          "税理士紹介メディア「良い税理士」の運営",
          "英語対応税理士マッチング「TaxMatch Japan」の運営",
          "税理士事務所向けの集客・Web・IT支援",
        ],
      },
    ],
    sitesLabel: "運営サイト",
    sites: [
      { label: "e-zeirishi.com", href: LINKS.yoiZeirishi },
      { label: "e-zeirishi.com/en", href: LINKS.taxmatch },
    ],
  },
  contact: {
    label: "Contact",
    h2Lines: ["ご用件に合わせて、", "窓口をご案内します。"],
    lead:
      "税理士をお探しの方、英語での相談、事務所の集客のご相談は、それぞれ専用の窓口が最短です。取材・提携・その他のご連絡は、下のフォームからお送りください。",
    routes: [
      {
        label: "For business owners",
        title: "税理士を探している",
        body: "経営者・個人事業主の方。全国の税理士から無料でご紹介します。",
        cta: "良い税理士へ",
        href: LINKS.yoiZeirishi,
      },
      {
        label: "For English speakers",
        title: "Find a tax accountant in English",
        body: "Free matching with bilingual tax accountants in Japan.",
        cta: "TaxMatch Japan",
        href: LINKS.taxmatch,
        en: true,
      },
      {
        label: "For tax firms",
        title: "事務所の集客・Webを相談したい",
        body: "税理士・税理士法人の方。掲載プランやハンズオン支援のご相談。",
        cta: "パートナー募集ページへ",
        href: LINKS.partner,
      },
    ],
    form: {
      title: "取材・提携・その他のご連絡",
      body: "メディア取材のご依頼、事業提携のご提案、その他のお問い合わせはこちらから。通常2営業日以内にご返信します。",
      company: "会社名・事務所名",
      companyPlaceholder: "ガイドリー株式会社",
      name: "お名前",
      namePlaceholder: "山田 太郎",
      email: "メールアドレス",
      message: "ご用件",
      messagePlaceholder: "ご相談内容をご記入ください",
      privacyBefore: "送信により、",
      privacyLabel: "プライバシーポリシー",
      privacyAfter: "に同意したものとみなします。",
      privacyHref: "/privacy/",
      submit: "送信する",
      sending: "送信中…",
      successTitle: "送信しました",
      successBody: "お問い合わせありがとうございます。通常2営業日以内にご返信します。",
      error: "送信に失敗しました。時間をおいて再度お試しください。",
      required: "必須項目です",
      invalidEmail: "メールアドレスの形式が正しくありません",
    },
  },
  footer: {
    tagline: "良い経営者と良い税理士の出会いは、良い経営を作る。",
    servicesLabel: "Services",
    services: [
      { label: "良い税理士", href: LINKS.yoiZeirishi },
      { label: "TaxMatch Japan", href: LINKS.taxmatch },
      { label: "税理士事務所向け支援", href: LINKS.partner },
    ],
    companyLabel: "Company",
    companyLinks: [
      { label: "代表プロフィール", href: "#about" },
      { label: "会社概要", href: "#company" },
      { label: "プライバシーポリシー", href: "/privacy/" },
    ],
    copyright: "Guidly, Inc. All rights reserved.",
  },
};
