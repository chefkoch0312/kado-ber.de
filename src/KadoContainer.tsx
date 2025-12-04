import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import GallerySection from "./components/GallerySection";
import InspirationSection from "./components/InspirationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const KadoContainer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);
  const handleCookieAccept = (): void => {
    setShowCookieBanner(false);
  };

  const handleCookieDecline = (): void => {
    setShowCookieBanner(false);
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Navbar onSectionClick={scrollToSection} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <InspirationSection />
        {/* <ContactSection /> */}
        <Footer />
        {/* <CookieBanner
          isVisible={showCookieBanner}
          onAccept={handleCookieAccept}
          onDecline={handleCookieDecline}
        /> */}
      </main>
    </>
  );
};

export default KadoContainer;
