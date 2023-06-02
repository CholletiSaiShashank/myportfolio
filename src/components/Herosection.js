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
      <div className='row'>
        <div className='col'></div>
        <div className='col-6' align="center">
          <p className='hero-para'>I'm Cholleti Sai Shashank</p>
          <h1 className='hero-head'>Front-End Developer</h1>
        </div>
        <div className='col'></div>
      </div>
    </div>
  </div>
  )
}

export default Herosection