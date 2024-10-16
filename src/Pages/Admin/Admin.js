import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../../Components/AddProduct/AddProduct.js'
import ListProduct from '../../Components/ListProduct/ListProduct.js'
import Appointment from '../../Components/Appointments/Appointments.js'
import Order from '../../Components/Order/Order.js'

const Admin = () =>{
	return(
		<div className="admin">
           <Sidebar/>
           <Routes>
           	<Route path = '/addproduct' element={<AddProduct />}/>
           	<Route path = '/listproduct' element={<ListProduct />}/>
           	<Route path = '/appointments' element={<Appointment />}/>
           	<Route path = '/order' element={<Order />}/>
           </Routes>
		</div>

		)
}
export default Admin