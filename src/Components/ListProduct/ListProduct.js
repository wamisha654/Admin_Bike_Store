import React, {useState, useEffect} from 'react'
import './ListProduct.css'
import { IoClose } from "react-icons/io5";


const ListProduct = () =>{

const [allproducts,setAllproducts] = useState([]);

const fetchInfo = async()=>{
	await fetch('http://localhost:400/allproducts')
	.then((res)=>res.json())
	.then((data)=>{setAllproducts(data)});
}

useEffect(()=>{
	fetchInfo()
},[])

const remove_product = async (id)=>{
	await fetch('http://localhost:400/removeproduct',{
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
		<div className="list-product">
           <h1>All products</h1>
           <div className="listproduct-format-main">
           	<p>Products</p>
           	<p>Title</p>
           	<p>Old price</p>
           	<p>New price</p>
           	<p>Category</p>
           	<p>Remove</p>
           </div>
           <div className="listproduct-allproducts">
             <hr />
             {allproducts.map((product,index)=>{
             	return <div>
             	<div key={index} className = "listproduct-format-main listproduct-format">
             		<img src={product.image} className="listproduct-icon" />
             		<p>{product.name}</p>
             		<p>{product.new_price}</p>
             		<p>{product.old_price}</p>
             		<p>{product.category}</p>
             		<IoClose onClick={()=>{remove_product(product.id)}} className="listproduct-remove-icon"/>
             	</div>
             	<hr />
             	</div>
             })}

             
                        	
           </div>
		</div>

		)
}
export default ListProduct;