import type { Metadata } from "next";
import AboutBento from "@/components/sections/About/about-bento";
import AboutCore from "@/components/sections/About/about-core";
import AboutHeroSection from "@/components/sections/About/about-hero";
import AboutImageSeparator from "@/components/sections/About/about-image-separator";
import AboutServices from "@/components/sections/About/about-services";
import CTA from "@/components/sections/Home/sections/cta";
import ServicesHighlight from "@/components/sections/Services/services-highlight";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Prodigy, a leading digital agency dedicated to web design, custom software engineering, and strategic marketing.",
  alternates: {
    canonical: "https://www.prodigymedia.in/about",
  },
};

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
