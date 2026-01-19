import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";
import xenLogo from "@/assets/xen-logo.png";

interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[45%] bg-background flex flex-col px-8 md:px-12 lg:px-16 py-24 lg:py-12 relative z-10"
      >
        {/* Logo at top */}
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-auto"
        >
          <img
            src={xenLogo}
            alt="Xen Developments"
            className="h-14 w-auto"
          />
        </motion.a>

        {/* Content Row - Badge, Text, CTAs in one line */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 my-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full bg-secondary/50 shrink-0"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground whitespace-nowrap">
              Lakeview Project
            </span>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1"
          >
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isDark
                ? "An Address Framed by Light, Space, and Water"
                : "Open to the City. Open to the Lake."}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {isDark
                ? "Designed for privacy, security, and long-term value."
                : "A thoughtfully designed residential project with uninterrupted lake views."}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center gap-3 shrink-0"
          >
            <a href="#contact" className="btn-primary group">
              {isDark ? "Book a Visit" : "Schedule Visit"}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#featured" className="btn-secondary">
              {isDark ? "Brochure" : "Floor Plans"}
            </a>
          </motion.div>
        </div>

        {/* Spacer for balance */}
        <div className="mt-auto" />
      </motion.div>

      {/* Right Panel - Building Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        {/* Day Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isDark ? 0 : 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5ba3d9] via-[#7ec8e3] to-[#8ed1e8]" />
          <img
            src={heroDay}
            alt="Jolshiri Lakeview Residence - Day View"
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </motion.div>

        {/* Night Background */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: isDark ? 1 : 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a5568] via-[#718096] to-[#a0aec0]" />
          <img
            src={heroNight}
            alt="Jolshiri Lakeview Residence - Night View"
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </motion.div>

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
      </div>

      {/* Mobile Image - Shows below text on smaller screens */}
      <div className="lg:hidden absolute inset-0 -z-10">
        {/* Day Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#5ba3d9] via-[#7ec8e3] to-[#8ed1e8]" />
          <img
            src={heroDay}
            alt="Jolshiri Lakeview Residence - Day View"
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </div>

        {/* Night Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#4a5568] via-[#718096] to-[#a0aec0]" />
          <img
            src={heroNight}
            alt="Jolshiri Lakeview Residence - Night View"
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        </div>

        {/* Overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default HeroSection;
