import React from "react";
import { skillsData } from "../data/skills";

export default function About() {
  return (
    <div className="about-container">
      <div>
        <div className="question-container-header no-padding">
          <h2>who is rafael mendoza?</h2>
        </div>
        <div className="question-container-one">
          <p>
            To me, code is raw marble. Just as ancient sculptors carved form
            out of stone or painters bring life to a blank canvas, I view
            software engineering as the ultimate creative medium for solving
            complex, high-impact problems. I thrive on deep technical challenges
            where precision, architecture, and ownership matter—building systems
            that leave a lasting mark.
          </p>
          <p>
            With over 4 years of professional engineering experience delivering
            production software and custom digital solutions, I bridge the gap
            between robust, scalable backend architecture and intuitive,
            pixel-perfect frontend experiences with React and the modern
            JavaScript ecosystem.
          </p>
          <p className="italic">
            Creative Disciplines & Interests: Photography, Videography, Graphic
            Design, UI/UX Architecture, Creative Direction, Outdoor Exploration
          </p>
        </div>
        <br />
        <br />
        <hr />
        <div className="question-container-header">
          <h2>what technologies does he know?</h2>
        </div>
        <div className="question-container-two">
          <div className="techs">
            {skillsData.map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                title={tech.name}
              >
                <img
                  className={tech.className || ""}
                  src={tech.icon}
                  alt={tech.name}
                  width="30"
                  height="30"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
