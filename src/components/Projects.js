import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";
import ProjectModal from "./ProjectModal";

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

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      style={{
        backgroundColor: "#07090e",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Featured Engineering</span>
          <h2 className="section-heading mt-2">Production Projects</h2>
          <p className="section-subheading mt-3">
            Real-world systems engineered with performance, security, and responsive architecture in mind.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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
                boxShadow: activeFilter === cat ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none"
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
                cursor: "pointer"
              }}
            >
              <span>+ Add Project</span>
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between"
              style={{
                background: "rgba(11, 14, 22, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-video overflow-hidden" style={{ backgroundColor: "#020305" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full"
                  style={{ objectFit: "cover", objectPosition: "center", display: "block" }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(11, 14, 22, 0.95) 0%, rgba(11, 14, 22, 0.2) 60%, transparent 100%)"
                  }}
                ></div>
                
                {/* Category Pill on Image */}
                <div className="absolute" style={{ top: "0.75rem", left: "0.75rem" }}>
                  <span
                    className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider"
                    style={{
                      background: "rgba(5, 7, 12, 0.9)",
                      color: "#38bdf8",
                      border: "1px solid rgba(56, 189, 248, 0.3)",
                      backdropFilter: "blur(8px)"
                    }}
                  >
                    {project.category || "Full-Stack"}
                  </span>
                </div>

                {/* Quick Action Overlay */}
                <div className="absolute flex items-center gap-2" style={{ bottom: "0.75rem", right: "0.75rem" }}>
                  <div className="absolute flex items-center gap-2" style={{ bottom: "0.75rem", right: "0.75rem" }}>
  <button
    onClick={() => { setSelectedProject(project); setIsModalOpen(true); }}
    className="px-3 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
    style={{
      background: "rgba(56, 189, 248, 0.1)",
      border: "1px solid rgba(56, 189, 248, 0.3)",
      color: "#38bdf8",
      cursor: "pointer"
    }}
  >
    Learn More
  </button>
</div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Performance / Metric Highlight */}
                  {project.metrics && (
                    <div
                      className="py-2 px-3 rounded-lg text-xs font-medium mb-4 flex items-center gap-1.5"
                      style={{
                        background: "rgba(6, 8, 14, 0.9)",
                        border: "1px solid rgba(56, 189, 248, 0.15)",
                        color: "#38bdf8"
                      }}
                    >
                      <span>⚡</span>
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div
                    className="flex flex-wrap gap-1.5 pt-3"
                    style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
                  >
                    {(project.techStack || []).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(6, 8, 14, 0.9)",
                          color: "#cbd5e1",
                          border: "1px solid rgba(255, 255, 255, 0.08)"
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
    </section>
  );
}
