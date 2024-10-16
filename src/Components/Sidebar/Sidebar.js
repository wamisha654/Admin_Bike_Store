import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addProd from '../../Assets/add-prod.webp'

const Sidebar = () =>{
	return(
		<div className="sidebar">
          <Link to={'/addproduct'} style={{textDecoration:"none"}}>
          	<div className="sidebar-item">
          		<img src={addProd} width="50px" height="50px"/>
          		<p> Add product</p>
          	</div>

          </Link> 
          <Link to={'/listproduct'} style={{textDecoration:"none"}}>
          	<div className="sidebar-item">
          		<img src={addProd} width="50px" height="50px"/>
          		<p> List product</p>
          	</div>

          </Link> 
          <Link to={'/appointments'} style={{textDecoration:"none"}}>
          	<div className="sidebar-item">
          		<img src={addProd} width="50px" height="50px"/>
          		<p> Appointments </p>
          	</div>

          </Link>
          <Link to={'/order'} style={{textDecoration:"none"}}>
          	<div className="sidebar-item">
          		<img src={addProd} width="50px" height="50px"/>
          		<p> Orders </p>
          	</div>

          </Link>
		</div>

		)
}
export default Sidebar;