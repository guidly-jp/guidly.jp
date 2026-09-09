import { LINKS } from "@/lib/site";
import type { SiteContent } from "./types";

// EN は直訳ではなく TaxMatch Japan を主役にした別編集（外国人の身元確認・提携候補向け）
export const en: SiteContent = {
  lang: "en",
  path: "/en/",
  switchTo: { label: "JA", href: "/", current: "EN" },
  meta: {
    title: "Guidly, Inc. | The company behind TaxMatch Japan",
    ogTitle: "Guidly, Inc. | The company behind TaxMatch Japan",
    description:
      "Guidly, Inc. is a Sapporo-based company running TaxMatch Japan, a free service matching English speakers with bilingual tax accountants in Japan, and Yoi Zeirishi, a Japanese tax-accountant matching media.",
  },
  nav: { services: "Services", about: "About", company: "Company", contact: "Contact" },
  hero: {
    label: "Guidly, Inc. — Sapporo, Japan",
    h1Lines: ["Good owners.", "Good tax accountants.", "Good business."],
    lead:
      "Guidly runs TaxMatch Japan, a free service that matches English speakers in Japan with bilingual tax accountants, and Yoi Zeirishi (e-zeirishi.com), a Japanese tax-accountant matching media. We also work hands-on with accounting firms on their marketing and web presence.",
    ctaPrimary: "Our services",
    ctaSecondary: "Contact",
    index: [
      { num: "01", name: "TaxMatch Japan", tag: "English" },
      { num: "02", name: "Yoi Zeirishi", tag: "Media" },
      { num: "03", name: "Hands-on support for tax firms", tag: "Support" },
    ],
  },
  services: {
    label: "Services",
    h2Lines: ["Three services.", "One connection."],
    lead:
      "Media for people looking for a tax accountant, and hands-on marketing and web work for the firms themselves. Interviewing firms in person is what makes our matching precise and our support practical.",
    items: [
      {
        num: "01",
        kind: "taxmatch",
        audience: ["Residents of Japan", "Overseas", "English"],
        title: "Free matching with English-speaking tax accountants",
        body:
          "We connect foreign residents and people overseas with tax accountants who work in English: individual and corporate tax filing, crypto, inheritance, exit tax, and the other areas where an English-speaking specialist is hard to find. Free for the person asking.",
        linkLabel: "e-zeirishi.com/en",
        href: LINKS.taxmatch,
      },
      {
        num: "02",
        kind: "yoi",
        audience: ["Business owners", "Sole proprietors", "Japanese"],
        title: "Yoi Zeirishi — tax-accountant matching media (Japanese)",
        body:
          "A Japanese-language media where business owners search and compare tax accountants nationwide and get a free introduction from a dedicated coordinator. In-depth interviews with the accountants themselves show how each firm thinks, not just its numbers.",
        linkLabel: "e-zeirishi.com",
        href: LINKS.yoiZeirishi,
      },
      {
        num: "03",
        kind: "support",
        nameLines: ["Hands-on support", "for tax firms"],
        audience: ["Tax accountant offices", "Tax corporations"],
        title: "Marketing and web, done together with the firm",
        body:
          "Priority introductions and specialist columns on Yoi Zeirishi, articles supervised by the firm's accountants, website production, and ongoing SEO advisory. We plan, publish and operate alongside the firm rather than handing over a report.",
        menu: ["Listing plans", "Supervised articles", "Websites", "SEO advisory", "Site audits"],
        linkLabel: "Partner program (Japanese)",
        href: LINKS.partner,
      },
    ],
  },
  how: {
    label: "How it works",
    h2Lines: ["One loop", "drives all three."],
    lead:
      "People find a tax accountant through our media. Firms join that media through interviews, and that first-hand understanding is where our marketing and web support begins. The same loop improves both the matching and the support.",
    owners: { title: "Business owners", sub: "Foreign residents · people overseas" },
    media: { tag: "MEDIA", line1: "TaxMatch Japan", line2: "Yoi Zeirishi", sub: "Search · compare · free introduction · interviews" },
    firms: { title: "Tax firms", sub: "Tax accountants across Japan" },
    consult: "Inquiry",
    refer: "Free introduction",
    interview: "Join through an interview article",
    support: "Hands-on support (listings · articles · web · SEO)",
    supportShort: "Hands-on support",
    supportMenu: "Listings · articles · web · SEO",
  },
  about: {
    label: "About",
    name: "Takumi Miyata",
    nameSub: "宮田 巧",
    role: "Founder & CEO · B.Com., Keio University",
    timeline: [
      {
        date: "2017.03",
        title: "Joined HERP, an HR-tech startup, as a new graduate",
        body: "Ran the business side end to end, from marketing and sales to customer success, through the company's rapid growth from its first year.",
      },
      {
        date: "2024.02",
        title: "Started working independently",
        body: "Digital transformation support and new-service development for small and mid-sized companies, grounded in how they actually operate.",
      },
      {
        date: "2025.05",
        title: "Founded Guidly, Inc.",
        body: "Incorporated to build the bridge between Japan's tax-accountant industry and small businesses, bringing the tools and pace of the startup world to it.",
      },
    ],
  },
  company: {
    label: "Company",
    h2: "Company profile",
    rows: [
      { dt: "Company name", dd: ["Guidly, Inc.（ガイドリー株式会社）"] },
      {
        dt: "Address",
        dd: ["TREEBASE, Ki NINARU Bldg., Minami 1-jo Nishi 2-chome 1-2,", "Chuo-ku, Sapporo, Hokkaido 060-0061, Japan"],
      },
      { dt: "Founded", dd: ["May 2025"] },
      { dt: "Representative", dd: ["Takumi Miyata, CEO"] },
      {
        dt: "Business",
        dd: [
          "TaxMatch Japan — matching English speakers with bilingual tax accountants",
          "Yoi Zeirishi (e-zeirishi.com) — tax-accountant matching media in Japanese",
          "Marketing, web and IT support for tax accountant firms",
        ],
      },
    ],
    sitesLabel: "Websites",
    sites: [
      { label: "e-zeirishi.com/en", href: LINKS.taxmatch },
      { label: "e-zeirishi.com", href: LINKS.yoiZeirishi },
    ],
  },
  contact: {
    label: "Contact",
    h2Lines: ["Tell us what you need,", "and we'll point you to the right door."],
    lead:
      "Looking for a tax accountant? The fastest route is the service itself. For partnerships, press, and anything else, use the form below.",
    routes: [
      {
        label: "For English speakers",
        title: "Find a tax accountant in English",
        body: "Free matching with bilingual tax accountants in Japan. Tell us your situation and we'll introduce someone who fits.",
        cta: "Go to TaxMatch Japan",
        href: LINKS.taxmatch,
        en: true,
      },
      {
        label: "For tax firms in Japan",
        title: "Work with us on marketing and web",
        body: "For tax accountant offices in Japan. Listing plans and hands-on support. Page in Japanese.",
        cta: "Partner program",
        href: LINKS.partner,
        en: true,
      },
      {
        label: "For business owners",
        title: "税理士を探している方",
        body: "Japanese-speaking business owners: search and get a free introduction on Yoi Zeirishi.",
        cta: "e-zeirishi.com",
        href: LINKS.yoiZeirishi,
        en: true,
      },
    ],
    form: {
      title: "Partnerships & press",
      body: "Partnership proposals, media inquiries, and anything else. We usually reply within two business days.",
      company: "Company / organization",
      companyPlaceholder: "Guidly, Inc.",
      name: "Your name",
      namePlaceholder: "Jane Smith",
      email: "Email",
      message: "Message",
      messagePlaceholder: "How can we help?",
      privacyBefore: "By submitting, you agree to our ",
      privacyLabel: "privacy policy",
      privacyAfter: " (Japanese).",
      privacyHref: "/privacy/",
      submit: "Send",
      sending: "Sending…",
      successTitle: "Message sent",
      successBody: "Thank you. We usually reply within two business days.",
      error: "Something went wrong. Please try again in a moment.",
      required: "Required",
      invalidEmail: "Please enter a valid email address",
    },
  },
  footer: {
    tagline: "Good owners. Good tax accountants. Good business.",
    servicesLabel: "Services",
    services: [
      { label: "TaxMatch Japan", href: LINKS.taxmatch },
      { label: "Yoi Zeirishi (Japanese)", href: LINKS.yoiZeirishi },
      { label: "Support for tax firms (Japanese)", href: LINKS.partner },
    ],
    companyLabel: "Company",
    companyLinks: [
      { label: "About the founder", href: "#about" },
      { label: "Company profile", href: "#company" },
      { label: "Privacy policy (Japanese)", href: "/privacy/" },
    ],
    copyright: "Guidly, Inc. All rights reserved.",
  },
};
