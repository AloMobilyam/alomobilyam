import { CTABanner } from "@/components/CTABanner";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { GoogleReviews } from "@/components/GoogleReviews";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { OnSiteService } from "@/components/OnSiteService";
import { OurWorks } from "@/components/OurWorks";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CTABanner />
        <Services />
        <WhyUs />
        <OnSiteService />
        <OurWorks />
        <GoogleReviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
