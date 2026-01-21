import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";
interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}
const HeroSection = ({
  isDark
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const {
    scrollYProgress
  } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return <section ref={sectionRef} className="relative min-h-screen pt-20">
      {/* Mobile & Tablet: Stacked layout with image on top */}
      <div className="lg:hidden relative">
        {/* Hero Image for Mobile/Tablet */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          {/* Day Background */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? "opacity-0" : "opacity-100"}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#5ba3d9] via-[#7ec8e3] to-[#8ed1e8]" />
            <img src={heroDay} alt="Jolshiri Lakeview Residence - Day View" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

          {/* Night Background */}
          <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-[#4a5568] via-[#718096] to-[#a0aec0]" />
            <img src={heroNight} alt="Jolshiri Lakeview Residence - Night View" className="absolute inset-0 w-full h-full object-cover object-center" />
          </div>

          {/* Bottom gradient fade into content */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Text Content for Mobile/Tablet */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="px-6 py-8 md:py-12 md:px-12 bg-background">
          <div className="max-w-lg mx-auto md:max-w-2xl">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 border border-border rounded-full bg-secondary/50">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">
                Lakeview Project
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }} className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-foreground mb-3" style={{
            fontFamily: "'Playfair Display', serif"
          }}>
              {isDark ? "An Address Framed by Light, Space, and Water" : "Experience Lakeside Serenity"}
            </motion.h1>

            {/* Subline */}
            <motion.p initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }} className="text-sm md:text-base text-muted-foreground max-w-md mb-6 leading-relaxed">
              {isDark ? "Designed for privacy, security, and long-term value." : "A thoughtfully designed residential project with uninterrupted lake views."}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.5
          }} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a href="#contact" className="btn-primary group text-center justify-center">
                {isDark ? "Book a Visit" : "Schedule Visit"}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#featured" className="btn-secondary text-center justify-center">
                {isDark ? "Brochure" : "Floor Plans"}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Desktop: Side-by-side layout */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 h-full min-h-[calc(100vh-5rem)]">
        {/* Left Panel - Text Content */}
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="w-1/2 bg-background flex items-center relative z-10">
          <div className="max-w-lg">
            {/* Badge */}
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-border rounded-full bg-secondary/50">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">LAKEVIEW TASMEE</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.3
          }} className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-foreground mb-4" style={{
            fontFamily: "'Playfair Display', serif"
          }}>
              {isDark ? "An Address Framed by Light, Space, and Water" : "Experience Lakeside Serenity"}
            </motion.h1>

            {/* Subline */}
            <motion.p initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.4
          }} className="text-base md:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
              {isDark ? "Designed for privacy, security, and long-term value." : "A thoughtfully designed residential project with uninterrupted lake views."}
            </motion.p>

            {/* CTAs */}
            <motion.div initial={{
            opacity: 0,
            y: 15
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.7,
            delay: 0.5
          }} className="flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary group">
                {isDark ? "Book a Visit" : "Schedule Visit"}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#featured" className="btn-secondary">
                {isDark ? "Brochure" : "Floor Plans"}
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel - Building Image */}
        <div className="w-1/2 relative overflow-hidden">
          {/* Day Background */}
          <motion.div initial={{
          opacity: 0,
          scale: 1.05
        }} animate={{
          opacity: isDark ? 0 : 1,
          scale: 1
        }} transition={{
          duration: 0.7
        }} style={{
          y
        }} className="absolute inset-0 h-[120%]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#5ba3d9] via-[#7ec8e3] to-[#8ed1e8]" />
            <img src={heroDay} alt="Jolshiri Lakeview Residence - Day View" className="absolute inset-0 w-full h-full object-cover object-center" />
          </motion.div>

          {/* Night Background */}
          <motion.div initial={{
          opacity: 0,
          scale: 1.05
        }} animate={{
          opacity: isDark ? 1 : 0,
          scale: 1
        }} transition={{
          duration: 0.7
        }} style={{
          y
        }} className="absolute inset-0 h-[120%]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#4a5568] via-[#718096] to-[#a0aec0]" />
            <img src={heroNight} alt="Jolshiri Lakeview Residence - Night View" className="absolute inset-0 w-full h-full object-cover object-center" />
          </motion.div>

          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>;
};
export default HeroSection;