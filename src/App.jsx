import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import Nav from "./Nav";
import Background from "./background";
import Hero from "./Hero";
import BookBox from "./BookBox";

const App = () => {
  useGSAP(() => {
    gsap.from("#hero-section", {
      y: 200,
      duration: 1,
      delay: 0.2,
    });
  });
useGSAP(()=>{
  gsap.from(".blur-image-big,.football-illustration",{
    scale:0,
    opacity:0,
    duration:2,
    
  })
})
  

  

  return (
    <main>
      <div className="nav">
        <Nav />
      </div>
      <div className="first-layer">
        <div id="blur-big001">
          {/*<img src="blur-big-002.png" alt="blur" className="blur-image-big" />
          <img
            src="football-illustration001-copy.png"
            alt="football"
            className="football-illustration"
          />*/}
          <div id="hero-section">
            <Hero />
          </div>
        </div>
      </div>
      <div className="second-section">
        <div id="book-venue">
          <div id="book-venue-head">
          <p id="book-head">Book Venues</p>
          <p id = "see-all-venues">See All Venues <span id="arrow">&#8594;</span></p>
          
        </div>
        <div className="bookboxes">
          <BookBox />
          <BookBox />
          <BookBox />
          <BookBox />
          <BookBox />
          <BookBox />
        </div>
        </div>
        
      </div>
      <div className="third-section">
        <h2 id = "specify-role">
          What's your role ?
        </h2>
      </div>
    </main>
  );
};

export default App;
