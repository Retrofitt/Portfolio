import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import ProjectModal from "./ProjectModal";

// Unified Terminal / Sandbox Visual Banner for Complete Visual Harmony
function UnifiedProjectBanner({ project }) {
  const getBannerData = () => {
    if (project.id === "weather-app" || project.appType === "weather") {
      return {
        themeGradient: "radial-gradient(circle at top right, rgba(56, 189, 248, 0.15) 0%, rgba(6, 10, 18, 0.98) 100%)",
        borderColor: "rgba(56, 189, 248, 0.2)",
        endpoint: "GET /?city=New+York",
        status: "200 OK",
        statusColor: "#34d399",
        statusBg: "rgba(16, 185, 129, 0.15)",
        statusBorder: "rgba(16, 185, 129, 0.3)",
        primaryIcon: "☀️",
        primaryTitle: "22.5°C (72.5°F) Clear Sky",
        primaryDetail: "58% Humidity • Metric Units",
        logLine: "● Hydrating OpenWeatherMap API • Port :3000",
        logColor: "#38bdf8",
        engine: "Express + Axios SSR",
      };
    }
    if (project.id === "todo-crud-app" || project.appType === "todo") {
      return {
        themeGradient: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.14) 0%, rgba(6, 12, 10, 0.98) 100%)",
        borderColor: "rgba(16, 185, 129, 0.2)",
        endpoint: "REST /todos/:id",
        status: "200 OK",
        statusColor: "#34d399",
        statusBg: "rgba(16, 185, 129, 0.15)",
        statusBorder: "rgba(16, 185, 129, 0.3)",
        primaryIcon: "✓",
        primaryTitle: "POST /todos → 201 Created",
        primaryDetail: "PUT & DELETE Handlers Active",
        logLine: "● JSON Middleware Validation • Port :3001",
        logColor: "#34d399",
        engine: "Express + Body-Parser",
      };
    }
    return {
      themeGradient: "radial-gradient(circle at top right, rgba(168, 85, 247, 0.15) 0%, rgba(10, 6, 18, 0.98) 100%)",
      borderColor: "rgba(168, 85, 247, 0.2)",
      endpoint: "WSS /socket.io:3002",
      status: "CONNECTED",
      statusColor: "#34d399",
      statusBg: "rgba(16, 185, 129, 0.15)",
      statusBorder: "rgba(16, 185, 129, 0.3)",
      primaryIcon: "⚡",
      primaryTitle: "send_message Broadcast",
      primaryDetail: "Dual-Client Latency <15ms",
      logLine: "● Socket.IO Bi-Directional Pipe • Port :3002",
      logColor: "#c084fc",
      engine: "Express + Socket.IO",
    };
  };

  const data = getBannerData();

  return (
    <div
      className="w-full h-full p-4 flex flex-col justify-between select-none pointer-events-none box-border"
      style={{
        background: data.themeGradient,
      }}
    >
      {/* 1. Window Header Bar (Traffic Dots + Route + Status) */}
      <div className="h-7 flex items-center justify-between gap-2 shrink-0 border-b border-white/5 pb-2">
        {/* Terminal traffic light dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
        </div>

        {/* Monospace Route Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-950/80 border border-white/10 font-mono text-[10px] text-slate-300 truncate max-w-[55%]">
          <span>{data.endpoint}</span>
        </div>

        {/* Status Pill */}
        <span
          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold shrink-0"
          style={{
            color: data.statusColor,
            backgroundColor: data.statusBg,
            border: `1px solid ${data.statusBorder}`,
          }}
        >
          {data.status}
        </span>
      </div>

      {/* 2. Window Body (Uniform Content Card Structure) */}
      <div className="flex-1 flex flex-col justify-center py-2 space-y-2">
        {/* Primary Operational Row */}
        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="text-base shrink-0">{data.primaryIcon}</span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-white truncate">{data.primaryTitle}</p>
              <p className="text-[10px] text-slate-400 truncate">{data.primaryDetail}</p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-500/20 shrink-0">
            ACTIVE
          </span>
        </div>

        {/* Secondary Log Line */}
        <div className="px-2 text-[10px] font-mono truncate" style={{ color: data.logColor }}>
          {data.logLine}
        </div>
      </div>

      {/* 3. Window Footer Bar (Engine Pill + Local Sandbox Badge) */}
      <div className="h-7 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5 shrink-0">
        <span className="flex items-center gap-1.5 text-slate-300 truncate">
          <span className="text-cyan-400">⚙</span> {data.engine}
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400 shrink-0 font-sans font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Local App
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
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        backgroundColor: "#07090e",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="section-tag">Interactive Engineering Suite</span>
          <h2 className="section-heading mt-3">Core Software Projects</h2>
          <p className="section-subheading mt-3 max-w-2xl mx-auto">
            Real-time WebSocket systems, RESTful CRUD microservices, and asynchronous API architectures executable locally.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: activeFilter === cat ? "#38bdf8" : "rgba(13, 17, 26, 0.8)",
                color: activeFilter === cat ? "#050608" : "#94a3b8",
                border: activeFilter === cat ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: activeFilter === cat ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
          {isAuthenticated && (
            <button
              onClick={() => setIsCMSOpen(true)}
              className="px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              style={{
                background: "rgba(56, 189, 248, 0.1)",
                border: "1px solid rgba(56, 189, 248, 0.3)",
                color: "#38bdf8",
                cursor: "pointer",
              }}
            >
              <span>+ Add Project</span>
            </button>
          )}
        </div>

        {/* Projects Grid: Equal Box Heights with Grid stretch */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between h-full w-full"
              style={{
                background: "rgba(11, 14, 22, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 16px 36px -10px rgba(0, 0, 0, 0.8)",
              }}
            >
              {/* Aesthetic Non-Interactive Component Preview Banner: Exactly Equal Heights (h-52) */}
              <div
                className="relative h-52 w-full overflow-hidden border-b border-white/10 shrink-0"
                style={{ backgroundColor: "#020305" }}
              >
                <UnifiedProjectBanner project={project} />
              </div>

              {/* Card Details: Continuous Vertical Harmony & Equal Baseline Alignment */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  {/* Category Pill */}
                  <div className="mb-2.5">
                    <span
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        background: "rgba(56, 189, 248, 0.12)",
                        color: "#38bdf8",
                        border: "1px solid rgba(56, 189, 248, 0.25)",
                      }}
                    >
                      {project.category || "Full-Stack"}
                    </span>
                  </div>

                  {/* Title (Aligned baseline with min-height) */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3.5 min-h-[3.75rem] flex items-start break-words">
                    {project.title}
                  </h3>

                  {/* Single CTA Button to Open Modal (Identical vertical alignment across all cards) */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="w-full mb-4 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 tracking-wide transition-all shadow-md shrink-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0.08) 100%)",
                      border: "1px solid rgba(56, 189, 248, 0.4)",
                      color: "#38bdf8",
                      cursor: "pointer",
                      boxShadow: "0 4px 15px rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    <span>Launch App & View Architecture</span>
                    <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {/* Small Description (Expands flexibly to balance card height) */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed break-words flex-1">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Segment: Metrics & Tech Stack Docked Together */}
                <div className="shrink-0 pt-2">
                  {/* Performance / Metric Highlight (Uniform height) */}
                  {project.metrics && (
                    <div
                      className="py-2 px-3 rounded-lg text-xs font-medium mb-4 flex items-center gap-2 min-h-[2.25rem]"
                      style={{
                        background: "rgba(6, 8, 14, 0.9)",
                        border: "1px solid rgba(56, 189, 248, 0.15)",
                        color: "#38bdf8",
                      }}
                    >
                      <span>⚡</span>
                      <span className="truncate">{project.metrics}</span>
                    </div>
                  )}

                  {/* Verified Stack Tags (Uniform min-height) */}
                  <div
                    className="flex flex-wrap gap-1.5 pt-3.5 min-h-[3.5rem] items-center"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
                  >
                    {(project.techStack || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2.5 py-0.5 rounded-md"
                        style={{
                          background: "rgba(6, 8, 14, 0.9)",
                          color: "#cbd5e1",
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
          ))}
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
