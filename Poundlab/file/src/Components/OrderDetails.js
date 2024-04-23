import React, { useState } from 'react';
import './Orderdetails.css'; // Import the CSS file

const OrderDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(100); // Initial price without discount
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an asynchronous operation (e.g., API call) with a delay
    setTimeout(() => {
      // Perform any necessary validation before showing the pop-up

      // Show pop-up after a delay
      alert('Your order has been successfully booked!');

      // Redirect to My Orders page after another delay
      setTimeout(() => {
        window.location.replace('/myorders');
      }, 1000); // 1000 milliseconds = 1 second

      setIsLoading(false);
    }, 2000); // 2000 milliseconds = 2 seconds
  };

  const handleCouponApply = () => {
    if (appliedCoupon) {
      alert('You have already applied a coupon. Remove it to apply a new one.');
      return;
    }
  
    // Check if the coupon code is valid (you can add your validation logic here)
    // For demonstration purposes, let's assume "FLAT40" gives a 40% discount
    // and "SAVE10" gives a 10% discount
    switch (couponCode) {
      case 'FLAT40':
        setAppliedCoupon(couponCode);
        setDiscount(40); // Apply 40% discount
        break;
      case 'SAVE10':
        setAppliedCoupon(couponCode);
        setDiscount(10); // Apply 10% discount
        break;
      default:
        alert('Invalid coupon code. Please try again.');
        return;
    }
  
    const discountedPrice = price - (price * discount) / 100;
    setPrice(discountedPrice);
    alert(`Coupon "${couponCode}" applied successfully!`);
  };
  
  

  return (
    <div className="order-container">
      <h1 className="title">Order Details</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" id="name" className="input" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone" className="label">Phone Number:</label>
          <input type="tel" id="phone" className="input" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="label">Address:</label>
          <textarea id="address" className="input" required />
        </div>

        <div className="form-group">
          <label htmlFor="coupon" className="label">Coupon Code:</label>
          <input
            type="text"
            id="coupon"
            className="input"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button type="button" className="apply-coupon" onClick={handleCouponApply}>Apply Coupon</button>
        </div>
        
        <div className="payment-method">
          <label className="label">Payment Method:</label>
          <div className="payment-option">
            <input
              type="radio"
              id="payOnDelivery"
              value="payOnDelivery"
              name="paymentMethod"
              defaultChecked
            />
            <label htmlFor="payOnDelivery">Pay on Delivery</label>
            <p className="info">We accept only Pay on delivery</p>
          </div>
        </div>

        {isLoading ? (
          <div className="loading-animation">
            {/* Add your loading animation component or message here */}
            Loading...
          </div>
        ) : (
          <>
            <div className="price-details">
              <p>Original Price: ₹{price}</p>
              {appliedCoupon && <p>Coupon Applied: {appliedCoupon}</p>}
              <p>Discount: {discount}%</p>
              <p>Final Price: ₹{price - (price * discount) / 100}</p>
            </div>
            <button type="submit" className="submit-button">Place Order</button>
          </>
        )}
      </form>
    </div>
  );
};

export default OrderDetails;
