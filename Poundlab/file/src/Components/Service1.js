import React, { useState, useEffect } from 'react';
import './Service.css';
import Navbar from './Navbar';
//import { Link } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Service1() {
    const [washing, setWashing] = useState(0);
    const [ironing, setIroning] = useState(0);
    const [dryCleaning, setDryCleaning] = useState(0);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderData, setOrderData] = useState({});
    const Navigate = useNavigate()
    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
    });

    const calculateTotalPrice = () => {
        return washing * 50 + ironing * 30 + dryCleaning * 100;
    };

    
    

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
  }).catch(err=>alert(err))
  
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
                                onChange={(e) => setIroning(parseInt(e.target.value))}
                                min="0"
                            />
                        </label>
                    </div>
                    <div className="service">
                        <label>Dry Cleaning:
                            <input
                                type="number"
                                onChange={(e) => setDryCleaning(parseInt(e.target.value))}
                                min="0"
                            />
                        </label>
                    </div>
                </div>
                <div className="add-to-cart-button">
                    <button >Add to Cart</button>
                </div>
                
                { (
                    <div className="confirm-order-container">
                        <h3>Confirm Order:</h3>
                        <ul>
                            <li>Washing: {washing}</li>
                            <li>Ironing: {ironing}</li>
                            <li>Dry Cleaning: {dryCleaning}</li>
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

export default Service1;
