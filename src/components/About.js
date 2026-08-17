import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function About() {
  const { data } = usePortfolio();
  const { profile } = data;

  return (
    <section id="about" className="py-24 bg-[#080d1a] relative overflow-hidden border-t border-b border-white/5">
      {/* Ambient background glow */}
      <div className="glow-orb w-[400px] h-[400px] bg-emerald-500/5 -left-20 top-1/3"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">About The Engineer</span>
          <h2 className="section-heading mt-2">Architecture &amp; Precision</h2>
          <p className="section-subheading mt-3">
            Building resilient digital products that balance clean code, performance, and aesthetic excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Narrative / Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-8 rounded-2xl border-l-4 border-l-emerald-500">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-emerald-400">01.</span>
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
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Core Competencies &amp; Creative Disciplines</span>
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
                    className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-slate-300 text-xs font-semibold hover:border-emerald-500/40 hover:text-emerald-300 transition-colors"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats & Quick Card / Right Column */}
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
                  className="glass-card p-6 rounded-2xl text-center group hover:border-emerald-500/40 transition-all"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 mb-1 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Recruiter Quick Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0c1427] border border-emerald-500/20 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Looking for Top Talent?</h4>
                  <p className="text-xs text-slate-400">Ready to onboard and make immediate impact</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Open to Full-Time, Contract-to-Hire, and High-Impact Engineering roles across California and US Remote.
              </p>
              <a href="#contact" className="btn-primary w-full text-xs py-2.5">
                <span>Direct Recruiter Inquiry</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
