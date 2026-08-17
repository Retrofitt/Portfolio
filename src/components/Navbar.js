import React from "react";

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-link">
        <a href="#home">
          <p>RafaelMendoza( )</p>
        </a>
      </div>
      <div className="nav-link">
        <a href="#projects">
          <p>.projects</p>
        </a>
      </div>
      <div className="nav-link">
        <a href="#about">
          <p>.about</p>
        </a>
      </div>
      <div className="nav-link">
        <a href="#photography">
          <p>.photography</p>
        </a>
      </div>
    </nav>
  );
}
