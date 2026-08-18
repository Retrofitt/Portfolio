import React, { useState, useEffect } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" | "code"
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleCopyCode = (codeText) => {
    if (!codeText) return;
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      style={{
        backgroundColor: "rgba(3, 5, 10, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        animation: "fadeIn 0.25s ease-out forwards",
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
        style={{
          maxHeight: "90vh",
          backgroundColor: "#0a0d14",
          border: "1px solid rgba(56, 189, 248, 0.25)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(56, 189, 248, 0.15)",
          animation: "scaleUp 0.25s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-5 sm:p-6 flex items-start justify-between gap-4"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            background: "linear-gradient(to bottom, rgba(14, 19, 30, 0.9), rgba(10, 13, 20, 0.95))",
          }}
        >
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider"
                style={{
                  background: "rgba(56, 189, 248, 0.15)",
                  color: "#38bdf8",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                }}
              >
                {project.category || "Full-Stack"}
              </span>
              {project.metrics && (
                <span
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(16, 185, 129, 0.12)",
                    color: "#34d399",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                  }}
                >
                  ⚡ {project.metrics}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white transition-colors"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
            aria-label="Close modal"
          >
            <svg style={{ width: "20px", height: "20px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div
          className="flex items-center px-6 pt-3 gap-2"
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            backgroundColor: "#0a0d14",
          }}
        >
          <button
            onClick={() => setActiveTab("overview")}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider relative transition-all"
            style={{
              color: activeTab === "overview" ? "#38bdf8" : "#94a3b8",
              borderBottom: activeTab === "overview" ? "2px solid #38bdf8" : "2px solid transparent",
              cursor: "pointer",
              background: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
            }}
          >
            Architecture & Overview
          </button>
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab("code")}
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider relative transition-all"
              style={{
                color: activeTab === "code" ? "#38bdf8" : "#94a3b8",
                borderBottom: activeTab === "code" ? "2px solid #38bdf8" : "2px solid transparent",
                cursor: "pointer",
                background: "transparent",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            >
              Source Code & Logic
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1" style={{ color: "#cbd5e1" }}>
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Executive Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Executive Summary
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-200" style={{ lineHeight: "1.7" }}>
                  {project.description}
                </p>
              </div>

              {/* Technical Highlights / Recruiter Keywords */}
              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Architectural Highlights & Capabilities
                  </h4>
                  <div className="space-y-2.5">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-xl text-xs sm:text-sm"
                        style={{
                          background: "rgba(14, 18, 28, 0.7)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                        }}
                      >
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span className="text-slate-300 leading-relaxed">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Production Stack & Tooling
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.techStack || []).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold"
                      style={{
                        background: "rgba(16, 21, 33, 0.9)",
                        color: "#93c5fd",
                        border: "1px solid rgba(56, 189, 248, 0.2)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "code" && project.codeSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Implementation Details</span>
                <button
                  onClick={() => handleCopyCode(project.codeSnippet)}
                  className="px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5"
                  style={{
                    background: copied ? "rgba(16, 185, 129, 0.2)" : "rgba(255, 255, 255, 0.06)",
                    border: copied ? "1px solid #10b981" : "1px solid rgba(255, 255, 255, 0.12)",
                    color: copied ? "#34d399" : "#cbd5e1",
                    cursor: "pointer",
                  }}
                >
                  <span>{copied ? "✓ Copied!" : "📋 Copy Code"}</span>
                </button>
              </div>

              <div
                className="rounded-xl overflow-hidden p-4 font-mono text-xs leading-relaxed overflow-x-auto"
                style={{
                  background: "#05070c",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  maxHeight: "380px",
                  color: "#e2e8f0",
                  whiteSpace: "pre",
                }}
              >
                <code>{project.codeSnippet}</code>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            background: "rgba(10, 13, 20, 0.95)",
          }}
        >
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 transition-all hover:bg-slate-800"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  textDecoration: "none",
                }}
              >
                <svg style={{ width: "16px", height: "16px", fill: "currentColor" }} viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub Code</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all"
                style={{
                  background: "#38bdf8",
                  color: "#050608",
                  textDecoration: "none",
                  boxShadow: "0 0 15px rgba(56, 189, 248, 0.35)",
                }}
              >
                <span>Live Deployment ↗</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
