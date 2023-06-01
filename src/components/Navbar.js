import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
	<div className='navbar-container'>
		<div className='navbar-title'>
		<Link to="/">myportfolio</Link>
		</div>
		<div className='navbar-components'>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/contact">Contact</Link>
		</div>
	</div>
  )
}

export default Navbar