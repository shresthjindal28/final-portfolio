"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollProgress(progress);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">

      <nav className="w-full md:w-auto bg-transparent backdrop-blur-md border border-border/40 rounded-xl md:rounded-full shadow-xl">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-xl font-semibold whitespace-nowrap"
          >
            <span className="text-emerald-500">Shresth</span>Jindal
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-22">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
{isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-3 pt-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}