import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import VisionSection from "@/components/vision-section"
import ServicesSection from "@/components/services-section"
import EcosystemSection from "@/components/ecosystem-section"
import JoinSection from "@/components/join-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <ServicesSection />
      <EcosystemSection />
      <JoinSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
