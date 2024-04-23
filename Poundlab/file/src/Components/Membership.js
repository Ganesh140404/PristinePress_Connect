import React, { useState } from 'react';
import './Membership.css';

const MembershipPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [upiId, setUpiId] = useState('');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    if (selectedPlan) {
      setShowPaymentForm(true);
    } else {
      alert('Please select a plan to proceed to payment.');
    }
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    // Send UPI payment request using the provided UPI ID and selected plan details
    console.log(`Initiating UPI payment to ${upiId} for ${selectedPlan} plan.`);
    // You would typically call an API or integrate a UPI payment SDK here
    // Simulating success for demonstration purposes
    alert('UPI payment initiated successfully!');
  };

  const getPlanAmount = (plan) => {
    switch (plan) {
      case 'weekly':
        return '₹149 per week'; // ₹ symbol for Indian Rupees
      case 'monthly':
        return '₹399 per month';
      case 'yearly':
        return '₹599 per year';
      default:
        return 'Not available';
    }
  };

  const getPlanBenefits = (plan) => {
    switch (plan) {
      case 'weekly':
        return 'Free delivery upto 5 orders';
      case 'monthly':
        return 'Free delivery on every order and get 10% discount';
      case 'yearly':
        return 'Free delivery on every order and get 20% discount.';
      default:
        return 'No benefits specified';
    }
  };

  return (
    <div className="membership-plans">
      <h1>Choose a Membership Plan</h1>
      <div className="plan-container">
        <div
          className={`plan ${selectedPlan === 'weekly' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('weekly')}
        >
          <h2>Weekly</h2>
          <p>{getPlanAmount('weekly')}</p>
          <p>Benefits: {getPlanBenefits('weekly')}</p>
        </div>
        <div
          className={`plan ${selectedPlan === 'monthly' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('monthly')}
        >
          <h2>Monthly</h2>
          <p>{getPlanAmount('monthly')}</p>
          <p>Benefits: {getPlanBenefits('monthly')}</p>
        </div>
        <div
          className={`plan ${selectedPlan === 'yearly' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('yearly')}
        >
          <h2>Yearly</h2>
          <p>{getPlanAmount('yearly')}</p>
          <p>Benefits: {getPlanBenefits('yearly')}</p>
        </div>
      </div>
      <button onClick={handlePayment}>Proceed to Payment</button>

      {showPaymentForm && (
        <div className="payment-form">
          <h2>UPI Payment</h2>
          <p>Selected Plan: {selectedPlan}</p>
          <p>Amount: {getPlanAmount(selectedPlan)}</p>
          <form onSubmit={handleSubmitPayment}>
            <label htmlFor="upiId">Enter UPI ID</label>
            <input
              type="text"
              id="upiId"
              name="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
            <button type="submit">Initiate UPI Payment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MembershipPlans;
