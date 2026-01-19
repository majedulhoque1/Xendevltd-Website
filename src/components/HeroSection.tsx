import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";
import ThemeToggle from "./ThemeToggle";

interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const HeroSection = ({ isDark, onThemeToggle }: HeroSectionProps) => {
  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#trust" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full lg:w-[45%] bg-background flex flex-col relative z-10"
      >
        {/* Horizontal Navigation - Top of Left Panel */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex items-center justify-between px-8 md:px-12 lg:px-16 py-6 border-b border-border"
        >
          <nav className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
        </motion.div>

        {/* Text Content */}
        <div className="flex-1 flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-0">
          <div className="max-w-lg">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-border rounded-full bg-secondary/50"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Lakeview Project
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-foreground mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {isDark
                ? "An Address Framed by Light, Space, and Water"
                : "Open to the City. Open to the Lake."}
            </motion.h1>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              {isDark
                ? "Designed for privacy, security, and long-term value."
                : "A thoughtfully designed residential project with uninterrupted lake views."}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3"
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
        </div>
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
            className="absolute inset-0 w-full h-full object-cover object-center"
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
            className="absolute inset-0 w-full h-full object-cover object-center"
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
            className="absolute inset-0 w-full h-full object-cover object-bottom"
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
            className="absolute inset-0 w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Overlay for text readability on mobile */}
        <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      </div>
    </section>
  );
};

export default HeroSection;
