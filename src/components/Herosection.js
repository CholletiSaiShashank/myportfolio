import React from 'react'
import HeroImg from '../assets/background2.jpg'
import './Herostyles.css'
const Herosection = () => {
  return (
	<div className='hero-container'>
    <div>
    <img src={HeroImg} alt="HeroImage" className='intoimg'/>
    </div>
    <div className='hero-content'>
      <p>I'm Cholleti Sai Shashank</p>
      <h1>Front-End Developer</h1>
    </div>
  </div>
  )
}

export default Herosection