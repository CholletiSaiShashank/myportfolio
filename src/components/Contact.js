import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin} from 'react-icons/fa'
import Profpic from '../assets/1623077711561.jpeg'
import bgImg from '../assets/contactbg.jpeg'
import './Contactstyles.css'
const Contact = () => {
  return (
  <div className='contact-container'> 
    <div className='bg-img'>
      <img src={bgImg} alt="contact-background"/>
    </div>
    <div className='bg-content'>
      <div className='row'>
        <div className='col'>
          <div className='contact-ways'>
            <div className='contact-icon'>
              <FaHome/>
            </div>
            <div className='contact-content'>
              <p>Kothapet, SaroorNagar, Hyderabad, Telangana, India, 500060</p>
            </div>
            <div className='contact-icon'>
              <FaPhone/>
            </div>
            <div className='contact-content'>
              <p>(+91) 9493176600</p>
              <p>(+91) 7601059039</p>
            </div>
            <div className='contact-icon'>
              <FaMailBulk/>
            </div>
            <div className='contact-content'>
              <p>20me01042@iitbbs.ac.in</p>
              <p>cholletisaishashank@gmail.com</p>
            </div>
            <div className='contact-icon'>
              <FaLinkedin/>
            </div>
            <div className='contact-content'>
              <p>https://www.linkedin.com/in/cholleti-sai-shashank-3b3515214/</p>
            </div>
          </div>
        </div>
        <div className='col'>
        
        </div>
        <div className='col'>
          <div className='row'>
          <img src={Profpic} alt='profile-pic' className='contact-img'/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact