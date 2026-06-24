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
      className="relative min-h-screen h-screen w-full overflow-hidden"
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
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        {/* Top spacer for fixed nav */}
        <div className="h-24 md:h-28 shrink-0" />

        {/* Main content block — 2 column grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-auto grid grid-cols-2 items-end gap-x-16 pb-10 px-10 w-full"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start">
            <p className="font-gruppo italic text-white/60 text-sm tracking-widest mb-2">
              Featured Development | Jolshiri Abashon
            </p>
            <h1 className="font-gruppo text-white font-normal uppercase leading-none text-8xl mb-8">
              <span className="block">LAKEVIEW</span>
              <span className="block">TASMEE</span>
            </h1>
            <div className="flex flex-row gap-4 items-center">
              <Link
                to="/projects/xen-lakeview-tasmee"
                className="inline-flex items-center justify-center bg-green-700 text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-green-800 transition-colors"
              >
                Explore Xen Tasmee
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent text-white border border-white/50 rounded-full px-6 py-3 text-sm hover:border-white transition-colors"
              >
                Book A Visit
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col items-end justify-end">
            <h2 className="font-gruppo uppercase text-white text-3xl text-right leading-tight mb-4">
              OPEN TO THE LAKE.
              <br />
              OPEN TO THE CITY.
            </h2>
            <p className="text-sm text-white/65 text-right leading-relaxed max-w-xs">
              A Thoughtfully Designed Lakeside Residence On The Edge Of Jolshiri
              Abashon — Open Horizons, Considered Architecture, And A Calm That
              Meets The City.
            </p>
          </div>
        </motion.div>

        {/* STATS BAR — full width at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="w-full bg-black/30 backdrop-blur-sm"
        >
          <div className="grid grid-cols-3 divide-x divide-white/20 py-6 px-0">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-1"
              >
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/65">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
