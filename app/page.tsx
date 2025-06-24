import Navbar from "@/components/navbar"
import HeroSection from "@/sections/home/hero-section"
import AboutSection from "@/sections/home/about-section"
import ServicesSection from "@/sections/home/services-section"
import FeaturesSection from "@/sections/home/features-section"
import Footer from "@/components/footer"
import WaveDivider from "@/components/wave-divider"

export default function HomeAlternative() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="relative overflow-hidden">
        {/* Hero Section - Full viewport with responsive height */}
        <section
          id="home"
          className="relative min-h-[100vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <HeroSection />
            </div>
          </div>
        </section>

        {/* Seamless Wave Transition */}
        <div className="relative -mt-px z-10">
          <WaveDivider className="text-blue-50" />
        </div>

        {/* About Section - Responsive height with proper centering */}
        <section
          id="about"
          className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-7xl">
              <AboutSection />
            </div>
          </div>
        </section>

        {/* Seamless Wave Transition */}
        <div className="relative -mt-px z-10">
          <WaveDivider flip className="text-white" />
        </div>

        {/* Services Section - Responsive height with proper centering */}
        <section
          id="services"
          className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center bg-blue-50"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-7xl">
              <ServicesSection />
            </div>
          </div>
        </section>

        {/* Seamless Wave Transition */}
        <div className="relative -mt-px z-10">
          <WaveDivider className="text-blue-50" />
        </div>

        {/* Features Section - Responsive height with proper centering */}
        <section
          id="features"
          className="relative min-h-[80vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-white"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-7xl">
              <FeaturesSection />
            </div>
          </div>
        </section>

        {/* Final Wave Transition */}
        <div className="relative -mt-px z-10">
          <WaveDivider flip className="text-white" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
