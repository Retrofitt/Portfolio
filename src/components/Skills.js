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
    <section id="skills" className="py-24 bg-[#060913] relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="glow-orb w-[450px] h-[450px] bg-emerald-500/5 left-1/4 bottom-0"></div>

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
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
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
              className="glass-card p-4 rounded-xl flex flex-col items-center justify-between text-center gap-3 hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-900/90 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-500/40 transition-all">
                <span className="font-mono text-xs font-bold">
                  {skill.name.slice(0, 3).toUpperCase()}
                </span>
              </div>

              <div className="w-full">
                <p className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors mb-1 truncate">
                  {skill.name}
                </p>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-2">
                  {skill.category}
                </span>

                {/* Mini Level Bar */}
                {skill.level && (
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
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
