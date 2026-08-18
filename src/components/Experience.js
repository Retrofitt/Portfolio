import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Experience() {
  const { data } = usePortfolio();
  const { experience = [] } = data;

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Experience</span>
          <h2 className="section-heading mt-2">Work History</h2>
          <p className="section-subheading mt-3">
            Professional web development and engineering experience across client agencies and freelance work.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {experience.map((item, index) => (
              <div
                key={item.id || index}
                className="glass-card p-6 sm:p-8 rounded-2xl relative"
                style={{
                  borderLeft: "4px solid var(--accent-cyan)",
                }}
              >
                {/* Header Badge: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                      border: "1px solid var(--border-glow)",
                      color: "var(--accent-cyan)"
                    }}
                  >
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <svg style={{ width: "14px", height: "14px", color: "var(--text-dim)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <h4 className="text-sm font-semibold text-cyan-400 mb-4">
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
                  <ul className="space-y-2 mb-5" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-cyan-400 font-bold" style={{ marginTop: "1px" }}>▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Technologies Pill Container */}
                {item.technologies && item.technologies.length > 0 && (
                  <div
                    className="flex flex-wrap gap-1.5 pt-3"
                    style={{ borderTop: "1px solid var(--border-subtle)" }}
                  >
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded"
                        style={{
                          background: "var(--bg-surface)",
                          border: "1px solid var(--border-subtle)",
                          color: "var(--text-secondary)"
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
