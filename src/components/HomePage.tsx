import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Company from "./Company";
import Contact from "./Contact";
import Footer from "./Footer";
import type { SiteContent } from "@/content/types";

export default function HomePage({ t }: { t: SiteContent }) {
  return (
    <>
      <Header t={t} />
      <main>
        <Hero t={t} />
        <Services t={t} />
        <HowItWorks t={t} />
        <About t={t} />
        <Company t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
