import AboutServices from "@/pages/About/about-services";
import CTA from "@/pages/Home/sections/cta";
import Experience from "@/pages/Home/sections/experience";
import Faq from "@/pages/Home/sections/faq";
import FeatureWork from "@/pages/Home/sections/feature-work";
import HeroSection from "@/pages/Home/sections/hero";
import Partners from "@/pages/Home/sections/partners";
import Services from "@/pages/Home/sections/services";
import Testimonial from "@/pages/Home/sections/testimonial";
import WorkShowcaseSection from "@/pages/Home/sections/work-section";
import AIPersonalBranding from "@/pages/Home/sections/ai-personal-branding";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroSection />
      <main className="w-full h-full">
        <Partners />
        <WorkShowcaseSection />
        <AIPersonalBranding />
        <FeatureWork />
        <Experience />
        <AboutServices />
        <Testimonial />
        <Faq />
        <CTA />
      </main>
    </section>
  );
}
