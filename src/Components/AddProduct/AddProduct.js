import React, { useState } from 'react';
import './AddProduct.css';
import upload from '../../Assets/upload-area.png';

const AddProduct = () => {
    const [image, setImage] = useState(null); 
    const [productDetails, setProductDetails] = useState({
    	name:"",
    	image:"",
    	category:"city",
    	new_price:"",
    	old_price:"",
        description:"",
        color:""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };
    const changeHandler =(e) =>{
    	setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const AdProduct =  async ()=>{
    	console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:400/upload',{
            method:'POST',
            headers:{
                Accept:'application/json',

            },
            body:formData,
        }).then((resp) => resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:400/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert("product added!"):alert("failed!")
            })
        }
        setProductDetails({
        name:"",
        image:"",
        category:"city",
        new_price:"",
        old_price:"",
        description:"",
        color:""
        });

    }

    return (
        <div className="addproduct">
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="type here" />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder="type here" />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder="type here" />
                </div> 
            </div>
            <div className="addproduct-price">
               <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option>City</option>
                    <option>Road</option>
                    <option>Children</option>
                    <option>Mountain</option>
                </select>
               </div>
               <div className="addproduct-itemfield">
                    <p>Color</p>
                    <input value={productDetails.color} onChange={changeHandler} type="text" name='color' placeholder="type here" />
                </div>  
            </div>
            
            <div className="addproduct-itemfield">
                    <p>Description</p>
                    <textarea value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder="type here" ></textarea> 
                </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload} className="addproduct-img" alt="Upload Area" />
                </label>
                <input onChange={imageHandler} type='file' name='image' id='file-input' hidden />
            </div>
            <div>
                <button onClick={()=>{AdProduct()}} className='addproduct-btn'>ADD</button>
            </div>
        </div>
    );
};

export default AddProduct;
