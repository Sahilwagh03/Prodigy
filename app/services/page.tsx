import ServiceHero from "@/pages/Services/service-hero";
import ServiceVideo from "@/pages/Services/service-video";
import ServicesHighlight from "@/pages/Services/services-highlight";
import React from "react";

const ServicesPage = () => {
  return (
    <div className="w-full h-full">
      <ServiceHero />
      <ServicesHighlight/>
      <ServiceVideo/>
    </div>
  );
};

export default ServicesPage;
