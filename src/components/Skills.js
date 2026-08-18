import React, { useState } from "react";
import { usePortfolio } from "../data/ExperienceData";

export default function Skills() {
  const { data } = usePortfolio();
  const { skills = [] } = data;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category).filter(Boolean)))];

  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Skills</span>
          <h2 className="section-heading mt-2">Tech Stack</h2>
          <p className="section-subheading mt-3">
            Technologies and tools I use to build and maintain websites and web applications.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  backgroundColor: isSelected ? "var(--accent-cyan)" : "rgba(13, 17, 26, 0.8)",
                  color: isSelected ? "var(--bg-primary)" : "var(--text-muted)",
                  border: isSelected ? "1px solid var(--accent-cyan)" : "1px solid var(--border-subtle)",
                  boxShadow: isSelected ? "0 0 15px var(--accent-cyan-glow)" : "none"
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name || index}
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-between text-center gap-3"
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.5rem",
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-glow)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent-cyan)",
                  fontWeight: "bold",
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-mono)"
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
                  style={{ color: "var(--text-dim)", fontSize: "10px" }}
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
                        background: "linear-gradient(90deg, var(--accent-cyan) 0%, var(--accent-emerald) 100%)",
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
