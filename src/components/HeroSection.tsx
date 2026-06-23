import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import heroImageAsset from "@/assets/Xen_Lakeview_Tasmee.jpeg.asset.json";

interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const HeroSection = (_props: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ["0%", "40%"]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Parallax background image */}
      <motion.div
        style={{ y, willChange: "transform" }}
        className="absolute inset-0 h-[130%] -top-[5%] hidden md:block"
      >
        <img
          src={heroImageAsset.url}
          alt="Xen Lakeview Tasmee"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Mobile background (no JS parallax) */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImageAsset.url}
          alt="Xen Lakeview Tasmee"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Text content — bottom left */}
      <div className="absolute inset-0 flex items-end">
        <div className="w-full px-6 md:px-12 pb-16 md:pb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mb-4"
          >
            <span
              className="text-white/70 uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.2em" }}
            >
              LAKEVIEW TASMEE
            </span>
          </motion.div>

          <h1
            className="text-white font-bold leading-[1.1]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(40px, 8vw, 96px)",
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="block"
            >
              Open to the Lake.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="block"
            >
              Open to the City.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
            className="text-white mt-4"
            style={{ fontSize: "16px", maxWidth: "420px" }}
          >
            A thoughtfully designed lakeside residence in Jolshiri Abashon, Dhaka.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link to="/projects/xen-lakeview-tasmee" className="btn-primary group text-white">
              View Project Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white text-sm font-medium backdrop-blur-sm bg-white/5 hover:bg-white/15 transition-all"
            >
              Schedule a Site Visit
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 0.8 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <ChevronDown
          className="w-6 h-6 text-white animate-bounce"
          strokeWidth={2}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

// Legacy markup retained below in a no-op to preserve diff isolation; not executed.
const _legacy = () => (<section>
      {/* Mobile & Tablet: Full-screen overlay layout */}
      <div className="lg:hidden relative h-[calc(100vh-5rem)] overflow-hidden">
        {/* Day Background */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? "opacity-0" : "opacity-100"}`}>
          <img src={heroDay} alt="Jolshiri Lakeview Residence - Day View" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        </div>

        {/* Night Background */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? "opacity-100" : "opacity-0"}`}>
          <img src={heroNight} alt="Jolshiri Lakeview Residence - Night View" className="absolute inset-0 w-full h-full object-cover object-[center_40%]" />
        </div>

        {/* Gradient overlay for text readability - covers center area */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30" />

        {/* Text Content Overlay - vertically centered */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.7,
        ease: "easeOut"
      }} className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 pb-20">
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
          }} className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-white/90">LAKEVIEW TASMEE</span>
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
          }} className="text-2xl md:text-3xl font-medium tracking-tight leading-tight text-white mb-3" style={{
            fontFamily: "'Playfair Display', serif"
          }}>
              {isDark ? "An Address Framed by Light, Space, and Water" : "Open to the City. Open to the Lake."}
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
          }} className="text-sm md:text-base text-white/80 max-w-md mb-5 leading-relaxed">
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
          }} className="flex flex-row items-center gap-3">
              <a href="#featured" className="inline-flex items-center justify-center px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full transition-all hover:bg-primary/90 group">
                Project Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30 transition-all hover:bg-white/30">
                Get in Touch
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
      }} className="w-1/2 bg-background relative z-10 flex-col flex items-start justify-center">
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
              {isDark ? "An Address Framed by Light, Space, and Water" : "Open to the City. Open to the Lake."}
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
              <a href="#featured" className="btn-primary group text-white">
                Project Details
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary">Schedule a Site Visit</a>
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
    </section>);
void _legacy;