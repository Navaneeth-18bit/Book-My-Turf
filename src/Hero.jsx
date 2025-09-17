import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Hero.css";
import { useGSAP } from "@gsap/react";
import CTAbutton from "./CTA";

const Hero = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    // Select all spans inside the h1
    gsap.from(textRef.current.querySelectorAll("span"), {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      stagger: 0.05, // delay between letters
    });

    
  }, []);

  useGSAP(()=>{
      gsap.from("#subhead,#cta",{
        opacity: 0,
        duration:2,
        delay:1,
      })
    })

   

  const sentence = "BOOK YOUR   TURF / COURTIN MINUTES";

  return (
    <div id="hero-container">
      <h1 ref={textRef}>
        {sentence.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </h1>
      <div id="subhead">
        <p>Discover the perfect playing field near you:</p>
        <div id="cta">
        <CTAbutton />
      </div>
      </div>
      
    </div>
    
  );
};

export default Hero;
