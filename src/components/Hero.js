import React from 'react'
import "./HeroStyle.css"
import Homeimg from "../assets/img 3.jpg"



function Hero() {
  return (
    <>
    <div className='hero'>
        <img alt="Herimg" src={Homeimg}></img>
        <div className='hero-text'>
            <h1 >Your Journey Your Story</h1>
            <p >Choose Your Favourite Destination</p>
            <a href="/" > <button> Travel Plan</button> </a>
        </div>
        </div>
        
    </>
  )
}

export default Hero