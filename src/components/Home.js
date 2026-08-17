import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Photography from "./Photography";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="component-padding" id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="photography">
        <Photography />
      </section>
    </main>
  );
}
