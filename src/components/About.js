import React from "react";

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-brand-900" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">About Me</p>
          <h2 className="section-heading">Who Is Rafael Mendoza?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column — Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 4 years of professional experience building and
              optimizing production web systems, I specialize in crafting
              high-impact UI/UX and resilient web applications across{" "}
              <span className="text-accent font-medium">
                HTML, CSS, JavaScript, and PHP
              </span>
              .
            </p>
            <p className="text-gray-400 leading-relaxed">
              I combine a strong design sensibility with software engineering
              principles, leveraging React and modern toolchains to turn complex
              requirements into clean, seamless digital experiences. To me, code
              is raw marble — I sculpt software to solve complex, high-impact
              problems.
            </p>
            <p className="text-gray-500 italic text-sm">
              Creative Disciplines: Photography, Videography, Graphic Design,
              UI/UX Architecture, Creative Direction
            </p>
          </div>

          {/* Right Column — Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300">
              <p className="text-4xl font-bold text-accent mb-2">4+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
            <div className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300">
              <p className="text-4xl font-bold text-accent mb-2">10+</p>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>
            <div className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300">
              <p className="text-4xl font-bold text-accent mb-2">25+</p>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>
            <div className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300">
              <p className="text-4xl font-bold text-accent mb-2">∞</p>
              <p className="text-gray-400 text-sm">Curiosity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
