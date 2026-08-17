import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Footer() {
  const { data, setIsCMSOpen, isAuthenticated } = usePortfolio();
  const { profile, socials } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#04060d] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-emerald-500/20">
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
                className="text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors"
              >
                {s.name}
              </a>
            ))}
            <button
              onClick={() => setIsCMSOpen(true)}
              className="text-xs font-semibold text-slate-500 hover:text-emerald-400 transition-colors ml-2"
            >
              {isAuthenticated ? "CMS Studio" : "Admin"}
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-emerald-400 transition-colors px-3 py-2 rounded-lg bg-slate-900 border border-white/5"
          >
            <span>Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed &amp; Engineered with React, Tailwind CSS &amp; Precision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
