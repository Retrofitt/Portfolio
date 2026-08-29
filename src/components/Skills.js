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
      className="group glass-card p-4 sm:p-5 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 hover:scale-[1.02] hover:border-white/20 h-full w-full"
      style={{
        cursor: tech.link ? "pointer" : "default",
        textDecoration: "none",
        display: "flex",
      }}
    >
      {/* Apple-style Squircle App Icon Container */}
      <div
        className="shrink-0 mb-3.5 transition-all duration-300 group-hover:scale-105 group-hover:border-white/25"
        style={{
          width: "4.5rem",
          height: "4.5rem",
          borderRadius: "1.125rem",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
          backgroundColor: "#151515",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--text-primary)",
          fontWeight: "700",
          fontSize: "1rem",
          fontFamily: "var(--font-mono)",
          letterSpacing: "0.04em",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.18), 0 8px 16px -4px rgba(0, 0, 0, 0.6)",
          padding: "0.85rem",
          overflow: "hidden",
        }}
      >
        {tech.icon ? (
          <img
            src={tech.icon}
            alt={tech.name}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-110"
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

      {/* Content: Uniform Title and Subtitle Containers */}
      <div className="w-full flex-1 flex flex-col justify-start items-center">
        {/* Uniform Title Slot (Locks baseline for all cards) */}
        <div className="w-full min-h-[2.75rem] flex items-center justify-center mb-1">
          <h3
            className="text-[15px] sm:text-base font-bold text-white tracking-tight group-hover:text-red-400 transition-colors line-clamp-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {tech.name}
          </h3>
        </div>

        {/* Uniform Subtitle Slot (Starts at exact same vertical offset on every card) */}
        <div className="w-full min-h-[2.25rem] flex items-start justify-center">
          {tech.subtitle ? (
            <p
              className="text-xs text-slate-400 leading-snug font-normal line-clamp-2"
              title={tech.subtitle}
            >
              {tech.subtitle}
            </p>
          ) : (
            <span className="invisible text-xs leading-snug">placeholder</span>
          )}
        </div>
      </div>

{/* Commented for potential later use */}
        {/* {Array.isArray(tech.tags) && tech.tags.length > 0 && (
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
        )} */}
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
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="font-mono text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded"
                    style={{
                      backgroundColor: "rgba(220, 38, 38, 0.12)",
                      border: "1px solid rgba(220, 38, 38, 0.25)",
                      color: "#dc2626",
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      color: "#e2e8f0",
                    }}
                  >
                    {section.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {section.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 mt-1.5 max-w-2xl font-normal leading-relaxed">
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
