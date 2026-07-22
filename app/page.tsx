import AboutServices from "@/components/sections/About/about-services";
import CTA from "@/components/sections/Home/sections/cta";
import Experience from "@/components/sections/Home/sections/experience";
import Faq from "@/components/sections/Home/sections/faq";
import FeatureWork from "@/components/sections/Home/sections/feature-work";
import HeroSection from "@/components/sections/Home/sections/hero";
import Partners from "@/components/sections/Home/sections/partners";
import Services from "@/components/sections/Home/sections/services";
import Testimonial from "@/components/sections/Home/sections/testimonial";
import WorkShowcaseSection from "@/components/sections/Home/sections/work-section";
import AIPersonalBranding from "@/components/sections/Home/sections/ai-personal-branding";

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
