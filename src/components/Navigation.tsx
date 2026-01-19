import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import xenLogo from "@/assets/xen-logo.png";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ isDark, onThemeToggle }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoFilterClass = isScrolled ? "" : "";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={xenLogo}
              alt="Xen Developments"
              className={`h-12 w-auto transition-all duration-300 group-hover:scale-105 ${logoFilterClass}`}
            />
          </a>

          {/* Desktop - Minimal Navigation (main nav is in hero middle section) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Only show theme toggle and CTA when scrolled (hero has its own toggle) */}
            {isScrolled && (
              <>
                <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
              </>
            )}
            <a href="#contact" className="btn-sm">
              Schedule Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-wide py-6 space-y-4">
            <a
              href="#featured"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#trust"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="btn-primary text-center w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule a Site Visit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
