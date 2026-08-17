import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Experience() {
  const { data } = usePortfolio();
  const { experience } = data;

  return (
    <section id="experience" className="py-24 bg-[#060913] relative overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Career Track Record</span>
          <h2 className="section-heading mt-2">Work Experience &amp; Impact</h2>
          <p className="section-subheading mt-3">
            Proven history of delivering high-performance web systems and engineering solutions in production.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-slate-800 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {(experience || []).map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id || index}
                  className={`relative flex flex-col sm:flex-row items-center gap-8 ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-emerald-400 z-10 shadow-lg shadow-emerald-400/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl relative hover:border-emerald-500/30 transition-all">
                      {/* Header Badge: Period & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                          {item.period}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-emerald-400/90 mb-4">
                        {item.company}
                      </h4>

                      {/* Overview */}
                      {item.description && (
                        <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Bullet Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2 mb-5">
                          {item.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xs text-slate-400 flex items-start gap-2 leading-relaxed">
                              <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Technologies Pill Container */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-900 border border-white/5 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
