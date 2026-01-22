import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import xenLogo from "@/assets/xen-logo.png";
interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}
const Navigation = ({
  isDark,
  onThemeToggle
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if at bottom of page (within 100px of bottom)
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= documentHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Logo should be white in dark mode when: at top (not scrolled) OR at bottom of page
  const shouldLogoBeWhite = isDark && (!isScrolled || isAtBottom);

  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-sm py-2" : "bg-transparent py-4"}`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img src={xenLogo} alt="Xen Developments" className={`h-12 w-auto transition-all duration-300 group-hover:scale-105 ${shouldLogoBeWhite ? "brightness-0 invert" : ""}`} />
          </a>

          {/* Desktop Navigation - Centered Links */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-16">
            <Link to="/projects" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <a href="tel:+8801717192730" className="btn-sm text-white">Call Now: 01717-19-27-30</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-foreground" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-wide py-6 space-y-4">
            <Link to="/projects" className="block py-2 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/about" className="block py-2 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/#contact" className="block py-2 text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/#contact" className="btn-primary text-center w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Schedule a Site Visit
            </Link>
          </div>
        </div>}
    </nav>;
};
export default Navigation;