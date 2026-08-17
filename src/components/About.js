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
            After Attending Bloom Institute of Technology's intensive Full Stack
            program, Rafael is a software engineer who doesn't settle for
            anything less than success. He understand that the journey he is on
            is a life long journey to hone his abilities and he looks forward to
            every experience presented to him. Currently looking for positions
            available around Southern California or with remote possibilities
            but open to relocation if needed.
          </p>
          <p className="italic">
            Hobbies Include: Photography, Videography, eSports, Video Games,
            Art, Graphic Design, Skateboarding, Camping, Outdoor Activities
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
