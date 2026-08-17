import React from "react";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Photography from "./Photography";
import Contact from "./Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Photography />
      <Contact />
    </main>
  );
}
