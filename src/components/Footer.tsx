import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import xenLogo from "@/assets/xen-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#trust" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img 
                src={xenLogo} 
                alt="Xen Developments" 
                className="h-14 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-background/70 max-w-md mb-6">
              Creating premium residential spaces in Dhaka with a focus on
              quality, thoughtful design, and long-term value.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-background/20 rounded-full flex items-center justify-center hover:bg-background/10 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>Dhaka, Bangladesh</li>
              <li>
                <a
                  href="tel:+8801700000000"
                  className="hover:text-background transition-colors"
                >
                  +880 1700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@xendev.com"
                  className="hover:text-background transition-colors"
                >
                  info@xendev.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-background/70">
              Ready to find your dream home?
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-7 text-sm bg-background text-foreground font-medium transition-opacity hover:opacity-90"
              >
                Schedule a Site Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-7 text-sm border border-background/30 font-medium transition-colors hover:bg-background/10"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>
            © {currentYear} Xen Developments Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
