import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { plan } = useParams();

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Selected Plan: {plan}</p>
      {/* Add payment form or integration here */}
    </div>
  );
};

export default Payment;
