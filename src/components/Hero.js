import React from "react";
import backgroundVideo from "../assets/background/background.mp4";
import { socialsData } from "../data/socials";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/70 via-brand-950/50 to-brand-950 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <p className="text-accent font-medium text-sm md:text-base tracking-widest uppercase mb-4 animate-fade-in">
          Production Engineer &amp; Web Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Rafael{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-cyan-300">
            Mendoza
          </span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 animate-fade-in-up max-w-2xl mx-auto">
          4+ years building high-impact web experiences with HTML, CSS,
          JavaScript, and PHP. I turn complex requirements into clean, performant
          digital products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up">
          <a href="#projects" className="btn-primary">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 animate-fade-in">
          {socialsData.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent/20 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:scale-110"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-5 h-5 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-accent/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
