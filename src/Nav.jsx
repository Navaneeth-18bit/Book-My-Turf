import React, { useEffect } from "react";
import "./Nav.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  useGSAP(() => {
    gsap.from(".navbar-logo", {
      opacity: 0,
      scale: 0,
      duration: 0.5,
    });
  });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".home", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
    });

    tl.from(".features", {
      scale: 0,
      opacity: 0,
      delay: -0.3,
      duration: 0.5,
    });

    tl.from(".pricing", {
      scale: 0,
      opacity: 0,
      delay: -0.3,
      duration: 0.5,
    });

    tl.from(".about", {
      scale: 0,
      opacity: 0,
      delay: -0.3,
      duration: 0.5,
    });

    tl.from(".navbar-cta", {
      scale: 0,
      opacity: 0,
      delay: -0.3,
      duration: 0.5,
    });
  });

  return (
    <nav class="navbar">
      <div class="navbar-logo">
        <img
          src="BOOKMYTURF-svgLOGO.svg"
          alt="Logo"
          className="navbar-logo-image"
        />
      </div>
      <ul className="navbar-menu">
        <li className="home">
          <a href="#">Home</a>
        </li>
        <li className="features">
          <a href="#">Features</a>
        </li>
        <li className="pricing">
          <a href="#">Pricing</a>
        </li>
        <li className="about">
          <a href="#">About</a>
        </li>
      </ul>
      <a href="#" class="navbar-cta">
        Log in
      </a>
    </nav>
  );
};

export default Nav;
