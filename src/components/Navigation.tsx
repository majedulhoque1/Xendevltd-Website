import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import xenLogo from "@/assets/xen-logo.png";

interface NavigationProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

const Navigation = ({ isDark, onThemeToggle }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

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
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img 
              src={xenLogo} 
              alt="Xen Developments" 
              className="h-10 w-auto"
            />
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Developments
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                Projects
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProjectsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-background border border-border rounded-md shadow-lg animate-fade-in">
                  <a
                    href="#featured"
                    className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                  >
                    On-going
                  </a>
                  <a
                    href="#projects"
                    className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                  >
                    Up-coming
                  </a>
                  <a
                    href="#projects"
                    className="block px-4 py-3 text-sm hover:bg-secondary transition-colors"
                  >
                    Completed
                  </a>
                </div>
              )}
            </div>

            <a
              href="#trust"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>

            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />

            <a href="#contact" className="btn-primary text-sm">
              Schedule a Site Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
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
