import AboutUs from "@/components/sections/about-us";
import Experience from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import Partners from "@/components/sections/partners";

export default function Home() {
  return (
    <section className="overflow-hidden">
      <HeroSection/>
      <main className="w-full h-full">
          <Partners/>
          <AboutUs/>
          <Experience/>
      </main>
    </section>
  );
}
