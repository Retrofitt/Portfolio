import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function About() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "#07090e",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">About The Engineer</span>
          <h2 className="section-heading mt-2">Architecture &amp; Precision</h2>
          <p className="section-subheading mt-3">
            Building resilient digital products that balance clean code, performance, and aesthetic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Narrative / Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className="glass-card p-8 rounded-2xl"
              style={{
                borderLeft: "4px solid #38bdf8",
                background: "rgba(12, 16, 24, 0.65)"
              }}
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400 font-mono">01.</span>
                <span>Engineering Philosophy</span>
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
                style={{ color: "#94a3b8" }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#38bdf8"
                  }}
                ></span>
                <span>Core Competencies &amp; Disciplines</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {(profile.disciplines || [
                  "Full-Stack Architecture",
                  "UI/UX Engineering",
                  "Performance Tuning",
                  "API Design",
                  "Creative Direction",
                  "Photography"
                ]).map((discipline) => (
                  <span
                    key={discipline}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{
                      background: "rgba(8, 11, 17, 0.9)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      color: "#cbd5e1"
                    }}
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Recruiter Card / Right Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-4">
              {(profile.stats || [
                { label: "Years Experience", value: "4+" },
                { label: "Production Apps", value: "15+" },
                { label: "Core Technologies", value: "25+" },
                { label: "Client Satisfaction", value: "100%" }
              ]).map((stat, i) => (
                <div
                  key={stat.label || i}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <p
                    className="text-3xl sm:text-4xl font-black mb-1"
                    style={{
                      background: "linear-gradient(135deg, #38bdf8 0%, #10b981 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Recruiter Quick Card */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(13, 17, 26, 0.9) 0%, rgba(8, 11, 17, 0.95) 100%)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.6)"
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: "2.25rem",
                    height: "2.25rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    border: "1px solid rgba(56, 189, 248, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38bdf8"
                  }}
                >
                  <svg style={{ width: "18px", height: "18px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Looking for Top Talent?</h4>
                  <p className="text-xs text-slate-400">Ready to onboard and make immediate impact</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Open to Full-Time, Contract-to-Hire, and High-Impact Engineering roles across California and US Remote.
              </p>
              <a
                href="#contact"
                className="btn-primary w-full text-xs"
                style={{ padding: "0.65rem 1rem", width: "100%" }}
              >
                <span>Direct Recruiter Inquiry</span>
                <svg style={{ width: "14px", height: "14px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
