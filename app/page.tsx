import AboutUs from "@/components/sections/about-us";
import CTA from "@/components/sections/cta";
import Experience from "@/components/sections/experience";
import Faq from "@/components/sections/faq";
import FeatureWork from "@/components/sections/feature-work";
import HeroSection from "@/components/sections/hero";
import Partners from "@/components/sections/partners";
import Services from "@/components/sections/services";
import Testimonial from "@/components/sections/testimonial";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroSection/>
      <main className="w-full h-full">
          <Partners/>
          <AboutUs/>
          <Experience/>
          <FeatureWork/>
          <Services/>
          <Testimonial/>
          <Faq/>
          <CTA/>
      </main>
    </section>
  );
}
