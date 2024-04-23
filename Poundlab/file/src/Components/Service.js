import React, { useState, useEffect } from 'react';
import './Service.css';
import Navbar from './Navbar';
//import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
const Service = () => {
    const [washing, setWashing] = useState(0);
    const [ironing, setIroning] = useState(0);
    const [dryCleaning, setDryCleaning] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderData, setOrderData] = useState({});

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    });

    const calculateTotalPrice = () => {
        return washing * 50 + ironing * 30 + dryCleaning * 100;
    };

    const handleAddToCart = () => {
        setOrderPlaced(true);
    };

    const isSubComponentSelected = () => {
        return washing > 0 || ironing > 0 || dryCleaning > 0;
    };

    // const handleSubmitOrder = () => {
    //     const data = {
    //         washing,
    //         ironing,
    //         dryCleaning,
    //     };
    //     console.log("Order submitted (Clicked on Continue)")
    //     setOrderData(data); // Set the orderData state
    // };
    
    

    const handleConfirmOrder = (e) => {
        e.preventDefault()
    axios.post('http://localhost:3001/orders', {washing, ironing, dryCleaning})
    .then(result=>{console.log(result)
      if(result.data==="success"){
      Navigate("/OrderDetails")
      }
      else{
        alert("error")
      }
  })
  .catch(err=>alert(err))
    };
    

    return (
        <div>
            <Navbar />
            <div className='image-gallery'>
                <img src="./Images/iron.gif" alt="Laundry Service" />
                <img src="./Images/washing.gif" alt="Laundry Service" />
                <img src="./Images/drycleaning.gif" alt="Laundry Service" />
            </div>
            <div className="service-container">
                <h2>Laundry Order</h2>
                <div className="services">
                    <div className="service">
                        <label>Washing:
                            <input
                                type="number"
                                value={washing}
                                id="washing"
                                name="washing"
                                onChange={(e) => setWashing(parseInt(e.target.value))}
                                min="0"
                            />
                        </label>
                    </div>
                    <div className="service">
                        <label>Ironing:
                            <input
                                type="number"
                                value={ironing}
                                onChange={(e) => setIroning(parseInt(e.target.value))}
                                min="0"
                            />
                        </label>
                    </div>
                    <div className="service">
                        <label>Dry Cleaning:
                            <input
                                type="number"
                                value={dryCleaning}
                                onChange={(e) => setDryCleaning(parseInt(e.target.value))}
                                min="0"
                            />
                        </label>
                    </div>
                </div>
                <div className="add-to-cart-button">
                    <button onClick={handleAddToCart} disabled={!isSubComponentSelected()}>Add to Cart</button>
                </div>
                
                { (
                    <div className="confirm-order-container">
                        <h3>Confirm Order:</h3>
                        <ul>
                            <li>Washing: {orderData.washing}</li>
                            <li>Ironing: {orderData.ironing}</li>
                            <li>Dry Cleaning: {orderData.dryCleaning}</li>
                        </ul>
                        <p>Total Price: ₹{totalPrice}</p>
                        <button onClick={handleConfirmOrder}>Confirm Order</button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Service;
