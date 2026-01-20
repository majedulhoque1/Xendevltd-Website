import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsOverview from "@/components/ProjectsOverview";
import LeadCapture from "@/components/LeadCapture";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Apply theme class to document
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navigation isDark={isDark} onThemeToggle={handleThemeToggle} />
      <main>
        <HeroSection isDark={isDark} onThemeToggle={handleThemeToggle} />
        <TrustSection />
        <FeaturedProject />
        <ProjectsOverview />
        <LeadCapture />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
