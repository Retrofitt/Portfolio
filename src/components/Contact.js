import React from "react";
import { socialsData } from "../data/socials";

export default function Contact() {
  return (
    <div className="social-container">
      {socialsData.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={social.name}
        >
          <img src={social.icon} alt={social.name} />
        </a>
      ))}
    </div>
  );
}