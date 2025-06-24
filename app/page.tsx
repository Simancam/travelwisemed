import Navbar from "@/components/navbar"
import HeroSection from "@/sections/home/hero-section"
import AboutSection from "@/sections/home/about-section"
import ServicesSection from "@/sections/home/services-section"
import FeaturesSection from "@/sections/home/features-section"
import Footer from "@/components/footer"
import WaveDivider from "@/components/wave-divider"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen"> 
        <section id="home">
          <HeroSection />
        </section>

        <WaveDivider className="text-blue-50" />
  
        <section id="about">
          <AboutSection />
        </section>

        <WaveDivider flip className="text-blue-50" />

        <section id="services">
          <ServicesSection />
        </section>

        <WaveDivider className="text-blue-50" />

        <section id="features">
          <FeaturesSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
