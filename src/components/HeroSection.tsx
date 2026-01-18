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
        <img
          src={heroDay}
          alt="Jolshiri Lakeview Residence - Day View"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
        />
        <img
          src={heroNight}
          alt="Jolshiri Lakeview Residence - Night View"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center text-white">
        <div
          key={isDark ? "night" : "day"}
          className="animate-fade-up"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/30 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-sm tracking-wider uppercase">
              Lakeview Project
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-hero max-w-4xl mx-auto mb-6">
            {isDark
              ? "An Address Framed by Light, Space, and Water"
              : "Open to the City. Open to the Lake."}
          </h1>

          {/* Subline */}
          <p className="body-large text-white/80 max-w-2xl mx-auto mb-10">
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
