import AboutCore from "@/pages/About/about-core"
import AboutHeroSection from "@/pages/About/about-hero"
import AboutImageSeparator from "@/pages/About/about-image-separator"

const AboutPage = () => {
  return (
    <div className="w-full h-full">
        <AboutHeroSection />
        <AboutImageSeparator/>
        <AboutCore/>
    </div>
  )
}

export default AboutPage