import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import xenLogo from "@/assets/xen-logo.png";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ isDark, onThemeToggle: _onThemeToggle }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 py-3"
          : "bg-transparent pt-6 pb-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <img
              src={xenLogo}
              alt="Xen Developments"
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation — Centered Links in Dark Pill */}
          <div
            className={`hidden lg:flex items-center justify-center backdrop-blur-md transition-all duration-500 ${
              isScrolled ? "bg-background/60 border-border/40" : ""
            }`}
            style={
              isScrolled
                ? { borderRadius: "9999px", padding: "10px 28px", gap: "32px", border: "1px solid" }
                : {
                    background: "rgba(20, 30, 50, 0.6)",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "10px 28px",
                    gap: "32px",
                  }
            }
          >
            <Link
              to="/projects"
              className={`transition-colors hover:text-[#16A34A] ${
                isScrolled ? "text-foreground/80" : "text-white"
              }`}
              style={{ fontSize: "15px", fontWeight: 400 }}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className={`transition-colors hover:text-[#16A34A] ${
                isScrolled ? "text-foreground/80" : "text-white"
              }`}
              style={{ fontSize: "15px", fontWeight: 400 }}
            >
              About
            </Link>
            <Link
              to="/#contact"
              className={`transition-colors hover:text-[#16A34A] ${
                isScrolled ? "text-foreground/80" : "text-white"
              }`}
              style={{ fontSize: "15px", fontWeight: 400 }}
            >
              Contact
            </Link>
          </div>

          {/* Right Side — CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+8801717192730"
              className="inline-flex items-center justify-center rounded-full bg-[#16A34A] text-white transition-colors hover:bg-[#15803D]"
              style={{ padding: "10px 20px", fontSize: "14px", fontWeight: 600 }}
            >
              Call Now: 01717-19-27-30
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
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
        <div className="lg:hidden bg-background/95 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 space-y-4">
            <Link
              to="/projects"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/#contact"
              className="block py-2 text-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="tel:+8801717192730"
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#107c41] text-white text-sm font-medium rounded-full hover:bg-[#0d6a37] transition-colors mt-4"
            >
              Call Now: 01717-19-27-30
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
