import React from 'react'
import "./HeroStyle.css"
import Serviceimg from "../assets/img 9.jpg"


function Hero2() {
  return (
    <>
    <div className='hero-mid'>
        <img alt="Herimg" src={Serviceimg}></img>
        <div className='hero-text2'>
            <h1 >Service</h1>
        </div>
        </div>
    </>
  )
}

export default Hero2