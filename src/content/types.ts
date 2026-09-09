export type Lang = "ja" | "en";

export interface ServiceItem {
  num: string;
  kind: "yoi" | "taxmatch" | "support";
  /** kind=support のときの見出し（2行可） */
  nameLines?: string[];
  audience: string[];
  title: string;
  body: string;
  menu?: string[];
  linkLabel: string;
  href: string;
}

export interface RouteCard {
  label: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  /** CTAを英語書体で表示 */
  en?: boolean;
}

export interface SiteContent {
  lang: Lang;
  path: string;
  switchTo: { label: string; href: string; current: string };
  meta: { title: string; description: string; ogTitle: string };
  nav: { services: string; about: string; company: string; contact: string };
  hero: {
    label: string;
    h1Lines: string[];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    index: { num: string; name: string; tag: string }[];
  };
  services: { label: string; h2Lines: string[]; lead: string; items: ServiceItem[] };
  how: {
    label: string;
    h2Lines: string[];
    lead: string;
    owners: { title: string; sub: string };
    media: { tag: string; line1: string; line2: string; sub: string };
    firms: { title: string; sub: string };
    consult: string;
    refer: string;
    interview: string;
    support: string;
    supportShort: string;
    supportMenu: string;
  };
  about: {
    label: string;
    name: string;
    nameSub: string;
    role: string;
    timeline: { date: string; title: string; body: string }[];
  };
  company: {
    label: string;
    h2: string;
    rows: { dt: string; dd: string[] }[];
    sitesLabel: string;
    sites: { label: string; href: string }[];
  };
  contact: {
    label: string;
    h2Lines: string[];
    lead: string;
    routes: RouteCard[];
    form: {
      title: string;
      body: string;
      company: string;
      companyPlaceholder: string;
      name: string;
      namePlaceholder: string;
      email: string;
      message: string;
      messagePlaceholder: string;
      privacyBefore: string;
      privacyLabel: string;
      privacyAfter: string;
      privacyHref: string;
      submit: string;
      sending: string;
      successTitle: string;
      successBody: string;
      error: string;
      required: string;
      invalidEmail: string;
    };
  };
  footer: {
    tagline: string;
    servicesLabel: string;
    services: { label: string; href: string }[];
    companyLabel: string;
    companyLinks: { label: string; href: string }[];
    copyright: string;
  };
}
