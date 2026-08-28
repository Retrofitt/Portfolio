import React from "react";
import { usePortfolio } from "../data/ExperienceData";

export default function Footer() {
  const { data, setIsCMSOpen, isAuthenticated } = usePortfolio();
  const { profile, socials } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)"
      }}
    >
      <div className="container-custom">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}
        >
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "0.75rem",
                background: "#f3f4f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#080808",
                fontWeight: "900",
                fontSize: "1.125rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 255, 255, 0.85)"
              }}
            >
              RM
            </div>
            <div>
              <p className="font-extrabold text-white text-base">
                {profile.name}
              </p>
              <p className="text-xs text-slate-400">
                {profile.role} • {profile.location || "Long Beach, CA"}
              </p>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold"
                style={{ color: "#9ca3af", textDecoration: "none" }}
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-xs font-semibold"
              style={{
                color: "#6b7280",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              {isAuthenticated ? "CMS Studio" : "Admin"}
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="btn-secondary text-xs"
            style={{ padding: "0.45rem 0.85rem", borderRadius: "0.5rem" }}
          >
            <span>Back to top</span>
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React &amp; JavaScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
