"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Sun, Moon, Menu, X, Terminal } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
  { name: "Experience", id: "experience" },
  { name: "Journey", id: "journey" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Roadmap", id: "currently-building" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Listen to section active states from useSectionInView hook
  useEffect(() => {
    const handleActiveSectionChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId: string }>;
      setActiveSection(customEvent.detail.sectionId);
    };

    window.addEventListener("active-section-change", handleActiveSectionChange);
    return () => {
      window.removeEventListener("active-section-change", handleActiveSectionChange);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const isHome = pathname === "/";
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage first, then scroll to section
      router.push(`/#${sectionId}`);
    }
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav className="w-full md:w-auto bg-card/75 backdrop-blur-md border border-border rounded-2xl shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between h-16 px-6 gap-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setIsMobileMenuOpen(false);
              if (pathname === "/") {
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className="flex items-center gap-2 text-lg font-bold text-foreground tracking-tight select-none"
          >
            <Terminal size={18} className="text-accent" />
            <span>
              Shresth<span className="text-accent italic font-light font-sans">.</span>Jindal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-xs font-body-small font-medium transition-colors relative py-1 ${
                  activeSection === item.id
                    ? "text-accent font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-accent rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Toggle */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl border border-border bg-card/50 hover:bg-secondary/10 text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Toggle theme mode"
              >
                {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden rounded-xl border border-border bg-card/50 text-muted-foreground hover:text-foreground"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 pb-4 border-t border-border/40">
            <div className="flex flex-col space-y-2 pt-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm font-body-small font-medium py-2 px-3 rounded-lg ${
                    activeSection === item.id
                      ? "bg-accent/10 text-accent font-semibold"
                      : "text-muted-foreground hover:bg-secondary/5 hover:text-foreground"
                  }`}
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