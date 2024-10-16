import React, {useState,useEffect} from 'react';
import './Appointments.css';
import { IoClose } from "react-icons/io5";

const Appointments = () =>{

    const [allappointments,setAllappointments] = useState([]);

  const fetchInfo = async()=>{
	await fetch('http://localhost:400/allappointments')
	.then((res)=>res.json())
	.then((data)=>{setAllappointments(data)});
    }

    useEffect(()=>{
	fetchInfo()
    },[])

  const remove_appt = async (id)=>{
	await fetch('http://localhost:400/removeappointment',{
		method:'POST',
		headers:{
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body:JSON.stringify({id:id})
	})
	await fetchInfo();
    }


	return(
		<div className="list-appointments">
           <h1>All Appointments</h1>
           <div className="listproduct-allappointmetns">
             <hr />
             {allappointments.map((product,index)=>{
             	return <div>
             	<div key={index} className = "list-appts-format-main list-appt-format">
             	    <p>{"Full Name: "+product.fullName}</p>
                	<p>{"Email: "+product.email}</p>
                	<p>{"Phone Number: "+product.phoneNumber}</p>
             		<p>{"Service Type: "+product.serviceType}</p>
             		<p>{"Appointment time: "+product.time}</p>
             		<p>{"Date: "+product.date}</p>
             		<p>{"Service Description: "+product.serviceDescription}</p>
             		<button onClick={()=>{remove_appt(product.id)}} className="remove-button">Remove</button>
             	</div>
             	<hr />
             	</div>
             })}

             
                        	
           </div>
		</div>

		)
}
export default Appointments;