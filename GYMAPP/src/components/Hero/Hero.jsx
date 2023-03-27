import React from 'react'
import Header from '../header/Header'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero">
    <div className="left-side">
      <Header/>
    </div>
    <div className="hero-right-side">right side</div>
    </div>
  )
}


export default Hero