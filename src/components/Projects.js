import React, { useState } from "react";
import { usePortfolio } from "../data/ExperienceData";
import ProjectModal from "./ProjectModal";

// Apple Titanium Monochrome Theme Configuration
function getProjectTheme(project) {
  if (project.id === "weather-app" || project.appType === "weather") {
    return {
      glow: "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 55%, transparent 80%)",
      accent: "#ffffff",
      accentBg: "rgba(255, 255, 255, 0.06)",
      accentBorder: "rgba(255, 255, 255, 0.12)",
      preview: {
        badge: "Weather Intelligence",
        mainTitle: "22.5°C",
        subTitle: "Clear Sky in New York",
        detail: "58% Humidity • Metric Units",
        metricTag: "REST API • OpenWeather",
        icon: "☀️",
      },
    };
  }
  if (project.id === "todo-crud-app" || project.appType === "todo") {
    return {
      glow: "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 55%, transparent 80%)",
      accent: "#ffffff",
      accentBg: "rgba(255, 255, 255, 0.06)",
      accentBorder: "rgba(255, 255, 255, 0.12)",
      preview: {
        badge: "RESTful Architecture",
        mainTitle: "Task Service",
        subTitle: "GET, POST, PUT, DELETE",
        detail: "JSON Payload Validation",
        metricTag: "Node.js & Express API",
        icon: "✓",
      },
    };
  }
  return {
    glow: "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 55%, transparent 80%)",
    accent: "#ffffff",
    accentBg: "rgba(255, 255, 255, 0.06)",
    accentBorder: "rgba(255, 255, 255, 0.12)",
    preview: {
      badge: "Real-Time WebSockets",
      mainTitle: "Live Multiplayer",
      subTitle: "Instant Click Sync",
      detail: "Leaderboard & Inactivity Timer",
      metricTag: "Socket.IO Protocol",
      icon: "⚡",
    },
  };
}

// Apple-inspired Sleek Project Preview Canvas (No robotic terminals)
function AppleProjectPreview({ project, theme }) {
  const { preview, glow, accent } = theme;

  return (
    <div
      className="w-full h-full p-6 flex flex-col justify-between select-none relative overflow-hidden"
      style={{
        background: glow,
        backgroundColor: "#111111",
      }}
    >
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between z-10">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#e2e8f0",
            backdropFilter: "blur(12px)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#dc2626", boxShadow: "0 0 6px rgba(220, 38, 38, 0.4)" }}
          ></span>
          {preview.badge}
        </span>

        <span
          className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
          style={{
            backgroundColor: "rgba(220, 38, 38, 0.08)",
            border: "1px solid rgba(220, 38, 38, 0.2)",
            color: "#dc2626",
          }}
        >
          {preview.metricTag}
        </span>
      </div>

      {/* Center Visual Mockup */}
      <div className="flex flex-col items-center justify-center text-center my-auto py-3 z-10">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-3 shadow-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          {preview.icon}
        </div>
        <h4 className="text-xl font-bold text-white tracking-tight">
          {preview.mainTitle}
        </h4>
        <p className="text-xs text-slate-300 font-medium mt-0.5">
          {preview.subTitle}
        </p>
      </div>

      {/* Bottom Status Hint */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5 z-10">
        <span className="truncate">{preview.detail}</span>
        <span className="text-slate-300 font-medium flex items-center gap-1 shrink-0">
          Interactive <span style={{ color: "#dc2626" }}>→</span>
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { data, isAuthenticated, setIsCMSOpen } = usePortfolio();
  const { projects } = data;
  const [activeFilter, setActiveFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category || "Full-Stack")))];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => (p.category || "Full-Stack") === activeFilter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-tag">Engineering Suite</span>
          <h2 className="section-heading mt-3">Core Software Projects</h2>
          <p className="section-subheading mt-3 max-w-2xl mx-auto text-slate-400">
            Real-time WebSocket platforms, RESTful CRUD microservices, and asynchronous API architectures executable locally in an interactive sandbox.
          </p>
        </div>

        {/* Apple-style Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200"
                style={{
                  cursor: "pointer",
                  backgroundColor: isActive ? "#f3f4f6" : "rgba(255, 255, 255, 0.04)",
                  color: isActive ? "#080808" : "#9ca3af",
                  border: isActive ? "1px solid rgba(255, 255, 255, 0.9)" : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: isActive ? "0 4px 20px rgba(0, 0, 0, 0.4)" : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
          {isAuthenticated && (
            <button
              onClick={() => setIsCMSOpen(true)}
              className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all"
              style={{
                background: "rgba(22, 22, 22, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                color: "#f3f4f6",
                cursor: "pointer"
              }}
            >
              <span>+ Add Project</span>
            </button>
          )}
        </div>

        {/* Projects Grid: Sleek Apple-inspired Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {filteredProjects.map((project) => {
            const theme = getProjectTheme(project);

            return (
              <div
                key={project.id}
                className="group rounded-2xl overflow-hidden flex flex-col justify-between h-full w-full transition-all duration-300 hover:scale-[1.015]"
                style={{
                  background: "linear-gradient(180deg, rgba(22, 22, 22, 0.8) 0%, rgba(14, 14, 14, 0.95) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 20px 40px -15px rgba(0, 0, 0, 0.7)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Visual Preview Banner (Strictly Equal Fixed Height) */}
                <div
                  className="relative w-full overflow-hidden border-b border-white/5 shrink-0"
                  style={{
                    height: "220px",
                    minHeight: "220px",
                    maxHeight: "220px",
                  }}
                >
                  <AppleProjectPreview project={project} theme={theme} />
                </div>

                {/* Card Body with 2vh 2vw Apple-style Padding & Proportions */}
                <div
                  className="flex-1 flex flex-col justify-between"
                  style={{
                    padding: "clamp(1.75rem, 2.2vh, 2.5rem) clamp(1.5rem, 2vw, 2.25rem)",
                  }}
                >
                  <div className="flex-1 flex flex-col">
                    {/* Category Capsule */}
                    <div className="mb-3.5">
                      <span
                        className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wide inline-block"
                        style={{
                          backgroundColor: theme.accentBg,
                          color: theme.accent,
                          border: `1px solid ${theme.accentBorder}`,
                        }}
                      >
                        {project.category || "Full-Stack"}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3.5 sm:min-h-[3.5rem] flex items-start break-words"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* Clean Descriptive Copy */}
                    <p className="text-xs sm:text-sm text-slate-400 mb-5 leading-relaxed break-words flex-1 font-normal">
                      {project.description}
                    </p>

                    {/* Launch Action Button (Docked below description & styled squared) */}
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="w-full mb-4 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 text-slate-100 hover:text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 active:scale-[0.98]"
                      style={{
                        cursor: "pointer",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <span>Launch Sandbox & Architecture</span>
                      <svg style={{ width: "15px", height: "15px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Docked Metric & Tech Stack */}
                  <div className="shrink-0 pt-1">
                    {project.metrics && (
                      <div
                        className="py-2.5 px-4 rounded-xl text-xs font-medium mb-3.5 flex items-center gap-2.5"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          color: "#cbd5e1",
                        }}
                      >
                        <span style={{ color: theme.accent }}>⚡</span>
                        <span className="truncate">{project.metrics}</span>
                      </div>
                    )}

                    {/* Verified Tech Stack Chips */}
                    <div
                      className="flex flex-wrap gap-2 pt-3.5 items-center"
                      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
                    >
                      {(project.techStack || []).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-3 py-1 rounded-full text-slate-300"
                          style={{
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Apple-esque Project Spotlight: macros.ramendev.io */}
        <div
          className="max-w-6xl mx-auto px-1 sm:px-4"
          style={{ marginTop: "10vh" }}
        >
          <div
            className="relative rounded-2xl p-8 sm:p-12 md:p-14 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12"
            style={{
              background: "radial-gradient(130% 130% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(20, 20, 20, 0.88) 60%, rgba(10, 10, 10, 0.96) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.15), 0 30px 60px -15px rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            {/* Subtle Apple-style Ambient Spotlight Flare */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none opacity-40"
              style={{
                background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
              }}
            ></div>

            {/* Left Content Area */}
            <div className="space-y-5 max-w-2xl relative z-10">
              {/* Apple-style Frosted Pill Status Badge (Enhanced Padding) */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-1 shadow-sm">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: "#dc2626", boxShadow: "0 0 6px rgba(220, 38, 38, 0.4)" }}
                ></span>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
                  Live Project • macros.ramendev.io
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-1.5">
                <h3
                  className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Macros: TDEE Calc
                </h3>
                <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-400">
                  Metabolic Intelligence &amp; Nutrition Suite
                </p>
              </div>

              {/* Clean Descriptive Copy */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                A fast, client-side metabolic health calculator engineered with React &amp; Vite. Instantly computes BMR (Mifflin-St Jeor), activity-adjusted TDEE, customized macronutrient distributions, and US Navy circumference body-fat estimates.
              </p>

              {/* Minimal Apple-style Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Zero Latency Engine",
                  "Mifflin-St Jeor BMR",
                  "Custom Macro Splits",
                  "US Navy BF% Formula",
                ].map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3.5 py-1.5 rounded-full text-slate-200 bg-white/[0.03] border border-white/[0.08]"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Action Button (Apple-style High-Contrast Muted White Button) */}
            <div className="relative z-10 shrink-0 w-full md:w-auto pt-2 md:pt-0">
              <a
                href="https://macros.ramendev.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  textDecoration: "none",
                  backgroundColor: "#f3f4f6",
                  color: "#080808",
                  boxShadow: "0 6px 25px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.85)",
                }}
              >
                <span style={{ color: "#080808" }}>Check Out Macro App</span>
                <svg
                  style={{ width: "16px", height: "16px", color: "#080808" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details & Interactive Local Sandbox Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </section>
  );
}
