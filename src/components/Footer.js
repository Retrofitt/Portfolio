import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

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
        backgroundColor: "#030407",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="container-custom">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}
        >
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
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
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.25)"
              }}
            >
              RM
            </div>
            <div>
              <p className="font-extrabold text-white text-base">
                {profile.name}
              </p>
              <p className="text-xs text-slate-400">
                {profile.role} • {profile.location || "California"}
              </p>
            </div>
          </div>

          {/* Socials & Actions */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold"
                style={{ color: "#94a3b8", textDecoration: "none" }}
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-xs font-semibold ml-2"
              style={{
                color: "#64748b",
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
            className="btn-outline text-xs"
            style={{ padding: "0.45rem 0.85rem" }}
          >
            <span>Back to top</span>
            <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed &amp; Engineered with React, Slate Glass &amp; Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
