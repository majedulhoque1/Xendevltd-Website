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
      {/* Parallax background image (desktop/tablet) */}
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

      {/* Mobile background (no JS parallax for performance) */}
      <div className="absolute inset-0 md:hidden">
        <img
          src={heroImageAsset.url}
          alt="Xen Lakeview Tasmee"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Bottom-left text content */}
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
        <ChevronDown className="w-6 h-6 text-white animate-bounce" strokeWidth={2} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
