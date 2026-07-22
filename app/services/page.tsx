import type { Metadata } from "next";
import Pricing from "@/components/pricing";
import ServiceHero from "@/components/sections/Services/service-hero";
import ServiceVideo from "@/components/sections/Services/service-video";
import Faq from "@/components/sections/Home/sections/faq";
export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our premium services including customized web design, robust software engineering, scalable cloud solutions, and performance-based marketing.",
  alternates: {
    canonical: "https://www.prodigymedia.in/services",
  },
};

const ServicesPage = () => {
  return (
    <div className="w-full h-full">
      <ServiceHero />
      <ServiceVideo />
      <Pricing />
      <Faq />
    </div>
  );
};

export default ServicesPage;
