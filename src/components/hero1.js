import React from 'react'
import "./HeroStyle.css"
import Aboutimg from "../assets/img 6.jpg"


function Hero1() {
  return (
    <>
    <div className='hero-mid'>
        <img alt="Herimg" src={Aboutimg}></img>
        <div className='hero-text1'>
            <h1 >About</h1>
        </div>
        </div>
    </>
  )
}

export default Hero1