import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import ProjectModal from "./ProjectModal";

// Non-Interactive Aesthetic Visual Mockup for Weather App
function WeatherVisualPreview() {
  return (
    <div
      className="w-full h-full pt-12 px-5 pb-4 flex flex-col justify-between select-none pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, rgba(56, 189, 248, 0.18) 0%, rgba(6, 10, 18, 0.98) 100%)",
      }}
    >
      {/* Center live metrics display */}
      <div className="my-auto py-1 flex items-center justify-between">
        <div>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
            22.5<span className="text-cyan-400 text-base sm:text-lg font-bold">°C</span>
            <span className="text-[11px] sm:text-xs text-slate-400 font-normal font-mono ml-1.5">/ 72.5°F</span>
          </div>
          <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-1">Clear Sky • 58% Humidity</p>
        </div>
        <div className="text-3xl sm:text-4xl filter drop-shadow-[0_0_14px_rgba(56,189,248,0.45)]">
          ☀️
        </div>
      </div>

      {/* Bottom protocol pill */}
      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2.5 border-t border-white/5">
        <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
          <span>⚡</span> GET /?city=New+York
        </span>
        <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
          200 OK
        </span>
      </div>
    </div>
  );
}

// Non-Interactive Aesthetic Visual Mockup for Todo CRUD App
function TodoVisualPreview() {
  return (
    <div
      className="w-full h-full pt-12 px-5 pb-4 flex flex-col justify-between select-none pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, rgba(16, 185, 129, 0.16) 0%, rgba(6, 12, 10, 0.98) 100%)",
      }}
    >
      {/* Center mock tasks */}
      <div className="my-auto space-y-2 py-1">
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] sm:text-xs">
          <span className="text-slate-200 flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓</span> POST /todos → 201 Created
          </span>
          <span className="font-mono text-[10px] text-slate-500">#0</span>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/5 text-[11px] sm:text-xs">
          <span className="text-slate-200 flex items-center gap-2">
            <span className="text-cyan-400 font-bold">●</span> PUT /todos/:id → 200 OK
          </span>
          <span className="font-mono text-[10px] text-slate-500">#1</span>
        </div>
      </div>

      {/* Bottom protocol pill */}
      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2.5 border-t border-white/5">
        <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
          <span>⚡</span> Body-Parser JSON
        </span>
        <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
          CRUD Active
        </span>
      </div>
    </div>
  );
}

// Non-Interactive Aesthetic Visual Mockup for Chat WebSockets App
function ChatVisualPreview() {
  return (
    <div
      className="w-full h-full pt-12 px-5 pb-4 flex flex-col justify-between select-none pointer-events-none"
      style={{
        background: "radial-gradient(circle at top right, rgba(168, 85, 247, 0.18) 0%, rgba(10, 6, 18, 0.98) 100%)",
      }}
    >
      {/* Center chat bubbles */}
      <div className="my-auto space-y-2 py-1 text-[11px] sm:text-xs">
        <div className="flex justify-start">
          <div className="bg-slate-800/90 text-slate-200 px-3 py-1.5 rounded-xl rounded-tl-none border border-white/5 max-w-[85%]">
            <span className="text-[9px] sm:text-[10px] font-bold text-purple-400 block font-mono">Client A</span>
            <span>send_message event emitted</span>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="bg-purple-950/70 text-purple-100 px-3 py-1.5 rounded-xl rounded-tr-none border border-purple-500/30 max-w-[85%]">
            <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 block font-mono">Client B (Broadcast)</span>
            <span>Received in sub-15ms!</span>
          </div>
        </div>
      </div>

      {/* Bottom protocol pill */}
      <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2.5 border-t border-white/5">
        <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
          <span>⚡</span> wss://socket.io:3002
        </span>
        <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
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
      return <WeatherVisualPreview />;
    }
    if (project.id === "todo-crud-app" || project.appType === "todo") {
      return <TodoVisualPreview />;
    }
    return <ChatVisualPreview />;
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        backgroundColor: "#07090e",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="section-tag">Interactive Engineering Suite</span>
          <h2 className="section-heading mt-3">Core Software Projects</h2>
          <p className="section-subheading mt-3.5 max-w-2xl mx-auto">
            Real-time WebSocket systems, RESTful CRUD microservices, and asynchronous API architectures executable locally.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
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
              className="px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
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

        {/* Projects Grid with Enhanced Gap & Card Padding */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col justify-between"
              style={{
                background: "rgba(11, 14, 22, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.09)",
                boxShadow: "0 18px 40px -12px rgba(0, 0, 0, 0.85)",
              }}
            >
              {/* Aesthetic Non-Interactive Component Preview Banner with Zero Overlay Collisions */}
              <div
                className="relative aspect-video overflow-hidden border-b border-white/10"
                style={{ backgroundColor: "#020305" }}
              >
                {renderProjectVisual(project)}

                {/* Category Tag Overlay */}
                <div className="absolute" style={{ top: "0.85rem", left: "0.85rem" }}>
                  <span
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(5, 7, 12, 0.92)",
                      color: "#38bdf8",
                      border: "1px solid rgba(56, 189, 248, 0.35)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.category || "Full-Stack"}
                  </span>
                </div>

                {/* Local Sandbox Badge */}
                <div className="absolute" style={{ top: "0.85rem", right: "0.85rem" }}>
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold flex items-center gap-1.5"
                    style={{
                      background: "rgba(16, 185, 129, 0.18)",
                      color: "#34d399",
                      border: "1px solid rgba(16, 185, 129, 0.35)",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Local App
                  </span>
                </div>
              </div>

              {/* Card Details with Generous Breathing Room */}
              <div className="p-6 sm:p-7 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title (Above CTA Button) */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-4">
                    {project.title}
                  </h3>

                  {/* Single CTA Button to Open Modal */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="w-full mb-5 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 tracking-wide transition-all shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0.08) 100%)",
                      border: "1px solid rgba(56, 189, 248, 0.45)",
                      color: "#38bdf8",
                      cursor: "pointer",
                      boxShadow: "0 4px 18px rgba(56, 189, 248, 0.15)",
                    }}
                  >
                    <span>Launch App & View Architecture</span>
                    <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  {/* Small Description (Below CTA button, containing stack & recruiter buzzwords) */}
                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Performance / Metric Highlight */}
                  {project.metrics && (
                    <div
                      className="py-2.5 px-3.5 rounded-xl text-xs font-medium mb-5 flex items-center gap-2"
                      style={{
                        background: "rgba(6, 8, 14, 0.92)",
                        border: "1px solid rgba(56, 189, 248, 0.18)",
                        color: "#38bdf8",
                      }}
                    >
                      <span>⚡</span>
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Verified Stack Tags */}
                  <div
                    className="flex flex-wrap gap-2 pt-4"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.07)" }}
                  >
                    {(project.techStack || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg"
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
