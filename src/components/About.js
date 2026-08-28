import React from "react";
import { usePortfolio } from "../data/ExperienceData";

export default function About() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)"
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">About Me</span>
          <h2 className="section-heading mt-2">Background &amp; Experience</h2>
          <p className="section-subheading mt-3">
            Building reliable client websites and applications with clean code, good performance, and attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Narrative / Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="glass-card p-8 rounded-2xl"
              style={{
                borderLeft: "3px solid #dc2626",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="font-mono text-sm font-bold" style={{ color: "#dc2626" }}>01.</span>
                <span>My Approach</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                {profile.aboutStory1}
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                {profile.aboutStory2}
              </p>
            </div>

            {/* Core Disciplines */}
            <div className="glass-panel p-6 rounded-2xl">
              <h4
                className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2"
                style={{ color: "var(--text-muted)" }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#dc2626",
                    boxShadow: "0 0 6px rgba(220, 38, 38, 0.4)"
                  }}
                ></span>
                <span>Core Focus Areas</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(profile.disciplines || []).map((discipline) => (
                  <span
                    key={discipline}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "var(--text-secondary)"
                    }}
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Quick Card / Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stat Counters Grid with Velvet Blood Red Metrics */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {(profile.stats || []).map((stat, i) => (
                <div
                  key={stat.label || i}
                  className="glass-card p-4 sm:p-6 rounded-2xl text-center"
                >
                  <p
                    className="text-2xl sm:text-4xl font-black mb-1 tracking-tight"
                    style={{
                      color: "#dc2626",
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Opportunity Card */}
            <div
              className="glass-card p-6 rounded-2xl"
              style={{
                background: "rgba(22, 22, 22, 0.8)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5)"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(220, 38, 38, 0.12)",
                    border: "1px solid rgba(220, 38, 38, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#dc2626"
                  }}
                >
                  <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Open to Opportunities</h4>
                  <p className="text-xs text-slate-400">Available for Full-Time, Hybrid &amp; Remote Roles</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Based in Long Beach, CA. Interested in frontend, full-stack, and web development opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href="#contact"
                  className="btn-primary text-xs flex-1 text-center"
                  style={{ padding: "0.65rem 1rem" }}
                >
                  <span>Send a Message</span>
                  <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href={profile.resumeUrl || "/Rafael_Mendoza_Resume-2608.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Rafael_Mendoza_Resume-2608.pdf"
                  className="btn-secondary text-xs text-center flex items-center justify-center gap-1.5"
                  style={{ padding: "0.65rem 1rem" }}
                  title="Download PDF Resume"
                >
                  <svg style={{ width: "14px", height: "14px", color: "var(--text-secondary)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>PDF Resume</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
