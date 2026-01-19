import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
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
        
        {/* Subtle top gradient for text readability */}
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
      </div>

      {/* Content - Positioned at top-left, aligned with building */}
      <div className="relative z-10 container-wide flex flex-col justify-start pt-24 md:pt-28 lg:pt-36 min-h-[45vh]">
        <motion.div
          key={isDark ? "night" : "day"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md lg:max-w-lg"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/25 rounded-full backdrop-blur-sm bg-black/15"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-xs tracking-widest uppercase text-white/90">
              Lakeview Project
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight text-white drop-shadow-md mb-4"
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
            className="text-base md:text-lg text-white/85 max-w-md mb-8 leading-relaxed"
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
            <a
              href="#contact"
              className="btn-primary group"
            >
              {isDark ? "Book a Visit" : "Schedule Visit"}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#featured"
              className="btn-secondary text-white border-white/40 hover:bg-white hover:text-foreground hover:border-white"
            >
              {isDark ? "Brochure" : "Floor Plans"}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
