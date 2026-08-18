import React, { useState, useEffect } from "react";
import { usePortfolio } from "../data/ExperienceData";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { isAuthenticated, setIsCMSOpen, data } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "experience", "projects", "skills", "photography", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "py-3 glass-panel border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
      style={{
        background: isScrolled ? "rgba(6, 8, 12, 0.85)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        transition: "all 0.3s ease"
      }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3"
          style={{ textDecoration: "none" }}
        >
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #38bdf8 0%, #10b981 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#050608",
              fontWeight: "900",
              fontSize: "1.125rem",
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.25)"
            }}
          >
            RM
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white text-base tracking-tight">
              {data.profile.name}
            </span>
            <span className="text-xs text-cyan-400 font-medium flex items-center gap-1.5">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#38bdf8",
                  boxShadow: "0 0 8px #38bdf8"
                }}
              ></span>
              {data.profile.statusBadge || "Available for CA roles"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-1 p-1.5 rounded-full"
          style={{
            background: "rgba(15, 20, 30, 0.75)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)"
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  backgroundColor: isActive ? "rgba(56, 189, 248, 0.15)" : "transparent",
                  color: isActive ? "#38bdf8" : "#94a3b8",
                  border: isActive ? "1px solid rgba(56, 189, 248, 0.35)" : "1px solid transparent"
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons & CMS Gate */}
        <div className="hidden lg:flex items-center gap-3">
          {/* CMS Admin Button */}
          <button
            onClick={() => setIsCMSOpen(true)}
            className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border"
            style={{
              background: isAuthenticated ? "rgba(16, 185, 129, 0.12)" : "rgba(15, 20, 30, 0.8)",
              borderColor: isAuthenticated ? "rgba(16, 185, 129, 0.4)" : "rgba(255, 255, 255, 0.1)",
              color: isAuthenticated ? "#34d399" : "#94a3b8",
              cursor: "pointer"
            }}
            title={isAuthenticated ? "Open CMS Studio" : "Admin Login"}
          >
            <svg
              style={{ width: "14px", height: "14px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isAuthenticated ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 114 0v4H10V7z"
                />
              )}
            </svg>
            <span>{isAuthenticated ? "CMS Studio" : "Admin"}</span>
            {isAuthenticated && (
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#34d399"
                }}
              ></span>
            )}
          </button>

          {/* Direct Contact CTA */}
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "0.55rem 1.1rem", fontSize: "0.8125rem" }}
          >
            <span>Let's Talk</span>
            <svg
              style={{ width: "14px", height: "14px" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsCMSOpen(true)}
            className="p-2 rounded-lg"
            style={{
              background: "rgba(15, 20, 30, 0.8)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#cbd5e1"
            }}
            aria-label="CMS Login"
          >
            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zM10 7a2 2 0 114 0v4H10V7z" />
            </svg>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg"
            style={{
              background: "rgba(15, 20, 30, 0.9)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#ffffff"
            }}
            aria-label="Toggle navigation menu"
          >
            <svg style={{ width: "22px", height: "22px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden px-6 py-6"
          style={{
            background: "rgba(6, 8, 12, 0.96)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-slate-200 font-medium text-base"
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <a
                href={data.profile.resumeUrl || "/Rafael_Mendoza_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                download="Rafael_Mendoza_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-outline w-full text-center py-2.5 text-sm flex items-center justify-center gap-2"
              >
                <svg style={{ width: "16px", height: "16px", color: "#38bdf8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCMSOpen(true);
                }}
                className="w-full text-center py-2.5 px-4 rounded-lg font-semibold text-sm"
                style={{
                  background: "rgba(15, 20, 30, 0.9)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38bdf8"
                }}
              >
                {isAuthenticated ? "Open CMS Studio" : "Admin CMS Login"}
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center py-2.5 text-sm"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
