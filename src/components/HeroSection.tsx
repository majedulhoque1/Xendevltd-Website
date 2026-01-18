import { ArrowRight } from "lucide-react";
import heroDay from "@/assets/hero-day.jpg";
import heroNight from "@/assets/hero-night.jpg";

interface HeroSectionProps {
  isDark: boolean;
}

const HeroSection = ({ isDark }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Day Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Sky gradient background for day - matches the render sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5ba3d9] via-[#7ec8e3] to-[#8ed1e8]" />
          {/* Building image - centered and scaled to show full building */}
          <img
            src={heroDay}
            alt="Jolshiri Lakeview Residence - Day View"
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
        </div>
        
        {/* Night Background */}
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Evening gradient background for night - matches twilight sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#6b7c8f] via-[#a8b5c4] to-[#c9a892]" />
          {/* Building image */}
          <img
            src={heroNight}
            alt="Jolshiri Lakeview Residence - Night View"
            className="absolute inset-0 w-full h-full object-contain object-center"
          />
        </div>
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-white pt-20">
        <div
          key={isDark ? "night" : "day"}
          className="animate-fade-up"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/30 rounded-full backdrop-blur-sm bg-black/20">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm tracking-wider uppercase">
              Lakeview Project
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-hero max-w-4xl mx-auto mb-6 drop-shadow-lg">
            {isDark
              ? "An Address Framed by Light, Space, and Water"
              : "Open to the City. Open to the Lake."}
          </h1>

          {/* Subline */}
          <p className="body-large text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-md">
            {isDark
              ? "Street-facing openness in front. Tranquil lake views behind. Designed for privacy, security, and long-term value."
              : "A thoughtfully designed residential project with open street frontage and uninterrupted lake views at the back."}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="btn-primary group"
            >
              {isDark ? "Book a Private Visit" : "Schedule a Site Visit"}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#featured"
              className="btn-secondary text-white border-white hover:bg-white hover:text-charcoal"
            >
              {isDark ? "Download Brochure" : "View Floor Plans"}
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
