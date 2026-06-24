import { motion } from "framer-motion";
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

const HeroSection = ({ isDark }: HeroSectionProps) => {
  const overlay = isDark
    ? "linear-gradient(to right, rgba(5, 15, 50, 0.82) 0%, rgba(5, 15, 50, 0.45) 50%, rgba(5, 15, 50, 0.55) 100%)"
    : "linear-gradient(to right, rgba(5, 15, 50, 0.88) 0%, rgba(5, 15, 50, 0.6) 50%, rgba(5, 15, 50, 0.7) 100%)";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <img
        src={heroImageAsset.url}
        alt="Xen Lakeview Tasmee"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Navy gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: overlay }}
      />

      {/* Hero body — two-column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="absolute left-0 right-0 z-10 flex flex-col gap-12 px-6 md:flex-row md:items-end md:justify-between md:gap-8 md:px-12"
        style={{ bottom: "140px" }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start md:w-[48%]">
          <p
            className="italic mb-3 text-white/60"
            style={{ fontSize: "15px", letterSpacing: "0.03em" }}
          >
            Featured Development | Jolshiri Abashon
          </p>
          <h1
            className="text-white uppercase mb-10"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(80px, 10vw, 140px)",
              letterSpacing: "0.04em",
              lineHeight: 0.92,
            }}
          >
            <span className="block">LAKEVIEW</span>
            <span className="block">TASMEE</span>
          </h1>
          <div className="flex flex-row gap-4">
            <Link
              to="/projects/xen-lakeview-tasmee"
              className="inline-flex items-center justify-center rounded-full bg-[#16A34A] text-white transition-colors hover:bg-[#15803D]"
              style={{ padding: "14px 28px", fontSize: "14px", fontWeight: 600 }}
            >
              Explore Xen Tasmee
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-transparent text-white transition-colors hover:border-white"
              style={{
                padding: "14px 28px",
                fontSize: "14px",
                fontWeight: 500,
                border: "1.5px solid rgba(255,255,255,0.6)",
              }}
            >
              Book A Visit
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-start md:items-end md:w-[36%]">
          <h2
            className="text-white uppercase mb-4 md:text-right"
            style={{
              fontWeight: 800,
              fontSize: "clamp(22px, 2.4vw, 32px)",
              letterSpacing: "0.04em",
              lineHeight: 1.2,
            }}
          >
            OPEN TO THE LAKE.
            <br />
            OPEN TO THE CITY.
          </h2>
          <p
            className="text-white/65 md:text-right"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: "380px",
            }}
          >
            A Thoughtfully Designed Lakeside Residence On The Edge Of Jolshiri
            Abashon — Open Horizons, Considered Architecture, And A Calm That
            Meets The City.
          </p>
        </div>
      </motion.div>

      {/* STATS BAR */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-3"
        style={{
          background: "rgba(0, 0, 0, 0.28)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          padding: "28px 0",
        }}
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center"
            style={{
              borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
            }}
          >
            <div
              className="text-white"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1,
              }}
            >
              {stat.value}
            </div>
            <div
              className="text-white/65"
              style={{ fontSize: "13px", fontWeight: 400, marginTop: "4px" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
