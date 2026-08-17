import React from "react";
import Contact from "./Contact";
import backgroundVideo from "../assets/background/background.mp4";
import logo1 from "../assets/logo/logo1.png";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <video autoPlay muted loop playsInline id="my-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="main">
        <div className="myLogo" id="myLogo">
          <img src={logo1} alt="Rafael Mendoza Logo" />
        </div>
        <Contact />
      </div>
    </section>
  );
}
