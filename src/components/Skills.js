import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Skills() {
  const { data } = usePortfolio();
  const { skills } = data;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Databases", "Tools & DevOps"];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#050608" }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Tech Stack &amp; Tooling</span>
          <h2 className="section-heading mt-2">Technical Proficiency</h2>
          <p className="section-subheading mt-3">
            Core technologies and development stacks leveraged to build scalable production applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: selectedCategory === cat ? "#38bdf8" : "rgba(13, 17, 26, 0.8)",
                color: selectedCategory === cat ? "#050608" : "#94a3b8",
                border: selectedCategory === cat ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: selectedCategory === cat ? "0 0 15px rgba(56, 189, 248, 0.3)" : "none"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name || index}
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-between text-center gap-3"
              style={{
                background: "rgba(11, 14, 21, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)"
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "rgba(6, 8, 14, 0.9)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                {skill.name.slice(0, 3).toUpperCase()}
              </div>

              <div className="w-full">
                <p className="text-xs font-bold text-white mb-1 truncate">
                  {skill.name}
                </p>
                <span
                  className="text-xs uppercase tracking-wider block mb-2"
                  style={{ color: "#64748b", fontSize: "10px" }}
                >
                  {skill.category}
                </span>

                {/* Mini Level Bar */}
                {skill.level && (
                  <div
                    className="w-full rounded-full overflow-hidden"
                    style={{
                      height: "4px",
                      backgroundColor: "rgba(255, 255, 255, 0.06)"
                    }}
                  >
                    <div
                      style={{
                        width: `${skill.level}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, #38bdf8 0%, #10b981 100%)",
                        borderRadius: "9999px"
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
