import React, { useState, useEffect } from 'react';
import './Order.css';
import { IoClose } from "react-icons/io5";

const Order = () => {
  const [allorders, setAllorders] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:400/allorders');
      if (!res.ok) {
        throw new Error("Failed to fetch orders");
      }
      const data = await res.json();
      setAllorders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const remove_order = async (product_name) => {
    await fetch('http://localhost:400/removeorder', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_name: product_name })
    });
    await fetchInfo();
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list-orders">
      <h1>All Orders</h1>
      <div>
        <hr />
        {allorders.map((order, index) => {
          // Split productId, image, and price into arrays
          const productIds = order.productId.split(', ');
          const productImages = order.image.split(', ');
          const productName = order.product_name.split(', ');
          const productQuantity = order.quantity.split(', ');
          const productPrices = order.final_price;

          return (
            <div key={index}>
              <div className="list-orders-format-main list-orders-format">
              <div className="product-details-list">
              	{productImages.map((image, idx) => (
                  <div key={idx}>
                    <img src={image.trim()} alt="Product" className="listproduct-icon" />
                    <p>{"Product ID: " + productIds[idx]}</p>
                    <p>{"Product Name: " + productName[idx]}</p>
                    <p>{"Quantity: " + productQuantity[idx]}</p>
                    <p>{"Total amount: PLN " + (productPrices[idx] || 'N/A')}</p>
                    
                    
                  </div>
                ))}
              </div>

                {/* Display the rest of the order details */}
                <div className="ordered-list">
                  <p>{"Name: " + order.name}</p>
                  <p>{"Last Name: " + order.lastName}</p>
                  <p>{"Email: " + order.email}</p>
                  <p>{"Phone: " + order.phone}</p>
                </div>
                <div className="ordered-list">
                	<p>{"Delivery: " + order.delivery}</p>
                  <p>{"Address: " + order.address}</p>
                  <p>{"Invoice: " + (order.invoice ? "Yes" : "No")}</p>
                  <p>{"Payment Method: " + order.paymentMethod}</p>
                </div>
                
                <button onClick={() => remove_order(order.product_name)} className="remove-button">
                  Remove
                </button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
