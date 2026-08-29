import React from "react";
import { TechStack } from "../data/TechStack";

// Helper to compute acronym-esque fallback label (e.g. "REA", "CSS", "DOC", "HTM")
function getAcronym(name) {
  if (!name) return "DEV";
  const clean = name.replace(/[^a-zA-Z0-9]/g, "");
  return clean.slice(0, 3).toUpperCase();
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Tech Stack</span>
          <h2 className="section-heading mt-2">Tools &amp; Technologies</h2>
          <p className="section-subheading mt-3 max-w-2xl mx-auto">
            Technologies, frameworks, and tools I use to build scalable web applications and high-performance client sites.
          </p>
        </div>

        {/* Tech Stack Cards Grid Generated via Loop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-7xl mx-auto items-stretch">
          {TechStack.map((tech, index) => {
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
                key={tech.name || index}
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
                      className="w-full h-full object-contain p-1.5"
                    />
                  ) : (
                    <span>{acronym}</span>
                  )}
                </div>

                {/* Content: Name, Subtitle & Tags */}
                <div className="w-full flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-white mb-0.5 tracking-tight group-hover:text-red-400 transition-colors">
                      {tech.name}
                    </h3>

                    {/* Subtitle (e.g. "Theme Dev & CMS", "Frontend Library") */}
                    {tech.subtitle && (
                      <p
                        className="text-[11px] text-slate-400 leading-tight mb-2 font-normal line-clamp-2"
                        title={tech.subtitle}
                      >
                        {tech.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Tags Array: Badge Pills */}
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
          })}
        </div>
      </div>
    </section>
  );
}
