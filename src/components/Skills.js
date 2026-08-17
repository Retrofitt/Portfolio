import React from "react";
import { skillsData } from "../data/skills";

export default function Skills() {
  // Group skills by category
  const categories = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = [
    "Frontend",
    "Backend",
    "Databases",
    "Tools & DevOps",
    "Design",
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-950" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">Technical Proficiency</p>
          <h2 className="section-heading">Skills & Technologies</h2>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {categoryOrder.map((category) => {
            const skills = categories[category];
            if (!skills) return null;
            return (
              <div key={category}>
                <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-accent" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill) => (
                    <a
                      key={skill.name}
                      href={skill.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={skill.name}
                      className="glass-card p-4 flex flex-col items-center gap-3 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="text-xs text-gray-400 group-hover:text-accent transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
