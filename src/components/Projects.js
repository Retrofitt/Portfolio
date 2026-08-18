import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import ProjectModal from "./ProjectModal";

// Non-Interactive Aesthetic Visual Mockup for Weather App
function WeatherVisualPreview({ category }) {
  return (
    <div
      className="w-full h-full p-4 flex flex-col justify-between select-none pointer-events-none box-border"
      style={{
        background: "radial-gradient(circle at top right, rgba(56, 189, 248, 0.16) 0%, rgba(6, 10, 18, 0.98) 100%)",
      }}
    >
      {/* Top Banner Row (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between gap-2 shrink-0">
        <span
          className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(5, 7, 12, 0.9)",
            color: "#38bdf8",
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          {category || "API & SSR"}
        </span>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1.5"
          style={{
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Local App
        </span>
      </div>

      {/* Center live metrics display */}
      <div className="flex-1 flex items-center justify-between px-1 my-auto py-1">
        <div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
            22.5<span className="text-cyan-400 text-base sm:text-lg font-bold">°C</span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal font-mono ml-1">/ 72.5°F</span>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5">Clear Sky • 58% Humidity</p>
        </div>
        <div className="text-3xl sm:text-4xl filter drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]">
          ☀️
        </div>
      </div>

      {/* Bottom protocol pill (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5 shrink-0">
        <span className="flex items-center gap-1.5 text-cyan-300 font-semibold truncate">
          <span>⚡</span> GET /?city=New+York
        </span>
        <span className="text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0 font-bold">
          200 OK
        </span>
      </div>
    </div>
  );
}

// Non-Interactive Aesthetic Visual Mockup for Todo CRUD App
function TodoVisualPreview({ category }) {
  return (
    <div
      className="w-full h-full p-4 flex flex-col justify-between select-none pointer-events-none box-border"
      style={{
        background: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.15) 0%, rgba(6, 12, 10, 0.98) 100%)",
      }}
    >
      {/* Top Banner Row (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between gap-2 shrink-0">
        <span
          className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(5, 7, 12, 0.9)",
            color: "#38bdf8",
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          {category || "RESTful API"}
        </span>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1.5"
          style={{
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Local App
        </span>
      </div>

      {/* Center mock tasks */}
      <div className="flex-1 flex flex-col justify-center space-y-1.5 px-0.5 my-auto py-1">
        <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px]">
          <span className="text-slate-200 flex items-center gap-2 truncate">
            <span className="text-emerald-400 font-bold">✓</span> POST /todos → 201 Created
          </span>
          <span className="font-mono text-[10px] text-slate-500 shrink-0">#0</span>
        </div>
        <div className="flex items-center justify-between px-2.5 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-[11px]">
          <span className="text-slate-200 flex items-center gap-2 truncate">
            <span className="text-cyan-400 font-bold">●</span> PUT /todos/:id → 200 OK
          </span>
          <span className="font-mono text-[10px] text-slate-500 shrink-0">#1</span>
        </div>
      </div>

      {/* Bottom protocol pill (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5 shrink-0">
        <span className="flex items-center gap-1.5 text-emerald-300 font-semibold truncate">
          <span>⚡</span> Body-Parser JSON
        </span>
        <span className="text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0 font-bold">
          CRUD Active
        </span>
      </div>
    </div>
  );
}

// Non-Interactive Aesthetic Visual Mockup for Chat WebSockets App
function ChatVisualPreview({ category }) {
  return (
    <div
      className="w-full h-full p-4 flex flex-col justify-between select-none pointer-events-none box-border"
      style={{
        background: "radial-gradient(circle at top right, rgba(168, 85, 247, 0.16) 0%, rgba(10, 6, 18, 0.98) 100%)",
      }}
    >
      {/* Top Banner Row (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between gap-2 shrink-0">
        <span
          className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(5, 7, 12, 0.9)",
            color: "#38bdf8",
            border: "1px solid rgba(56, 189, 248, 0.3)",
          }}
        >
          {category || "WebSockets"}
        </span>
        <span
          className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1.5"
          style={{
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Local App
        </span>
      </div>

      {/* Center chat bubbles */}
      <div className="flex-1 flex flex-col justify-center space-y-1.5 px-0.5 my-auto py-1 text-[11px]">
        <div className="flex justify-start">
          <div className="bg-slate-800/90 text-slate-200 px-2.5 py-1 rounded-xl rounded-tl-none border border-white/5 max-w-[85%] truncate">
            <span className="text-[9px] font-bold text-purple-400 block font-mono">Client A</span>
            <span>send_message event emitted</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-950/70 text-purple-100 px-2.5 py-1 rounded-xl rounded-tr-none border border-purple-500/30 max-w-[85%] truncate">
            <span className="text-[9px] font-bold text-emerald-400 block font-mono">Client B (Broadcast)</span>
            <span>Received in sub-15ms!</span>
          </div>
        </div>
      </div>

      {/* Bottom protocol pill (Exact same height across all 3 previews) */}
      <div className="h-6 flex items-center justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5 shrink-0">
        <span className="flex items-center gap-1.5 text-purple-300 font-semibold truncate">
          <span>⚡</span> wss://socket.io:3002
        </span>
        <span className="text-emerald-400 bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-500/30 shrink-0 font-bold">
          Connected
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

  const renderProjectVisual = (project) => {
    if (project.id === "weather-app" || project.appType === "weather") {
      return <WeatherVisualPreview category={project.category} />;
    }
    if (project.id === "todo-crud-app" || project.appType === "todo") {
      return <TodoVisualPreview category={project.category} />;
    }
    return <ChatVisualPreview category={project.category} />;
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
                {renderProjectVisual(project)}
              </div>

              {/* Card Details: Continuous Vertical Harmony & Equal Baseline Alignment */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div className="flex-1 flex flex-col">
                  {/* Title (Aligned baseline with min-height) */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3.5 min-h-[3.5rem] flex items-start break-words">
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
                    className="flex flex-wrap gap-1.5 pt-3.5 min-h-[3.25rem] items-center"
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
