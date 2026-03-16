import Pricing from "@/components/pricing";
import AboutServices from "@/pages/About/about-services";
import ServiceHero from "@/pages/Services/service-hero";
import ServiceVideo from "@/pages/Services/service-video";

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
