import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heroImageAsset from "@/assets/Xen_Tasmee_Hero.png.asset.json";

interface HeroSectionProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const HEADLINE_WORDS = ["XEN", "TASMEE"];

const EASE = [0.22, 1, 0.36, 1] as const;

const wordVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.08, ease: EASE },
  }),
};

const STATS = [
  { value: "15+", label: "Core Amenities" },
  { value: "500+", label: "Happy Families" },
  { value: "100%", label: "Transparency" },
];

const HeroSection = (_props: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-tied animation: as the user scrolls, headline rises & fades out.
  const { scrollY } = useScroll();
  const headlineY = useTransform(scrollY, [0, 500], [0, -120]);
  const headlineOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const subheadOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const bgY = useTransform(scrollY, [0, 800], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Full-bleed background image with subtle parallax */}
      <motion.div
        style={{ y: bgY, willChange: "transform" }}
        className="absolute inset-0 h-[120%] -top-[5%]"
      >
        <img
          src={heroImageAsset.url}
          alt="Xen Tasmee Lakeview"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Subtle overlay for readability — heavy gradient removed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Centered massive typography */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="absolute inset-x-0 top-[18%] md:top-[14%] flex flex-col items-center text-center px-4 pointer-events-none"
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-white/70 uppercase mb-4 md:mb-6"
          style={{ fontSize: "12px", letterSpacing: "0.35em" }}
        >
          Featured Development · Jolshiri Abashon
        </motion.span>

        <h1
          className="text-white font-extrabold uppercase tracking-tight leading-[0.9] flex flex-wrap justify-center gap-x-[0.18em]"
          style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: "clamp(56px, 14vw, 220px)",
            letterSpacing: "-0.02em",
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span key={word} className="overflow-hidden inline-block">
              <motion.span
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-white/80 uppercase mt-6"
          style={{ fontSize: "13px", letterSpacing: "0.3em" }}
        >
          Lakeview Living
        </motion.span>
      </motion.div>

      {/* Bottom information grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
        style={{ opacity: subheadOpacity }}
        className="absolute bottom-0 left-0 right-0 backdrop-blur-md bg-gradient-to-t from-black/80 via-black/40 to-transparent border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: action */}
          <div>
            <h2
              className="text-white font-bold uppercase leading-[1.1]"
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "clamp(20px, 2.2vw, 30px)",
                letterSpacing: "-0.01em",
              }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.9, ease: EASE }}
                  className="block"
                >
                  OPEN TO THE LAKE.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.7, delay: 0.98, ease: EASE }}
                  className="block"
                >
                  OPEN TO THE CITY.
                </motion.span>
              </span>
            </h2>

            <p
              className="text-white/75 mt-3 max-w-xl"
              style={{ fontSize: "15px", lineHeight: 1.6 }}
            >
              A thoughtfully designed lakeside residence on the edge of Jolshiri Abashon —
              open horizons, considered architecture, and a calm that meets the city.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/projects/xen-lakeview-tasmee" className="btn-primary group text-white">
                Explore Xen Tasmee
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white text-sm font-medium backdrop-blur-sm bg-white/5 hover:bg-white/15 transition-all"
              >
                Book a Visit
              </Link>
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-3 lg:border-l lg:border-white/15 lg:pl-12">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  "px-3 md:px-6 flex flex-col justify-center " +
                  (i > 0 ? "border-l border-white/15" : "")
                }
              >
                <div
                  className="text-white font-bold leading-none"
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "clamp(24px, 3vw, 42px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/65 mt-2 uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.18em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
