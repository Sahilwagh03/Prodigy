import AboutBento from "@/pages/About/about-bento"
import AboutCore from "@/pages/About/about-core"
import AboutHeroSection from "@/pages/About/about-hero"
import AboutImageSeparator from "@/pages/About/about-image-separator"
import AboutServices from "@/pages/About/about-services"


const AboutPage = () => {
  return (
    <div className="w-full h-full">
        <AboutHeroSection />
        <AboutImageSeparator/>
        <AboutCore/>
        <AboutServices/>
        <AboutBento/>
    </div>
  )
}

export default AboutPage