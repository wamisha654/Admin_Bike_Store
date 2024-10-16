import React from 'react'
import './Navbar.css'
import navlogo from '../../Assets/nav-logo.png'

const Navbar = () =>{
	return(
		<div className="navbar">
          <h3 className="nav-logo">Admin Panel</h3>
          <img src={navlogo} height="20px" width="50px" className="nav-logo"/>
		</div>

		)
}
export default Navbar;