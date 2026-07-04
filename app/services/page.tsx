import type { Metadata } from "next";
import Pricing from "@/components/pricing";
import AboutServices from "@/pages/About/about-services";
import ServiceHero from "@/pages/Services/service-hero";
import ServiceVideo from "@/pages/Services/service-video";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our premium services including customized web design, robust software engineering, scalable cloud solutions, and performance-based marketing.",
};

const ServicesPage = () => {
  return (
    <div className="w-full h-full">
      <ServiceHero />
      <ServiceVideo />
      <AboutServices />
      <Pricing />
    </div>
  );
};

export default ServicesPage;
