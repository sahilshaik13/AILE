import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import EventsSection from "@/components/events-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="pt-14">
        <HeroSection />
        <EventsSection /> {/* Slideshow added */}
        <AboutSection />
        <ProgramsSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}