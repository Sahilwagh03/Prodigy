import type { Metadata } from "next";
import ContactHero from "@/pages/Contact/contact-hero"
import CTA from "@/pages/Home/sections/cta"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Prodigy team to start your next web design, software development, or digital marketing project.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="w-full h-full">
        <ContactHero/>
        <CTA/>
    </div>
  )
}

export default ContactPage