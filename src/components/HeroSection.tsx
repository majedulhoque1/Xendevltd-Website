import { ArrowRight } from "lucide-react";
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

      {/* Content layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Spacer for fixed nav */}
        <div className="h-20 md:h-24" />

        {/* Main typography — left aligned */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="text-white/80 text-sm md:text-base font-light tracking-wide mb-4 md:mb-6">
                Featured Development | Jolshiri Abashon
              </p>
              <h1 className="text-white font-bold uppercase leading-[0.92]">
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                  LAKEVIEW
                </span>
                <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
                  TASMEE
                </span>
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Bottom info grid — floating over the lake */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="absolute bottom-8 md:bottom-10 left-0 right-0"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
            {/* Left: copy & buttons */}
            <div>
              <h2 className="text-white text-xl md:text-2xl font-bold uppercase leading-tight mb-3 md:mb-4">
                OPEN TO THE LAKE.
                <br />
                OPEN TO THE CITY.
              </h2>
              <p className="text-white/80 text-sm md:text-[15px] max-w-lg leading-relaxed mb-5 md:mb-6">
                A Thoughtfully Designed Lakeside Residence On The Edge Of
                Jolshiri Abashon — Open Horizons, Considered Architecture, And
                A Calm That Meets The City.
              </p>
              <div className="flex flex-wrap items-center gap-3">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
