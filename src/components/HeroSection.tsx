import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImageAsset from "@/assets/Xen_Tasmee_Hero.png.asset.json";
import heroImageDarkAsset from "@/assets/Xen_Tasmee_Hero_Dark.png.asset.json";

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
  const heroUrl = _props.isDark ? heroImageDarkAsset.url : heroImageAsset.url;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[800px] w-full flex flex-col justify-between overflow-hidden bg-cover bg-[position:center_bottom]"
      style={{ backgroundImage: `url(${heroUrl})` }}
    >
      {/* Global dark overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Forest-green brand shade from behind/back — tinted gradient pulled from the Xen logo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(16,124,65,0.55) 0%, rgba(13,90,48,0.35) 35%, rgba(8,40,22,0.15) 65%, transparent 100%)",
        }}
      />

      {/* Top spacer for fixed nav */}
      <div className="h-24 md:h-28 shrink-0 relative z-10" />

      {/* MAIN SPLIT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto w-full px-4 md:px-8 flex-1 items-start pt-24 z-10 relative"
      >
        {/* LEFT COLUMN */}
        <div className="grid grid-rows-[auto_auto_auto] items-start text-left">
          <p className="font-gruppo text-white/90 text-lg uppercase tracking-widest mb-4">
            Featured Development | Jolshiri Abashon
          </p>
          <h1
            className="font-gruppo text-white uppercase leading-tight text-[97px]"
            style={{ WebkitTextStroke: "1px #FFFFFF" }}
          >
            <span className="block">LAKEVIEW</span>
            <span className="block">TASMEE</span>
          </h1>
          <div className="flex gap-4 mt-8">
            <Link
              to="/projects/xen-lakeview-tasmee"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              Explore Xen Tasmee
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-black/30 backdrop-blur-md border border-white/30 text-white text-sm font-medium rounded-full hover:bg-black/40 transition-all"
            >
              Book A Visit
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="grid grid-rows-[auto_auto_auto] justify-items-end text-right mt-16 md:mt-24">
          <p aria-hidden="true" className="font-gruppo text-lg uppercase tracking-widest mb-4 invisible">
            Featured Development | Jolshiri Abashon
          </p>
          <h2 className="font-gruppo uppercase text-white leading-tight font-bold" style={{ fontSize: "36px" }}>
            OPEN TO THE LAKE.
            <br />
            OPEN TO THE CITY.
          </h2>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md mt-4">
            A Thoughtfully Designed Lakeside Residence On The Edge Of Jolshiri
            Abashon — Open Horizons, Considered Architecture, And A Calm That
            Meets The City.
          </p>
        </div>
      </motion.div>

      {/* BOTTOM STATS GRID — floating over lake */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
        className="w-full max-w-5xl mx-auto mb-12 relative z-10 px-4"
      >
        <div className="grid grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center text-center ${
                i > 0 ? "border-l border-white/50 h-16" : ""
              }`}
            >
              <div className="text-5xl font-serif font-semibold text-white leading-none">
                {stat.value}
              </div>
              <div className="text-sm lg:text-base text-white/80 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
