import AboutUs from "@/pages/Home/sections/about-us";
import CTA from "@/pages/Home/sections/cta";
import Experience from "@/pages/Home/sections/experience";
import Faq from "@/pages/Home/sections/faq";
import FeatureWork from "@/pages/Home/sections/feature-work";
import HeroSection from "@/pages/Home/sections/hero";
import Partners from "@/pages/Home/sections/partners";
import Services from "@/pages/Home/sections/services";
import Testimonial from "@/pages/Home/sections/testimonial";

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
