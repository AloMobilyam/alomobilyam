import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OnSiteService } from "@/components/OnSiteService";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CTABanner />
        <Services />
        <WhyUs />
        <OnSiteService />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
