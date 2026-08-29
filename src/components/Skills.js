import React from "react";
import { techStackSections } from "../data/TechStack";

// Helper to compute acronym-esque fallback label (e.g. "REA", "CSS", "DOC", "HTM")
function getAcronym(name) {
  if (!name) return "DEV";
  const clean = name.replace(/[^a-zA-Z0-9]/g, "");
  return clean.slice(0, 3).toUpperCase();
}

// Single Reusable Tech Card Component
function TechCard({ tech }) {
  const acronym = getAcronym(tech.name);
  const CardWrapper = tech.link ? "a" : "div";
  const wrapperProps = tech.link
    ? {
        href: tech.link,
        target: "_blank",
        rel: "noopener noreferrer",
        title: `Learn more about ${tech.name}`,
      }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className="group glass-card p-4 rounded-xl flex flex-col items-center justify-between text-center gap-3 transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
      style={{
        cursor: tech.link ? "pointer" : "default",
        textDecoration: "none",
        display: "flex",
      }}
    >
      {/* Icon or Acronym-esque Monogram Div */}
      <div
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "2.75rem",
          height: "2.75rem",
          borderRadius: "0.625rem",
          background: "rgba(255, 255, 255, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-primary)",
          fontWeight: "700",
          fontSize: "0.8rem",
          fontFamily: "var(--font-mono)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.name}
            loading="lazy"
            className="w-5 h-5 object-contain transition-transform group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = "block";
              }
            }}
          />
        ) : null}
        <span style={{ display: tech.icon ? "none" : "block" }}>{acronym}</span>
      </div>

      {/* Content: Name, Subtitle & Optional Tags */}
      <div className="w-full flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xs font-bold text-white mb-0.5 tracking-tight group-hover:text-red-400 transition-colors">
            {tech.name}
          </h3>

          {tech.subtitle && (
            <p
              className="text-[11px] text-slate-400 leading-tight font-normal line-clamp-2"
              title={tech.subtitle}
            >
              {tech.subtitle}
            </p>
          )}
        </div>

        {Array.isArray(tech.tags) && tech.tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1 mt-auto pt-2 border-t border-white/5">
            {tech.tags.map((tag, tagIdx) => (
              <span
                key={tag.name || tagIdx}
                className="px-1.5 py-0.5 rounded text-[9px] font-medium tracking-wide uppercase"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  color: "var(--text-dim)",
                }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom relative z-10">
        {/* Main Section Header with Generous Bottom Spacing */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <span className="section-tag">Capabilities</span>
          <h2 className="section-heading mt-2">Technical &amp; Creative Stack</h2>
          <p className="section-subheading mt-3 text-slate-400">
            A comprehensive overview of my software engineering capabilities, architectural practices, and creative toolset.
          </p>
        </div>

        {/* Grouped Sub-Sections with Distinct Spacing & Clean Unified Headers */}
        <div className="space-y-24 sm:space-y-28 max-w-7xl mx-auto">
          {techStackSections.map((section, idx) => (
            <div key={section.id || idx} className="space-y-6">
              {/* Cohesive Sub-Section Header (Badge + Title + Description naturally stacked) */}
              <div className="pb-4 border-b border-white/10 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: "rgba(220, 38, 38, 0.12)",
                      border: "1px solid rgba(220, 38, 38, 0.25)",
                      color: "#dc2626",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#e2e8f0",
                    }}
                  >
                    {section.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {section.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-normal leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Grid of Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-stretch pt-2">
                {section.items.map((tech, techIdx) => (
                  <TechCard key={tech.name || techIdx} tech={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
