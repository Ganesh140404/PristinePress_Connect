import React, { useState } from 'react';
import './Myorders.css'; // Import your CSS file for styling
import Navbar from './Navbar';
import Footer from './Footer';

const OrderDetails = () => {
    const [expandedId, setExpandedId] = useState(null); // State to track expanded order

    // Dummy order details for demonstration
    const orders = [
        {
            id: 1,
            service: 'Washing', // Service type
            amount: 250, // Amount for washing service
            pickupDate: '18-03-2024',
            deliveryDate: '20-03-2024',
            shippingAddress: 'Plot no 22, near kl bar, opposite ssd school, allwyn colony, kukatpally, Hyderabad, 500072',
            deliveryProgress: 100, // Percentage completion of delivery
            shirtsQuantity: 2, // Number of shirts for washing
            pantsQuantity: 1, // Number of pants for washing
            delivered: true, // Marked as delivered
        },
        {
            id: 2,
            service: 'Ironing',  // Service type
            amount: 60, // Amount for dry cleaning service
            pickupDate: '27-03-2024',
            deliveryDate: '30-03-2024',
            shippingAddress: 'Plot no 44, near sai baba temple, friends colony, manikonda, Hyderabad, 500072 ',
            deliveryProgress: 25,
            shirtsQuantity: 2, // Number of shirts for dry cleaning
            
            delivered: false, // Not delivered yet
        },
    ];

    // Function to toggle expanded state
    const toggleExpanded = orderId => {
        setExpandedId(expandedId === orderId ? null : orderId);
    };

    return (
        <div>
            <Navbar />
            <div className="my-orders-container">
                <h2>My Orders</h2>
                {orders.map(order => (
                    <div
                        key={order.id}
                        className={`order-card ${order.delivered ? 'delivered' : 'pending'} ${expandedId === order.id ? 'expanded' : ''}`}
                    >
                        <div className="order-summary">
                            <p><strong>Service Type:</strong> {order.service}</p>
                            <p><strong>Pickup Date:</strong> {order.pickupDate}</p>
                            <p><strong>Delivery Progress:</strong> {order.deliveryProgress}%</p>
                            <p><strong>Delivery Status:</strong> {order.delivered ? 'Delivered' : 'Pending'}</p>
                        </div>
                        {/* View Details Button */}
                        <button onClick={() => toggleExpanded(order.id)}>View Details</button>
                        {expandedId === order.id && (
                            <div className="expanded-details">
                                <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
                                <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                                {order.service === 'Washing' && (
                                    <>
                                        <p><strong>Shirts Quantity (Washing):</strong> {order.shirtsQuantity}</p>
                                        <p><strong>Pants Quantity (Washing):</strong> {order.pantsQuantity}</p>
                                    </>
                                )}
                                {order.service === 'Ironing' &&  (
                                    <>
                                        <p><strong>Shirts Quantity (Ironing):</strong> {order.shirtsQuantity}</p>
                                        
                                    </>
                                )}
                                <p><strong>Amount:</strong> ₹{order.amount}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
           
            <Footer />
        </div>
    );
};

export default OrderDetails;
