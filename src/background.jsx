import React from 'react'
import './background.css';
import Hero from './Hero';

const Background = () => {
  return (
    <div className="background-layer">
      <div id="Hero-layer">
        <Hero />
      </div>
      <div id="2ndpage">
        Hello
      </div>
    </div>
  )
}

export default Background