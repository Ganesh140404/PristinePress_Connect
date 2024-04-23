import React, { useState } from 'react';
import './Card.css';

const MembershipCard = () => {
  const [showBack, setShowBack] = useState(false);

  const handleClick = () => {
    setShowBack(!showBack);
  };

  return (
    <div className={`membership-card ${showBack ? 'flipped' : ''}`}>
      <div className="card-front">
        <h2 className="card-title">Weekly Membership</h2>
        <div className="card-details">
          <p><strong>Plan:</strong> Weekly Plan</p>
          <p><strong>Expiry Date:</strong> 03/28/2024</p>
          <p><strong>Benefits:</strong></p>
          <ul>
            <li>Free delivery up to 5 orders</li>
            <li>Free Pair dress Ironing</li>
          </ul>
        </div>
        <button className="view-details-btn" onClick={handleClick}>View Details</button>
      </div>
      <div className="card-back">
        <p className="sensitive-info">Card Number: 4902-2725-8812-4663</p>
        <p className="sensitive-info">CVV: 123</p>
      </div>
    </div>
  );
};

export default MembershipCard;
