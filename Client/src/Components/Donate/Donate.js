import React from 'react';
import './Donate.css';

export default function PaymentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add payment processing logic here
  };

  return (
    <div className="payment-container">
      <form className="payment-form" onSubmit={handleSubmit}>
        <h1>Payment Details</h1>
        <p className="form-description">
           Donate here 
        </p>

        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            placeholder="John Doe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group half">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div className="form-group half">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>

        <button type="submit" className="pay-button">
          Pay Now
        </button>
      </form>
    </div>
  );
}

