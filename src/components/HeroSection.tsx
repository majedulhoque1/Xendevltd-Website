import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImageAsset from "@/assets/Xen_Tasmee_Hero.png.asset.json";

interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "15+", label: "Core Amenities" },
  { value: "500+", label: "Happy Families" },
  { value: "100%", label: "Transparency" },
];

const HeroSection = (_props: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Full-bleed background image — lake at bottom visible */}
      <div className="absolute inset-0">
        <img
          src={heroImageAsset.url}
          alt="Xen Tasmee Lakeview"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Global overlay: darker at top/middle, fading toward lake */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      {/* Content wrapper — flex column with justify-between */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen pb-12">
        {/* Top spacer for fixed nav */}
        <div className="shrink-0" />

        {/* Main content — title + bottom grid pushed to bottom with mt-auto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-7xl mx-auto w-full px-4 md:px-8 mt-auto"
        >
          {/* Title block */}
          <div className="mb-16 md:mb-24">
            <p className="text-white/80 text-sm md:text-base font-light tracking-wide mb-4 md:mb-6">
              Featured Development | Jolshiri Abashon
            </p>
            <h1 className="text-white font-sans font-bold uppercase leading-none">
              <span className="block text-6xl md:text-7xl lg:text-8xl">
                LAKEVIEW
              </span>
              <span className="block text-6xl md:text-7xl lg:text-8xl">
                TASMEE
              </span>
            </h1>
          </div>

          {/* Bottom info grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end"
          >
            {/* Left: copy & buttons */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-white font-sans text-xl md:text-2xl font-bold uppercase leading-tight">
                OPEN TO THE LAKE.
                <br />
                OPEN TO THE CITY.
              </h2>
              <p className="text-white/80 text-sm md:text-[15px] max-w-lg leading-relaxed">
                A Thoughtfully Designed Lakeside Residence On The Edge Of
                Jolshiri Abashon — Open Horizons, Considered Architecture, And
                A Calm That Meets The City.
              </p>
              <div className="flex flex-row flex-wrap gap-4 items-center">
                <Link
                  to="/projects/xen-lakeview-tasmee"
                  className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-[#107c41] text-white text-sm font-medium rounded hover:bg-[#0d6a37] transition-colors"
                >
                  Explore Xen Tasmee
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 md:px-6 md:py-3 bg-black/30 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-medium hover:bg-black/40 transition-all"
                >
                  Book A Visit
                </Link>
              </div>
            </div>

            {/* Right: stats */}
            <div className="flex justify-start lg:justify-end">
              <div className="flex items-end">
                {STATS.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col justify-end px-4 md:px-6 ${
                      i > 0 ? "border-l border-white/50" : ""
                    }`}
                  >
                    <div className="text-white text-3xl md:text-4xl font-bold leading-none">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
