import AboutBento from "@/pages/About/about-bento";
import AboutCore from "@/pages/About/about-core";
import AboutHeroSection from "@/pages/About/about-hero";
import AboutImageSeparator from "@/pages/About/about-image-separator";
import AboutServices from "@/pages/About/about-services";
import CTA from "@/pages/Home/sections/cta";
import ServicesHighlight from "@/pages/Services/services-highlight";

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <AboutHeroSection />
      <AboutImageSeparator />
      <AboutCore />
      <ServicesHighlight />
      <AboutBento />
      <CTA />
    </div>
  );
};

export default AboutPage;
